var app = angular.module('GraphApp',[]);
app.controller('GraphCtrl', ['$scope', function($scope) {

	$scope.initiateData = function(){
		$scope.categories = [];
		$scope.products = [];
		$scope.brands = [];
		$scope.sales = [];

		$scope.filteredProducts = [];
		$scope.filteredBrands = [];

		$scope.categories.push({category: 'Ropa'});
		$scope.categories.push({category: 'Comida'});

		$scope.products.push({category: 'Ropa', product: 'Camisa'});
		$scope.products.push({category: 'Ropa', product: 'Pantalon'});
		$scope.products.push({category: 'Comida', product: 'Carne'});
		$scope.products.push({category: 'Comida', product: 'Fruta'});

		$scope.brands.push({product: 'Camisa', brand: 'camisa1'});
		$scope.brands.push({product: 'Camisa', brand: 'camisa2'});

		$scope.brands.push({product: 'Pantalon', brand: 'pantalon1'});
		$scope.brands.push({product: 'Pantalon', brand: 'pantalon2'});

		$scope.brands.push({product: 'Carne', brand: 'carne1'});
		$scope.brands.push({product: 'Carne', brand: 'carne2'});

		$scope.brands.push({product: 'Fruta', brand: 'Fruta1'});
		$scope.brands.push({product: 'Fruta', brand: 'Fruta2'});

		$scope.sales.push({brand: 'camisa1', month: 'January', sales: 350});
		$scope.sales.push({brand: 'camisa1', month: 'February', sales: 300});
		$scope.sales.push({brand: 'camisa1', month: 'March', sales: 20});
		$scope.sales.push({brand: 'camisa1', month: 'April', sales: 600});
		$scope.sales.push({brand: 'camisa2', month: 'January', sales: 10});
		$scope.sales.push({brand: 'camisa2', month: 'February', sales: 100});
		$scope.sales.push({brand: 'camisa2', month: 'March', sales: 190});
		$scope.sales.push({brand: 'camisa2', month: 'April', sales: 300});

		$scope.sales.push({brand: 'pantalon1', month: 'January', sales: 500});
		$scope.sales.push({brand: 'pantalon1', month: 'February', sales: 500});
		$scope.sales.push({brand: 'pantalon1', month: 'March', sales: 190});
		$scope.sales.push({brand: 'pantalon1', month: 'April', sales: 30});
		$scope.sales.push({brand: 'pantalon2', month: 'January', sales: 50});
		$scope.sales.push({brand: 'pantalon2', month: 'February', sales: 50});
		$scope.sales.push({brand: 'pantalon2', month: 'March', sales: 400});
		$scope.sales.push({brand: 'pantalon2', month: 'April', sales: 200});


		$scope.sales.push({brand: 'carne1', month: 'January', sales: 500});
		$scope.sales.push({brand: 'carne1', month: 'February', sales: 0});
		$scope.sales.push({brand: 'carne1', month: 'March', sales: 100});
		$scope.sales.push({brand: 'carne1', month: 'April', sales: 100});
		$scope.sales.push({brand: 'carne2', month: 'January', sales: 50});
		$scope.sales.push({brand: 'carne2', month: 'February', sales: 500});
		$scope.sales.push({brand: 'carne2', month: 'March', sales: 500});
		$scope.sales.push({brand: 'carne2', month: 'April', sales: 10});

		$scope.sales.push({brand: 'Fruta1', month: 'January', sales: 50});
		$scope.sales.push({brand: 'Fruta1', month: 'February', sales: 150});
		$scope.sales.push({brand: 'Fruta1', month: 'March', sales: 10});
		$scope.sales.push({brand: 'Fruta1', month: 'April', sales: 500});
		$scope.sales.push({brand: 'Fruta2', month: 'January', sales: 0});
		$scope.sales.push({brand: 'Fruta2', month: 'February', sales: 50});
		$scope.sales.push({brand: 'Fruta2', month: 'March', sales: 100});
		$scope.sales.push({brand: 'Fruta2', month: 'April', sales: 300});

		$scope.filterProducts();
		$scope.filterBrands();
	}

	$scope.filterProducts = function(){
		$scope.filteredProducts = $scope.products.filter(f => f.category == $scope.selectedCategory);
	}  

	$scope.filterBrands = function(){
		$scope.filteredBrands = $scope.brands.filter(f => f.product == $scope.selectedProduct);
	}  

}]);