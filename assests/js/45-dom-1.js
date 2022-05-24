const data = [
    {id:1, name:"Ayşe", puan:80},
    {id:2, name:"Ali", puan:50},
    {id:3, name:"Veli", puan:30},
    {id:4, name:"Fatma", puan:20},
    {id:5, name:"Aslı", puan:55}
];
let strRow = "";
for(let item of data){
    strRow += `
        <tr>
            <td>${item.name}</td>
            <td>${item.puan}</td>
            <td><button class="btn btn-danger btn-delete">Sil</button></td>
        </tr>
    `;
}
document.querySelector('#tblPoint tbody').innerHTML = strRow;
        
const rows = document.querySelectorAll("#tblPoint tbody tr");
for(let row of rows){
    const puan = row.querySelector("td:nth-child(2)").innerText;
    if(puan<50){
        row.classList.add("table-warning");
    }
}
document.querySelectorAll(".btn-delete").forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        
        const isim = e.target.closest("tr").querySelector("td:first-child").innerText;
        confirm(`${isim} isimli kaydı silmek istediğinizden emin misiniz?`);
    });
})