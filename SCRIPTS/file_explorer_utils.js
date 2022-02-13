let window_div = document.getElementsByClassName('window')[0];
let openclose = document.getElementsByClassName('btn');
let top_bar=document.getElementsByClassName('top_bar')[0];



console.log(window_div);
console.log("hello javascript");

function close_window() 
{
    window_div.style.opacity='0';
    Files.classList.remove( 'hovr');    
    function opacity0()
    {
        window_div.classList.replace('open_window',"closed_window");
    }
    setTimeout(opacity0,1000)
    

}

function toggle_size() {

    window_div.classList.toggle("min_size")

}

top_bar.addEventListener('dblclick',toggle_size)

openclose[1].addEventListener('click', toggle_size); //maximixe
openclose[2].addEventListener('click', close_window); //close
