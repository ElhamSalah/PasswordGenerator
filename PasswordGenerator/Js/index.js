let password_el = document.querySelector('#password');
let lenght_el = document.querySelector('#lenght');
let uppercase_el = document.querySelector('#uppercase');
let lowercase_el = document.querySelector('#lowercase');
let number_el = document.querySelector('#numbers');
let symbol_el = document.querySelector('#symbols');

let generate_btn = document.querySelector('#generate');
generate_btn.addEventListener('click',GeneratePassword);
let copy_btn = document.querySelector('#copy');
copy_btn.addEventListener('click',CopyPassword);


const uppercase_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars = "abcdefghijklmnopqrstuvwxyz";
const number_chars = "0123456789";
const symbol_chars = "!$%^&*@#*";

function GeneratePassword(){
    let password = "";
    let lenght = lenght_el.value;
    let chars = "";
    chars += uppercase_el.checked ? uppercase_chars : " ";
    chars += lowercase_el.checked ? lowercase_chars : " ";
    chars += number_el.checked ? number_chars : " ";
    chars += symbol_el.checked ? symbol_chars : " ";


    for(let i = 0; i <= lenght ; i++){
     let rand = Math.floor(Math.random() * chars.length);
     password += chars.substring(rand, rand + 1);
    }
    password_el.value = password;
    if( password.length == 8){
        alert("Please add eight charecters");
    }

}
async function CopyPassword(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password_el.value);
        alert("Password copied to clipboard");
    }
}

