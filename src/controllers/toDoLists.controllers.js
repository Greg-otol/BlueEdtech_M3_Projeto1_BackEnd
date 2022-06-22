const toDoListsService = require('../services/toDoLists.services');

const allToDoListsController = (req, res) => {
  const alltoDoLists = toDoListsService.allToDoListsService();
  res.send(alltoDoLists);
};

const findToDoListByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenToDoList = toDoListsService.findToDoListByIdService(idParam);
  res.send(chosenToDoList);
};

const createToDoListController = (req, res) => {
  const toDoList = req.body;
  const newToDoList = toDoListsService.createToDoListservice(toDoList);
  res.send(newToDoList);
};

const updateToDoListController = (req, res) => {
  const idParam = +req.params.id;
  const toDoListEdit = req.body;
  const updatedToDoList = toDoListsService.updateToDoListservice(idParam, toDoListEdit);
  res.send(updatedToDoList);
};

const deleteToDoListController = (req, res) => {
  const idParam = req.params.id;
  toDoListsService.deleteToDoListservice(idParam);
  res.send({ message: 'Tarefa removida com sucesso!' });
};

module.exports = {
  allToDoListsController,
  findToDoListByIdController,
  createToDoListController,
  updateToDoListController,
  deleteToDoListController
};
