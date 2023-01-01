document.addEventListener("DOMContentLoaded", function(){


    const boundaries = document.getElementsByClassName('boundary');
    const  end = document.getElementById('end');
 


// turning all boundaries to red when mouse pointer hover over any one of them (exo2 solution)
for (var i = 0; i < boundaries.length; i++) {

    boundaries[i].addEventListener('mouseenter' ,(event)=>{
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = 'red';
        }

        // end game and loss indicator (exo3)

        alert('you lost');

    });
 // end game and success indicator (exo3)
end.addEventListener('mouseenter' ,(event)=>{
    if(boundary.style.backgroundColor != 'red'){
        alert('you win');
    }
   
});

}


   
});