const express = require("express");
const router = express.Router();
const Todo = require("../models/model");

// !Get All Todos
router.get("/todos", async (req, res) => {
  const todos = await Todo.findAll();

  res.status(200).json({ todos });
});

// !Get Todo By Id
router.get("/todos/:id", async (req, res) => {
  const todo = await Todo.findOne({
    where: {
      id: req.params.id,
    },
  });

  try {
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//  TODO  Create New Todo

router.post("/todos", async (req, res) => {
  const { content, description } = req.body;

  const newTodo = Todo.build({
    content: content,
    description: description,
  });

  try {
    await newTodo.save();
    res.status(201).json({ newTodo });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// Todo Update Todo By Id
router.patch("/todos/:id", async (req, res) => {
  const { content, description } = req.body;

  const todo = await Todo.findOne({
    where: {
      id: req.params.id,
    },
  });

  const { isCompleted } = req.body;
  try {
    await todo.set({
      isCompleted: isCompleted,
    });
    await todo.save();
    res.status(200).json({ todo });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// Todo Update Todo By Id


router.put("/todos/:id", async (req, res) => {
    const { content, description ,isCompleted} = req.body;
  
    const todo = await Todo.findOne({
      where: {
        id: req.params.id,
      },
    });
  
    
    try {
      await todo.set({
        content: content,
        description: description,
        isCompleted: isCompleted,
      });
      await todo.save();
      res.status(200).json({ todo });
    } catch (err) {
      res.status(400).json({ err });
    }
  });


// !Delete Todo By Id
/*
router.delete("/todos/:id", async(req, res) => {
  
   const todo = Todo.findOne({
    where: {
      id: req.params.id,
    },
});

    await todo.destroy();
   try {
    res.status(204).json({ todo });
    res.send("Todo deleted successfully");
    } catch (err) {

    res.status(400).json({ err });
    }



});
*/



module.exports = router;
