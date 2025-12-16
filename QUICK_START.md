# Quick Start Guide - Testing Quick Switch Extension

## Step-by-Step Setup

### 1. Load Extension in Chrome

1. Open Chrome browser
2. Navigate to: `chrome://extensions/`
3. **Enable Developer Mode** (toggle in top-right)
4. Click **"Load unpacked"**
5. Select the `quick-switch` folder
6. ✅ Extension should appear in the list

### 2. Test the Extension

1. **Open a regular webpage** (e.g., `https://google.com`)
   - ⚠️ Note: Won't work on `chrome://` pages
2. **Press the keyboard shortcut**:
   - Mac: `Cmd + Shift + P`
   - Windows/Linux: `Ctrl + Shift + P`
3. **You should see**:
   - A popup window appears
   - Search input at the top
   - List of all open tabs below
   - Selected tab highlighted

### 3. Try These Actions

**Search:**

- Type in the search box
- Tabs should filter in real-time

**Navigate:**

- Press `↑` or `↓` to move selection
- Press `Enter` to switch to selected tab
- Press `Esc` to close

**Mouse:**

- Click any tab to switch to it
- Press `Esc` to close popup

**New Window:**

- Select a tab, then press `Cmd/Ctrl + Enter`
- Tab opens in a new window

## Quick Debugging

### Check if Extension is Loaded

- Go to `chrome://extensions/`
- Find "Quick Switch - Tab Search"
- Should show "Enabled" status

### View Errors

- Right-click the extension icon → Inspect popup
- Opens DevTools console
- Look for red error messages

### Test on Different Pages

- Try on: `https://github.com`
- Try on: `https://stackoverflow.com`
- Try on: `https://news.ycombinator.com`

## After Making Code Changes

1. **Save your file changes**
2. Go to `chrome://extensions/`
3. Click the **refresh icon** (🔄) on Quick Switch
4. **Refresh the test webpage** (`Cmd+R` / `Ctrl+R`)
5. Test again!

## Troubleshooting

**Shortcut doesn't work?**

- Check `chrome://extensions/shortcuts`
- Make sure shortcut is set
- Try on a regular webpage (not chrome://)

**Popup doesn't appear?**

- Check `chrome://extensions/shortcuts` for shortcut settings
- Make sure extension is enabled
- Try clicking the extension icon in toolbar

**Need to change the shortcut?**

- Go to `chrome://extensions/shortcuts`
- Find "Quick Switch - Tab Search"
- Click pencil icon to edit

## Pro Tips

- Keep DevTools open while testing
- Use `console.log()` in code for debugging
- Check popup console (right-click extension icon → Inspect popup)
- Test with 10+ tabs open for better experience
