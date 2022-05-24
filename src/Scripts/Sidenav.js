document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var options = {
      edge: 'left'
    };
    var instances = M.Sidenav.init(elems, options);
  });
