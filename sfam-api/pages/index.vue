<template>
  <div>
    <heads></heads>
    <div class="yt-background-cover">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-rCdS8i6y7o?mute=1&autoplay=1&disablekb=1&version=3&playlist=-rCdS8i6y7o&loop=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
    <div class="main">
        <div class="sys_login">
            <p class="login-title">스마트팜 API 로그인</p>
            <div class="input-cover">
                <input type="text" class="login-input" name="id" id="login-id"/>
                <p class="guide-input guide-id">아이디 입력</p>
                <input type="password" class="login-input" name="pw" id="login-pw"/>
                <p class="guide-input guide-pw">비밀번호 입력</p>
            </div>
            <div class="login-req-cover">
                <div class="timer-bar">
                    <div class="timer-bar-inner"></div>
                </div>
                <p class="login-msg">n초 후 로그인합니다.</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import heads from "~/components/head.vue";

export default {
  components: {
    heads: heads
  }
}
</script>

<style>
.yt-background-cover {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    /* left: 0; */
    right: -200px;
    bottom: 0;
}

.main {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%);
    /* border: 1px solid black; */
    background-color: rgba(0, 0, 0, 0.7);
}
.main .sys_login {
    width: 500px;
    height: 100%;
    top: 50%;
    transform: translateY(-50%);
    /* border: 1px solid black; */
    position: absolute;
    background-color: white;
}
.main .sys_login .input-cover {
    width: 80%;
    height: 190px;
    position: absolute;
    top: 300px;
    /* border: 1px solid black; */
    left: 50%;
    transform: translateX(-50%);
}
.main .sys_login .login-title {
    font-size: 23px;
    font-weight: 500;
    position: absolute;
    top: 50px;
    left: 50px;
}
.main .sys_login .login-input {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    width: 90%;
    height: 35px;
    border: 1px solid rgb(158, 158, 158);
    border-radius: 5px;
}
.main .sys_login #login-id {
    top: 40px;
}
.main .sys_login #login-pw {
    top: 100px;
}
.main .input-cover .guide-input {
    z-index: 100;
    position: absolute;
    left: 50px;
    color: rgba(0, 0, 0, 0.3);
    transition: all .2s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.main .input-cover .guide-id {
    opacity: 1;
    top: 50px;
}
.main .input-cover .guide-pw {
    opacity: 1;
    top: 110px;
}
.main .sys_login .login-req-cover {
    width: 80%;
    height: 200px;
    /* border: 1px solid black; */
    position: absolute;
    top: 500px;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all .7s ease;
}
.main .sys_login .login-req-cover .timer-bar {
    width: 300px;
    height: 8px;
    border-radius: 2.5px;
    background-color: rgb(200, 200, 200);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}
.main .sys_login .login-req-cover .timer-bar-inner {
    width: 100%; 
    height: 100%;
    border-radius: 2.5px;
    background-color: rgb(7, 97, 22);
    transition: width 3s cubic-bezier(0,-0.01, 0.81, 1.04);
}
.main .sys_login .login-req-cover .login-msg {
    position: absolute;
    top: 10px;
    left: 50px;
}
</style>