// var CONSTANTS = required('./CONSTANTS');

function init(elementRef) {
  setClickEventsForInput(document.getElementsByTagName('input'));
}

function setClickEventsForInput(inputElements) {
  for(var i = 0; i< inputElements.length; i++) {
    if(inputElements[i].className === CONSTANTS.DEFAULT_INPUT_CLASS) {
      inputElements[i].addEventListener('click', inputClick);
    }
  }
}

function inputClick(elementRef) {
  createWidgetTimePopup(elementRef);
}

function createWidgetTimePopup(elementRef) {

}