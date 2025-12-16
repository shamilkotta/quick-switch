// Quick Switch Popup Script

let allTabs = [];
let filteredTabs = [];
let selectedIndex = 0;

// DOM Elements
const searchInput = document.getElementById("search-input");
const tabsList = document.getElementById("tabs-list");
const emptyState = document.getElementById("empty-state");
const loading = document.getElementById("loading");
const tabCount = document.getElementById("tab-count");

// Initialize
document.addEventListener("DOMContentLoaded", init);

async function init() {
  showLoading(true);

  try {
    // Get all tabs in current window
    const tabs = await chrome.tabs.query({ currentWindow: true });

    allTabs = tabs.map((tab) => ({
      id: tab.id,
      title: tab.title || "Untitled",
      url: tab.url || "",
      favIconUrl: tab.favIconUrl || "",
      active: tab.active,
      index: tab.index,
    }));

    filteredTabs = [...allTabs];

    // Find and select active tab
    const activeIndex = filteredTabs.findIndex((tab) => tab.active);
    if (activeIndex !== -1) {
      selectedIndex = activeIndex;
    }

    updateTabCount();
    renderTabs();
  } catch (error) {
    console.error("Error loading tabs:", error);
  }

  showLoading(false);

  // Focus search input
  searchInput.focus();

  // Add event listeners
  searchInput.addEventListener("input", handleSearch);
  document.addEventListener("keydown", handleKeyDown);
}

function showLoading(show) {
  loading.classList.toggle("visible", show);
}

function updateTabCount() {
  const total = allTabs.length;
  const filtered = filteredTabs.length;
  if (filtered === total) {
    tabCount.textContent = `${total}`;
  } else {
    tabCount.textContent = `${filtered}/${total}`;
  }
}

function renderTabs() {
  if (filteredTabs.length === 0) {
    tabsList.style.display = "none";
    emptyState.classList.add("visible");
    return;
  }

  tabsList.style.display = "block";
  emptyState.classList.remove("visible");

  tabsList.innerHTML = filteredTabs
    .map(
      (tab, index) => `
    <li class="qs-tab-item ${index === selectedIndex ? "qs-selected" : ""}"
        data-tab-id="${tab.id}"
        data-index="${index}">
      <img class="qs-tab-favicon" 
           src="${tab.favIconUrl || getDefaultFavicon()}" 
           alt=""
           onerror="this.src='${getDefaultFavicon()}'">
      <div class="qs-tab-info">
        <span class="qs-tab-title">${escapeHtml(truncate(tab.title, 28))}</span>
        <span class="qs-tab-separator">—</span>
        <span class="qs-tab-url">${escapeHtml(formatUrl(tab.url))}</span>
      </div>
      <span class="qs-enter-hint">↵</span>
    </li>
  `
    )
    .join("");

  // Add click handlers
  tabsList.querySelectorAll(".qs-tab-item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const tabId = parseInt(item.dataset.tabId);
      if (e.metaKey || e.ctrlKey) {
        openInNewWindow(tabId);
      } else {
        switchToTab(tabId);
      }
    });

    item.addEventListener("mouseenter", () => {
      selectedIndex = parseInt(item.dataset.index);
      updateSelection();
    });
  });

  scrollSelectedIntoView();
}

function updateSelection() {
  const items = tabsList.querySelectorAll(".qs-tab-item");
  items.forEach((item, index) => {
    item.classList.toggle("qs-selected", index === selectedIndex);
  });
  scrollSelectedIntoView();
}

function scrollSelectedIntoView() {
  const selectedItem = tabsList.querySelector(".qs-tab-item.qs-selected");
  if (selectedItem) {
    selectedItem.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }
}

function handleSearch(e) {
  const query = e.target.value.toLowerCase().trim();

  if (!query) {
    filteredTabs = [...allTabs];
  } else {
    filteredTabs = allTabs.filter((tab) => {
      const title = (tab.title || "").toLowerCase();
      const url = (tab.url || "").toLowerCase();
      return title.includes(query) || url.includes(query);
    });
  }

  selectedIndex = 0;
  updateTabCount();
  renderTabs();
}

function handleKeyDown(e) {
  switch (e.key) {
    case "ArrowDown":
      e.preventDefault();
      selectedIndex = Math.min(selectedIndex + 1, filteredTabs.length - 1);
      updateSelection();
      break;

    case "ArrowUp":
      e.preventDefault();
      selectedIndex = Math.max(selectedIndex - 1, 0);
      updateSelection();
      break;

    case "Enter":
      e.preventDefault();
      if (filteredTabs[selectedIndex]) {
        const tabId = filteredTabs[selectedIndex].id;
        if (e.metaKey || e.ctrlKey) {
          openInNewWindow(tabId);
        } else {
          switchToTab(tabId);
        }
      }
      break;

    case "Escape":
      e.preventDefault();
      window.close();
      break;

    case "Tab":
      e.preventDefault();
      if (e.shiftKey) {
        selectedIndex = Math.max(selectedIndex - 1, 0);
      } else {
        selectedIndex = Math.min(selectedIndex + 1, filteredTabs.length - 1);
      }
      updateSelection();
      break;
  }
}

async function switchToTab(tabId) {
  try {
    await chrome.tabs.update(tabId, { active: true });
    window.close();
  } catch (error) {
    console.error("Error switching tab:", error);
  }
}

async function openInNewWindow(tabId) {
  try {
    await chrome.windows.create({ tabId: tabId, focused: true });
    window.close();
  } catch (error) {
    console.error("Error opening in new window:", error);
  }
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function truncate(text, maxLength) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

function formatUrl(url) {
  try {
    const urlObj = new URL(url);
    // Show hostname and first part of path
    let display = urlObj.hostname.replace("www.", "");
    if (urlObj.pathname && urlObj.pathname !== "/") {
      const path = urlObj.pathname.substring(0, 20);
      display += path + (urlObj.pathname.length > 20 ? "..." : "");
    }
    return display;
  } catch {
    return url.substring(0, 30) + (url.length > 30 ? "..." : "");
  }
}

function getDefaultFavicon() {
  return (
    "data:image/svg+xml," +
    encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="%236b7280" stroke-width="2">
      <rect x="3" y="3" width="18" height="18" rx="2"/>
      <path d="M3 9h18"/>
    </svg>
  `)
  );
}
