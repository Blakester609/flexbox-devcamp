document.addEventListener('DOMContentLoaded', init, false);
function init(){
  document.getElementsByClassName('left-dropdown')[0].addEventListener('mouseenter', dropdownMenuLinks.linkGenerator);
  document.getElementsByClassName('left-dropdown')[0].addEventListener('mouseleave', dropdownMenuLinks.removeLinks);
};

var dropdownMenuLinks = {
    linkGenerator: function() {
        for(var i = 1; i < 5; i++) {
            var newDiv = document.createElement('div');
            var newLink = document.createElement('a');
            var dropdown = document.getElementById('dropdown-menu');
            var linkText = document.createTextNode(`Link ${i}`);
            newDiv.appendChild(linkText);
            newLink.appendChild(newDiv);
            newLink.setAttribute("href", "#");
            newLink.setAttribute("class", "dropdown-link");
            dropdown.appendChild(newLink);
        }
    },
    removeLinks: function() {
        for(var i = 1; i < 5; i++) {
            var dropdownLinks = document.getElementsByClassName('dropdown-link');
            var dropdown = document.getElementById('dropdown-menu');
            dropdown.removeChild(dropdown.childNodes[1]);
        }
    }
}