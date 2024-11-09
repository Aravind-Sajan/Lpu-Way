
    function loadEnd(){
        document.querySelector('body').classList.remove('load')
    }
    function loadStrt(){
        document.querySelector('body').classList.add('load');
        setTimeout(loadEnd,2000);
    }
window.addEventListener('load', loadStrt());