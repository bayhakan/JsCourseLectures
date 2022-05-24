import {searchShow} from "./66-movies-api.js";
document.querySelector("#txtSearch").addEventListener("input", (e)=>{
    if(e.target.value.length<3) return;
    searchShow(e.target.value);
});