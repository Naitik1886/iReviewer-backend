require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const aiRoutes = require('./routes/ai.routes.js');
const cors = require('cors');


app.use(cors());

app.use(express.json());


app.use("/ai", aiRoutes)

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`);})
