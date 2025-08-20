const express = require('express');
const cors = require('cors');
const { getProperties } = require('./database'); // ajuste conforme seu arquivo

const app = express();
app.use(cors());
app.use(express.json());

app.get('/properties', async (req, res) => {
  const properties = await getProperties();
  res.json(properties);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
