'use strict';

angular.module('myAngularApp')
  .controller('ListController', function ($scope , $http , $modal , $log) {
  	$scope.dataset = [];
    $http.get('./js/data.js').success(function(response) {
    	$scope.dataset = response;
    });

    $scope.showDetail = function(id){
		$scope.items = id;
		var modalInstance = $modal.open({
	    templateUrl: 'views/detailPopup.html',
	    controller: 'detailPopupCtrl',
	    size: 'lg',
	    	resolve: {
	        	items: function () {
	          		return $scope.items
	        	}
	      	}
	    });

	    modalInstance.result.then(function () {
	    	$log.info('Modal dismissed at: ' + new Date());
	    }, function () {
	      	$log.info('Modal dismissed at: ' + new Date());
	    });
    };

  });

  angular.module('myAngularApp').controller('detailPopupCtrl', function ($scope, $modalInstance , items) {

  	$scope.authorDetail = items;
  	$scope.ok = function () {
    	$modalInstance.close();
  	};

  	$scope.cancel = function () {
    	$modalInstance.dismiss('cancel');
  	};
});
