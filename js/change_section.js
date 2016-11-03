// Added click event on the nav links to toggle content that should be visible/active

window.addEventListener('load', function() {

  var links = document.querySelectorAll('nav a');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('section.active').classList.remove('active');
      // link href contains the id of the section I want to make active
      var id = event.target.getAttribute('href');
      document.querySelector(id).classList.add('active')
    });
  }

});
