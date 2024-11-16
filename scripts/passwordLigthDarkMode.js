function transitionMode(){
    const localStore = localStorage.getItem("click");
    console.log(localStore)

    if(localStore === '0'){
        document.querySelector('body')
        .classList.toggle();
    }else{
        document.querySelector('body')
        .classList.toggle('bodyLightTheme');
    }

}

window.onload = transitionMode();