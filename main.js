const myForm =document.querySelector('#myForm');
const nameInput =document.querySelector('#name');
const emailInput =document.querySelector('#email');
const msg =document.querySelector('.msg');
const userList =document.querySelector('#users');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    localStorage.setItem(nameInput.value,emailInput.value);
    e.preventDefault();
    if(nameInput.value === ''|| emailInput==='')
    {
        msg.classList.add('error');
        msg.innerHTML='please enter fields';
        setTimeout(()=> msg.remove(),3000)
    }
    else
    {
        
        const li=document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))
        userList.appendChild(li);
        //clear fields
        nameInput.value='';
        emailInput.value='';
    }
}
