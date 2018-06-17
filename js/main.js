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
  buildDataPicker(elementRef);
}

function buildDataPicker(elementRef) {
  var popup = document.createElement('div');
  popup.classList.add('popup');
  createTimeControl(popup);
  createFocusDateControl(popup);
  document.body.appendChild(popup);
}

function createTimeControl(popup) {
  var timeControl = new TimeController().getTimeController();
  popup.appendChild(timeControl);
}

function createFocusDateControl(popup) {
  var dataPickerController = new DatePickerController();
  // dataPickerController.init();
  popup.appendChild(dataPickerController.getDataPickerController());
}