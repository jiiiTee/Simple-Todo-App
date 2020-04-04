let items = [];

function addItem() {
    let input = document.getElementById('input-line');

    if (input.value != "") {

        let newElement = document.getElementById('Itemlist');
        let LI = creaItemElement(input.value);
        newElement.appendChild(LI);

        let newItem = document.getElementById(items.length + input.value);
        input.value = "";
        newItem.setAttribute('onclick', 'removeItem(this)');

        CountItems();

    } else {
        alert("Type something before adding item to list");
    }
}

function CountItems() {
    var nuberOfLis = document.querySelectorAll('LI').length;
    document.getElementById("NuberOfItems").innerHTML = nuberOfLis.toString();
}

function removeItem(element) {
    element.remove();
    CountItems();
}

function creaItemElement(name) {
    let element = document.createElement('LI');
    items.push(element);
    element.classList.add('item');
    element.innerHTML = name;
    element.id = items.length + name;
    return element;
}
