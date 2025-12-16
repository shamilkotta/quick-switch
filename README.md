# Quick Switch - Chrome Tab Search Extension

A quick tab search extension for Chrome that lets you quickly search and switch between open tabs using a keyboard shortcut.

![Quick Switch Preview](icons/quick-switch.png)

## Features

- **Fast Tab Search**: Instantly search through all open tabs by title or URL
- **Keyboard Navigation**: Navigate with arrow keys, select with Enter
- **Clean UI**: Modern, minimalist interface for quick tab navigation
- **Configurable Shortcut**: Change the keyboard shortcut to your preference
- **Dark/Light Theme**: Automatically adapts to your system theme
- **Open in New Window**: Hold Cmd/Ctrl + Enter to move a tab to a new window

## Installation

### From Source (Developer Mode)

1. **Load the Extension**:

   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `quick-switch` folder

2. **Ready to Use!**
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux) to open the tab search

## Usage

| Action             | Shortcut               |
| ------------------ | ---------------------- |
| Open tab search    | `Cmd/Ctrl + Shift + P` |
| Navigate list      | `↑` `↓` or `Tab`       |
| Switch to tab      | `Enter`                |
| Open in new window | `Cmd/Ctrl + Enter`     |
| Close overlay      | `Esc` or click outside |

### Customizing the Shortcut

1. Go to `chrome://extensions/shortcuts`
2. Find "Quick Switch - Tab Search"
3. Click the pencil icon next to the shortcut
4. Press your desired key combination

## Files Structure

```
quick-switch/
├── manifest.json       # Extension configuration
├── popup.html          # Popup UI structure
├── popup.css           # Popup styling
├── popup.js            # Popup logic
├── options.html        # Settings page
├── options.js          # Settings page logic
├── icons/
│   └── quick-switch.png # Extension icon
└── README.md           # This file
```

## Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions Used**:
  - `tabs`: Access to tab information
  - `activeTab`: Interact with the current tab

## Troubleshooting

### Shortcut doesn't work on some pages

Chrome extensions cannot capture keyboard shortcuts on certain pages:

- `chrome://` pages (settings, extensions, etc.)
- Chrome Web Store pages
- Some system pages

### Overlay doesn't appear

If the overlay doesn't show up:

1. Make sure the extension is enabled in `chrome://extensions/`
2. Refresh the page you're trying to use it on
3. Check the keyboard shortcut in `chrome://extensions/shortcuts`

## Development & Testing

### Loading the Extension in Developer Mode

1. **Open Chrome Extensions Page**:

   - Navigate to `chrome://extensions/` in Chrome
   - Or go to: Menu (⋮) → Extensions → Manage Extensions

2. **Enable Developer Mode**:

   - Toggle "Developer mode" switch in the top-right corner

3. **Load the Extension**:

   - Click "Load unpacked" button
   - Select the `quick-switch` folder (the one containing `manifest.json`)
   - The extension should now appear in your extensions list

4. **Verify Installation**:
   - You should see "Quick Switch - Tab Search" in the extensions list
   - Check that it's enabled (toggle should be ON)
   - Note the extension ID (you'll need this for debugging)

### Testing the Extension

1. **Test Keyboard Shortcut**:

   - Open any regular webpage (not `chrome://` pages)
   - Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
   - The overlay should appear in the center of the page

2. **Test Search Functionality**:

   - Type in the search box to filter tabs
   - Verify that tabs are filtered by title and URL
   - Check that the active tab is highlighted

3. **Test Keyboard Navigation**:

   - Use `↑` and `↓` arrow keys to navigate
   - Press `Enter` to switch to selected tab
   - Press `Esc` to close the overlay
   - Try `Cmd/Ctrl + Enter` to open tab in new window

4. **Test Mouse Interaction**:

   - Click on a tab item to switch to it
   - Click outside the overlay to close it
   - Hover over tabs to see selection change

5. **Test on Different Pages**:
   - Try it on various websites
   - Test on pages with different themes
   - Verify it works with many tabs open (20+ tabs)

### Debugging

1. **View Background Script Logs**:

   - Go to `chrome://extensions/`
   - Find "Quick Switch - Tab Search"
   - Click "service worker" link (opens DevTools)
   - Check Console for any errors

2. **View Content Script Logs**:

   - Right-click on any webpage
   - Select "Inspect"
   - Go to Console tab
   - Look for messages from the content script

3. **Inspect Overlay HTML**:

   - Open the overlay on any page
   - Right-click on the overlay
   - Select "Inspect Element"
   - Check the HTML structure and CSS

4. **Check Extension Errors**:
   - Go to `chrome://extensions/`
   - Look for red error badges on the extension card
   - Click "Errors" to see detailed error messages

### Making Changes During Development

1. **Edit Source Files**:

   - Make changes to `.js`, `.css`, or `.html` files
   - Save your changes

2. **Reload Extension**:

   - Go to `chrome://extensions/`
   - Click the refresh icon (🔄) on the Quick Switch extension card
   - Or use the keyboard shortcut: `Cmd+R` (Mac) / `Ctrl+R` (Windows)

3. **Reload Test Page**:

   - Refresh the webpage you're testing on (`Cmd+R` / `Ctrl+R`)
   - The updated extension code will be injected

4. **For Manifest Changes**:
   - If you modify `manifest.json`, you must reload the extension
   - Some changes (like permissions) require removing and re-adding the extension

### Common Development Issues

**Extension not loading:**

- Check `manifest.json` syntax (must be valid JSON)
- Verify all referenced files exist
- Check for errors in `chrome://extensions/`

**Shortcut not working:**

- Verify shortcut is set in `chrome://extensions/shortcuts`
- Some pages (chrome://, chrome-extension://) don't allow shortcuts
- Try a different key combination

**Overlay not appearing:**

- Check browser console for JavaScript errors
- Verify content script is injected (check Sources tab in DevTools)
- Make sure you're on a regular webpage (not chrome:// page)

**Changes not reflecting:**

- Reload the extension after making changes
- Hard refresh the test page (`Cmd+Shift+R` / `Ctrl+Shift+R`)
- Clear browser cache if needed

### Testing Checklist

- [ ] Extension loads without errors
- [ ] Keyboard shortcut opens overlay
- [ ] Search filters tabs correctly
- [ ] Arrow keys navigate the list
- [ ] Enter switches to selected tab
- [ ] Esc closes overlay
- [ ] Cmd/Ctrl+Enter opens in new window
- [ ] Mouse clicks work
- [ ] Active tab is highlighted
- [ ] Works with many tabs (20+)
- [ ] Works on different websites
- [ ] Dark/light theme adapts correctly
- [ ] Options page loads correctly

## License

MIT License - Feel free to use, modify, and distribute.
