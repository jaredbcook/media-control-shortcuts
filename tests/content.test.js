import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import {
    mapKeyToAction,
    mapActionToChange,
    mapActionToSeekPercentage,
    getSupportedKeys,
    findMedia,
    getTargetMedia,
    runAction,
    setMediaVolume,
    ACTION_PLAY_PAUSE,
    ACTION_MUTE_UNMUTE,
    ACTION_VOLUME_UP,
    ACTION_VOLUME_DOWN,
    ACTION_SPEED_UP,
    ACTION_SPEED_DOWN,
    ACTION_SEEK_FWD_LARGE,
    ACTION_SEEK_BACK_LARGE,
    ACTION_SEEK_FWD_SMALL,
    ACTION_SEEK_BACK_SMALL
} from '../src/scripts/content';

describe('content.js', () => {

    describe('getSupportedKeys', () => {
        it('should return the correct list of supported keys', () => {
            const keys = getSupportedKeys();
            expect(keys).toContain('k');
            expect(keys).toContain('m');
            expect(keys).toContain('j');
            expect(keys).toContain('l');
            expect(keys).toContain('[');
            expect(keys).toContain(']');
            // ... check a few others
            expect(keys.length).toBeGreaterThan(0);
        });
    });

    describe('mapKeyToAction', () => {
        it('should map "k" to play/pause', () => {
            expect(mapKeyToAction('k')).toBe(ACTION_PLAY_PAUSE);
        });
        it('should map "m" to mute/unmute', () => {
            expect(mapKeyToAction('m')).toBe(ACTION_MUTE_UNMUTE);
        });
        it('should map "]" to volume up', () => {
            expect(mapKeyToAction(']')).toBe(ACTION_VOLUME_UP);
        });
        it('should map "[" to volume down', () => {
            expect(mapKeyToAction('[')).toBe(ACTION_VOLUME_DOWN);
        });
        it('should map ">" to speed up', () => {
            expect(mapKeyToAction('>')).toBe(ACTION_SPEED_UP);
        });
        it('should return null for unsupported keys', () => {
            expect(mapKeyToAction('z')).toBeNull();
        });
    });

    describe('mapActionToChange', () => {
        it('should return correct speed step for speed up', () => {
            expect(mapActionToChange(ACTION_SPEED_UP)).toBe(0.25);
        });
        it('should return correct volume step for volume up', () => {
            expect(mapActionToChange(ACTION_VOLUME_UP)).toBe(0.1);
        });
        it('should return correct volume step for volume down', () => {
            expect(mapActionToChange(ACTION_VOLUME_DOWN)).toBe(-0.1);
        });
        it('should return correct seek step for large seek forward', () => {
            expect(mapActionToChange(ACTION_SEEK_FWD_LARGE)).toBe(10);
        });
    });

    describe('mapActionToSeekPercentage', () => {
        it('should return correct percentage for "0"', () => {
            // Note: mapKeyToAction('0') -> ACTION_SEEK_PERCENTAGE_0
            // but the function takes the action string.
            // We need to verify the action string format matches what mapKeyToAction returns.
            const action = mapKeyToAction('0');
            expect(mapActionToSeekPercentage(action)).toBe(0);
        });
        it('should return correct percentage for "5"', () => {
            const action = mapKeyToAction('5');
            expect(mapActionToSeekPercentage(action)).toBe(0.5);
        });
    });

    describe('findMedia', () => {
        it('should find video and audio elements in the document', () => {
            document.body.innerHTML = `
                <div>
                    <video id="v1"></video>
                    <audio id="a1"></audio>
                    <div id="nested">
                        <video id="v2"></video>
                    </div>
                </div>
            `;
            const media = findMedia(document);
            expect(media).toHaveLength(3);
            expect(media.map(m => m.id)).toEqual(expect.arrayContaining(['v1', 'a1', 'v2']));
        });

        // Mocking shadow DOM is tricky in jsdom but possible if we manually attach shadow roots
        // Skipped for simplicity unless strictly required, focusing on standard DOM first
    });

    describe('runAction', () => {
        let media;
        beforeEach(() => {
            media = document.createElement('video');
            media.play = vi.fn();
            media.pause = vi.fn();
            media.currentTime = 100;
            // duration is read-only, so we define it
            Object.defineProperty(media, 'duration', { value: 200, writable: true });
            media.playbackRate = 1;
            media.muted = false;
            // Mock getBoundingClientRect for showOverlay
            media.getBoundingClientRect = vi.fn(() => ({
                left: 0, top: 0, width: 100, height: 100
            }));

            // Clean up body
            document.body.innerHTML = '';
        });

        it('should toggle play/pause', () => {
            Object.defineProperty(media, 'paused', { value: true, writable: true });
            runAction(media, { type: ACTION_PLAY_PAUSE });
            expect(media.play).toHaveBeenCalled();

            Object.defineProperty(media, 'paused', { value: false, writable: true });
            runAction(media, { type: ACTION_PLAY_PAUSE });
            expect(media.pause).toHaveBeenCalled();
        });

        it('should toggle mute', () => {
            media.muted = false;
            runAction(media, { type: ACTION_MUTE_UNMUTE });
            expect(media.muted).toBe(true);

            runAction(media, { type: ACTION_MUTE_UNMUTE });
            expect(media.muted).toBe(false);
        });

        it('should seek forward', () => {
            runAction(media, { type: ACTION_SEEK_FWD_LARGE, change: 10 });
            expect(media.currentTime).toBe(110);
        });

        it('should change speed', () => {
            runAction(media, { type: ACTION_SPEED_UP });
            expect(media.playbackRate).toBe(1.25);
        });

        it('should increase volume', () => {
            media.volume = 0.5;
            runAction(media, { type: ACTION_VOLUME_UP });
            expect(media.volume).toBeCloseTo(0.6, 1);
        });

        it('should decrease volume', () => {
            media.volume = 0.5;
            runAction(media, { type: ACTION_VOLUME_DOWN });
            expect(media.volume).toBeCloseTo(0.4, 1);
        });

        it('should not increase volume above 1', () => {
            media.volume = 0.98;
            runAction(media, { type: ACTION_VOLUME_UP });
            expect(media.volume).toBeLessThanOrEqual(1);
        });

        it('should not decrease volume below 0', () => {
            media.volume = 0.05;
            runAction(media, { type: ACTION_VOLUME_DOWN });
            expect(media.volume).toBeGreaterThanOrEqual(0);
        });
    });

    describe('setMediaVolume', () => {
        let media;
        beforeEach(() => {
            media = document.createElement('video');
            media.volume = 0.5;
            media.muted = false;
        });

        it('should set volume to specified value', () => {
            setMediaVolume(media, 0.7);
            expect(media.volume).toBe(0.7);
        });

        it('should clamp volume to max of 1', () => {
            setMediaVolume(media, 1.5);
            expect(media.volume).toBe(1);
        });

        it('should clamp volume to min of 0', () => {
            setMediaVolume(media, -0.5);
            expect(media.volume).toBe(0);
        });

        it('should unmute when increasing volume from 0', () => {
            media.volume = 0;
            media.muted = true;
            setMediaVolume(media, 0.5);
            expect(media.muted).toBe(false);
        });

        it('should not change volume if already at target', () => {
            media.volume = 0.5;
            const initialVolume = media.volume;
            setMediaVolume(media, 0.5);
            expect(media.volume).toBe(initialVolume);
        });
    });
});
