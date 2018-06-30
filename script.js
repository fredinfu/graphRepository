var app = angular.module('GraphApp',[]);
app.controller('GraphCtrl', ['$scope', function($scope) {

	$scope.initiateData = function(){
		$scope.categories = [];
		$scope.products = [];
		$scope.brands = [];

		$scope.categories.push({category: 'Ropa'});
		$scope.categories.push({category: 'Comida'});

		$scope.products.push({category: 'Ropa', product: 'Camisa'});
		$scope.products.push({category: 'Ropa', product: 'Pantalon'});
		$scope.products.push({category: 'Comida', product: 'Carne'});
		$scope.products.push({category: 'Comida', product: 'Fruta'});

		$scope.brands.push({product: 'Camisa', brand: 'camisa1'})
		$scope.brands.push({product: 'Camisa', brand: 'camisa2'})

		$scope.brands.push({product: 'Pantalon', brand: 'pantalon1'})
		$scope.brands.push({product: 'Pantalon', brand: 'pantalon2'})

		$scope.brands.push({product: 'Carne', brand: 'carne1'})
		$scope.brands.push({product: 'Carne', brand: 'carne2'})

		$scope.brands.push({product: 'Fruta', brand: 'Fruta1'})
		$scope.brands.push({product: 'Fruta', brand: 'Fruta2'})
	}  

}]);