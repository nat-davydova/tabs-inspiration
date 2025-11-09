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
  const activeTabBtn = containerElem.querySelector(`.${DOM.is_active}`);
  const { left, width } = getElementOffsetAndSize(activeTabBtn);

  createMarker({
    parentContainer: containerElem,
    cssStyles: {
      left: `${left}px`,
      width: `${width}px`
    }
  });
}

function activateMarkerOnChangeTab1({ markerElem, activeTabBtn }) {
  const { left, width } = getElementOffsetAndSize(activeTabBtn);

  applyMarker({
    currentMarkerElem: markerElem,
    cssStyles: {
      left: `${left}px`,
      width: `${width}px`
    }
  });
}

document.addEventListener("click", changeActiveTab);

// ****** UTILS ******
function changeActiveTab(event) {
  const target = event.target;
  const currentBtn = target.closest(`.${DOM.tabs_btn}`);
  const tabsContainer = target.closest(`.${DOM.tabs}`);
  const tabs = tabsContainer?.querySelectorAll(`.${DOM.tabs_btn}`);
  const marker = tabsContainer?.querySelector(`.${DOM.marker}`);

  tabs?.forEach((elem) => elem.classList.remove(`${DOM.is_active}`));
  currentBtn?.classList.add(`${DOM.is_active}`);

  activateMarkerOnChangeTab1({ markerElem: marker, activeTabBtn: currentBtn });
}

function createMarker({ parentContainer, cssStyles = {} }) {
  const marker = document.createElement("div");
  marker.classList.add(`${DOM.marker}`);

  Object.keys(cssStyles).forEach((styleName) => {
    marker.style.setProperty(`--${styleName}`, cssStyles[styleName]);
  });

  parentContainer.appendChild(marker);
}

function applyMarker({ currentMarkerElem, cssStyles = {} }) {
  Object.keys(cssStyles).forEach((styleName) => {
    currentMarkerElem.style.setProperty(`--${styleName}`, cssStyles[styleName]);
  });
}

function getElementOffsetAndSize(elem) {
  const left = elem?.offsetLeft;
  const top = elem?.offsetTop;
  const width = elem?.clientWidth;
  const height = elem?.clientHeight;

  return {
    left,
    top,
    width,
    height
  };
}

function getActiveElementFromTab(tabsClassname) {
  const tabsElem = document.querySelector(`.${tabsClassname}`);
  const activeElem = tabsElem.querySelector(`.${DOM.is_active}`);

  return activeElem;
}