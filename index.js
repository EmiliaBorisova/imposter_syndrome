/* eslint-disable */
'use strict';


(function() {
    window.addEventListener("load", init);

    function init() {
        document.getElementsByClassName("singleCountry")[0].addEventListener("click", clicked)
    }

    function clicked() {
        document.getElementById("agenda").classList.toggle("hidden")
    }

  })();


