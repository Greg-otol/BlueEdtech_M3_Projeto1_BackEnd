const toDoListsService = require("../services/toDoLists.services");

const allToDoListsController = (req, res) => {
  const alltoDoLists = toDoListsService.allToDoListsService();
    res.send(alltoDoLists);
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
    toDoList.date == "" ||
    toDoList.name == undefined ||
    toDoList.description == undefined ||
    toDoList.date == undefined
  ) {
    res.send({ message: "Preencha todos os campos!" });
  } else {
    const newToDoList = toDoListsService.createToDoListservice(toDoList);
    res.status(201).send({
      message: `Tarefa '${toDoList.name.toUpperCase()}' criada com sucesso!`,
      newToDoList
    });
  }
};

const updateToDoListController = (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = toDoListsService.findToDoListByIdService(idParam);
  const toDoListEdit = req.body;
  
  if (chosenToDoList === undefined) {
    res.send({ message: "Tarefa não encontrada!" });
  }
  else if (
    toDoListEdit.name == "" ||
    toDoListEdit.description == "" ||
    toDoListEdit.date == "" ||
    toDoListEdit.name == undefined ||
    toDoListEdit.description == undefined ||
    toDoListEdit.date == undefined
  ) {
    return res.send({ message: "Preencha todos os campos!" });
  } else {
    const updatedToDoList = toDoListsService.updateToDoListservice(
      idParam,
      toDoListEdit
    );
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
