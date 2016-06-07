angular.module('MainCtrl', [])
.controller('mainController', function($scope) {

  var vm = this;

  vm.showSideLinks = false;
  vm.projects = false;
  vm.about = false;
  vm.home = true;
  vm.sideLink1 = ""
  vm.sideLink2 = ""
  vm.sideLink3 = ""


  vm.addRollAnimation = function() {
    document.getElementsByClassName('clip-wrap-polygon')[0].classList.add("rollInSide");
    document.getElementsByClassName('side1')[0].classList.add("rollInSide");
    document.getElementsByClassName('side2')[0].classList.add("rollInSide");
    document.getElementsByClassName('side3')[0].classList.add("rollInSide");
    document.getElementsByClassName('side4')[0].classList.add("rollInSide");
    document.getElementsByClassName('side5')[0].classList.add("rollInSide");

    vm.showSideLinks = true;
    vm.home = false
    vm.rollIn()
    vm.removeClass('clip-wrap-polygon', 'rollInSide')
}

vm.setProjects = function() {
  vm.projects = true;
  vm.sideLink1 = "About"
  vm.sideLink2 = "Contacts"
  vm.sideLink3 = "Links"
}

vm.setAbout = function() {
  document.getElementsByClassName('inner-clip-wrap-polygon')[0].classList.add("zoomIn")
  vm.about = true;
  vm.sideLink1 = "Links"
  vm.sideLink2 = "Projects"
  vm.sideLink3 = "Contacts"
}

vm.setLinks = function() {
  document.getElementsByClassName('first')[0].classList.add("zoomIn")

  document.getElementsByClassName('second')[0].classList.add("rollIn")

  document.getElementsByClassName('third')[0].classList.add("zoomIn")

  document.getElementsByClassName('fourth')[0].classList.add("rollInSide")

  vm.lnk = true;
  vm.sideLink1 = "Contacts"
  vm.sideLink2 = "About"
  vm.sideLink3 = "Projects"
}

vm.setContacts = function() {
  vm.contact = true;
  vm.sideLink1 = "Projects"
  vm.sideLink2 = "Links"
  vm.sideLink3 = "About"
  document.getElementsByClassName('first-contact')[0].classList.add("fadeInLeft")
  document.getElementsByClassName('second-contact')[0].classList.add("fadeInRight")
  document.getElementsByClassName('third-contact')[0].classList.add("fadeInUp")
}

vm.removeClass = function(className, cls) {
  document.getElementsByClassName(className)[0].classList.remove(cls)
};

vm.showProjects = function() {
 document.getElementsByClassName('clip-wrap-polygon')[0].classList.add("rollInSide");
};

vm.showContent1 = function() {
  if (vm.sideLink1 == "Links") {

  } else if (vm.sideLink1 == "Contacts") {

  } else if (vm.sideLink1 == "Projects") {

  }
}

vm.showContent2 = function() {
  if (vm.sideLink2 == "Links") {

  } else if (vm.sideLink2 == "Contacts") {

  } else if (vm.sideLink2 == "Projects") {

  }
}

vm.showContent3 = function() {
  if (vm.sideLink3 == "Links") {

  } else if (vm.sideLink3 == "Contacts") {

  } else if (vm.sideLink3 == "Projects") {

  }
}



vm.rollIn = function() {
  document.getElementsByClassName('top-container')[0].classList.add("zoomIn")
  document.getElementsByClassName('middle-container')[0].classList.add("zoomIn")
  document.getElementsByClassName('bottom-container')[0].classList.add("zoomIn")
};




})