function getFriends() {

    FB.getLoginStatus(function (response) {

        if (response.status === 'connected') {
            FB.api("/me/friendlists", function (friendlist) {
                if (friendlist && !friendlist.error) {
                    console.log(friendlist);
                }
            })};
    });
}