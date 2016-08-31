
var app = angular.module('Kush', []); 
// not that kind of kush

app.controller('KushController', function($scope) {
  
  $scope.motionFactor;
  $scope.width;
  $scope.height;
  
  $scope.calculate = function() {
      var pixelCount = $scope.width * $scope.height;
      var bitrate = pixelCount * $scope.motionFactor * 0.07;
      bitrate = bitrate / 1000;
      if (bitrate !== bitrate) return;
      $scope.bitrate = Math.floor(bitrate) + ' kbps';
  }
});
