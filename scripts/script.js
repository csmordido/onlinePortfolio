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
  setInterval(function() {
    index = Math.floor(Math.random() * app.hello.length);
    let word = app.hello[index];
    const greeting = document.querySelector(".intro p");
    greeting.innerHTML = word;
  }, 2000);
}

app.changeHello();
