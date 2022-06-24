const toDoListsService = require("../services/toDoLists.services");

const allToDoListsController = (req, res) => {
  const alltoDoLists = toDoListsService.allToDoListsService();
  if (alltoDoLists.length == 0) {
    res.send({ message: 'Nenhuma tarefa cadastrada!' });
  } else {
    res.send(alltoDoLists);
  }
};

const findToDoListByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = toDoListsService.findToDoListByIdService(idParam);
  if (chosenToDoList === undefined) {
    res.send({ message: "Tarefa não encontrada!" });
  } else {
    res.send(chosenToDoList);
  }
};

const createToDoListController = (req, res) => {
  const toDoList = req.body;
  if (
    toDoList.name == "" ||
    toDoList.description == "" ||
    toDoList.date == ""
  ) {
    res.send({ message: "Preencha todos os campos!" });
  } else {
    const newToDoList = toDoListsService.createToDoListservice(toDoList);
    res.status(201).send({
      newToDoList,
      message: `Tarefa '${toDoList.name}' criada com sucesso!`,
    });
  }
};

const updateToDoListController = (req, res) => {
  const idParam = +req.params.id;
  const chosenToDoList = toDoListsService.findToDoListByIdService(idParam);
  const toDoListEdit = req.body;
  const updatedToDoList = toDoListsService.updateToDoListservice(
    idParam,
    toDoListEdit
  );
  if (chosenToDoList === undefined) {
    res.send({ message: "Tarefa não encontrada!" });
  }
  if (
    toDoListEdit.name == "" ||
    toDoListEdit.description == "" ||
    toDoListEdit.date == ""
  ) {
    res.send({ message: "Preencha todos os campos!" });
  } else {
    res.send({
      message: `A tarefa '${chosenToDoList.name.toUpperCase()}' foi editada para '${toDoListEdit.name.toUpperCase()}'!`,
      updatedToDoList,
    });
  }
};

const deleteToDoListController = (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = toDoListsService.findToDoListByIdService(idParam);
  if (chosenToDoList === undefined) {
    res.send({ message: "Tarefa não encontrada!" });
  } else {
    toDoListsService.deleteToDoListservice(idParam);
    res.send({
      message: `Tarefa '${chosenToDoList.name.toUpperCase()}' removida com sucesso!`,
    });
  }
};

module.exports = {
  allToDoListsController,
  findToDoListByIdController,
  createToDoListController,
  updateToDoListController,
  deleteToDoListController,
};
