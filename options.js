// Options page script for Quick Switch extension

document.addEventListener('DOMContentLoaded', () => {
  // Load and display current shortcut
  loadCurrentShortcut();

  // Open shortcuts page button
  const openShortcutsBtn = document.getElementById('open-shortcuts');
  openShortcutsBtn.addEventListener('click', () => {
    // Open Chrome's extension shortcuts page
    chrome.tabs.create({
      url: 'chrome://extensions/shortcuts'
    });
  });
});

// Load and display the current keyboard shortcut
async function loadCurrentShortcut() {
  try {
    const commands = await chrome.commands.getAll();
    const toggleCommand = commands.find(cmd => cmd.name === '_execute_action');
    
    if (toggleCommand && toggleCommand.shortcut) {
      const shortcutDisplay = document.getElementById('current-shortcut');
      shortcutDisplay.textContent = formatShortcut(toggleCommand.shortcut);
    }
  } catch (error) {
    console.error('Error loading shortcut:', error);
  }
}

// Format shortcut for display
function formatShortcut(shortcut) {
  if (!shortcut) return 'Not set';
  
  return shortcut
    .replace(/Ctrl/g, '⌃')
    .replace(/Command/g, '⌘')
    .replace(/Cmd/g, '⌘')
    .replace(/Alt/g, '⌥')
    .replace(/Shift/g, '⇧')
    .replace(/\+/g, ' + ')
    .replace(/MacCtrl/g, '⌃');
}

