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
  const activeElem = containerElem.querySelector(`.${DOM.is_active}`);
  const { left, width } = getElementOffsetAndSize(activeElem);

  createMarker({
    parentContainer: containerElem,
    cssStyles: {
      left: `${left}px`,
      width: `${width}px`
    }
  });
}

// ****** UTILS ******
function createMarker({ parentContainer, cssStyles = {} }) {
  const marker = document.createElement("div");
  marker.classList.add(`${DOM.marker}`);

  Object.keys(cssStyles).forEach((styleName) => {
    marker.style.setProperty(`--${styleName}`, cssStyles[styleName]);
  });

  parentContainer.appendChild(marker);
}

function getElementOffsetAndSize(elem) {
  const left = elem.offsetLeft;
  const top = elem.offsetTop;
  const width = elem.clientWidth;
  const height = elem.clientHeight;

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