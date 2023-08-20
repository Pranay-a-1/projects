/* Module for ToDo List application */
var ToDoList = (function () {
  /* add members here */
  var task = {
    name: ko.observable(),
    description: ko.observable(),
  };

  /* array of tasks */
  var tasks = ko.observableArray();

  var addTask = function () {
    console.log("adding task");
    tasks.unshift({
      name: task.name(),
      description: task.description(),
    });
    clearTask();
  };

  var clearTask = function () {
    task.name(null);
    task.description(null);
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
  };
})();
