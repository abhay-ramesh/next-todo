import { makeAutoObservable, observable, autorun } from "mobx";

// Generate a random number of 3 digits
const idd = () => Math.floor(Math.random() * 1000);

class Store {
  todos = [];
  newTodo = "";

  constructor() {
    makeAutoObservable(this, {
      todos: observable,
      newTodo: observable,
    });
  }

  loadTodos = () => {
    // load from API or local storage
    fetch("/api/todo")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
  };

  addTodo = () => {
    console.log("addTodo");
    const idda = idd();
    if (this.newTodo.length > 0) {
      this.todos.push({
        ida: idda,
        title: this.newTodo,
        completed: false,
      });
      // save to API or local storage
      fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.newTodo,
          completed: false,
          ida: Number(idda),
        }),
      }).then((json) => {
        console.log(json);
      });
      this.newTodo = "";
    }
  };

  removeTodo = (ida) => {
    console.log("removeTodo");
    this.todos = this.todos.filter((todo) => todo.ida !== ida);
    // save to API or local storage
    fetch("/api/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ida,
      }),
    }).then((json) => {
      console.log(json);
    });
  };

  toggleTodo = (ida) => {
    console.log("toggleTodo");
    this.todos = this.todos.map((todo) =>
      todo.ida === ida ? { ...todo, completed: !todo.completed } : todo
    );
    // save to API or local storage
    fetch("/api/todo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ida,
        completed: !this.todos.find((todo) => todo.ida === ida).completed,
      }),
    }).then((json) => {
      console.log(json);
    });
  };
}

const store = new Store();

export default store;
