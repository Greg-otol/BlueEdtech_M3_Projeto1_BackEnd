const express = require('express');
const cors = require('cors');
const port = 3000;
const application = express();
const routes = require('./src/routes/toDoLists.routes');

application.use(cors());
application.use(express.json());

application.use('/todolists', routes);

application.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
