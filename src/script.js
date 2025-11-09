console.clear();

const DOM = {
  tabs: "tabs",
  tabs_list: "tabs__list",
  tabs_btn: "tabs__btn",
  is_active: "is-active",
  marker: "marker",
  tabsDataAttr: "data-tabs-effect"
};

// ****** TABS EFFECTS INITS ******
setTabs({
  tabsContainerClassname: ".tabs-effect-1"
});

function setTabs({ tabsContainerClassname }) {
  const tabsContainer = document.querySelector(tabsContainerClassname);
  const effectNumber = tabsContainer.getAttribute(DOM.tabsDataAttr);

  tabsContainer.classList.add(`${DOM.tabs}--${effectNumber}`);

  setEffect1({ containerElem: tabsContainer });
}

function setEffect1({ containerElem }) {
  const activeElement = containerElem.querySelector(`.${DOM.is_active}`);

  createMarker({ parentContainer: containerElem });
}

// ****** UTILS ******
function createMarker({ parentContainer }) {
  const marker = document.createElement("div");
  marker.classList.add(`${DOM.marker}`);
  console.log("__", marker);
  parentContainer.appendChild(marker);
}

function getActiveElementFromTab(tabsClassname) {
  const tabsElem = document.querySelector(`.${tabsClassname}`);
  const activeElem = tabsElem.querySelector(`.${DOM.is_active}`);

  return activeElem;
}
