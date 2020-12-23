'use strict'

window.addEventListener('DOMContentLoaded', function() {

  // When the input is focus
  myInput.addEventListener('focus', function() {
    // set focus to true
    focus = true;
  });
  
  // When the input isn't focus
  myInput.addEventListener('blur', function() {
    // set focus to false
    focus = false;
  });

  // When a key is tiped
  document.addEventListener('keyup', function(e) {
    // if focus is true, and key is not Enter, and value is not empty
    if(focus && e.code != 'Enter' && myInput.value != ''){
      // call checkInput()
      checkInput();
    };
  });

  // When a button is clicked, set the input's value
  for(let i = 0; i < 3; i++){
    document.getElementsByClassName('prop')[i].addEventListener('click', function(){
      setInput(i);
    });
  }
});



