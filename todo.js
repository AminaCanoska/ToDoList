/*
let addButton = document.getElementById("add-button"); 
let input = document.querySelector("input");

addButton.addEventListener("click", () => {
    const testo = input.value.trim();
    if (testo === "") return; // niente se vuoto
    let container = document.querySelector("main");
    container.classList.add("wrapper");
    let li = document.createElement("li");
    li.classList.add("li-display");

    let span = document.createElement("span");
    span.textContent = testo;
    li.appendChild(span);

   let buttonContainer = document.createElement("div");
   buttonContainer.classList.add("buttons-container");
   li.appendChild(buttonContainer);

    container.appendChild(li);

    
    let doneButton = document.createElement("button");
    doneButton.classList.toggle("done-button")
    doneButton.textContent = "";
    buttonContainer.insertAdjacentElement("afterbegin", doneButton)
    doneButton.addEventListener("click", () => {
        doneButton.textContent = "✔️";
        span.classList.add("delete-dopo");
        
    })
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
         deleteButton.textContent = "❌";
         buttonContainer.insertAdjacentElement("beforeend", deleteButton);
         deleteButton.addEventListener("click", () => {
        let container = document.querySelector("main");
         container.classList.add("remove-wrapper");

         li.remove();  
    })
    container.classList.remove("remove-wrapper");
input.value = "";

})
let removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", () => {
    window.location.href = "fucked-up.html";
})
    */



let addButton = document.getElementById("add-button"); 
let input = document.querySelector("input");
input.addEventListener("click", () => {
    input.classList.add("edit-input");
})

addButton.addEventListener("click", () => {
    const testo = input.value
    if (testo){
        addToDo(testo)
    }
    else if(testo === "") {
        return; // niente se vuoto
    }
    })


    function addToDo(testo){
        console.log("ciao")
    let container = document.querySelector("main");
    container.classList.add("wrapper");
    let li = document.createElement("li");
    li.classList.add("li-display");

    let span = document.createElement("span");
    span.textContent = testo;
    span.classList.add("todo-text");
    span.addEventListener("click", () => {
        if(testo){
            span.classList.add("edit-text");
            span.contentEditable = true;
        }

    })
    li.appendChild(span);

   let buttonContainer = document.createElement("div");
   buttonContainer.classList.add("buttons-container");
   li.appendChild(buttonContainer);

    container.appendChild(li);

    
    let doneButton = document.createElement("button");
    doneButton.classList.add("done-button")
    doneButton.textContent = "";
    buttonContainer.insertAdjacentElement("afterbegin", doneButton)
    doneButton.addEventListener("click", () => {
        span.classList.toggle("delete-dopo");
        if (doneButton.textContent === "✔️") {
        doneButton.textContent = "";
    } else {
        doneButton.textContent = "✔️";
    }
        
    })
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
         deleteButton.textContent = "❌";
         buttonContainer.insertAdjacentElement("beforeend", deleteButton);
         deleteButton.addEventListener("click", () => {
        let container = document.querySelector("main");
         container.classList.add("remove-wrapper");

         li.remove();  
    })
    container.classList.remove("remove-wrapper");
input.value = "";
    

}



let removeButton = document.getElementById("remove-button");
removeButton.addEventListener("click", () => {
    window.location.href = "fucked-up.html";
})
