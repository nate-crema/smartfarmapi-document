let login_timer;


$(document).ready(function() {
    $(".header-api").css("top", "-120px");
    $(".login-input").focus(function() {
        $(".guide-id").css("opacity", "0");
        $(".guide-pw").css("opacity", "0");
    })
    $(".login-input").blur(function() {
        var id = document.getElementById("login-id").value
        var pw = document.getElementById("login-pw").value
        if (id == "") {
            $(".guide-id").css("opacity", "1");
        }
        if (pw == "") {
            $(".guide-pw").css("opacity", "1");
        }
        if (id != "" && pw != "") {
            $(".login-req-cover").css("opacity", "1");
            $(".timer-bar-inner").css("transition", "width 3s cubic-bezier(0,-0.01, 0.81, 1.04)");
            $(".timer-bar-inner").css("width", "0%");
            login_start(3);
        }
    })
})



function login_start(incounter) {
    document.getElementsByClassName("login-msg")[0].innerText = incounter + "초 후 로그인합니다.";
    setTimeout(() => {
        if (document.getElementById('login-id') == document.activeElement || document.getElementById('login-id') == document.activeElement) {
            $(".login-req-cover").css("opacity", "0");
            $(".timer-bar-inner").css("transition", "unset");
            $(".timer-bar-inner").css("width", "100%");
        }
        if (incounter != 0) login_start(incounter-1);
        else if (incounter == 0) {
            axios.post('/login', {
                loginid: document.getElementById("login-id").value,
                loginpw: document.getElementById("login-pw").value
            })
            .then(({data}) => {
                console.log(data);
                alert(data);
            })
            .catch((error) => {
                alert("Error: " + error);
            })
        }
    }, 1000);
}