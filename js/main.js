function init() {
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
  var popup = document.createElement('div');
  popup.classList.add('popup');
  buildPopup(popup);
  document.body.appendChild(popup);
}

function buildPopup(popup) {
  var timeControl = getTimeControl();
  popup.appendChild(timeControl);
}
