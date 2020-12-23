'use strict'

// Function that checks if the value of the input match an entry in iSP
function checkInput() {
  // If my input contain an @
  if(myInput.value.indexOf('@') >= 0){
    let counter = 0; // counter for looped on proposal
    let start = myInput.value.indexOf('@') + 1; // assigns the position of @ to start
    proposal = []; // proposal reset
    // Loop on iSP
    iSP.forEach(function (a){
      // If the part of the value after @ match with an entry in iSP
      // and counter < 3, because only 3 proposal needed
      if(a.search(myInput.value.substring(start)) == 0 &&  counter<3){
        proposal[counter] = a; // assign the matching value to proposal[counter]
        counter++; // increments counter, to set next proposal's entry
        // If the part of the value after @ match fully with an entry in iSP
        if(myInput.value.substring(start) == a){
          // set proposal to display nothing
          proposal = ['','',''];
        }
      }
    });
    // If after loop, no match founded, reset proposal to starting value
    if(proposal == 0){
      proposal = [
        "orange.fr",
        "outlook.fr",
        "gmail.com",
      ];
    }
    // Call change() to set button's value
    change();
    }
};

// Function that sets button's value
function change () {
  for(let i = 0; i < 3; i++){
    // If proposal is empty
    if(!proposal[i]){
      document.getElementsByClassName('prop')[i].innerHTML = '';
    } else {
      document.getElementsByClassName('prop')[i].innerHTML = proposal[i];
    }
  };
};

// Function that does auto-completion 
function setInput (index) {
  // If my input contain an @
  if(myInput.value.indexOf('@') >= 0){
    let start = myInput.value.indexOf('@') + 1; // assigns the position of @ to start
    myInput.value = myInput.value.substring(0, start) + proposal[index]; // set input's value without an @
    proposal = []; // proposal empty
  } else {
    // If my input is not empty
    if(myInput.value != ''){
      myInput.value = `${myInput.value}@${proposal[index]}`;
      // set input's value with an @
    }
  }
  change();
  // kept the focus on the input
  myInput.focus();
};