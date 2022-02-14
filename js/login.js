document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'ishrattabassum@gmail.com' && userPassword == 'iLoveYouIshrat') {
        window.location.href = 'banking.html'
    }

})
