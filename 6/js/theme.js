function changeTheme() {
    var cubeSide1 = document.getElementsByClassName("span-side")[0];
    var cubeSide2 = document.getElementsByClassName("span-side")[1];
    var cubeSide3 = document.getElementsByClassName("span-side")[2];
    var cubeSide4 = document.getElementsByClassName("span-side")[3];
    var topSide = document.getElementsByClassName("top")[0];
    var headerText = document.getElementsByClassName("header-title")[0];
    var text = document.getElementsByClassName("container")[0];
    var bodyImage = document.body;
    var menuLink1 = document.getElementById("a1");
    var menuLink2 = document.getElementById("a2");
    var menuLink3 = document.getElementById("a3");
    var menuLink4 = document.getElementById("a4");
    var menuLink5 = document.getElementById("a5");
    var menuLink6 = document.getElementById("a6");
    var menuLink7 = document.getElementById("a7");
    var menuLink8 = document.getElementById("a8");
    var menuLink9 = document.getElementById("a9");
    var menuLink10 = document.getElementById("a10");

    var formSubmit = document.getElementsByClassName("form-submit")[0]
    var formReset = document.getElementsByClassName("form-reset")[0]

    cubeSide1.style.backgroundImage = "url('img/logo-side-2.png')";
    cubeSide2.style.backgroundImage = "url('img/logo-side-2.png')";
    cubeSide3.style.backgroundImage = "url('img/logo-side-2.png')";
    cubeSide4.style.backgroundImage = "url('img/logo-side-2.png')";
    topSide.style.backgroundImage = "url('img/logo-top-2.png')";
    headerText.style.backgroundImage = "linear-gradient(360deg, rgb(24, 115, 138) 47%, rgb(128,64,172) 64%)";
    text.style.color = "white";
    bodyImage.style.backgroundImage = "url('img/bg-2.jpg')";
    menuLink1.style.color = "white";
    menuLink2.style.color = "white";
    menuLink3.style.color = "white";
    menuLink4.style.color = "white";
    menuLink5.style.color = "white";
    menuLink6.style.color = "white";
    menuLink7.style.color = "white";
    menuLink8.style.color = "white";
    menuLink9.style.color = "white";
    menuLink10.style.color = "white";
    formSubmit.style.color = "white";
    formReset.style.color = "white";
}
