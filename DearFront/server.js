import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json("This is MainPage");
});

app.get('/start', (req, res) => {
res.json("This is StartPage");
});

app.post('/api/image', (req, res) => {
  const userMessage = req.body.message;
  // const imageUrl = "https://via.placeholder.com/150"; // Replace with your image generation logic
  const imageUrl = "https://picsum.photos/id/1/200/300"
  res.json({ imageUrl });
});

app.post('/command_image', (req, res) => {
  const userCommand = req.body.text;

  if (!userCommand) {
    return res.status(400).json({ message: 'No command received' });
  }

  console.log(`Received command: ${userCommand}`);
  res.json({ message: `Command '${userCommand}' received successfully` });
});

app.post('/command', (req, res) => {
  const userCommand = req.body.text;

  if (!userCommand) {
    return res.status(400).json({ message: 'No command received' });
  }

  console.log(`Received command: ${userCommand}`);
  res.json({ message: `Command '${userCommand}' received successfully` });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});