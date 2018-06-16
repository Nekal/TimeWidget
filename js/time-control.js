function getTimeControl() {
  var timeControl = document.createElement('div');
  timeControl.classList.add('time-controller');
  timeControl.appendChild(createYearTimeControl());
  timeControl.appendChild(createMonthTimeControl());
  return timeControl;
}

function createYearTimeControl() {
  var timeControl = document.createElement('div');
  timeControl.classList.add('time-control');
  timeControl.appendChild(createButton('previous'));
  timeControl.appendChild(createTextSpan('Year'));
  timeControl.appendChild(createButton('previous'));
  return timeControl
}

function createMonthTimeControl() {
  var timeControl = document.createElement('div');
  timeControl.classList.add('time-control');
  timeControl.appendChild(createButton('previous'));
  timeControl.appendChild(createTextSpan('Month'));
  timeControl.appendChild(createButton('previous'));
  return timeControl
}