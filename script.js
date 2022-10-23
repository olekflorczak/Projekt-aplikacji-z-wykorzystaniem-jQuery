//Funkcja sprawdzająca siłę hasłą
function scorePassword(pass) {
    var wynik = 0;
    var warianty = {
        cyfry: /\d/.test(pass),
        male: /[a-z]/.test(pass),
        duze: /[A-Z]/.test(pass),
        specjalne: /\W/.test(pass),
        dlugosc: pass.length > 7
    };
    for(var war in warianty)
      if(warianty[war] == true) wynik += 100 / 5;
  
    var color = '';
    //Funkcja która pokazuje siłę hasłą
    if(wynik < 50) color ='red';
    else if(wynik > 50 && wynik < 100) color ='yellow';
    else if(wynik == 100) color = 'green';
    $("#strength_score").text(wynik + '%');
    $("#strength_score").css('background-color', color);
    return parseInt(wynik);
}

$(function() {
    $("#password").on("keypress keyup keydown", function() {
        scorePassword($(this).val());
    });
});
$(function() {
    $("#password").on("keypress keyup keydown", function() {
        scorePassword($(this).val());
    });
});
        
        var myInput = document.getElementById("password");
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var specialchar = document.getElementById("specialchar");
        var length = document.getElementById("length");

  

//Funkcja wywołująca wiadomość co hasło musi zawierać
        myInput.onfocus = function() {
          document.getElementById("message").style.display = "block";
        }
//Funkcja chowająca wiadomośc co hasło musi zawierać
        myInput.onblur = function() {
          document.getElementById("message").style.display = "none";
        }
//Funkcja sprawdzająca czy w tekście znajduja się litery
        myInput.onkeyup = function() {
          var lowerCaseLetters = /[a-z]/g;
          if(myInput.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
          } else {
            letter.classList.remove("valid");
            letter.classList.add("invalid");
        }
        //Funkcja sprawdzająca czy w tekście znajdują się duże litery
          var upperCaseLetters = /[A-Z]/g;
          if(myInput.value.match(upperCaseLetters)) {
            capital.classList.remove("invalid");
            capital.classList.add("valid");
          } else {
            capital.classList.remove("valid");
            capital.classList.add("invalid");
          }
        //Funkcja sprawdzająca czy w tekście są zawarte liczby
          var numbers = /[0-9]/g;
          if(myInput.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
          } else {
            number.classList.remove("valid");
            number.classList.add("invalid");
          }
          //Funkcja sprawdzająca czy w tekście znajdują się znaki specjalne
          var spechialcharacter = /\W/g;
          if(myInput.value.match(spechialcharacter)) {
            specialchar.classList.remove("invalid");
            specialchar.classList.add("valid");
          } else {
            specialchar.classList.remove("valid");
            specialchar.classList.add("invalid");
          }
        // Funkcja sprawdzająca długość tekstu
          if(myInput.value.length >= 8) {
            length.classList.remove("invalid");
            length.classList.add("valid");
          } else {
            length.classList.remove("valid");
            length.classList.add("invalid");
          }
        }