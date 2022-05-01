// Copyright (c) 2020 Mark Palfi All rights reserved
//
// Created by: Mark Palfi
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const userInteger = document.getElementById("Integer").value

 // # if ... then ... else example */
  if (userInteger >= 0) {
    document.getElementById("positive").innerHTML = "It's positive."
  } else {
    document.getElementById("negitive").innerHTML = "It's negitive."
  }
}