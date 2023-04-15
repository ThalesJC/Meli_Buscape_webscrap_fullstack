import app from './app';
import Loaders from './Loaders';

const loaders = new Loaders();
loaders.start();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server is running..."));
