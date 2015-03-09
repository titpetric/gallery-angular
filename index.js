var galleryApp = angular.module('galleryApp', ['ngRoute', 'galleryControllers']);

galleryApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/album/:folder', {
				templateUrl: 'partials/show-album.html',
				controller: 'ShowAlbumCtrl'
			})
			.otherwise({
				templateUrl: 'partials/list-albums.html',
				controller: 'ListAlbumCtrl'
			});
	}
]);

var galleryControllers = angular.module('galleryControllers', []);

galleryControllers.controller("ListAlbumCtrl", function ($scope, $http) {
	var loadAlbums = function(data) {
		if (data.albums) {
			$scope.albums = data.albums;
		}
	};

	var loadError = function() {
		// log/display error
	};

	$http.get("api/albums.json").success(loadAlbums).error(loadError);
});

galleryControllers.controller('ShowAlbumCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	var loadImages = function(data) {
		if (data.album) {
			$scope.album = data.album;
//			$scope.files = $scope.split(data.album.files, 4);
		}
	};

	var loadError = function() {
		// log/display error
	};

	$scope.split = function(arr, lengthofsublist) {
		if (!angular.isUndefined(arr) && arr.length > 0) {
			var arrayToReturn = [];
			var subArray=[]; 
			var pushed=true;
			for (var i=0; i<arr.length; i++) {
				if ((i+1)%lengthofsublist==0) {
					subArray.push(arr[i]);
					arrayToReturn.push(subArray);
					subArray=[];
					pushed=true;
				} else {
					subArray.push(arr[i]);
					pushed=false;
				}
			}
			if (!pushed) {
				arrayToReturn.push(subArray);
			}
			console.log(JSON.stringify(arrayToReturn));
			return arrayToReturn; 
		}
	};

	$http.get("api/albums/" + $routeParams.folder + ".json").success(loadImages).error(loadError);
}]);
