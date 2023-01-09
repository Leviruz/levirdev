var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;
var email = document.getElementById('email');
var senha = document.getElementById('senha');


function toggleSidebar()
{
    showSidebar = ! showSidebar;
    if(showSidebar)
    {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
    }
    else
    {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
    }
}
function closeSidebar(){
    if(showSidebar)
    {
        toggleSidebar();
    }

}
email.addEventListener('focus',()=>{
        email.style.borderColor = "#2F4F4F"
        email.style.backgroundColor= "#B0C4DE"

        email.addEventListener('blur',()=>{
            email.style.borderColor = '#ccc'
            email.style.backgroundColor = '#fff'
        })


})
senha.addEventListener('focus',()=>{
    senha.style.borderColor = "#2F4F4F"
    senha.style.backgroundColor= "#B0C4DE"


    senha.addEventListener('blur',()=>{
        senha.style.borderColor = '#ccc'
        senha.style.backgroundColor = '#fff'
    })


})