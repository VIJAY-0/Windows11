let Computer=document.getElementById('Computer');
let Files=document.getElementsByClassName('taskbar')[0].children[0].children[2];


console.log('Files icon and div:');
console.log(Files);



function open_computer()
{
    function time_out()
{
    let hoverBG='rgba(255, 255, 255, 0.774)';
    window_div.style.opacity='1';
    Files.classList.add( 'hovr');

}
    console.log('inside OPEN COMPUTER FUNC')
    window_div.classList.replace("closed_window","open_window")
    setTimeout(time_out,0)

}
function open_toggleMinimize()
{
    console.log('inside OPEN Toggle COMPUTER FUNC')

    window_div.classList.replace("closed_window","open_window")

}

Computer.addEventListener('dblclick',open_computer)
Files.addEventListener('dblclick',open_toggleMinimize)
