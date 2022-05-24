const hesapla = () => {
    const sayi = document.querySelector("#txtSayi").value;

    if(!sayi || isNaN(sayi) || sayi<0){
        alert("Pozitif bir tamsayi giriniz");
        return;
    }

    let carpim = 1;

    for (let i = sayi; i >0; i--){
        carpim = carpim * i;
    }

    document.querySelector("#sonuc").innerText = carpim;

}