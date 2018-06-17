function DatePickerController(popup) {
  this.popup = popup;
  this.dataController = DateController.getInstance();
  this.navigationDateController = new NavigationDateController()
  this.year = this.dataController.getYear();
  this.month = this.dataController.getMonth();
  this.timeController = document.createElement('div');
  this.monthControl = null;
  this.yearControl = null;

  this.init = function () {
    this.yearControl = this.buildTimeControl(CONSTANTS.DEFAULT_YEAR_LABEL_ID, this.year, this.previousYear, this.nextYear);
    this.timeController.appendChild(this.yearControl);

    this.monthControl = this.buildTimeControl(CONSTANTS.DEFAULT_MONTH_LABEL_ID, this.month + 1, this.previousMonth, this.nextMonth);
    this.timeController.appendChild(this.monthControl);

    this.popup.appendChild(this.timeController);
    this.popup.appendChild(this.navigationDateController.getNavigationDateController());
  };
  
  this.getDatePickerController = function() {
    this.init();
    return this.popup;
  };

  this.nextMonth = function (element) {
    this.dataController = DateController.getInstance();
    this.dataController.nextMonth();
    var monthElement = document.getElementById(CONSTANTS.DEFAULT_MONTH_LABEL_ID);
    monthElement.innerHTML = this.dataController.getMonth() + 1;
    new DatePickerController().updateNavigationControl();
  };

  this.previousMonth = function (element) {
    this.dataController = DateController.getInstance();
    this.dataController.previousMonth();
    var monthElement = document.getElementById(CONSTANTS.DEFAULT_MONTH_LABEL_ID);
    monthElement.innerHTML = this.dataController.getMonth() + 1;
    new DatePickerController().updateNavigationControl();
  };

  this.nextYear = function (element) {
    this.dataController = DateController.getInstance();
    this.dataController.nextYear();
    var monthElement = document.getElementById(CONSTANTS.DEFAULT_YEAR_LABEL_ID);
    monthElement.innerHTML = this.dataController.getYear();
    new DatePickerController().updateNavigationControl();
  };

  this.previousYear = function (element) {
    this.dataController = DateController.getInstance();
    this.dataController.previousYear();
    var monthElement = document.getElementById(CONSTANTS.DEFAULT_YEAR_LABEL_ID);
    monthElement.innerHTML = this.dataController.getYear();
    new DatePickerController().updateNavigationControl();
  };

  this.getYear = function() {
    return this.year;
  };

  this.getMonth = function () {
    return this.month;
  };

  this.updateNavigationControl = function () {
    this.navigationDateController = new NavigationDateController();
    var element = document.getElementById(CONSTANTS.DAYS_CONTROL_ID);
    element.parentNode.replaceChild(this.navigationDateController.getNavigationDateController(), element);
  };
  
  this.buildTimeControl = function (id, text, previousOnClick, nextOnClick) {
    var timeControl = document.createElement('div');
    timeControl.classList.add('time-control');
    timeControl.appendChild(createButton('previous', [], null, previousOnClick));
    timeControl.appendChild(createTextSpan(text, [], id));
    timeControl.appendChild(createButton('next', [], null, nextOnClick));
    return timeControl
  }
}