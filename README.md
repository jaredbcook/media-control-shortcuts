# Media Control Shortcuts

Adds keyboard shortcuts to control video and audio playback on any website.

## Features

- **Keyboard shortcuts for standard media controls**: Play/pause, mute, playback speed, skip forward/backward, etc.
- **Visual feedback**: Shows a temporary overlay for appropriate actions.
- **Smart selection**: Automatically selects the most appropriate media element to control.
- **Cross-origin support**: Works with media embedded in iframes or in the shadow DOM.

## Keyboard Shortcuts

Default keyboard shortcuts are listed below.

| Key | Action |
| --- | --- |
| **`k`** | Play/Pause |
| **`m`** | Mute/Unmute |
| **`]`** | Volume up |
| **`[`** | Volume down |
| **`l`** | Skip forward 10 seconds |
| **`j`** | Skip backward 10 seconds |
| **`.`** | Skip forward 5 seconds |
| **`,`** | Skip backward 5 seconds |
| **`>`** | Increase playback speed |
| **`<`** | Decrease playback speed |
| **`0-9`** | Jump to location (`0` = 0%, `9` = 90%, etc.) |

## Installation — Chrome (Developer Mode)

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable **Developer mode** in the top right corner.
4. Click **Load unpacked**.
5. Select the folder containing these files.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Third-Party Assets

* **Material Icons** by Google are used under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).