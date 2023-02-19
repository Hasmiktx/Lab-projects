const users = [
  {
    name: "Hasmik",
    surName: "Ter-Khachatryan",
  },
  {
    name: "Hayk",
    surName: "Hakobyan",
  },
];

export default function handler(req, res) {
  res.status(200).json(users);
}
