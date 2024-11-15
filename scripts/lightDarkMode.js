const checkButton = document.querySelector('#lightDarkMode');
checkButton.addEventListener('click', transitionMode);

let click = localStorage.getItem('click') || '0'; 

function transitionMode() {
    if (click === '0') {
        click = '1';
        document.querySelector('body').classList.add('bodyLightTheme');
    } else {
        click = '0';
        document.querySelector('body').classList.remove('bodyLightTheme');
    }
    
    localStorage.setItem('click', click);
    checkButton.checked = click === '1'; 
}

function verificarTema() {
    const localStore = localStorage.getItem("click");

    if (localStore === '0') {
        document.querySelector('body').classList.remove('bodyLightTheme'); 
    } else {
        document.querySelector('body').classList.add('bodyLightTheme');
    }
}

window.onload = verificarTema;
