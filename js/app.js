
var app = angular.module('Kush', []); 
// not that kind of kush

app.controller('KushController', function($scope) {
  
    $scope.motionFactor = null;
    $scope.width = null;
    $scope.height = null;
    $scope.fps = null;

    $scope.calculate = function() {
        var bitrate = $scope.width * $scope.height * $scope.fps * $scope.motionFactor * 0.07;
        bitrate = bitrate / 1000;
        if (bitrate !== bitrate) return;
        $scope.bitrate = Math.floor(bitrate) + ' kbps';
    };

});
