// TODO: add support for volume up/down
const ACTION_PLAY_PAUSE = 'MCS_EXT_PLAY_PAUSE';
const ACTION_MUTE_UNMUTE = 'MCS_EXT_MUTE_UNMUTE';
const ACTION_SPEED_UP = 'MCS_EXT_SPEED_UP';
const ACTION_SPEED_DOWN = 'MCS_EXT_SPEED_DOWN';
const ACTION_SEEK_FWD_LARGE = 'MCS_EXT_SEEK_FWD_LARGE';
const ACTION_SEEK_BACK_LARGE = 'MCS_EXT_SEEK_BACK_LARGE';
const ACTION_SEEK_FWD_SMALL = 'MCS_EXT_SEEK_FWD_SMALL';
const ACTION_SEEK_BACK_SMALL = 'MCS_EXT_SEEK_BACK_SMALL';
const ACTION_SEEK_PERCENTAGE = 'MCS_EXT_SEEK_PERCENTAGE';
const ACTION_SEEK_PERCENTAGE_0 = ACTION_SEEK_PERCENTAGE + '_0';
const ACTION_SEEK_PERCENTAGE_10 = ACTION_SEEK_PERCENTAGE + '_10';
const ACTION_SEEK_PERCENTAGE_20 = ACTION_SEEK_PERCENTAGE + '_20';
const ACTION_SEEK_PERCENTAGE_30 = ACTION_SEEK_PERCENTAGE + '_30';
const ACTION_SEEK_PERCENTAGE_40 = ACTION_SEEK_PERCENTAGE + '_40';
const ACTION_SEEK_PERCENTAGE_50 = ACTION_SEEK_PERCENTAGE + '_50';
const ACTION_SEEK_PERCENTAGE_60 = ACTION_SEEK_PERCENTAGE + '_60';
const ACTION_SEEK_PERCENTAGE_70 = ACTION_SEEK_PERCENTAGE + '_70';
const ACTION_SEEK_PERCENTAGE_80 = ACTION_SEEK_PERCENTAGE + '_80';
const ACTION_SEEK_PERCENTAGE_90 = ACTION_SEEK_PERCENTAGE + '_90';

// Icons from Material Symbols (https://fonts.google.com/icons) -- see README.md for license details
const ICON_PLAY = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M320-273v-414q0-17 12-28.5t28-11.5q5 0 10.5 1.5T381-721l326 207q9 6 13.5 15t4.5 19q0 10-4.5 19T707-446L381-239q-5 3-10.5 4.5T360-233q-16 0-28-11.5T320-273Z"/></svg>';
const ICON_PAUSE = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M640-200q-33 0-56.5-23.5T560-280v-400q0-33 23.5-56.5T640-760q33 0 56.5 23.5T720-680v400q0 33-23.5 56.5T640-200Zm-320 0q-33 0-56.5-23.5T240-280v-400q0-33 23.5-56.5T320-760q33 0 56.5 23.5T400-680v400q0 33-23.5 56.5T320-200Z"/></svg>';
const ICON_MUTE = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M671-177q-11 7-22 13t-23 11q-15 7-30.5 0T574-176q-6-15 1.5-29.5T598-227q4-2 7.5-4t7.5-4L480-368v111q0 27-24.5 37.5T412-228L280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h88L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-93-93Zm89-304q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131t58 197q0 33-6 65.5T817-353q-8 22-24.5 27.5t-30.5.5q-14-5-22.5-18t-.5-30q11-26 16-52.5t5-55.5ZM591-623q33 21 51 63t18 80v10q0 5-1 10-2 13-14 17t-22-6l-51-51q-6-6-9-13.5t-3-15.5v-77q0-12 10.5-17.5t20.5.5Zm-201-59q-6-6-6-14t6-14l22-22q19-19 43.5-8.5T480-703v63q0 14-12 19t-22-5l-56-56Z"/></svg>';
const ICON_UNMUTE = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M760-481q0-83-44-151.5T598-735q-15-7-22-21.5t-2-29.5q6-16 21.5-23t31.5 0q97 43 155 131.5T840-481q0 108-58 196.5T627-153q-16 7-31.5 0T574-176q-5-15 2-29.5t22-21.5q74-34 118-102.5T760-481ZM280-360H160q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120l132-132q19-19 43.5-8.5T480-703v446q0 27-24.5 37.5T412-228L280-360Zm380-120q0 42-19 79.5T591-339q-10 6-20.5.5T560-356v-250q0-12 10.5-17.5t20.5.5q31 25 50 63t19 80Z"/></svg>';
const ICON_SPEED_UP = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M100-315v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T428-480q0 10-4.5 18.5T410-447L162-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Zm400 0v-330q0-18 12-29t28-11q5 0 11 1t11 5l248 166q9 6 13.5 14.5T828-480q0 10-4.5 18.5T810-447L562-281q-5 4-11 5t-11 1q-16 0-28-11t-12-29Z"/></svg>';
const ICON_SPEED_DOWN = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M798-281 550-447q-9-6-13.5-14.5T532-480q0-10 4.5-18.5T550-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Zm-400 0L150-447q-9-6-13.5-14.5T132-480q0-10 4.5-18.5T150-513l248-166q5-4 11-5t11-1q16 0 28 11t12 29v330q0 18-12 29t-28 11q-5 0-11-1t-11-5Z"/></svg>';
const ICON_SEEK_FWD_LARGE = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M383-480 228-636q-11-11-11.5-27.5T228-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L284-268q-11 11-27.5 11.5T228-268q-11-11-11-28t11-28l155-156Zm264 0L492-636q-11-11-11.5-27.5T492-692q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L548-268q-11 11-27.5 11.5T492-268q-11-11-11-28t11-28l155-156Z"/></svg>';
const ICON_SEEK_BACK_LARGE = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m313-480 155 156q11 11 11.5 27.5T468-268q-11 11-28 11t-28-11L228-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T468-692q11 11 11 28t-11 28L313-480Zm264 0 155 156q11 11 11.5 27.5T732-268q-11 11-28 11t-28-11L492-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 27.5-11.5T732-692q11 11 11 28t-11 28L577-480Z"/></svg>';
const ICON_SEEK_FWD_SMALL = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/></svg>';
const ICON_SEEK_BACK_SMALL = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z"/></svg>';

// Default settings
// TODO: make these configurable in the extension settings
let listenersActive = false;
let maxSpeed = 4;
let minSpeed = 0.25;
let speedStep = 0.25;
let seekStepLarge = 10; // in seconds
let seekStepSmall = 5; // in seconds

// Initialization --------------------------------------------------------------

// 1. Check for media and enable listeners
const media = findMedia(document);
if (media.length > 0) {
    media.forEach(element => initializeMedia(element));
    activateListeners();
}

// Also check for iframes (to forward events)
if (document.getElementsByTagName('iframe').length > 0) {
    activateListeners();
}

// 2. Start observing for new videos/iframes
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { // ELEMENT_NODE
                if (node.tagName === 'VIDEO' || node.tagName === 'AUDIO') {
                    initializeMedia(node);
                    if (!listenersActive) activateListeners();
                } else if (node.tagName === 'IFRAME') {
                    if (!listenersActive) activateListeners();
                } else {
                    // Check inside added containers
                    if (node.shadowRoot || (node.querySelector && (node.querySelector('video, audio') || node.querySelector('iframe')))) {
                        const media = findMedia(node);
                        media.forEach(element => initializeMedia(element));
                        if (media.length > 0 && !listenersActive) activateListeners();
                    }
                }
            }
        });
    });
});
observer.observe(document.body, { childList: true, subtree: true });

// Functions -------------------------------------------------------------------

/**
 * Returns an array of supported keys.
 * TODO: make configurable in the extension settings
 * @returns {string[]} An array of supported keys.
 */
function getSupportedKeys() {
    return ['k', 'm', 'j', 'l', '<', '>', '.', ',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
}

/**
 * Activates the listeners for keyboard and message events.
 */
function activateListeners() {
    if (listenersActive) return;
    listenersActive = true;

    window.addEventListener('message', handleMessage);
    document.addEventListener('keydown', handleKeyDown);
}

/**
 * Handles messages from the extension.
 * @param {MessageEvent} event - The message event.
 */
function handleMessage(event) {
    // Safety check: if the extension context is invalidated (e.g. after update/reload),
    // remove the listener to prevent errors and stop processing.
    const isExtensionContext = typeof chrome !== 'undefined' && chrome.runtime;
    if (isExtensionContext && !chrome.runtime.id) {
        window.removeEventListener('message', handleMessage);
        return;
    }

    const target = getTargetMedia();
    if (target) {
        runAction(target, event.data.action);
    }
}

/**
 * Determines which media element to control based on priority:
 * 1. Active element (if it's a supported media type)
 * 2. Currently playing media
 * 3. Most recently interacted media
 * 4. First supported media on page
 * @returns {HTMLMediaElement|null}
 */
function getTargetMedia() {
    // 1. Active element
    if (document.activeElement && (document.activeElement.tagName === 'VIDEO' || document.activeElement.tagName === 'AUDIO')) {
        return document.activeElement;
    }

    const mediaList = findMedia(document);
    if (mediaList.length === 0) return null;

    // 2. Currently playing media
    // playing is !paused && !ended && readyState > 2
    const playingMedia = mediaList.find(m => !m.paused && !m.ended && m.readyState > 2);
    if (playingMedia) {
        return playingMedia;
    }

    // 3. Most recently interacted media
    // Verify it's still in the document
    if (lastInteractedMedia && document.body.contains(lastInteractedMedia)) {
        return lastInteractedMedia;
    }

    // 4. First supported media element
    return mediaList[0];
}

/**
 * Handles keydown events on the document and either performs an action on the target media element
 * or sends a message to iframes.
 * @param {KeyboardEvent} event The keydown event
 */
function handleKeyDown(event) {
    // Safety check: if the extension context is invalidated, remove listener.
    const isExtensionContext = typeof chrome !== 'undefined' && chrome.runtime;
    if (isExtensionContext && !chrome.runtime.id) {
        document.removeEventListener('keydown', handleKeyDown);
        return;
    }

    const key = event.key.toLowerCase();
    // only trigger for specific supported keys
    // TODO: make keys configurable in the extension settings
    if (!getSupportedKeys().includes(key)) {
        return;
    }

    // ignore key events if user is typing in an editable field (input, textarea, or contenteditable)
    const activeTag = document.activeElement ? document.activeElement.tagName.toLowerCase() : '';
    if (activeTag === 'input' || activeTag === 'textarea' || document.activeElement.isContentEditable) {
        return;
    }

    const actionType = mapKeyToAction(key);
    if (actionType === null) return;

    const action = {
        type: actionType,
        change: mapActionToChange(actionType),
        seekPercentage: mapActionToSeekPercentage(actionType)
    };

    const targetMedia = getTargetMedia();

    // if no media is found, try to message iframes
    if (!targetMedia) {
        const iframes = document.querySelectorAll('iframe');
        if (iframes.length > 0) {
            iframes.forEach(iframe => {
                iframe.contentWindow.postMessage({ action }, '*');
            });
        }
        return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    // Update last interacted on explicit control
    lastInteractedMedia = targetMedia;

    runAction(targetMedia, action);
}

/**
 * Maps a key to an action
 * TODO: make keys configurable in the extension settings
 * @param {string} key The key to map
 * @returns {string|null} The action mapped to the key
 */
function mapKeyToAction(key) {
    switch (key) {
        case 'k': return ACTION_PLAY_PAUSE;
        case 'm': return ACTION_MUTE_UNMUTE;
        case '>': return ACTION_SPEED_UP;
        case '<': return ACTION_SPEED_DOWN;
        case 'l': return ACTION_SEEK_FWD_LARGE;
        case 'j': return ACTION_SEEK_BACK_LARGE;
        case '.': return ACTION_SEEK_FWD_SMALL;
        case ',': return ACTION_SEEK_BACK_SMALL;
        case '0': return ACTION_SEEK_PERCENTAGE_0;
        case '1': return ACTION_SEEK_PERCENTAGE_10;
        case '2': return ACTION_SEEK_PERCENTAGE_20;
        case '3': return ACTION_SEEK_PERCENTAGE_30;
        case '4': return ACTION_SEEK_PERCENTAGE_40;
        case '5': return ACTION_SEEK_PERCENTAGE_50;
        case '6': return ACTION_SEEK_PERCENTAGE_60;
        case '7': return ACTION_SEEK_PERCENTAGE_70;
        case '8': return ACTION_SEEK_PERCENTAGE_80;
        case '9': return ACTION_SEEK_PERCENTAGE_90;
    }
    return null;
}

/**
 * Returns the change value for appropriate actions
 * @param {string} action The action to get the change value for
 * @returns {number|null} The change value for the action
 */
function mapActionToChange(action) {
    switch (action) {
        case ACTION_SPEED_UP: return speedStep;
        case ACTION_SPEED_DOWN: return -speedStep;
        case ACTION_SEEK_FWD_LARGE: return seekStepLarge;
        case ACTION_SEEK_BACK_LARGE: return -seekStepLarge;
        case ACTION_SEEK_FWD_SMALL: return seekStepSmall;
        case ACTION_SEEK_BACK_SMALL: return -seekStepSmall;
    }
    return 0;
}

/**
 * Returns the percentage value for seek percentage actions
 * @param {string} action The action to get the percentage for
 * @returns {number|null} The percentage value for the action
 */
function mapActionToSeekPercentage(action) {
    switch (action) {
        case ACTION_SEEK_PERCENTAGE_0: return 0;
        case ACTION_SEEK_PERCENTAGE_10: return 0.1;
        case ACTION_SEEK_PERCENTAGE_20: return 0.2;
        case ACTION_SEEK_PERCENTAGE_30: return 0.3;
        case ACTION_SEEK_PERCENTAGE_40: return 0.4;
        case ACTION_SEEK_PERCENTAGE_50: return 0.5;
        case ACTION_SEEK_PERCENTAGE_60: return 0.6;
        case ACTION_SEEK_PERCENTAGE_70: return 0.7;
        case ACTION_SEEK_PERCENTAGE_80: return 0.8;
        case ACTION_SEEK_PERCENTAGE_90: return 0.9;
    }
    return null;
}

/**
 * Runs an action on a media element
 * @param {HTMLMediaElement} media The media element to perform the action on
 * @param {object} action The action to perform
 * @param {string} action.type The type of action to perform
 * @param {number} action.change The change value for the action
 * @param {number} action.percentage The percentage value for the action
 */
function runAction(media, action) {
    if (!media) return;
    if (action.type === ACTION_PLAY_PAUSE) {
        toggleMediaPlay(media);
        showOverlay(media, action);
    } else if (action.type === ACTION_MUTE_UNMUTE) {
        toggleMediaMute(media);
        showOverlay(media, action);
    } else if (action.type === ACTION_SEEK_FWD_LARGE || action.type === ACTION_SEEK_BACK_LARGE || action.type === ACTION_SEEK_FWD_SMALL || action.type === ACTION_SEEK_BACK_SMALL) {
        media.currentTime += action.change;
        showOverlay(media, action);
    } else if (action.type === ACTION_SPEED_UP) {
        const newSpeed = Math.min(maxSpeed, media.playbackRate + speedStep);
        setMediaPlaybackSpeed(media, newSpeed);
        showOverlay(media, action);
    } else if (action.type === ACTION_SPEED_DOWN) {
        const newSpeed = Math.max(minSpeed, media.playbackRate - speedStep);
        setMediaPlaybackSpeed(media, newSpeed);
        showOverlay(media, action);
    } else if (action.type.startsWith(ACTION_SEEK_PERCENTAGE)) {
        media.currentTime = media.duration * action.seekPercentage;
    } else if (action.type === ACTION_NEXT_FRAME) {
        // media.pause();
        media.currentTime += 1;
    } else if (action.type === ACTION_PREV_FRAME) {
        // media.pause();
        media.currentTime -= 1;
    }
}

/**
 * Recursive function to find video and audio elements (including inside shadow DOMs)
 * @param {Node} root The root element to search
 * @returns {(HTMLVideoElement|HTMLAudioElement)[]} An array of video and audio elements
 */
function findMedia(root) {
    if (!root) return [];
    let media = Array.from(root.querySelectorAll('video, audio'));
    // search for shadow roots
    const allElements = root.querySelectorAll('*');
    for (const el of allElements) {
        if (el.shadowRoot) {
            media = media.concat(findMedia(el.shadowRoot));
        }
    }
    return media;
}

/**
 * Initializes a media element with listeners
 * @param {HTMLMediaElement} media 
 */
function initializeMedia(media) {
    if (!media) return;
    if (media.dataset.mcsExtInitialized) return;
    media.dataset.mcsExtInitialized = 'true';

    // Track userinteractions
    const markInteracted = () => {
        lastInteractedMedia = media;
    };
    ['play', 'pause', 'seeked', 'ratechange', 'volumechange', 'focus', 'click'].forEach(event => {
        media.addEventListener(event, markInteracted);
    });
}

/**
 * Sets the playback speed of a media element
 * @param {HTMLMediaElement} media The media element
 * @param {number} speed The speed to apply
 */
function setMediaPlaybackSpeed(media, speed = 1) {
    if (!media) return;
    // Only set if different to avoid infinite loops with ratechange listeners if we added them
    if (media.playbackRate !== speed) {
        media.playbackRate = speed;
    }
}

/**
 * Toggles play/pause on a media element
 * @param {HTMLMediaElement} media The media element
 */
function toggleMediaPlay(media) {
    if (!media) return;
    if (media.paused) {
        media.play();
    } else {
        media.pause();
    }
}

/**
 * Toggles mute/unmute on a media element
 * @param {HTMLMediaElement} media The media element
 */
function toggleMediaMute(media) {
    if (!media) return;
    if (media.muted) {
        media.muted = false;
    } else {
        media.muted = true;
    }
}

/**
 * Shows an overlay with icon and optional action text on top of the video or audio element
 * TODO: make display of overlay configurable (on/off)
 * TODO: make font size and icon size dynamic based on element size, and/or make it configurable
 * TODO: make overlay position dynamic based on action type, and/or make it configurable
 * @param {HTMLMediaElement} media The media element
 * @param {Object} action The action performed on the media element
 * @param {string} action.type The type of action performed
 * @param {string} action.change The change value for the action
 * @param {string} action.seekPercentage The seek percentage for the action
 */
function showOverlay(media, action = {}) {
    const id = 'mcs-ext-overlay';
    const existing = document.getElementById(id);
    if (existing) existing.remove();

    let content = null;
    if (action.type === ACTION_PLAY_PAUSE) {
        content = media.paused ? ICON_PAUSE : ICON_PLAY;
    } else if (action.type === ACTION_MUTE_UNMUTE) {
        content = media.muted ? ICON_MUTE : ICON_UNMUTE;
    } else if (action.type === ACTION_SPEED_UP) {
        content = `${ICON_SPEED_UP}<span>${media.playbackRate}x</span>`;
    } else if (action.type === ACTION_SPEED_DOWN) {
        content = `${ICON_SPEED_DOWN}<span>${media.playbackRate}x</span>`;
    } else if (action.type === ACTION_SEEK_FWD_LARGE) {
        content = `${ICON_SEEK_FWD_LARGE}<span>+${action.change}s</span>`;
    } else if (action.type === ACTION_SEEK_FWD_SMALL) {
        content = `${ICON_SEEK_FWD_SMALL}<span>+${action.change}s</span>`;
    } else if (action.type === ACTION_SEEK_BACK_LARGE) {
        content = `${ICON_SEEK_BACK_LARGE}<span>${action.change}s</span>`;
    } else if (action.type === ACTION_SEEK_BACK_SMALL) {
        content = `${ICON_SEEK_BACK_SMALL}<span>${action.change}s</span>`;
    }
    if (!content) return;

    const overlay = document.createElement('div');
    overlay.id = id;
    overlay.innerHTML = content;

    const rect = media.getBoundingClientRect();
    Object.assign(overlay.style, {
        position: 'absolute',
        left: (rect.left + window.scrollX + rect.width / 2) + 'px',
        top: (rect.top + window.scrollY + rect.height / 2) + 'px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        color: 'white',
        padding: '15px 20px',
        borderRadius: '10px',
        zIndex: '2147483647',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pointerEvents: 'none',
        fontFamily: 'sans-serif',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    });

    document.body.appendChild(overlay);

    // fade out
    setTimeout(() => {
        overlay.style.transition = 'opacity 0.25s ease-out';
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 250);
    }, 500);
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        mapKeyToAction,
        mapActionToChange,
        mapActionToSeekPercentage,
        getSupportedKeys,
        findMedia,
        getTargetMedia,
        runAction,
        // Constants used in tests or logic if needed, though typically we just test behavior
        ACTION_PLAY_PAUSE,
        ACTION_MUTE_UNMUTE,
        ACTION_SPEED_UP,
        ACTION_SPEED_DOWN,
        ACTION_SEEK_FWD_LARGE,
        ACTION_SEEK_BACK_LARGE,
        ACTION_SEEK_FWD_SMALL,
        ACTION_SEEK_BACK_SMALL
    };
}
