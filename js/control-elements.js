function createButton(text, styles, id, onclick) {
  var button = document.createElement('button');
  if(styles && styles.length !== 0) {
    for(var i = 0; i < styles.length; i++) {
      button.classList.add(styles[i]);
    }
  }
  button.style.cssText = CONSTANTS.DEFAULT_BUTTON_STYLES;
  if(text) {
    button.innerHTML  = text;
  }

  if(id) {
    button.id = id;
  }

  if(onclick) {
    button.addEventListener('click', onclick)
  }
  return button;
}

function createTextSpan(text, styles, id) {
  var span = document.createElement('span');
  if(styles && styles.length !== 0) {
    for(var i = 0; i < styles.length; i++) {
      span.classList.add(styles[i]);
    }
  }
  span.style.cssText = CONSTANTS.DEFAULT_SPAN_STYLES;
  if(text) {
    span.innerHTML = text;
  }

  if(id) {
    span.id = id;
  }
  return span;
}

function createTable(headers, elements) {
  var table = document.createElement('table');
  table.appendChild(createHeadForTable(headers));
  table.appendChild(createBodyForTable(elements));
  return table;
}

function createHeadForTable(headers) {
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  for(var i = 0; i < headers.length; i++) {
    var th = document.createElement('th')
    th.innerHTML = headers[i];
    tr.appendChild(th);
  }
  thead.appendChild(tr);
  return thead
}

function createBodyForTable(elements) {
  var tbody = document.createElement('tbody');
  var tr = document.createElement('tr');
  for(var i = 0; i < elements.length; i++) {
    if(i % 7 === 0) {
      tbody.appendChild(tr);
      tr = document.createElement('tr');
    }
    var td = document.createElement('td');
    td.appendChild(createButton(elements[i], [], null));
    tr.appendChild(td);
  }
  tbody.appendChild(tr);
  return tbody
}