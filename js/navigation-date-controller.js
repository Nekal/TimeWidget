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
    var date = DateController.getInstance();
    this.navigationDateController = createTable(CONSTANTS.WEEK_DAYS, days);
    // for(var i = 1; i < days.length; i++) {
    //   // console.log(CONSTANTS.WEEK_DAYS[date.getWeekDayByDate(date.getYear(), date.getMonth(), days[i])]);
    //   if(i % 7 === 0) {
    //     this.navigationDateController.appendChild(document.createElement('br'))
    //   }
    //   this.navigationDateController.appendChild(createButton(days[i], [], null, this.showDate));
    // }
  };

  this.showDate = function(element) {
    var data = DateController.getInstance();
    var input = document.getElementsByClassName('data-pick');
    data.setDay(element.target.innerHTML);
    input[0].value = data.getDate();
  }
}