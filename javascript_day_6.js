const express = require('express');
const fs = require('fs').promises; // Use promises version of fs module
const app = express();
const port = 3000;

// Middleware to handle Basic Authentication
const authenticateUser = (req, res, next) => {
  // implementation here...
};

// Purchase book endpoint
app.post('/api/purchase-book', authenticateUser, async (req, res) => {
  // implementation here...
});

// Endpoint 1: Read text file using promise with await
app.get('/api/read-file-with-await', async (req, res) => {
  try {
    const fileContent = await fs.readFile('my-file.txt', 'utf-8');
    console.log(fileContent);
    res.send('File content read successfully using await!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error reading file using await');
  }
});

// Endpoint 2: Read text file using promise without await
app.get('/api/read-file-without-await', (req, res) => {
  fs.readFile('my-file.txt', 'utf-8')
    .then((fileContent) => {
      console.log(fileContent);
      res.send('File content read successfully without await!');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error reading file without await');
    });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
