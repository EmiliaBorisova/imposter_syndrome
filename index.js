/* eslint-disable */
'use strict';


(function() {
    window.addEventListener("load", init);

    function init() {
        document.getElementById("click").addEventListener("click", clicked)
    }

    function clicked() {
        document.getElementById("agenda").classList.toggle("hidden")
    }

  })();


