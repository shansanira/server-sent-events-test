import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3100;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
