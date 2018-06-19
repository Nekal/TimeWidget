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
  popup = createDatePickerController(popup);
  document.body.appendChild(popup);
}


function createDatePickerController(popup) {
  var dataPickerController = new DatePickerController(popup);
  return dataPickerController.getDatePickerController()
}

function setScripts(scripts) {
  for(var i = 0; i < scripts.length; i++) {
    var script = document.createElement('script');
    script.src = scripts[i];
    document.head.appendChild(script);
  }
}