document.querySelector('#newPassword')
    .addEventListener('click', generateNum);

document.querySelector('#submitNum')
    .addEventListener('click', checkedNum);

document.querySelector('#alertPassword')
    .addEventListener('click', alertNum);

let secretPassword = [];
let click = 0;

const divPassword = document.querySelector('#secretPasswordDiv');   


const className ={
    0 : "NE",
    1 : "PE",
    2 : "PC"
}

// Generate randow numbers 
function generateNum(){
    divPassword.innerHTML = '';

    for(i = 0; i < 4; i++){
        secretPassword[i] =  Math.floor(Math.random() * 10);    
    };
    alert('Palavra gerada com sucesso');

    click = click + 1;

    console.log(secretPassword);
}

// Display input numbers

function displayNum(inputValue, checked){
    console.log(checked)
    const newDiv = document.createElement('div');
    inputValue.forEach((password, index) => {
        console.log(password)
        const paragraphy = document.createElement("p");
        paragraphy.innerText = password;

        paragraphy.classList.add(className[checked[index]]);

        newDiv.appendChild(paragraphy);
    })

    divPassword.appendChild(newDiv)
}

// Get input Value

function checkedNum(){
    const input = document.querySelector('#inputNum');
    const inputValue = input.value.split('');
    const checkedArr = [0,0,0,0];

    let cows = 0;

    if(inputValue.length != 4){
        alert('insira 4 números');
        return;
    } 

    if(click === 0){
        alert('Gere um número aleatório para verificar o seu resultado');
        return;
    }

    for(i = 0; i < 4; i++){
        if(secretPassword[i] == inputValue[i]){;
            cows++;
            checkedArr[i] = 2;

            if(cows === 4){
                input.value = "";
                input.focus();

                winMensage();
            }
        }else{
            for(n = 0; n < 4; n++){
                if(secretPassword[n] == inputValue[i]){
                    checkedArr[i] = 1;
                }
            }
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

function winMensage(){
    const title = "<h1>Você Venceu!!</h1>"
    const subtitle = "<h2>Clique no botão para gerar uma nova senha!!</h2>"

    divPassword.innerHTML += subtitle
    divPassword.innerHTML += title;
}