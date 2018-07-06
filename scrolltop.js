window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
      document.getElementById("myBtn").style.display = "block";
  } else {
      document.getElementById("myBtn").style.display = "none";
  }
}

function topFunction() {
  document.querySelector('.landing').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

function skillsFunction() {
  document.querySelector('.skillset-container').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function aboutFunction() {
  document.querySelector('.about-container').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
function portfolioFunction() {
  document.querySelector('.portfolio-container').scrollIntoView({ 
    behavior: 'smooth' 
  });
}