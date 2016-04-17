angular.module("exampleApp", ["increment", "ngResource"])
.constant("baseUrl", "http://localhost:5500/restaurant/")
.controller("defaultCtrl", function ($scope, $http, $resource, baseUrl) {

    $scope.displayMode = "list";
    $scope.currentRestaurant = null;

    $scope.restaurantResource = $resource(baseUrl + ":id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });

    $scope.listRestaurant = function () {
        $scope.restaurant = $scope.restaurantResource.query();
    }

    $scope.deleteRestaurant = function (restaurant) {
        restaurant.$delete().then(function () {
            $scope.restaurant.splice($scope.restaurant.indexOf(restaurant), 1);
        });
        $scope.displayMode = "list";
    }

    $scope.createRestaurant = function (restaurant) {
        new $scope.restaurantResource(restaurant).$create().then(function (newRestaurant) {
            $scope.restaurant.push(newRestaurant);
            $scope.displayMode = "list";
        });
    }


    $scope.updateRestaurant = function (restaurant) {
        restaurant.$save();
        $scope.displayMode = "list";
    }

    $scope.editOrCreateRestaurant = function (restaurant) {
        $scope.currentRestaurant = restaurant ? restaurant : {};
        $scope.displayMode = "edit";
    }

    $scope.saveEdit = function (restaurant) {
        if (angular.isDefined(restaurant.id)) {
            $scope.updateRestaurant(restaurant);
        } else {
            $scope.createRestaurant(restaurant);
        }
    }

    $scope.cancelEdit = function () {
        if ($scope.currentRestaurant && $scope.createRestaurant.$get) {
            $scope.currentRestaurant.$get();
        }
        $scope.currentRestaurant = {};
        $scope.displayMode = "list";
    }

    $scope.listRestaurant();
});
