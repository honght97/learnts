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
        TaskService.tasks = tasks;
    }
    getItems() {
        return TaskService.tasks;
    }
    static showItemsInfo() {
        for (let task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}
TaskService.username = "peter";
let tasks = [
    { id: 1, name: "coding", state: TaskState.Finish },
    { id: 2, name: "study typescript", state: TaskState.Process },
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
console.log("TaskService.username", TaskService.username);
TaskService.showItemsInfo();
class Course {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    showCourseInfo() {
        console.log(`${this.id} - ${this.name} - ${this.price}`);
    }
}
class CourseMobile extends Course {
    constructor(id, name, price, author) {
        super(id, name, price);
        this.author = author;
    }
    showCourseInfo() {
        super.showCourseInfo();
        console.log(`${this.author}`);
    }
    checkPro() {
        console.log("this.id:", this.id);
        console.log("this.price:", this.price);
    }
}
let courseObj01 = new Course("CO01", "Programming", 23);
courseObj01.showCourseInfo();
let courseObjMobile = new CourseMobile("CO01", "Programming", 23, "sen");
courseObjMobile.showCourseInfo();
courseObjMobile.checkPro();
console.log("courseObj01.id:", courseObj01.id);
