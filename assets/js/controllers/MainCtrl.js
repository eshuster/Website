angular.module('MainCtrl', [])
.controller('mainController', function($scope) {

  var vm = this;

  vm.home = true;
  vm.projects = false;
  vm.polygon = true;

  vm.addRollAnimation = function() {
    document.getElementsByClassName('sideOctagon')[0].classList.add("rollInSide");
    document.getElementsByClassName('sideOctagon')[1].classList.add("rollInSide");
    document.getElementsByClassName('sideOctagon')[2].classList.add("rollInSide");
    setTimeout(function(){
      vm.rollIn()
    }, 500)
  }

  vm.rollIn = function() {
    document.getElementsByClassName('button-group')[0].classList.remove("rollOut");
    document.getElementsByClassName('clip-wrap-polygon')[0].classList.remove("rollOut");
    document.getElementsByClassName('button-group')[0].classList.add("rollIn");
    document.getElementsByClassName('clip-wrap-polygon')[0].classList.add("rollIn");

    document.getElementsByClassName('button-group')[0].style.display='none';

    document.getElementsByClassName('top-container')[0].classList.add("zoomIn")
    document.getElementsByClassName('middle-container')[0].classList.add("zoomIn")
    document.getElementsByClassName('bottom-container')[0].classList.add("zoomIn")

    vm.projects = true;
    vm.home = false
    $scope.$apply()
  }

})