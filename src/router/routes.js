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

router.delete("/todos/:id", async (req, res) => {
    try {
      const todo = await Todo.findOne({
        where: {
          id: req.params.id,
        },
      });
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
      }
  
      await todo.destroy();
  
      res.status(204).send("Todo deleted successfully");
      
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });




module.exports = router;
