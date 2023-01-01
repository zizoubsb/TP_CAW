document.addEventListener("DOMContentLoaded", function(){

    //getting needed elements from DOM

    const boundaries = document.getElementsByClassName('boundary');


// turning all boundaries to red when mouse pointer hover over any one of them (exo2 solution)
for (var i = 0; i < boundaries.length; i++) {

    boundaries[i].addEventListener('mouseenter' ,(event)=>{
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = 'red';
        }

      
    });


}

   
});