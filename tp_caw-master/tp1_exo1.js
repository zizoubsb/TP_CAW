document.addEventListener("DOMContentLoaded", function(){

    //getting needed elements from DOM
    const boundary = document.getElementById('boundary1');

// turning one boundary to red when mouse pointer hover over it (exo1 solution)
boundary.addEventListener('mouseenter',(event)=>{
    boundary.style.backgroundColor = 'red';
});



   
});