function DatePickerController() {
  this.dataController = DateController.getInstance();
  this.dataPickerController = document.createElement('div');

  this.getDataPickerController = function () {
    this.init();

    return this.dataPickerController
  };

  this.init = function () {
    this.dataPickerController = document.createElement('div');
    var days = this.dataController.getDays();
    for(var i = 1; i < days.length; i++) {
      if(i % 7 === 0) {
        this.dataPickerController.appendChild(document.createElement('br'))
      }
      this.dataPickerController.appendChild(createButton(days[i]));
    }
  };
}