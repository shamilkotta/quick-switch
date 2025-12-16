# Quick Switch - Chrome Tab Search Extension

A quick tab search extension for Chrome that lets you quickly search and switch between open tabs using a keyboard shortcut.

## Features

- **Fast Tab Search**: Instantly search through all open tabs by title or URL
- **Keyboard Navigation**: Navigate with arrow keys, select with Enter
- **Clean UI**: Modern, minimalist interface for quick tab navigation
- **Configurable Shortcut**: Change the keyboard shortcut to your preference
- **Dark/Light Theme**: Automatically adapts to your system theme
- **Open in New Window**: Hold Cmd/Ctrl + Enter to move a tab to a new window

## Installation

1. Install from [Chrome Web Store](https://chrome.google.com/webstore) (coming soon)
2. Or load from source - see [QUICK_START.md](QUICK_START.md) for development setup

## How to Use

### Opening Tab Search

Press the keyboard shortcut:

- **Mac**: `Cmd + Shift + P`
- **Windows/Linux**: `Ctrl + Shift + P`

Or click the Quick Switch icon in your Chrome toolbar.

### Keyboard Shortcuts

| Action             | Shortcut               |
| ------------------ | ---------------------- |
| Open tab search    | `Cmd/Ctrl + Shift + P` |
| Navigate list      | `↑` `↓` or `Tab`       |
| Switch to tab      | `Enter`                |
| Open in new window | `Cmd/Ctrl + Enter`     |
| Close popup        | `Esc`                  |

### Mouse Usage

- **Click** any tab in the list to switch to it
- Press `Esc` to close the popup

### Search Tips

- Search matches both tab **titles** and **URLs**
- Search is case-insensitive
- Results filter in real-time as you type

## Customizing the Shortcut

1. Go to `chrome://extensions/shortcuts`
2. Find "Quick Switch - Tab Search"
3. Click the pencil icon next to the shortcut
4. Press your desired key combination

## Options

Access the options page by right-clicking the Quick Switch icon → Options.

The options page shows:

- Current keyboard shortcut
- Instructions for customizing shortcuts
- Quick reference for all keyboard controls

## Troubleshooting

**Shortcut doesn't work:**

- Check `chrome://extensions/shortcuts` to verify the shortcut is set
- Some pages (like `chrome://` pages) don't allow extension shortcuts
- Try clicking the extension icon in the toolbar instead

**Popup doesn't appear:**

- Make sure the extension is enabled in `chrome://extensions/`
- Try clicking the extension icon in the toolbar
- Check for errors in the extension details page

**Extension not working:**

- Reload the extension: Go to `chrome://extensions/` → Click refresh icon on Quick Switch
- Make sure you're using Chrome (not Chromium or other browsers)

## License

MIT License - Feel free to use, modify, and distribute.

---

**For development and testing instructions, see [QUICK_START.md](QUICK_START.md)**
