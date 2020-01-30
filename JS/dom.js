// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }

//TRAVERSING THE DOM//
var itemList = document.querySelector('#items');
// //parentNode : returns nodeList
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.childNode);
// //parentElement : mostly same as parentNode : returns htmlCollection
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4"
// console.log(itemList.parentNode.parentElement);
// // childNodes : returns a nodeList with linebreak(text node)
// console.dir(itemList.childNodes);
// // children : returns HTMLCollection
// console.log(itemList.children);
// console.log(itemList.children[1]);
// // firstChild firstElementChild & lastChild lastElementChild
// console.log(itemList.lastChild) // returns nodeList element
// console.log(itemList.lastElementChild)  // returns htmlCollection Element
// console.log(itemList.firstChild)
// console.log(itemList.firstElementChild)
// itemList.lastElementChild.textContent = "last child"
// // nextSibling and previousSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// insertBefore


var my_div2 = document.createElement('div');
my_div2.className = 'firstHeader';
my_div2.id = 'fh'
my_div2.setAttribute('my_attr', 'header');
div2_text = document.createTextNode('Hello Header !')
my_div2.appendChild(div2_text);
console.log(my_div2)

var container = document.querySelector('header .container');
container.insertBefore(my_div2, container.firstElementChild);
// var h1 = document.querySelector('header h1')
// container.insertBefore(my_div2, h1) // same as above
my_div2.style.fontSize = '22px';




let my_span = document.createElement('span');
let my_div = document.createElement('div');
// console.log(span);
my_div.className = 'container';
my_div.id = 'header-JS';
// to add other attribute to an element
my_div.setAttribute('title', 'hello div')
// console.log(my_div)

my_span.innerText = 'JS for DOM'; 
my_div.appendChild(my_span);

modeButton = document.querySelector('#btn');
// console.log(modeButton)
modeButton.addEventListener('click', () => {
    header = document.body.firstElementChild;//accessing header from html
    header.appendChild(my_div);
    my_div.classList.add('coustom-class')
});

// var itemList = document.querySelector('#items');
submit = document.querySelector('.btn');
input_text = document.querySelector('.form-control');
// called above // var itemList = document.querySelector('#items');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    my_list = document.createElement('li')
    my_list.innerText = input_text.value;
    my_list.className = 'list-group-item';
    itemList.appendChild(my_list);
    input_text.value = '';
    
})
// input_text = document.querySelector('.form-control');
// input_text.value = 'shakya';
// console.log(input_text)

// console.log(my_list)
// document.write("hello")
