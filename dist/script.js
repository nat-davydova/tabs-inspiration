const DOM = {
  tabs_1: "tabs--1",
  tabs_list: "tabs__list",
  tabs_btn: ".tabs__btn",
  is_active: "is-active"
};

// ****** UTILS ******
function getActiveElementFromTab(tabsClassname) {
  const tabsElem = document.querySelector(`.${tabsClassname}`);
  const activeElem = tabsElem.querySelector(`.${DOM.is_active}`);

  return activeElem;
}