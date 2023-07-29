let todoList = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;

function addTask(){
    let taskName = document.getElementById('taskInput').value;
    if (taskName != ''){
        let obj = {
            tartib: tr++,
            name: taskName,
            complete: false
        };
        todoList.push(obj);
        chizish();
        allTask = todoList.length;
        document.getElementById('allTask').innerText = allTask;
    }
}

function chizish(){
    let list = '';
    todoList.forEach(function (item){
        list += '<li class="list-group-item">' +
                    '<input '+ (item.complete ? "checked" : " ") + 'onchange="completed(this)" type="checkbox" class="mr-2" id="'+ item.tartib +'"><label for="'+ item.tartib +'">'+ item.name +'</label>' +
                '</li>'
    });
    document.getElementById('list').innerHTML = list;
    document.getElementById('completeTask').innerText = completeTask;
    let progressW = (completeTask * 100) / allTask;
    document.getElementById('progress').style.width = progressW + "%";
}

function completed(input){
    let searchId = input.getAttribute('id');
    let checked = input.getAttribute("checked");

    todoList.forEach(function (item,i){
        if (item.tartib == searchId){
            todoList[i].complete = item.complete ? false : true;
        }
    });

    console.log(checked);
    if (checked == null){
        completeTask++
    }else{
        completeTask--
    }    chizish();
}