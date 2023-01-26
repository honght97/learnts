"use strict";
class Task {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    showTaskInfo() {
        console.log(`method:${this.id} - ${this.name} - ${this.state}`);
    }
}
let taskObj = new Task(2, "lau nha", "done");
console.log(taskObj);
taskObj.showTaskInfo();
var TaskState;
(function (TaskState) {
    TaskState[TaskState["Create"] = 100] = "Create";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["Inactive"] = 102] = "Inactive";
    TaskState[TaskState["Process"] = 103] = "Process";
    TaskState[TaskState["Finish"] = 104] = "Finish";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        this.tasks = tasks;
    }
    getItems() {
        return this.tasks;
    }
    static showItemsInfo() {
        for (let task of this.tasks) {
            console.log(task);
        }
    }
}
TaskService.username = "john";
let tasks = [
    { id: 1, name: "coding", state: TaskState.Finish },
    { id: 2, name: "study typescript", state: TaskState.Process },
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
console.log(TaskService.username);
console.log("....", taskServiceObj.showItemsInfo());
