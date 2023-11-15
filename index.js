let addToDobutton = document.querySelector('#addToDo');
let ToDocontainer = document.querySelector('#ToDocontainer');
let inputfield = document.querySelector('#inputfield');

addToDobutton.onclick = function() {
    if(inputfield.value !=""){
        let paragraphe = document.createElement('p')
    }
    paragraphe.innerText = inputfield.value ;

    ToDocontaineroDocontainer.appendChild(paragraphe);
    inputfield.value = "";
}
    

