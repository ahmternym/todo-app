const input = document.getElementById("inputArea");
const addBtn = document.getElementById("addBtn");
const main = document.getElementById("main");

let todos = JSON.parse(localStorage.getItem("todos")) || []

render();

function render(){

    main.innerHTML = "";

    todos.forEach(function(todo,index){

        const div = document.createElement("div");

        div.innerHTML = `<div>
                            <p>${todo}</p>
                        </div>`
        main.appendChild(div);
        
        div.addEventListener("click",function(){

            todos.splice(index,1)
            
            localStorage.setItem("todos",JSON.stringify(todos))
            render()
        })
     
    });

}

 addBtn.addEventListener("click",function(){
        if (input.value === "") return;

        const inputA = input.value;
        todos.push(inputA)
        localStorage.setItem("todos",JSON.stringify(todos))
        render();
        input.value =""
    })

