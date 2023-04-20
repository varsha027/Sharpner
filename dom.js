//GET ELEMENT BY CLASS NAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[3]);
// items[3].textContent="hello";
// items[3].style.background="green";
//GET ELEMENT BY TAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[3]);
// li[3].textContent="hello";
// li[3].style.background="green";
///query selector
// var header = document.querySelector('#main-header');
// header.style.borderBottom="solid 4px #ccc"
// var input = document.querySelector('input');
// input.value="hiiii"
// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor="green";
// var third = document.querySelector('.list-group-item:nth-child(3)');
// third.style.color="white";
//Query selector all
var even=document.querySelectorAll('li:nth-child(even)')
console.log(even)
even[0].style.color='green';
var odd=document.querySelectorAll('li:nth-child(odd)')
console.log(odd)
for(var i=0; i< odd.length; i++)
{
    odd[i].style.backgroundColor='green';

}


