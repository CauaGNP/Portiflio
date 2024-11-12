document.querySelector('#lightDarkMode')
    .addEventListener('click', transitionMode);

function transitionMode(){
    document.querySelector('body')
        .classList.toggle('bodyLightTheme');
}