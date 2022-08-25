document.addEventListener("DOMContentLoaded", function() {
    console.log("After DOM has loaded");
    document.querySelector(`#text`).textContent = `This is really cool!`
  });