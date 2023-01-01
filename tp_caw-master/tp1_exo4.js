document.addEventListener("DOMContentLoaded", function(){

    //getting needed elements from DOM
    const status = document.getElementById('status');
    const boundary = document.getElementById('boundary1');
    const boundaries = document.getElementsByClassName('boundary');
    const  end = document.getElementById('end');
    const start = document.getElementById('start');
    const maze = document.getElementById('maze');

// turning one boundary to red when mouse pointer hover over it (exo1 solution)
boundary.addEventListener('mouseenter',(event)=>{
    boundary.style.backgroundColor = 'red';
});



// turning all boundaries to red when mouse pointer hover over any one of them (exo2 solution)
for (var i = 0; i < boundaries.length; i++) {

    boundaries[i].addEventListener('mouseenter' ,(event)=>{
        for (var i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = 'red';
        }

        // end game and loss indicator (exo3 and 6 solution)

        //alert('you lost');
        status.innerHTML='you lost! Try over';
        status.style.color = 'red';
    });
 // end game and success indicator (exo3 and 6 solution)
end.addEventListener('mouseenter' ,(event)=>{
    if(boundary.style.backgroundColor != 'red'){
        //alert('you win');
        status.innerHTML='you win!';
        status.style.color = 'blue';
    }
   
});
// resets the game to the initial state(exo4 solution)
start.addEventListener('mouseenter' ,(event)=>{
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = '#eeeeee';
    }
    status.innerHTML='Play';
    status.style.color = 'green';
   
});
}

   
});