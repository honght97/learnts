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
  static username: string = "john";
  tasks: TaskInterface[];
  constructor(tasks: TaskInterface[]) {
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
let tasks: TaskInterface[] = [
  { id: 1, name: "coding", state: TaskState.Finish },
  { id: 2, name: "study typescript", state: TaskState.Process },
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
console.log(TaskService.username);
console.log("....", taskServiceObj.showItemsInfo());
