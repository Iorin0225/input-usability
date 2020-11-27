'use strict';

var scale_setting_text = 1.2
var scale_setting_button = 1.5

restoreOptions();

document.addEventListener('focus', function(event) {
  var target = event.target
  if (
    target.type === 'textarea' ||
    target.type === 'text' ||
    target.type === 'search' ||
    target.type === 'email' ||
    target.type === 'password'
  ) {
    TweenMax.to(target, 0.1, { scale: scale_setting_text });
  }

}, true);

document.addEventListener('focusout', function(event) {
  var target = event.target
  if (
    target.type === 'textarea' ||
    target.type === 'text' ||
    target.type === 'search' ||
    target.type === 'email' ||
    target.type === 'password'
  ) {
    TweenMax.to(target, 0.1, { scale: 1 });
  }

}, true)


var displayOrig = 'inline-block'
var cursorOrig = 'pointer'
document.addEventListener('mouseover', function() {
  var target = event.target
  if (
    target.type === 'checkbox' ||
    target.type === 'button' ||
    target.type === 'submit' ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'A' ||
    target.classList.contains('btn')
  ) {
    displayOrig = target.style.display
    target.style.display = 'inline-block'
    cursorOrig = target.style.cursor
    target.style.cursor = 'pointer'
    TweenMax.to(target, 0.1, { scale: scale_setting_button });
  } else if (target.closest('a') !== null) {
    target = target.closest('a')

    displayOrig = target.style.display
    target.style.display = 'inline-block'
    cursorOrig = target.style.cursor
    target.style.cursor = 'pointer'
    TweenMax.to(target, 0.1, { scale: scale_setting_button });
  }

})

document.addEventListener('mouseout', function() {
  var target = event.target
  if (
    target.type === 'checkbox' ||
    target.type === 'button' ||
    target.type === 'submit' ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'A' ||
    target.classList.contains('btn')
  ) {
    target.style.display = displayOrig
    target.style.cursor = displayOrig
    TweenMax.to(target, 0.1, { scale: 1 });
  } else if (target.closest('a') !== null) {
    target = target.closest('a')
    target.style.display = displayOrig
    target.style.cursor = cursorOrig
    TweenMax.to(target, 0.1, { scale: 1 });
  }

})


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  chrome.storage.sync.get({
    text: 1.2,
    button: 1.5
  }, function(items) {
    scale_setting_text = items.text;
    scale_setting_button = items.button;
  });
}
