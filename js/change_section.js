window.addEventListener('load', function() {

  var links = document.querySelectorAll('nav a');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      event.preventDefault();
      document.querySelector('section.active').classList.remove('active');
      var id = event.target.getAttribute('href');
      document.querySelector(id).classList.add('active')
    });
  }

});
