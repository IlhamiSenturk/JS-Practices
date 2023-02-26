let username = prompt("isminizi giriniz");
let info = document.querySelector("#info");

// short if kullanımı 
// kosul ? dogruysa : yanlıssa

info.innerHTML = `${username.length>0 ? username : "merhaba"}`