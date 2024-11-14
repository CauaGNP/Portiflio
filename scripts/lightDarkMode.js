const checkButton = document.querySelector('#lightDarkMode')
                    .addEventListener('click', transitionMode);

let click = '0'

function transitionMode(){
    document.querySelector('body') 
        .classList.toggle('bodyLightTheme');

    if(click === '0'){
        click = '1';

    }else{
        click = '0';
    }
    
    localStorage.setItem('click' , `${click}`);
}

// function verivicarTema(){
//     const localStore = localStorage.getItem("click");

//     if(localStore === '0'){
//         document.querySelector('body')
//         .classList.toggle(' ');
//     }else{
//         document.querySelector('body')
//         .classList.toggle('bodyLightTheme');

//         checkButton.classList('active');

//     }

// }

// window.onload = verivicarTema();