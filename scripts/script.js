const app = {};

app.hello = [
  "Bonjour!",
  "Hola!",
  "你好!",
  "Ciao!",
  "こんにちは!",
  "Kamusta?",
  "xin chào",
  "हैलो",
  "สวัสดี",
  "안녕하세요!",
  "Hallo",
  "Olá!",
  "Здравствуйте"
]

app.changeHello = function() {
  let greeting = setInterval(function() {
    n = Math.floor(Math.random() * app.hello.length);
    let word = app.hello[n];
    $(".intro p")
    .text(word);
    if (!$(".intro").length) {
      clearInterval(greeting);
    }
  }, 3000);
}

app.init = function() {
  app.changeHello();
}


$(document).ready(function(){
  app.init();
});