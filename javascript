alert("Olá, seja bem vindo ao programa: Procurando Palindromos.");

const word = prompt("Informe uma palavra:");

let invWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  invWord += word[i];
}

if (word === invWord) {
  alert("A palavra " + word + " é um Palindromo!\n\n" + word + " | " + invWord);
} else {
  alert(
    "A palavra " + word + " não é um Palindromo!\n\n" + word + " | " + invWord
  );
}
