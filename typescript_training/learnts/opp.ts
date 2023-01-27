class Task {
  id: number;
  name: string;
  state: string;
  constructor(id: number, name: string, state: string) {
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

enum TaskState {
  Create = 100,
  Active,
  Inactive,
  Process,
  Finish,
}
//
interface TaskInterface {
  id: number;
  name: string;
  state?: TaskState;
}
class TaskService {
  static username: string = "peter";
  static tasks: TaskInterface[];
  constructor(tasks: TaskInterface[]) {
    TaskService.tasks = tasks;
  }
  getItems() {
    return TaskService.tasks;
  }
  static showItemsInfo(): void {
    for (let task of TaskService.tasks) {
      console.log(`${TaskService.username} - ${task.name}`);
    }
  }
}
let tasks: TaskInterface[] = [
  { id: 1, name: "coding", state: TaskState.Finish },
  { id: 2, name: "study typescript", state: TaskState.Process },
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
console.log("TaskService.username", TaskService.username);
TaskService.showItemsInfo();

// inheritance
class Course {
  public id: string;
  private name: string;
  protected price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
  showCourseInfo(): void {
    console.log(`${this.id} - ${this.name} - ${this.price}`);
  }
}

class CourseMobile extends Course {
  author: string;
  constructor(id: string, name: string, price: number, author: string) {
    super(id, name, price);
    this.author = author;
  }
  showCourseInfo(): void {
    super.showCourseInfo();
    console.log(`${this.author}`);
  }
  checkPro() {
    // truy cập trong class con
    console.log("this.id:", this.id);
    console.log("this.price:", this.price);
  }
}
let courseObj01 = new Course("CO01", "Programming", 23);
courseObj01.showCourseInfo();
let courseObjMobile = new CourseMobile("CO01", "Programming", 23, "sen");
courseObjMobile.showCourseInfo();
courseObjMobile.checkPro();

// truy cập bên ngoài
console.log("courseObj01.id:", courseObj01.id);
