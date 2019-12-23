let login_timer;
var tried = false;
var cont = {
    id_input: "",
    pw_input: ""
};
const server = "http://45.115.155.227";


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
            $(".login-req-cover").css("opacity", "1");
            $(".timer-bar-inner").css("transition", "width 3s cubic-bezier(0,-0.01, 0.81, 1.04)");
            $(".timer-bar-inner").css("width", "0%");
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
    setTimeout(() => {
        if (document.getElementById('login-id') == document.activeElement || document.getElementById('login-pw') == document.activeElement) {
            $(".login-req-cover").css("opacity", "0");
            $(".timer-bar-inner").css("transition", "unset");
            $(".timer-bar-inner").css("width", "100%");
        } else {
            if (incounter != 0) login_start(incounter-1);
            else if (incounter == 0) {
                tried = true;
                cont.id_input = document.getElementById("login-id");
                cont.pw_input = document.getElementById("login-pw");
                
                axios.post(server + '/login', cont)
                .then(({data}) => {
                    console.log(data);
                    alert(data);
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