document.querySelector('#newPassword')
    .addEventListener('click', generateNum);

document.querySelector('#submitNum')
    .addEventListener('click', checkedNum);

document.querySelector('#alertPassword')
    .addEventListener('click', alertNum);

let secretPassword = [];
let click = 0;

const divPassword = document.querySelector('#secretPasswordDiv');;    

const className ={
    0 : "NE",
    1 : "PE",
    2 : "PC"
}

// Generate randow numbers 
function generateNum(){
    for(i = 0; i < 4; i++){
        secretPassword[i] =  Math.floor(Math.random() * 10);    
    };
    alert('Palavra gerada com sucesso');

    click = click + 1;

    console.log(secretPassword);
}

// Display input numbers

function displayNum(inputValue, checked){
    inputValue.forEach((password) => {
        const paragraphy = document.createElement("p");
        paragraphy.innerText = password;

        for(i = 0; i < checked.length; i++){
            
        }

        divPassword.appendChild(paragraphy);
    });
}

// Get input Value

function checkedNum(){
    const input = document.querySelector('#inputNum')
    const inputValue = input.value.split('');
    const checkedArr = [];

    let cows = 0;
    let bulls = 0;

    if(inputValue.length != 4){
        alert('insira 4 números');
        return;
    } 

    if(click === 0){
        alert('Gere um número aleatório para verificar o seu resultado');
        return;
    }

    for(i = 0; i < 4; i++){
        if(secretPassword[i] == inputValue[i]){
            console.log(`${cows} número na mesma posição`);
            cows++;
            checkedArr[i] = 2;

            if(cows === 4){
                alert("você venceu");

                divPassword.innerHTML = '';

                input.value = "";
                input.focus();

                generateNum();
            }
        }else if(!secretPassword[i] == inputValue[i]){
            for(n = 0; n < 4; n++){
                if(secretPassword[n] == inputValue[i]){
                    console.log(`Existe ${bulls} números não ordenados`);
                    bulls++
                }
                checkedArr[i] = 1;
            }
        }else{
            checkedArr[i] = 0;
        }
    }
    displayNum(inputValue,checkedArr);
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