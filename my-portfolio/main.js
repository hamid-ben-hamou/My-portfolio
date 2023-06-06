function openFunction(){
    document.getElementById('links').style.height = 'auto';
    document.getElementById('links').style.opacity = '1';

    document.getElementById('close').style.zIndex = '1';
    document.getElementById('close').style.opacity = '1';

    document.getElementById('open').style.zIndex = '-1';
    document.getElementById('open').style.opacity = '0';

}

function closeFunction(){
    document.getElementById('links').style.height = '0';    
    document.getElementById('links').style.opacity = '0'; 

    document.getElementById('close').style.zIndex = '-1';
    document.getElementById('close').style.opacity = '0';

    document.getElementById('open').style.zIndex = '1';
    document.getElementById('open').style.opacity = '1';   
}
