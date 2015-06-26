
function getPhotos() { 
    
    FB.getLoginStatus(function(response) {
        
        if (response.status === 'connected') {
              FB.api("/me/photos", function (pictures) {
                  if (pictures && !pictures.error) {
        
                      for (i = 0; i < pictures.data.length; i++) {
//                          document.getElementById('image-' + i).src = pictures.data[i].images[5].source;
                          console.log(pictures.data[i].images[0].source); 

                          var nbCol;
                          var nbRow;
            
                          if (pictures.data.width>720) {
                              nbCol=2;
                          } else {
                              nbCol=1;   
                          }
            
                          if (pictures.data.height>480) {
                              nbRow=2;
                          } else {
                              nbRow=1;   
                          }
                        
                          var widget = new Array ('<li id="grid'+i+'"><img src=\"'+pictures.data[i].images[0].source+'\"></li>', nbCol, nbRow);
                          gridster.add_widget.apply(gridster, widget);
                          console.log(widget);
                  }    
                  }
              }
                     //,{fields: }
                    );
          }
    });
}


