var onSuccess = function(position) {
    
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('Hola');
};

navigator.geolocation.getCurrentPosition(onSuccess, onError);