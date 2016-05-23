angular.module('LinksCtrl', []).controller('LinksController', function($scope) {
  var vm = this;
    vm.links = [{name: "2TR"},
                    {name: "This Website"},
                    {name: "Github"},
                    {name: "Facebook"},
                    {name: "Reddit"}];

})