var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");

var options = [
"Ask Again Later",
"Better Not Tell You Now",
"Cannot Predict Now",
"Concentrate and Ask Again",
"Not so Much",
"It Is Certain",
"It Is Decidedly So",
"Most Likely",
"My Reply Is No",
"My Sources Say No",
"Outlook Good",
"Outlook Not So Good",
"Reply Hazy, Try Again",
"Signs Point to Yes",
"Very Doubtful",
"Without a Doubt",
"Yes",
"Yes Definately",
"You May Rely On It"
  
];

button.addEventListener("click", function(){
  if (input.value.length < 1) {
    alert("Please enter a question!");
  } else {
    eight.innerText = "";
    var num = input.value.length % options.length;
    answer.innerText = options[num];
  }
});