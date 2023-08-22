/* Module for ToDo List application */
var ToDoList = (function () {
  /* add members here */
  var task = {
    name: ko.observable(),
    description: ko.observable(),
    status: ko.observable("new"),
  };

  /* array of tasks */
  var tasks = ko.observableArray();

  var addTask = function () {
    console.log("adding task");
    tasks.unshift({
      name: task.name(),
      description: task.description(),
      status: ko.observable(states.NEW),
    });
    clearTask();
  };

  var clearTask = function () {
    task.name(null);
    task.description(null);
  };

  var deleteTask = function (task) {
    console.log("Deleting task with name: " + task.name);
    //remove the task from the tasks array
    tasks.remove(task);
  };

  /* method to complete a task */
  var completeTask = function (task) {
    console.log("Completing task with name: " + task.name);
    //set status of task to complete
    task.status(states.COMPLETE);
  };

  var states = {
    NEW: "new",
    COMPLETE: "complete",
  };

  var init = function () {
    /* add code to initialize this module */
    ko.applyBindings(ToDoList);
  };

  /* execute the init function when the DOM is ready */
  $(init);

  return {
    /* add members that will be exposed publicly */
    task: task,
    tasks: tasks,
    addTask: addTask,
    deleteTask: deleteTask,
    completeTask: completeTask,
  };
})();
