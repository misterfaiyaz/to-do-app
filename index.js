var form=document.querySelector('.form-inline');
var itemList=document.getElementById('items');

form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item-text').value;

    //create a new LI tag
    var li=document.createElement('li');
    li.className='list-item';

    //create a span tag
    var span=document.createElement('span');
    span.appendChild(document.createTextNode(newItem));

    //create button
    var button=document.createElement('button');
    button.className='list-button';
    button.appendChild(document.createTextNode('X'));


    //adding all
    li.appendChild(span);
    li.appendChild(button);
    itemList.appendChild(li);

    //empty the input text
    document.getElementById('item-text').value='';

    
}


itemList.addEventListener('click',removeItem);

function removeItem(e){
    var target=e.target;
     
    var li=target.parentElement;
    if(target.className === 'list-button'){
    itemList.removeChild(li);
    }
    //console.log(target);
}