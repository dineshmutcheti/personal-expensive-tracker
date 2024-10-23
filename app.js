const express = require('express');
const transactionRoutes = require('./routes/transactionRoutes');
const categoryRoutes = require('./routes/categories');



const app = express();
const port = 3000;

app.use(express.json());

app.use('/transactions', transactionRoutes);
app.use('/', categoryRoutes); 

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
