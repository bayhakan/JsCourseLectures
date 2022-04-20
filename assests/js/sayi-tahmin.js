let randomNumber = 0;
let countDown = 0;
let countDownMessage = document.querySelector("#countMessage");
let message = document.querySelector("#result");
let guessbtn = document.querySelector("#btnguess");
let resetbtn = document.querySelector("#btnreset");

resetbtn.disabled = false;

const guessNumber = () => Math.floor(Math.random() * 100);

function newGame() {
    randomNumber = guessNumber();
    countDown = 3;
    guessbtn.disabled = false;
    console.log(randomNumber);

}

function guess() {
    let number = document.querySelector("#txtnum").value;
    console.log(number);
    countDown--;

    if (number == randomNumber) {
        message = "Tebrikler doğru tahmin ettiniz";
    }
    else
        if (number > randomNumber) {
            message = "Daha küçük bir sayı giriniz";
            countDownMessage = `Kalan Hakkınız : ${countDown}`;
        }
        else {
            message = "Daha büyük bir sayı giriniz";
            countDownMessage = `Kalan Hakkınız : ${countDown}`;
        }

    if (countDown == 0) {
        countDownMessage = `Kalan Hakkınız : ${countDown} dır. Oyunu yeniden başlatınız.`;
        guessbtn.disabled = true;
    }

    document.querySelector("#result").innerHTML = message;
    document.querySelector("#countMessage").innerHTML = countDownMessage;


}
