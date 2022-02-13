let background=document.getElementsByClassName('background')[0];
let startmenu1=document.getElementById('startmenu');
let startmenu2=document.getElementById('startmenuimg');

function toggle()
{
    if (startmenu1.style.bottom == '36px')
    {
        startmenu1.style.bottom = '-565px'
        
    }
    else
    {
        startmenu1.style.bottom = '36px'

    }
    if (startmenu2.style.bottom == '36px')
    {
        startmenu2.style.bottom = '-565px'
        
    }
    else
    {
        startmenu2.style.bottom = '36px'

    }

}

function start_on_background_click()
{
    startmenu1.style.bottom='-565px'
    startmenu2.style.bottom='-565px'
}
document.getElementById("start").addEventListener("click",toggle);
background.addEventListener('click',start_on_background_click);