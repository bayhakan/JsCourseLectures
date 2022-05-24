const hourLi = document.querySelector("#clock li:nth-child(1)");
const secondLi = document.querySelector("#clock li:nth-child(2)");
const minuteLi = document.querySelector("#clock li:nth-child(3)");
const tick = () => {
    const datetime = new Date();
    const hour = datetime.getHours();
    const minute = datetime.getMinutes();
    hourLi.innerText = hour < 10 ? `0${hour}` : hour;
    minuteLi.innerText = minute < 10 ? `0${minute}` : minute;
    if(secondLi.style.opacity == 0) secondLi.style.opacity=1;
    else secondLi.style.opacity=0;
}
setInterval(tick, 1000);