function checkLoginState() {
      FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
              // Logged on Facebook.
              console.log("Connected into facebook");
              FB.api("/me/picture", function (picture) {
                  if (picture && !picture.error) {
                      document.getElementById('profilpicture').src = picture.data.url;
                  }
              });
              FB.api('/me', function(response) {
                  document.getElementById("profilname").innerHTML = response.name;
              });
          } else {
              // not log in Facebook
              //change photo profil

          }
      });
}
        
    function FBlogin() {
        FB.getLoginStatus(function(response) {
            if (response.status !== 'connected') {
                FB.login(function(response) {
                    if (response.authResponse) {
                        location.reload();
                    }
                    else {
                        console.log('User cancelled login or did not fully authorize.');
                    }
                }, {scope: 'user_photos'});
            }
        });
    }

  window.fbAsyncInit = function() {
      FB.init({
            appId      : '509249155890113',
            cookie     : true,  // enable cookies to allow the server to access 
                                // the session
            xfbml      : true,  // parse social plugins on this page
            version    : 'v2.3'
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    checkLoginState(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
