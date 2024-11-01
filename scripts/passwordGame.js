document.querySelector('#newPassword')
    .addEventListener('click', randowNum);

document.querySelector('#submitNum')
    .addEventListener('click', inputValue);

document.querySelector('#alertPassword')
    .addEventListener('click', alertPassword);

let secretPassword = [];    

// Generate randow numbers 
function randowNum(){
    for(i = 0; i < 4; i++){
        secretPassword[i] =  Math.floor(Math.random() * 10);    
        console.log(secretPassword);
    };

    const divPassword = document.querySelector('#secretPasswordDiv');
    

}

function displayPassword(inputValue){
    if(inputValue.length != 4){
        alert('insira 4 números');
        return;
    } 
    for(i = 0; i < 4; i++){
        const num = inputValue[i];
        for(n = 0; n < 4; n++){
            if(secretPassword[n] == inputValue[i]){
            // Indicar para o usuario se os números escolhidos tem no array
            }
        }
        if(secretPassword[i] == inputValue[i]){
            // indicar para o usuario se a posição está correta
        }
    }
}

// Display password
function alertPassword(){
    alert(`Os números secretos são: ${secretPassword}`);
}

// Get value input
function inputValue(){
    const inputValue = document.querySelector('#inputNum').value.split('');

    displayPassword(inputValue)
}

