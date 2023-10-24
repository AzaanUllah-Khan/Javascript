function addLocalStorage() {
    var element = prompt("Enter Key and Value Seperated by :")
    element = element.split(":")
    var key = element[0]
    var value = element[1]
    localStorage.setItem(key, value)
    display()

}
function delLocalStorage() {
    var delKey = prompt("Enter Key of the element to delete")
    localStorage.removeItem(delKey)
    display()
}
function delAllLocalStorage() {
    localStorage.clear()
    display()
}
function editLocalStorage() {
    var keyToEdit = prompt("Enter key of the item to edit")
    if (localStorage.getItem(keyToEdit)) {
        var valueToEdit = prompt("Edit the Value", localStorage.getItem(keyToEdit))
        localStorage.setItem(keyToEdit, valueToEdit)
        display()
    }
    else {
        alert("Key not Found");
    }
}
function display() {
    var ul = document.getElementById("ul")
    ul.innerHTML = ""
    for (i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        ul.innerHTML += `<li><h1>${key}</h1> : <h2>${localStorage.getItem(key)}</h2></li>`
    }
}
display()