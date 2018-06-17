function NavigationDateController() {
  this.dataController = DateController.getInstance();
  this.navigationDateController = document.createElement('div');

  this.getNavigationDateController = function () {
    this.init();

    return this.navigationDateController
  };

  this.init = function () {
    this.navigationDateController = document.createElement('div');
    this.navigationDateController.classList.add('day-control');
    this.navigationDateController.id = CONSTANTS.DAYS_CONTROL_ID;
    var days = DateController.getInstance().getDays();
    for(var i = 1; i < days.length; i++) {
      if(i % 7 === 0) {
        this.navigationDateController.appendChild(document.createElement('br'))
      }
      this.navigationDateController.appendChild(createButton(days[i], [], null, this.showDate));
    }
  };

  this.showDate = function(element) {
    var data = DateController.getInstance();
    var input = document.getElementsByClassName('data-pick');
    input[0].value = data.getYear() + ',' + (data.getMonth() + 1) + ',' + element.target.innerHTML;
  }
}