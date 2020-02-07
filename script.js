// grabbing the elements we need

const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');


//form submit event
form.addEventListener('submit', addItem);

// delete event
itemList.addEventListener('click', removeItem);

// filter event
filter.addEventListener('keyup', filterItems);


// callback functions for each event

function addItem(e) {
    e.preventDefault();

    // get input value   
    const newItem = document.getElementById('item').value;

    // create a new li element
    const li = document.createElement('li');
    // add a class to it
    li.className = 'list-group-item';
    // add text note w input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button
    const deleteBtn = document.createElement('button');
    // add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('X'));


    // append button to li
    li.appendChild(deleteBtn);
    // append li to list
    itemList.appendChild(li);

};


function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
};

function filterItems(e) {
    //convert to lowercase to match the search
    const text = e.target.value.toLowerCase();

    // get the lis
    const items = itemList.getElementsByTagName('li');

    // convert to array 
    Array.from(items).forEach(function (item) {
        const itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}

