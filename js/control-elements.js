function createButton(text, styles) {
  var button = document.createElement('button');
  if(styles && styles.length !== 0) {
    for(var i = 0; i < styles.length; i++) {
      button.classList.add(styles[i]);
    }
  }
  if(text) {
    button.innerHTML  = text;
  }
  return button;
}

function createTextSpan(text, styles) {
  var span = document.createElement('span');
  if(styles && styles.length !== 0) {
    for(var i = 0; i < styles.length; i++) {
      span.classList.add(styles[i]);
    }
  }
  if(text) {
    span.innerHTML = text;
  }
  return span;
}