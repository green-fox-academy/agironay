'use strict';

const routes = require('../cargo/route');
const port = 3000;

routes.listen(port, () => {
  console.log(`Server running on port ${port}`);
});