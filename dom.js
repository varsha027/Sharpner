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
// var even=document.querySelectorAll('li:nth-child(even)')
// console.log(even)
// even[0].style.color='green';
// var odd=document.querySelectorAll('li:nth-child(odd)')
// console.log(odd)
// for(var i=0; i< odd.length; i++)
// {
//     odd[i].style.backgroundColor='green';

// }



//traversing the DOM
//let itemList=document.querySelector('#items');
// //parentNode

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor="red";
// console.log(itemList.parentNode.parentNode);
// //pareneElent
// console.log(itemList.pareneElent);
// itemList.pareneElent.style.backgroundColor="red";
// console.log(itemList.pareneElent.pareneElent);
//childNode
// console.log(itemList.childNodes);
// //children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor="yellow";
// //firstchild
 //console.log(itemList.firstChild);
// //firstElementChild
//console.log(itemList.firstElementChild);
// //lastChild
//console.log(itemList.lastChild);
// //lastChildElement
//console.log(itemList.lastElementChild);
// // next sibiling
// console.log(itemList.nextSibling);
// //next element sibiling
// console.log(itemList.nextElementSibling);
//// pevious sibiling
// console.log(itemList.previousSibling);
// //previous element sibiling
// itemList.previousElementSibling.style.backgroundColor="yellow";
//create element

//create div
var newDiv = document.createElement('div');
console.log(newDiv);

// //add class
// newDiv.className='hello';
// //ad id
// newDiv.id='hello1';
// //add attri 
// newDiv.setAttribute('title','hellow div');
// //create text node
// var newDivText=document.createTextNode('hellow world');
// //add text to div
// newDiv.appendChild(newDivText);
// var container =document.querySelector('header.container');
// var h1=document.querySelector('header h1');
// newDiv.style.fontSize='30px';
// //container.insertBefore(newDiv,h1)






