'use strict'

var todos = [
  {
  title: "wake up early",
  done: false
  },

  {
    title: "pet cat",
    done: false
  }
];

exports.showTodos = (req,res) => {
  res.render("todos", {
    someTodos: todos
  });
};

exports.index = (req, res) => {
    res.render('index')
}
