let choice=prompt("Enter your choice for list, add, delete or quit: ");

let todo=[];
while(true){
    if(choice=="Quit" || choice=="quit"){
        console.log("Quitting the app");
        break;
    }

    if(choice=="Add" || choice=="add"){
        let task=prompt("Enter the task: ");
        todo.push(task);
        console.log("Task Added");
    }
    else if(choice=="Delete" || choice=="delete"){
        let idx=prompt("Enter the index of task for deleting: ");
        todo.splice(idx-1,1);
        console.log("Task Deleted");
    }
    else if(choice=="List" || choice=="list"){
        console.log("------------------------------");
        for(item of todo){
            console.log(item);
        }
        console.log("------------------------------");
    }
    else{
        console.log("Enter valid choice ");
    }
    choice=prompt("Enter your choice for list, add, delete or quit: ");
}