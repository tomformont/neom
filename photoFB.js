
function getPhotos() { 
    
    FB.getLoginStatus(function(response) {
        
        if (response.status === 'connected') {
              FB.api("/me/photos", function (pictures) {
                  if (pictures && !pictures.error) {
        
                      for (i = 0; i < pictures.data.length; i++) {
//                      for (i = 0; i < 3; i++) {
//                          document.getElementById('image-' + i).src = pictures.data[i].images[5].source;
                          console.log(pictures.data[i].images[0].source); 
                        
                        var nbCol;
                        var nbRow;
            
                        if (pictures.data[i].width>720){
                            nbCol=2;
                        } else {
                            nbCol=1;   
                        }
            
                        if (pictures.data[i].height > 480) {
                            nbRow=2;
                        } else {
                            nbRow=1;   
                        }
                          
                          // widget creation
                          var widgetHtml = new Array ('<li id="grid'+i+'"><img src=\"'+pictures.data[i].images[4].source+'\"></li>', nbCol, nbRow);
                          gridster.add_widget.apply(gridster, widgetHtml);
                          // LA TAILLE DES CADRES EST MULTIPLE DE "BASE_DIMENSION"
//                          gridster.resize_widget($("#grid"+i), 1, 1, true);
                  }    
                  }
              }
                     //,{fields: }
                    );
          }
    });
}


