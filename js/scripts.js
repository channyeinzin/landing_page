/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});



particlesJS("particles-js", {
    "particles":{
      "number":{
        "value":160,"density":{
          "enable":true,"value_area":800
        }
      },
      
      "color":{
        "value":"#ffffff"},
      "shape":{
        "type":"circle",
        "stroke":{
          "width":0,
          "color":"#000000"
        },
        "polygon":{
          "nb_sides":5
        },
        "image":{
          "src":"img/github.svg","width":100,"height":100
        }
      },
      "opacity":{
        "value":1,
        "random":true,
        "anim":{
          "enable":true,
          "speed":1,
          "opacity_min":0,
          "sync":false
        }
      },
      "size":{
        "value":3,
        "random":true,
        "anim":{
          "enable":false,
          "speed":4,
          "size_min":0.3,
          "sync":false
        }
      },
      "line_linked":{
        "enable":false,
        "distance":150,
        "color":"#ffffff",
        "opacity":0.4,
        "width":1
      },
      "move":{"enable":true,
              "speed":1,
              "direction":"none",
              "random":true,
              "straight":false,
              "out_mode":"out",
              "bounce":false,
              "attract":{
                "enable":false,
                "rotateX":600,
                "rotateY":600
              }
             }
    },
    "interactivity":{
      "detect_on":"canvas",
      "events":{
        "onhover":{
          "enable":true,
          "mode":"grab"},
        "onclick":{
          "enable":true,
          "mode":"repulse"},
        "resize":true},
      "modes":{
        "grab":{
          "distance":400,
          "line_linked":{
            "opacity":1}
        },
        "bubble":{
          "distance":250,
          "size":0,
          "duration":2,
          "opacity":0,
          "speed":3},
        "repulse":{
          "distance":400,
          "duration":0.4},
        "push":{
          "particles_nb":4},
        "remove":{
          "particles_nb":2}
      }
    },
    "retina_detect":true
  });
  
  var count_particles, 
      stats, update; 
  stats = new Stats; 
  stats.setMode(0); 
  stats.domElement.style.position = 'absolute'; 
  stats.domElement.style.left = '0px'; 
  stats.domElement.style.top = '0px'; 
  document.body.appendChild(stats.domElement); 
  count_particles = document.querySelector('.js-count-particles'); 
  update = function() { stats.begin(); 
                       stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
                       { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
                       requestAnimationFrame(update); 
                      }; 
  requestAnimationFrame(update);;