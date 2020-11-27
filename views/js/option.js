function updateOption() {
  chrome.storage.sync.set({
    text: document.getElementById('text').value,
    button: document.getElementById('button').value
  })
}


[].forEach.call(document.getElementsByTagName('input'), function(element) {
  element.addEventListener('change', function(e){
    updateOption()
  });
});


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    text: 1.2,
    button: 1.5
  }, function(items) {
    document.getElementById('text').value = items.text;
    document.getElementById('button').value = items.button;
  });
}
document.addEventListener('DOMContentLoaded', restoreOptions);
