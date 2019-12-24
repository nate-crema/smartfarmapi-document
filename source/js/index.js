let login_timer;
var tried = false;
var cont = {
    id_input: "",
    pw_input: ""
};
// const outserver = "https://nate2402.com";
// const innserver = "http://localhost";
// const server = innserver;

var login_data = {};

$(document).ready(function() {
    $(".header-api").css("top", "-120px");
    $(".login-input").focus(function() {
        $(".guide-id").css("opacity", "0");
        $(".guide-pw").css("opacity", "0");
    })
    $(".login-input").blur(function() {
        var id = document.getElementById("login-id").value;
        var pw = document.getElementById("login-pw").value;
        if (id == "") {
            $(".guide-id").css("opacity", "1");
        }
        if (pw == "") {
            $(".guide-pw").css("opacity", "1");
        }
        if (id != "" && pw != "" && cont.id_input != id && cont.pw_input != pw) {
            $(".timer-bar-inner").css("background-color", "rgb(7, 97, 22)");
            $(".login-req-cover").css("opacity", "1");
            $(".timer-bar-inner").css("transition", "width 3s cubic-bezier(0,-0.01, 0.81, 1.04)");
            $(".timer-bar-inner").css("width", "0%");
            $(".timer-bar-inner").css("background-color", "0%");
            if (tried == false) {
                login_start(3);
            }
        }
    })
    $(".guide-pw").click(function() {
        $("#login-pw").focus();
    })
    $(".guide-id").click(function() {
        $("#login-id").focus();
    })
})



function login_start(incounter) {
    document.getElementsByClassName("login-msg")[0].innerText = incounter + "초 후 로그인합니다.";
    document.getElementsByClassName("login-msg")[0].style.color = "black";
    setTimeout(() => {
        if (document.getElementById('login-id') == document
        .activeElement || document.getElementById('login-pw') == document.activeElement) {
            $(".login-req-cover").css("opacity", "0");
            $(".timer-bar-inner").css("transition", "unset");
            $(".timer-bar-inner").css("width", "100%");
        } else {
            if (incounter != 0) login_start(incounter-1);
            else if (incounter == 0) {
                tried = true;
                cont.id_input = document.getElementById("login-id").value;
                cont.pw_input = document.getElementById("login-pw").value;
                
                axios.post('/login', cont)
                .then(({data}) => {
                    console.log(data);
                    // alert(data);
                    if (data.result == true) {
                        document.getElementsByClassName("login-msg")[0].innerText = "환영합니다, " + data.udata.name + "님";
                        document.getElementsByClassName("login-msg")[0].style.color = "rgb(7, 97, 22)";
                        lgoin_data = data.udata;
                        setTimeout(() => {
                            $(".sys_login").css('left', "-500px");
                            $(".yt-background-cover").css("right", "0");
                            $(".header-api").css("top", "0px");
                            document.getElementById("red-msg").innerHTML = "페이지 이동중...";
                            document.getElementById("red-msg").style.color = "white";
                            setTimeout(() => {
                            window.location.href = './dashboard.html';
                            }, 800);
                        }, 1500);
                    } else if (data.result == false) {
                        document.getElementsByClassName("login-msg")[0].innerText = "아이디 혹은 비밀번호가 잘못되었습니다";
                        document.getElementsByClassName("login-msg")[0].style.color = "red";
                        cont = {
                            id_input: "",
                            pw_input: ""
                        }
                        // rgb(7, 97, 22)
                        $(".timer-bar-inner").css("transition", "unset");
                        $(".timer-bar-inner").css("width", "100%");
                        $(".timer-bar-inner").css("background-color", "red");
                        document.getElementById("login-id").value = "";
                        document.getElementById("login-pw").value = "";
                        $("#login-id").focus();
                        tried = false;
                    } else {
                        document.getElementsByClassName("login-msg")[0].innerText = "로그인중 에러가 발생하였습니다.";
                        document.getElementsByClassName("login-msg")[0].style.color = "red";
                        alert("Exception: " + data);
                    }
                    
                })
                .catch((error) => {
                    document.getElementsByClassName("login-msg")[0].innerText = "로그인중 에러가 발생하였습니다.";
                    document.getElementsByClassName("login-msg")[0].style.color = "red";
                    alert("Error: " + error);
                    // setTimeout(() => {
                    //     location.reload();
                    // }, 1500);
                })
            }
        }
    }, 1000);
}