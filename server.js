import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/image', (req, res) => {
  const userMessage = req.body.message;
  // const imageUrl = "https://via.placeholder.com/150"; // Replace with your image generation logic
  const imageUrl = "https://picsum.photos/150";
  res.json({ imageUrl });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
