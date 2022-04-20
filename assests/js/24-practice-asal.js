function hesapla(){
    let sayi = document.querySelector("#txtSayi").value;
   
    if(!sayi || isNaN(sayi) || sayi<1){
alert("Lütfen pozitif bir sayı giriniz");
return;
    }

    let bolunenler =0;

    for(let i=2; i<sayi; i++){
        if(sayi % i == 0){
            bolunenler++;
        }
    }

    let mesaj="Bu sayı asaldır";
    if(bolunenler>0){
        mesaj = `Bu sayı asal değildir. Çünkü ${bolunenler} adet böleni vardır.`;
    } 

    document.querySelector("#sonuc").innerHTML = mesaj;
}