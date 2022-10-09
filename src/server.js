import 'dotenv/config';
import express from 'express';
import queue from './bull/queue'; 

const app = express();

queue.process();

app.listen(3333, () => {
    console.log('Server listening on port 3333')
})