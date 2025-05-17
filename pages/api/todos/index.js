const data = [
  { id: 1, title: 'todo 1' },
  { id: 2, title: 'todo 2' },
  { id: 3, title: 'todo 3' },
  { id: 4, title: 'todo 4' },
  { id: 5, title: 'todo 5' },
  { id: 6, title: 'todo 6' },
  { id: 7, title: 'todo 7' },
];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(data);
      break;

    case 'POST':
      const value = req.body;
      res.status(201).json({ message: 'Todo setted successfully' });
      break;

    default:
      res.status(405).json({ message: 'Method not allowed' });
  }
}
