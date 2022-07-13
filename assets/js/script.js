var todayDate = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
var timeTable = document.querySelector(".time-block");

//set current date
var currentDate = new Date();

todayDate.textContent = currentDate;

console.log(currentDate);
//check local storage at8 

var getTask = JSON.parse(localStorage.getItem("taskInfo"));
var taskTextInput = document.getElementById("taskText");
var taskInput = document.getElementById("inputBtn8");
if (getTask === null){
    taskTextInput.value = "Enter task here."
}else{
taskTextInput.value = getTask.description;
}
//set start time at 8
var startTime = new Date();
startTime.setHours(08,00,0);

//set end time at 8:59
var endTime = new Date();
endTime.setHours(08,59,0);

// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput.classList.add("future");
}
// function start here
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

//set stat time at 9
var startTime = new Date();
startTime.setHours(09,00,0);

//set end time at 9:59
var endTime = new Date();
endTime.setHours(09,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput9.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput9.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput9.classList.add("future");
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
//set stat time at 10
var startTime = new Date();
startTime.setHours(10,00,0);

//set end time at 10:59
var endTime = new Date();
endTime.setHours(10,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput10.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput10.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput10.classList.add("future");
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

//set stat time at 11
var startTime = new Date();
startTime.setHours(11,00,0);

//set end time at 11:59
var endTime = new Date();
endTime.setHours(11,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput11.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput11.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput11.classList.add("future");
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
//set stat time at 12
var startTime = new Date();
startTime.setHours(12,00,0);

//set end time at 12:59
var endTime = new Date();
endTime.setHours(12,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput12.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput12.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput12.classList.add("future");
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

//set stat time at 13
var startTime = new Date();
startTime.setHours(13,00,0);

//set end time at 13:59
var endTime = new Date();
endTime.setHours(13,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput13.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput13.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput13.classList.add("future");
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
//set stat time at 14
var startTime = new Date();
startTime.setHours(14,00,0);

//set end time at 14:59
var endTime = new Date();
endTime.setHours(14,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput14.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput14.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput14.classList.add("future");
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
//check local storage at 15
var getTask15 = JSON.parse(localStorage.getItem("taskInfo15"));
var taskTextInput15 = document.getElementById("taskText-15");
var taskInput15 = document.getElementById("inputBtn-15");
if (getTask15 === null){
    taskTextInput15.value = "Enter task here."
}else{
//display the task description in the textarea after the page refresh
taskTextInput15.value = getTask15.description;
}
//set stat time at 15
var startTime = new Date();
startTime.setHours(15,00,0);

//set end time at 15:59
var endTime = new Date();
endTime.setHours(15,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput15.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput15.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput15.classList.add("future");
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

//set stat time at 16
var startTime = new Date();
startTime.setHours(16,00,0);

//set end time at 16:59
var endTime = new Date();
endTime.setHours(16,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput16.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput16.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput16.classList.add("future");
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

//set stat time at 17
var startTime = new Date();
startTime.setHours(17,00,0);

//set end time at 17:59
var endTime = new Date();
endTime.setHours(17,59,0);
// if it's current time
if (currentDate > startTime && currentDate < endTime){
    
    taskTextInput17.classList.add("present");
}
// if the time has past
else if (startTime < currentDate){
    
    taskTextInput17.classList.add("past");
}
// furture time
else if(endTime > currentDate){
    
    taskTextInput17.classList.add("future");
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











  
