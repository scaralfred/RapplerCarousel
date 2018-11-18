const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
