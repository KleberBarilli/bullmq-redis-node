import 'dotenv/config';
import express from 'express';
import queue from './bull/queue'; 

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    const { emails } = req.body;

    await queue.add('send-mail', { from:'youremailverify@email.com', recipients: emails, subject: 'Subject', html: '<p>Hello World</p>' })

    return res.status(200).json({ message: 'E-mails sent' });
})

queue.process();

app.listen(3333, () => {
    console.log('Server listening on port 3333')
})