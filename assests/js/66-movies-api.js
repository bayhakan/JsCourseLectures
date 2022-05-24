const searchShow = (show) => { 
    fetch(`https://api.tvmaze.com/search/shows?q=${show}`)
    .then(resp=> resp.json())
    .then(data=>{
        console.log(data);
    });
}

export {searchShow}