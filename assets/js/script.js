var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
var timeTable = document.querySelector(".time-block");
var todayDate = moment().format('MMM Do YY');
var timeNow = moment().format('LT');

currentDay.textContent = todayDate;
currentTime.textContent = timeNow;


//check local storage at8 

var getTask = JSON.parse(localStorage.getItem("taskInfo"));
var taskTextInput = document.getElementById("taskText");
var taskInput = document.getElementById("inputBtn8");
if (getTask === null){
    taskTextInput.value = "Enter task here."
}else{
taskTextInput.value = getTask.description;
}


taskInput.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput8 = document.getElementById("time-8");
    var taskText = taskTextInput.value;
    
    var taskInfo = {
        time: timeInput8.textContent,
        description: taskText
    }
    localStorage.setItem("taskInfo", JSON.stringify(taskInfo));
    console.log(taskInfo);
});

//check local storage at 9
var getTask9 = JSON.parse(localStorage.getItem("taskInfo9"));
var taskTextInput9 = document.getElementById("taskText9");
var taskInput9 = document.getElementById("inputBtn9");
if (getTask9 === null){
    taskTextInput9.value = "Enter task here."
}else{
taskTextInput9.value = getTask.description;

//display the task description in the textarea after the page refresh
taskTextInput9.value = getTask9.description;
}

//task at 9
var taskTextInput9 = document.getElementById("taskText9");
var taskInput9 = document.getElementById("inputBtn9");
taskInput9.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput9 = document.getElementById("time-9");
    var taskText9 = taskTextInput9.value;
    
    var taskInfo9 = {
        time: timeInput9.textContent,
        description: taskText9
    }
    localStorage.setItem("taskInfo9", JSON.stringify(taskInfo9));
    console.log(taskInfo9);
});

//check local storage at 10
var getTask10 = JSON.parse(localStorage.getItem("taskInfo10"));
var taskTextInput10 = document.getElementById("taskText10");
var taskInput10 = document.getElementById("inputBtn10");
if (getTask10 === null){
    taskTextInput10.value = "Enter task here."
}else{

//display the task description in the textarea after the page refresh
taskTextInput10.value = getTask10.description;
}

//task at 10
var taskTextInput10 = document.getElementById("taskText10");
var taskInput10 = document.getElementById("inputBtn10");
taskInput10.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput10 = document.getElementById("time-10");
    var taskText10 = taskTextInput10.value;
    
    var taskInfo10 = {
        time: timeInput10.textContent,
        description: taskText10
    }
    localStorage.setItem("taskInfo10", JSON.stringify(taskInfo10));
    console.log(taskInfo10);
});

//check local storage at 11
var getTask11 = JSON.parse(localStorage.getItem("taskInfo11"));
var taskTextInput11 = document.getElementById("taskText-11");
var taskInput11 = document.getElementById("inputBtn-11");
if (getTask11 === null){
    taskTextInput11.value = "Enter task here."
}else{

//display the task description in the textarea after the page refresh
taskTextInput11.value = getTask11.description;
}

//task at 11
var taskTextInput11 = document.getElementById("taskText-11");
var taskInput11 = document.getElementById("inputBtn-11");
taskInput11.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput11 = document.getElementById("time-11");
    var taskText11 = taskTextInput11.value;
    
    var taskInfo11 = {
        time: timeInput11.textContent,
        description: taskText11
    }
    localStorage.setItem("taskInfo11", JSON.stringify(taskInfo11));
    console.log(taskInfo11);
});
//check local storage at 12
var getTask12 = JSON.parse(localStorage.getItem("taskInfo12"));
var taskTextInput12 = document.getElementById("taskText-12");
var taskInput12 = document.getElementById("inputBtn-12");
if (getTask12 === null){
    taskTextInput12.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput12.value = getTask12.description;
}

//task at 12
var taskTextInput12 = document.getElementById("taskText-12");
var taskInput12 = document.getElementById("inputBtn-12");
taskInput12.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput12 = document.getElementById("time-12");
    var taskText12 = taskTextInput12.value;
    
    var taskInfo12 = {
        time: timeInput12.textContent,
        description: taskText12
    }
    localStorage.setItem("taskInfo12", JSON.stringify(taskInfo12));
    console.log(taskInfo12);
});
//check local storage at 13
var getTask13 = JSON.parse(localStorage.getItem("taskInfo13"));
var taskTextInput13 = document.getElementById("taskText-13");
var taskInput13 = document.getElementById("inputBtn-13");
if (getTask13 === null){
    taskTextInput13.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput13.value = getTask13.description;
}

//task at 13:00
var taskTextInput13 = document.getElementById("taskText-13");
var taskInput13 = document.getElementById("inputBtn-13");
taskInput13.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput13 = document.getElementById("time-13");
    var taskText13 = taskTextInput13.value;
    
    var taskInfo13 = {
        time: timeInput13.textContent,
        description: taskText13
    }
    localStorage.setItem("taskInfo13", JSON.stringify(taskInfo13));
    console.log(taskInfo13);
});
//check local storage at 14
var getTask14 = JSON.parse(localStorage.getItem("taskInfo14"));
var taskTextInput14 = document.getElementById("taskText-14");
var taskInput14 = document.getElementById("inputBtn-14");
if (getTask14 === null){
    taskTextInput14.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput14.value = getTask14.description;
}

//task at 14:00
var taskTextInput14 = document.getElementById("taskText-14");
var taskInput14 = document.getElementById("inputBtn-14");
taskInput14.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput14 = document.getElementById("time-14");
    var taskText14 = taskTextInput14.value;
    
    var taskInfo14 = {
        time: timeInput14.textContent,
        description: taskText14
    }
    localStorage.setItem("taskInfo14", JSON.stringify(taskInfo14));
    console.log(taskInfo14);
});
//check local storage at 16
var getTask15 = JSON.parse(localStorage.getItem("taskInfo15"));
var taskTextInput15 = document.getElementById("taskText-15");
var taskInput15 = document.getElementById("inputBtn-15");
if (getTask15 === null){
    taskTextInput15.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput15.value = getTask15.description;
}

//task at 15:00
var taskTextInput15 = document.getElementById("taskText-15");
var taskInput15 = document.getElementById("inputBtn-15");
taskInput15.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput15 = document.getElementById("time-15");
    var taskText15 = taskTextInput15.value;
    
    var taskInfo15 = {
        time: timeInput15.textContent,
        description: taskText15
    }
    localStorage.setItem("taskInfo15", JSON.stringify(taskInfo15));
    console.log(taskInfo15);
});
//check local storage at 16
var getTask16 = JSON.parse(localStorage.getItem("taskInfo16"));
var taskTextInput16 = document.getElementById("taskText-16");
var taskInput16 = document.getElementById("inputBtn-16");
if (getTask16 === null){
    taskTextInput16.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput16.value = getTask16.description;
}

//task at 16:00
var taskTextInput16 = document.getElementById("taskText-16");
var taskInput16 = document.getElementById("inputBtn-16");
taskInput16.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput16 = document.getElementById("time-16");
    var taskText16 = taskTextInput16.value;
    
    var taskInfo16 = {
        time: timeInput16.textContent,
        description: taskText16
    }
    localStorage.setItem("taskInfo16", JSON.stringify(taskInfo16));
    console.log(taskInfo16);
});
//check local storage at 17
var getTask17 = JSON.parse(localStorage.getItem("taskInfo17"));
var taskTextInput17 = document.getElementById("taskText-17");
var taskInput17 = document.getElementById("inputBtn-17");
if (getTask17 === null){
    taskTextInput17.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput17.value = getTask17.description;
}

//task at 17:00
var taskTextInput17 = document.getElementById("taskText-17");
var taskInput17 = document.getElementById("inputBtn-17");
taskInput17.addEventListener("click", function(e){
    e.preventDefault();
    var timeInput17 = document.getElementById("time-17");
    var taskText17 = taskTextInput17.value;
    
    var taskInfo17 = {
        time: timeInput17.textContent,
        description: taskText17
    }
    localStorage.setItem("taskInfo17", JSON.stringify(taskInfo17));
    console.log(taskInfo17);
});











  
