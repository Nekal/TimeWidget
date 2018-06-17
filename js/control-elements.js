function createButton(text, styles, id, onclick) {
  var button = document.createElement('button');
  if(styles && styles.length !== 0) {
    for(var i = 0; i < styles.length; i++) {
      button.classList.add(styles[i]);
    }
  }
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
  if(text) {
    span.innerHTML = text;
  }

  if(id) {
    span.id = id;
  }
  return span;
}