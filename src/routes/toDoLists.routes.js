const routes = require('express').Router();

const toDoListsController = require('../controllers/toDoLists.controllers');

routes.get('/all-todolists', toDoListsController.allToDoListsController);
routes.get('/find-todolist/:id', toDoListsController.findToDoListByIdController);
routes.post('/create', toDoListsController.createToDoListController);
routes.put('/update/:id', toDoListsController.updateToDoListController);
routes.delete('/delete/:id', toDoListsController.deleteToDoListController);

module.exports = routes;
