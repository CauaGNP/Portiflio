document.querySelector('#newPassword')
    .addEventListener('click', generateNum);

document.querySelector('#submitNum')
    .addEventListener('click', checkedNum);

document.querySelector('#alertPassword')
    .addEventListener('click', alertNum);

let secretPassword = [];
let click = 0;
const divPassword = document.querySelector('#secretPasswordDiv');;    

// Generate randow numbers 
function generateNum(){
    for(i = 0; i < 4; i++){
        secretPassword[i] =  Math.floor(Math.random() * 10);    
    };
    alert('Palavra gerada com sucesso');

    click = click + 1;

    console.log(secretPassword);
}

// Display randow numbers

function displayNum(inputValue){
    inputValue.forEach((password) => {
        const paragraphy = document.createElement("p");
        
        paragraphy.innerText = password;
        divPassword.appendChild(paragraphy);
    });
}

// Get input Value

function checkedNum(){
    const input = document.querySelector('#inputNum')
    const inputValue = input.value.split('');

    let contador = 1;

    if(inputValue.length != 4){
        alert('insira 4 números');
        return;
    } 

    if(click === 0){
        alert('Gere um número aleatório para verificar o seu resultado');
        return;
    }

    displayNum(inputValue);

    for(i = 0; i < 4; i++){
        for(n = 0; n < 4; n++){
            if(secretPassword[n] == inputValue[i]){
            console.log("Existe números iguais ordenados ou n");
            }
        }
        if(secretPassword[i] == inputValue[i]){
            console.log(`${contador} número na mesma posição`);
            contador++;

            if(contador === 4){
                alert("você venceu");

                divPassword.innerHTML = '';

                input.value = "";
                input.focus();

                generateNum();
            }
        }
    }
}

// Display password
function alertNum(){
    if(click != 0){
        alert(`Os números secretos são: ${secretPassword}`);
        generateNum();
    }else{
        alert('Gere um número aleatório para visualizar o resultado');
    }

}