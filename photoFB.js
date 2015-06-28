
// TAILLE DES CADRES DE LA GRILLE
var sizeFrameX = 300;
var sizeFrameY = sizeFrameX*0.75; // ratio 4:3

function getPhotos() {

    FB.getLoginStatus(function (response) {

        var gridster;
        if (!gridster) {
            $(function () { //DOM Ready
                $(".gridster ul").gridster({
                    widget_margins: [10, 10],
                    widget_base_dimensions: [sizeFrameX, sizeFrameY],
                    min_cols: 2
                })
                gridster = $(".gridster ul").gridster().data('gridster');
            });
        }

        if (response.status === 'connected') {
            FB.api("/me/photos", function (pictures) {
                if (pictures && !pictures.error) {

                    for (i = 0; i < pictures.data.length; i++) {

                        var nbCol;
                        var nbRow;
                        var marginLeft = (sizeFrameX / 2 - (((sizeFrameY / pictures.data[i].images[2].height) * pictures.data[i].images[2].width) / 2));

                        if (pictures.data[i].width > 720) {
                            nbCol = 2;
                        } else {
                            nbCol = 1;
                        }

                        if (pictures.data[i].height > 480) {
                            marginLeft = (sizeFrameX / 2 - (((sizeFrameY / pictures.data[i].images[2].height) * pictures.data[i].images[2].width)));
                            nbRow = 2;
                        } else {
                            nbRow = 1;
                        }
                        console.log(pictures.data[i]);
                        // widget creation
                        var widgetHtml = new Array('<li class="grid" id="grid' + i + '"><a class="fancybox" href=' + pictures.data[i].images[0].source + '><img style="margin-left:' + marginLeft + 'px;" src=\"' + pictures.data[i].images[2].source + '\"></a></li>', nbCol, nbRow);
                        gridster.add_widget.apply(gridster, widgetHtml);
                        // LA TAILLE DES CADRES EST MULTIPLE DE "BASE_DIMENSION"
                        //                          gridster.resize_widget($("#grid"+i), 1, 1, true);

                        // zoom sur la photo lors d'un click
                        //$('#grid' + i).click(pictures.data[i].images[0].source, function (src) {
                        //    zoomPhoto(src);
                        //});
                    }
                }
            }
                   //,{fields: }
                  );
        }
    });
}


function zoomPhoto(src) {
    //$(document).ready(function () {
    //    $(".grid").fancybox({
    //        helpers: {

    //            source: src.data.images[0].source
    //        }
    //    });
    //});
    console.log(src);
}