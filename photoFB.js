function getPhotos(photos) { 
    FB.api("/me/photos", function (pictures) {
                  if (pictures && !pictures.error) {
                      console.log(pictures);
                  }
              });