const DOM = {
  tabs: "tabs",
  tabs_list: "tabs__list",
  tabs_btn: ".tabs__btn",
  is_active: "is-active",
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
}

// ****** UTILS ******
function getActiveElementFromTab(tabsClassname) {
  const tabsElem = document.querySelector(`.${tabsClassname}`);
  const activeElem = tabsElem.querySelector(`.${DOM.is_active}`);

  return activeElem;
}
