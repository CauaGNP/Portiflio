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
        console.log(secretPassword)
    }
}

function displayPassword(inputValue){
    if(inputValue.length != 4){
        alert('insira 4 números');
        return;
    } 
    // console.log(inputValue)
    // for(i = 0; i < 4; i++){
    //     const num = Number(inputValue[i]);
    //     secretPassword.forEach(num => {
    //         if(secretPassword == num){
    //             console.log('aaaa')
    //         }
    //     });
    // }
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

