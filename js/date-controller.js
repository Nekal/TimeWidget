var DateController = (function () {
  var instance;

  function init() {
    var date = new Date();
    var days = [];
    return {
      getDays: function () {
        days = [];
        console.log(this.getYear())
        var numOfDays = new Date(this.getYear(), this.getMonth() + 1, 0).getDate();


        for(var i = 0; i <= numOfDays; i++) {
          days[i] = i;
        }
        console.log(days);
        return days;
      },

      nextMonth: function() {
        date = new Date(this.getYear(), this.getMonth() + 1, this.getDay())
      },

      previousMonth: function() {
        date = new Date(this.getYear(), this.getMonth() - 1, this.getDay())
      },

      nextYear: function() {
        date = new Date(this.getYear() + 1, this.getMonth(), this.getDay())
      },

      previousYear: function() {
        date = new Date(this.getYear() - 1, this.getMonth(), this.getDay())
      },

      getDay: function () {
        return date.getDate();
      },

      getMonth: function () {
        return date.getMonth();
      },

      getYear: function () {
        return date.getFullYear();
      }
    }

  }

  return {
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  }
})();

var dateController = DateController.getInstance();
dateController.getDays();