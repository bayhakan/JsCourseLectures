import { countries } from "../data/countries.js";
const loadCountry = (kod) =>{
  const country = countries.filter(item=> item.ccn3 == kod)[0];
  console.log(country);
  const countryHtml = `
  <div class="card-body">
    <h1>${country.name.common}</h1>
    <div class="row">
        <div class="col-md-6">Capital: ${country.capital}</div>
        <div class="col-md-6">Region: ${country.region}</div>
        <div class="col-12">
            <iframe src = "https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&hl=es;z=14&amp;output=embed" width="100%"></iframe>
        </div>
      
    </div>
  </div>`;
  document.querySelector("#countryDetail").innerHTML = countryHtml;
  // filtreleme yapılacak ve ilgili ülke seçilip detayları bir div içinde gösterilecek
}
const loadCountries = () => { 
  let rows = "";
  for (let country of countries) {
    rows += `<tr>
    <td>${country.ccn3}</td>
    <td>${country.name.common}</td>
    <td>${country.area}km<sup>2</sup></td>
    <td></td>
    </tr>`;
  }
  document.querySelector("#tblCountries tbody").innerHTML = rows;
  let totalArea = countries.reduce( (t, c) => t+c.area, 0).toFixed(2);
  document.querySelector("#tblCountries tfoot .totalArea").innerText = totalArea;
}
loadCountries();
document.querySelectorAll("#tblCountries tbody tr").forEach(row => {
  row.addEventListener('click', ()=>{
    let kod = row.querySelector("td:first-child").innerText;
    loadCountry(kod);
  });
})
