function createCookie(name,pwds){
    let username = document.getElementById("user");
    let pwd = document.getElementById("pd");
  
    today = new Date();
    var expire = new Date();
    expire.setTime(today.getTime() + 3600000*24*15);
   
    document.cookie = "name="+username.value+";path=/" + ";expires="+expire.toUTCString();
    document.cookie = "password="+encodeURI(pwd.value)+";path=/" + ";expires="+expire.toUTCString();
  }  
  
  window.onload = function(){
    var uname = 'Route66';
    var pass = '123456';
  
    document.getElementById('user').value = uname;
    document.getElementById('pd').value = pass;
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome again " + user);
    } else {
      user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        setCookie("username", user, 365);
      }
    }
  }
  
function fun(){
    localStorage.setItem("name2", "devesh2");
// localStorage.getItem("lastname");
}