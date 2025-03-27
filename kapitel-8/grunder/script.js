// var dag = "fredag";
// alert(dag);
// console.log("Idag är det " + dag)

// var stad = promt("Var är du född?");
// console.log("Du är född i " + stad);

// var gissning = promt("Är det ok att fuska på prov?");
// if (gissning == nej) {
//     alert("Du är en människa")
// }
// else {
//     alert("Du är en robot");
// }

// Spamcheck med två slumpade tal
// var slumptall1 = Math.round(Math.random() * 100);  
// var slumptall2 = Math.round(Math.random() * 100);  
// var facit = slumptall1 + slumptall2;

// // Fråga användaren vad är ?? + ??
// var gissning = prompt("Vad är " + slumptall1 + "+" + slumptall2 + "?");
// if (gissning == facit){

//     document.writeln(" <h1>Du e människa!</h1>");
// } else {
//     document.writeln(" <h1>Du e människa!</h1>")
// }
// var tal1 = prompt("Ange ett tal1");
// var tal2 = prompt("Ange ett tal2");
// var summa = Number(tal1) + Number(tal2);
// document.writeln("Summan är " + summa);

// Upggift: skatteuträkning
// Läs in: inkomst, tex 30.00:-
// läs in: skatt, tex 30%
// Skriv ut: "Din inkomst efter skatt är xxx med yy% i skatt."

var brutto = prompt("Ange din lön innan skatt?");
var skatt = prompt ("Vad är din skatt?");
var inkomst =  Number (brutto) * (100 - (skatt)) / 100;
document.writeln("Dinn inkomst efter skatt är " + inkomst + "med" + skatt + "% i skatt.")