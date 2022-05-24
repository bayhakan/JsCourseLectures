document.querySelector("#panel").addEventListener('mouseenter', (e)=>{
    e.target.classList.add("opened");
});

document.querySelector("#panel").addEventListener('mouseleave', (e)=>{

    setTimeout(()=>{
        e.target.classList.remove("opened");
    }, 1000);
});