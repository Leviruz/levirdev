var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;
var namec = getElementById('name')
var email = getElementById('email')
var message = getElementById('message')

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