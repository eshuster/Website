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

  vm.aboutDescription = "I specialize in the MEAN Stack, Ruby on Rails, SQL, and RESTful web apps with plenty of experience in designing MVC web applications that combine different types of technology through gems, modules, and various frameworks.. Recently at KontrolScan, I’ve been working with AngularJS to implement and design an organizational flowchart application for users to build visual representations of various user relationships . I'm ready and eager to continue to expand my professional and personal horizons by joining a team with a solid philosophy and product behind it"

  vm.showHome = function() {
    vm.addRole()
    document.getElementsByClassName('clip-wrap-polygon')[0].classList.add("rollOut")

    setTimeout(function() {
      vm.removeClass("clip-wrap-polygon", "rollOut")
      vm.projects = false;
      vm.lnk = false;
      vm.contact = false;
      vm.about = false;
      vm.home = true;
      vm.showSideLinks = false;
      $scope.$apply();
    document.getElementsByClassName('inner-polygon')[0].classList.add("zoomIn")
    }, 1000)

    setTimeout(function() {
      vm.removeClass("clip-wrap-polygon", "zoomIn")
    }, 3000)
  }

  vm.addRollAnimation = function() {
    vm.showSideLinks = true;
    vm.home = false

    document.getElementsByClassName('side1')[0].classList.add("rollInSide");
    document.getElementsByClassName('side2')[0].classList.add("rollInSide");
    document.getElementsByClassName('side3')[0].classList.add("rollInSide");
    document.getElementsByClassName('side4')[0].classList.add("rollInSide");
    document.getElementsByClassName('side5')[0].classList.add("rollInSide");
  }

  vm.setProjects = function() {
    vm.projects = true;
    vm.sideLink1 = "About"
    vm.sideLink2 = "Contact"
    vm.sideLink3 = "Links"

    document.getElementsByClassName('top-container')[0].classList.add("zoomIn")
    document.getElementsByClassName('middle-container')[0].classList.add("zoomIn")
    document.getElementsByClassName('bottom-container')[0].classList.add("zoomIn")


    setTimeout(function() {
      vm.removeClass('top-container', 'zoomIn')
      vm.removeClass('middle-container', 'zoomIn')
      vm.removeClass('bottom-container', 'zoomIn')
    }, 2000)

  }

  vm.setAbout = function() {
    document.getElementsByClassName('inner-clip-wrap-polygon')[0].classList.add("zoomIn")

    vm.about = true;
    vm.sideLink1 = "Links"
    vm.sideLink2 = "Projects"
    vm.sideLink3 = "Contact"

    setTimeout(function() {
      vm.removeClass('inner-clip-wrap-polygon', 'zoomIn')
    }, 1600)

  }

  vm.setLinks = function() {
    vm.lnk = true;
    vm.sideLink1 = "Contact"
    vm.sideLink2 = "About"
    vm.sideLink3 = "Projects"

    document.getElementsByClassName('first')[0].classList.add("zoomIn")
    document.getElementsByClassName('second')[0].classList.add("rollIn")
    document.getElementsByClassName('third')[0].classList.add("zoomIn")
    document.getElementsByClassName('fourth')[0].classList.add("rollInSide")


    setTimeout(function() {
      vm.removeClass('first', 'zoomIn')
      vm.removeClass('second', 'rollIn')
      vm.removeClass('third', 'zoomIn')
      vm.removeClass('fourth', 'rollInSide')
    }, 1000)
  }

  vm.setContacts = function() {
    vm.contact = true;
    vm.sideLink1 = "Projects"
    vm.sideLink2 = "Links"
    vm.sideLink3 = "About"

    document.getElementsByClassName('first-contact')[0].classList.add("fadeInLeft")
    document.getElementsByClassName('second-contact')[0].classList.add("fadeInRight")
    document.getElementsByClassName('third-contact')[0].classList.add("fadeInUp")

    setTimeout(function() {
      vm.removeClass('first-contact', 'fadeInLeft')
      vm.removeClass('second-contact', 'fadeInRight')
      vm.removeClass('third-contact', 'fadeInUp')
    }, 1600)
  }

  vm.removeClass = function(className, cls) {
    document.getElementsByClassName(className)[0].classList.remove(cls)
  };


  vm.showContent1 = function() {
    vm.addRole()
    if (vm.sideLink1 == "Links") {
      document.getElementsByClassName('inner-clip-wrap-polygon')[0].classList.add("rollOut")

      setTimeout(function(){
        vm.about = false;
        vm.lnk = true;
        vm.setLinks();
        $scope.$apply()
      }, 1000)

    } else if (vm.sideLink1 == "Contact") {
        document.getElementsByClassName('first')[0].classList.add("zoomOut")
        document.getElementsByClassName('second')[0].classList.add("rollOut")
        document.getElementsByClassName('third')[0].classList.add("zoomOut")
        document.getElementsByClassName('fourth')[0].classList.add("fadeOutLeft")

        setTimeout(function() {
          vm.removeClass('first', 'zoomOut')
          vm.removeClass('second', 'rollOut')
          vm.removeClass('third', 'zoomOut')
          vm.removeClass('fourth', 'fadeOutLeft')
          vm.lnk = false;
          vm.contact = true;
          vm.setContacts();
          $scope.$apply();
        }, 1000)

    } else if (vm.sideLink1 == "Projects") {
        document.getElementsByClassName('first-contact')[0].classList.add("fadeOutLeft")
        document.getElementsByClassName('second-contact')[0].classList.add("fadeOutRight")
        document.getElementsByClassName('third-contact')[0].classList.add("fadeOutDown")

        setTimeout(function(){
          vm.contact = false;
          vm.removeClass('first-contact', 'fadeOutLeft')
          vm.removeClass('second-contact', 'fadeOutRight')
          vm.removeClass('third-contact', 'fadeOutDown')
          vm.lnk = false;
          vm.contact = false;
          vm.about = false;
          vm.setProjects();
          $scope.$apply()
        }, 1000)

    } else if (vm.sideLink1 == "About") {
        document.getElementsByClassName('top-container')[0].classList.add("zoomOut")
        document.getElementsByClassName('middle-container')[0].classList.add("zoomOut")
        document.getElementsByClassName('bottom-container')[0].classList.add("zoomOut")

        setTimeout(function(){
          vm.removeClass("top-container", "zoomOut")
          vm.removeClass("middle-container", "zoomOut")
          vm.removeClass("bottom-container", "zoomOut")
          vm.projects = false;
          vm.lnk = false;
          vm.contacts = false;
          vm.about = true;
          vm.setAbout();
          $scope.$apply()
        }, 1000)
    }
  }

  vm.showContent2 = function() {
    vm.addRole()

    if (vm.sideLink2 == "Links") {
      document.getElementsByClassName('first-contact')[0].classList.add("fadeOutLeft")
      document.getElementsByClassName('second-contact')[0].classList.add("fadeOutRight")
      document.getElementsByClassName('third-contact')[0].classList.add("fadeOutDown")

      setTimeout(function(){
        vm.removeClass('first-contact', 'fadeOutLeft')
        vm.removeClass('second-contact', 'fadeOutRight')
        vm.removeClass('third-contact', 'fadeOutDown')
        vm.lnk = true;
        vm.contact = false;
        vm.setLinks();
        $scope.$apply()
      }, 1000)

    } else if (vm.sideLink2 == "Contact") {

      document.getElementsByClassName('top-container')[0].classList.add("zoomOut")
      document.getElementsByClassName('middle-container')[0].classList.add("zoomOut")
      document.getElementsByClassName('bottom-container')[0].classList.add("zoomOut")

      setTimeout(function(){
        vm.removeClass("top-container", "zoomOut")
        vm.removeClass("middle-container", "zoomOut")
        vm.removeClass("bottom-container", "zoomOut")
        vm.projects = false;
        vm.lnk = false;
        vm.about = false;
        vm.contact =true;
        vm.setContacts();
        $scope.$apply()
      }, 1000)

    } else if (vm.sideLink2 == "Projects") {
        document.getElementsByClassName('inner-clip-wrap-polygon')[0].classList.add("rollOut")

        setTimeout(function(){
          vm.about = false;
            vm.contact = false;
            vm.lnk = false;
            vm.setProjects();
            vm.removeClass('inner-clip-wrap-polygon', 'rollOut')
            $scope.$apply()
          }, 1000)

  } else if (vm.sideLink2 == "About") {
      document.getElementsByClassName('first')[0].classList.add("zoomOut")
      document.getElementsByClassName('second')[0].classList.add("rollOut")
      document.getElementsByClassName('third')[0].classList.add("zoomOut")
      document.getElementsByClassName('fourth')[0].classList.add("fadeOutLeft")

      setTimeout(function() {
        vm.removeClass('first', 'zoomOut')
        vm.removeClass('second', 'rollOut')
        vm.removeClass('third', 'zoomOut')
        vm.removeClass('fourth', 'fadeOutLeft')

        vm.lnk = false;
        vm.contact = false;
        vm.projects = false;
        vm.about = true;
        vm.setAbout();
        $scope.$apply();
      }, 1000)
    }
  }

vm.showContent3 = function() {
  vm.addRole()

  if (vm.sideLink3 == "Links") {
    document.getElementsByClassName('top-container')[0].classList.add("zoomOut")
    document.getElementsByClassName('middle-container')[0].classList.add("zoomOut")
    document.getElementsByClassName('bottom-container')[0].classList.add("zoomOut")

    setTimeout(function(){
      vm.removeClass("top-container", "zoomOut")
      vm.removeClass("middle-container", "zoomOut")
      vm.removeClass("bottom-container", "zoomOut")
      vm.projects = false;
      vm.lnk = true;
      vm.setLinks();
      $scope.$apply()
    }, 1000)

  } else if (vm.sideLink3 == "Contact") {
      document.getElementsByClassName('inner-clip-wrap-polygon')[0].classList.add("rollOut")

      setTimeout(function(){
        vm.about = false;
        vm.project = false;
        vm.lnk = false;
        vm.contact = true;
        vm.setContacts();
        vm.removeClass('inner-clip-wrap-polygon', 'rollOut')
        $scope.$apply()
      }, 1000)

  } else if (vm.sideLink3 == "Projects") {
      document.getElementsByClassName('first')[0].classList.add("zoomOut")
      document.getElementsByClassName('second')[0].classList.add("rollOut")
      document.getElementsByClassName('third')[0].classList.add("zoomOut")
      document.getElementsByClassName('fourth')[0].classList.add("fadeOutLeft")

      setTimeout(function() {
        vm.removeClass('first', 'zoomOut')
        vm.removeClass('second', 'rollOut')
        vm.removeClass('third', 'zoomOut')
        vm.removeClass('fourth', 'fadeOutLeft')
        vm.lnk = false;
        vm.contact = false;
        vm.about = false;
        vm.setProjects();
        $scope.$apply();
      }, 1000)

  } else if (vm.sideLink3 == "About") {
      document.getElementsByClassName('first-contact')[0].classList.add("fadeOutLeft")
      document.getElementsByClassName('second-contact')[0].classList.add("fadeOutRight")
      document.getElementsByClassName('third-contact')[0].classList.add("fadeOutDown")

      setTimeout(function(){
        vm.removeClass('first-contact', 'fadeOutLeft')
        vm.removeClass('second-contact', 'fadeOutRight')
        vm.removeClass('third-contact', 'fadeOutDown')
        vm.contact = false;
        vm.lnk = false;
        vm.projects = false;
        vm.setAbout();
        $scope.$apply()

      }, 1000)
    }
  }

  vm.addRole = function() {
    document.getElementsByClassName('side1')[0].classList.add("rollOut")
    document.getElementsByClassName('side2')[0].classList.add("rollOut")
    document.getElementsByClassName('side3')[0].classList.add("rollOut")
    document.getElementsByClassName('side4')[0].classList.add("rollOut")
    document.getElementsByClassName('side5')[0].classList.add("rollOut")
    document.getElementsByClassName('side-home')[0].classList.add("rollOut")

    vm.removeClass('side1', 'zoomIn')
      vm.removeClass('side2', 'zoomIn')
      vm.removeClass('side3', 'zoomIn')
      vm.removeClass('side4', 'zoomIn')
      vm.removeClass('side5', 'zoomIn')
      vm.removeClass('side-home', 'zoomIn')

    setTimeout(function(){
      document.getElementsByClassName('side1')[0].classList.add("zoomIn")
      document.getElementsByClassName('side2')[0].classList.add("zoomIn")
      document.getElementsByClassName('side3')[0].classList.add("zoomIn")
      document.getElementsByClassName('side4')[0].classList.add("zoomIn")
      document.getElementsByClassName('side5')[0].classList.add("zoomIn")
      document.getElementsByClassName('side-home')[0].classList.add("zoomIn")

      vm.removeClass('side1', 'rollOut')
      vm.removeClass('side2', 'rollOut')
      vm.removeClass('side3', 'rollOut')
      vm.removeClass('side4', 'rollOut')
      vm.removeClass('side5', 'rollOut')
      vm.removeClass('side-home', 'rollOut')
    }, 1000)
  }

})