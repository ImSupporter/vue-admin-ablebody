function saveLoginStatus(isLoggedIn){
    document.cookie = `loggedIn=${isLoggedIn}`;
}

function getLoginStatus() { // 저장된 토큰값 가져오기
    let isLoggedIn = document.cookie.replace(
        /(?:(?:^|.*;\s*)loggedIn\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
    );
    console.log('로그인 됏는지? : ' + isLoggedIn)
    return isLoggedIn;
}

export{
    saveLoginStatus,
    getLoginStatus
}