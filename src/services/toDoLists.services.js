const toDoLists = require('../models/databaseRam')

const allToDoListsService = () => {
  return toDoLists;
};

const findToDoListByIdService = (id) => {
  return toDoLists.find((toDoList) => toDoList.id == id);
};

const createToDoListservice = (newToDoList) => {
  const newId = toDoLists.length + 1;
  newToDoList.id = newId;
  toDoLists.push(newToDoList);
  return newToDoList;
};

const updateToDoListservice = (id, toDoListEdited) => {
  toDoListEdited['id'] = id;
  const toDoListIndex = toDoLists.findIndex((toDoList) => toDoList.id == id);
  toDoLists[toDoListIndex] = toDoListEdited;
  return toDoListEdited;
};

const deleteToDoListservice = (id) => {
  const toDoListIndex = toDoLists.findIndex((toDoList) => toDoList.id == id);
  return toDoLists.splice(toDoListIndex, 1);
};

module.exports = {
  allToDoListsService,
  findToDoListByIdService,
  createToDoListservice,
  updateToDoListservice,
  deleteToDoListservice
};
