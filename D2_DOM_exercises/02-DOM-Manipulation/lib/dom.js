/* eslint-disable no-multiple-empty-lines */
/* eslint-disable prefer-const */

// INSTRUCTIONS - PLEASE READ!!
// Here are some challenges. Solve them from top to bottom

// **Each time** you complete a challenge, please commit and push!
// This is a good practise. Each time you make some progress in software
// development, you want to save a snapshot.


module.exports = function runChallenges(check) {
  // Ex 1. Read what's written in the email input
  //       Make the function getEmail() return it
  const getEmail = () => {
    // TODO: return the email
    return document.querySelector("#email").value;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const borisesEmail = getEmail();

  // Ex 2. Change the content of the email input by writing your own email address
  document.querySelector("#email").value = "shelomoh@shelomoh.com";

  // Ex 3. Replace the email hint (next to the input) with 'This is my email now'
  //       The text should be emphasized using a <strong> tag
  document.querySelector("#email-hint").innerHTML = "<strong>This is my email now</strong>";


  // Ex 4. Add the .blue CSS class to the th elements
  document.querySelectorAll("th").forEach((th)=>{th.classList.add("blue");});

  // Ex 5. Count the number of table body rows there are
  //       Make the function teamCount() return it
  const teamCount = () => {
    // TODO: return the number of teams
    return document.querySelectorAll("tbody tr").length;
  };

  // /!\ DO NOT CHANGE THIS LINE - TEST PURPOSES
  const teamCountBeforeAddition = teamCount();

  // Ex 6. Say there is a 15th team added to the table.
  //       Add a row at the bottom, this new team should have zero points.
  let table = document.querySelector(".table tbody");
  let row = table.insertRow(-1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = "15";
  cell2.innerHTML = "Recode";
  cell3.innerHTML = "0";

  // Ex 7. Write some code to sum all points given to all teams
  //       Make the function summarizePoints() return it
  const summarizePoints = () => {
    // TODO: return the sum
    let ttlPoint = 0
    let allTd = document.querySelectorAll(".table tbody tr td:last-child").forEach((td)=>{
      ttlPoint += parseInt(td.textContent);
    });
    return ttlPoint;
  };


  // Ex 8. Change the background color of all `<th>` cells to #DDF4FF
  document.querySelectorAll("th").forEach((th)=>{th.style.backgroundColor = "#DDF4FF";});



  // Ex 9. Remove the "Email:" label from the DOM
  let label = document.querySelector("label[for=\"email\"]").remove();









  // Checking exercise answers. DO NOT MODIFY THIS LINE
  check(borisesEmail, teamCountBeforeAddition, summarizePoints());
};
