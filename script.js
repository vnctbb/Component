'use strict'

window.addEventListener('DOMContentLoaded', function() {

  const fAI = [
    "orange.fr",
    "outlook.fr",
    "gmail.com",
    "hotmail.fr",
    "outlook.com",
    "hotmail.com",
    "wanadoo.fr",
    "yahoo.fr",
    "laposte.net",
    "yahoo.com",
    "sfr.fr",
    "msn.com",
    "live.fr",
    "free.fr",
    "numericable.fr",
    "bbox.fr",
    "neuf.fr"
  ];

// tableau contenant les trucs à afficher
  let affiche = [
    "orange.fr",
    "outlook.fr",
    "gmail.com",
  ];

// vérifie si il y'a le focus sur l'input
  let focus = false;

  function laFonction() {
    if(myInput.value.indexOf('@') >= 0){
      let c = 0;
      let start = myInput.value.indexOf('@') + 1;
      affiche = [];
      fAI.forEach(function (a){
        if(a.search(myInput.value.substring(start)) == 0){
          affiche[c] = a;
          c++;
        }
      });
      if(affiche == 0){
        affiche = [
          "orange.fr",
          "outlook.fr",
          "gmail.com",
        ];
      }
      if (!myInput.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        console.log(myInput.value + " n'est pas une adresse valide");
    } else {
      console.log('adresse valide')
    }
    propose();
    }
  };

  function propose () {
    for(let i = 0; i < 3; i++){
      if(!affiche[i]){
        document.getElementsByClassName('prop')[i].innerHTML = '';
      } else {
        document.getElementsByClassName('prop')[i].innerHTML = affiche[i];
      }
    };
  };

  function set (index) {
    if(myInput.value.indexOf('@') >= 0){
      let start = myInput.value.indexOf('@') + 1;
      myInput.value = myInput.value.substring(0, start) + affiche[index];
      affiche = [];
    } else {
      if(myInput.value != ''){
        myInput.value = `${myInput.value}@${affiche[index]}`;
      }
    }
    propose();
    myInput.focus();
  };

  myInput.addEventListener('focus', function() {
     propose();
    focus = true;
  });

  myInput.addEventListener('blur', function() {
    focus = false;
  });

  document.addEventListener('keyup', function(e) {
    if(focus && e.code != 'Enter' && myInput.value != ''){
      laFonction();
    };
  });

  document.getElementsByClassName('prop')[0].addEventListener('click', function(){
    set(0);
  });

  document.getElementsByClassName('prop')[1].addEventListener('click', function(){
    set(1);
  });
  
  document.getElementsByClassName('prop')[2].addEventListener('click', function(){
    set(2);
  });
});



