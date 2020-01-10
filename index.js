'use strict';

function getDogImage(dogNum) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  const html = responseJson.message.map(m => {
    return `<img src="${m}" class="results-img">`
  });
  console.log(responseJson, html);
  //replace the existing image with the new one
  $('.results-img').html(html)
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    const dogNum = $('#dogNum').val();
    event.preventDefault();
    getDogImage(dogNum);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});