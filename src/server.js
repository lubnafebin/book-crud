const app = require('./app');
const connectDB = require('./connections/connection');

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    await connectDB();
    console.log('severe listening on PORT', PORT);

})