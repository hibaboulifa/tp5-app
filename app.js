const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('🚀 Hello from CI/CD Node App!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
