const form = document.getElementById("portfolioForm");
const homeDiv = document.getElementById("home");


$(document).ready(function() {
  $('#personalInformationButton').click(function() {
    $('#personalinfo').toggle();
  });

  $('#professionalInterestsButton').click(function() {
    $('#professionalinterests').toggle();
  });

  $('#experienceButton').click(function() {
    $('#experience').toggle();
  });

  $('#educationButton').click(function() {
    $('#education').toggle();
  });

  $('#projectsButton').click(function() {
    $('#projects').toggle();
  });

  $('#resumeButton').click(function() {
    $('#resume').toggle();
  });
});