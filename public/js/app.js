//Controller on frontend to handle bookmarks
    function appCtrl($scope,$http,$window) {

		$http.get('/api/bookmarks').success(function(response){ //Query to get initial set of bookmarks
		    $scope.bookmarks=response;
		    console.log($scope.bookmarks);
		});

        //Function to create bookmark
    	$scope.addBookmark = function(bookmarkData) {
            console.log(bookmarkData);
            $http.post('/api/bookmarks',bookmarkData).success(function(request,response){
            	console.log(response);
                $scope.reloadPage();
            })
        },

        //Function to delete bookmark based on id
        $scope.deleteBookmark = function(id) {
            $http.delete('/api/bookmarks/' + id).success(function(request,response){
            	console.log(response);
                $scope.reloadPage();
            })
        }

        $scope.reloadPage = function() {
            $window.location.reload();
        }
	}