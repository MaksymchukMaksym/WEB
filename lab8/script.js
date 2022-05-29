(function(){
var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

var Hellospeak=speakHello();
var Byespeak=speakBye();

console.log("Селекціонування імен за першою літерою.(Якщо перша літера J or j)");
names.forEach(item => {
  if (item.charAt(0) === "J" || item.toLowerCase().charAt(0) === "j") {
    Byespeak(item);
  } else {
    Hellospeak(item);
  }
});
console.log("Селекціонування імен за останньою літерою.(Якщо остання літера K or k)");
names.forEach(item => {
  if(item.slice(-1) === "K" || item.toLowerCase().slice(-1) === "k") {
    Byespeak(item);
  } else {
    Hellospeak(item);
  }
});

console.log("Якщо сума ascii кодів ім'я менша за 400.");
names.forEach(item => {
var sum=0;
  for(var i=0;i<item.length;i++){
    var ascii_code = item[i].charCodeAt();
    sum+=ascii_code;
  }

  console.log("сума ascii кодів ім'я: " + item + " = " + sum);
  if(sum < 400) {
    Byespeak(item);
  } else {
    Hellospeak(item);
  }
});
})();

