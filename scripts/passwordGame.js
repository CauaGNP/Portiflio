document.querySelector('#newPassword')
    .addEventListener('click', randowNum);

document.querySelector('#submitNum')
    .addEventListener('click', inputValue);

document.querySelector('#displayPassword')
    .addEventListener('click', displayPassword);

let secretPassword = [];    

// Generate randow numbers 
function randowNum(){
    for(i = 0; i < 4; i++){
        secretPassword[i] =  Math.floor(Math.random() * 10);    
    }

}

// Display password
function displayPassword(){
    alert(`Os números secretos são: ${secretPassword}`);
}

// Get value input
function inputValue(){
    const inputValue = document.querySelector('#inputNum').value.split('');

    console.log(inputValue);
}

