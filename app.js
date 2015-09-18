(function() {
  var app = angular.module('customerDb', []);

  app.controller('CustomerCtrl', function() {
    this.people = customers;
  });

  var customers = [
    {
      name: 'Brian Hogue',
      email: 'brianjonashogue@gmail.com',
      telephone: '401-555-1234',
      address: '76',
      street: 'Awesome Street',
      city: 'Awesome City',
      state: 'RI',
      zip: 02906
  }];

  app.controller('PanelCtrl', function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

// doesn't work
  app.controller('FormController', function() {
    this.form = {};

    this.addCustomer = function(customer) {
      customers.push(this.form);
      this.form = {};
    };
  });

  // this is what I tried to get json data
  // app.controller('CustomerCtrl', ['$http',function($http) {
  //   var customers = this;
  //   customers.people = [];
  //   $http.get('customers.json').success(function(data) {
  //     customers.people = data;
  //   });
  // }]);

  // also doesn't work, but works more than above
  // app.controller('CustomerCtrl', function($scope, $http) {
  //   $http.get('customers.json').then(function(data) {
  //     $scope.customers = data;
  //   });
  //   $scope.save = function() {
  //     $http.post('customers.json', $scope.customers).then(function(data) {
  //       $scope.msg = 'Data saved';
  //     });
  //     $scope.msg = 'Data sent: '+ JSON.stringify($scope.customers);
  //   };
  // };
})();
