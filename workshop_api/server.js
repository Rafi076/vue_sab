// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

let workshops = [
  [
  {
    "id": 1,
    "workshopName": "R",
    "personName": "Rafi",
    "startDate": "2023-03-12",
    "endDate": "2025-08-30"
  },
  {
    "id": 2,
    "workshopName": "ZM",
    "personName": "John Doe",
    "startDate": "2022-11-15",
    "endDate": "2025-06-25"
  },
  {
    "id": 3,
    "workshopName": "ZZ",
    "personName": "Sarah Ali",
    "startDate": "2023-07-22",
    "endDate": "2025-09-05"
  },
  {
    "id": 4,
    "workshopName": "G",
    "personName": "Michael Smith",
    "startDate": "2022-05-10",
    "endDate": "2025-08-18"
  },
  {
    "id": 5,
    "workshopName": "B",
    "personName": "Emily Johnson",
    "startDate": "2023-01-08",
    "endDate": "2025-07-22"
  },
  {
    "id": 6,
    "workshopName": "ZS",
    "personName": "David Lee",
    "startDate": "2022-09-30",
    "endDate": "2025-05-19"
  },
  {
    "id": 7,
    "workshopName": "R",
    "personName": "Sophia Turner",
    "startDate": "2023-02-14",
    "endDate": "2025-09-01"
  },
  {
    "id": 8,
    "workshopName": "ZM",
    "personName": "Chris Evans",
    "startDate": "2022-06-17",
    "endDate": "2025-04-15"
  },
  {
    "id": 9,
    "workshopName": "ZZ",
    "personName": "Olivia Brown",
    "startDate": "2023-05-09",
    "endDate": "2025-06-10"
  },
  {
    "id": 10,
    "workshopName": "G",
    "personName": "Liam Wilson",
    "startDate": "2022-12-01",
    "endDate": "2025-07-20"
  },
  {
    "id": 11,
    "workshopName": "B",
    "personName": "Ava Davis",
    "startDate": "2023-04-27",
    "endDate": "2025-09-10"
  },
  {
    "id": 12,
    "workshopName": "ZS",
    "personName": "Noah Miller",
    "startDate": "2022-10-03",
    "endDate": "2025-08-07"
  },
  {
    "id": 13,
    "workshopName": "R",
    "personName": "Emma Garcia",
    "startDate": "2023-08-19",
    "endDate": "2025-07-02"
  },
  {
    "id": 14,
    "workshopName": "ZM",
    "personName": "Ethan Martinez",
    "startDate": "2022-03-25",
    "endDate": "2025-06-15"
  },
  {
    "id": 15,
    "workshopName": "ZZ",
    "personName": "Isabella Anderson",
    "startDate": "2023-09-10",
    "endDate": "2025-08-28"
  },
  {
    "id": 16,
    "workshopName": "G",
    "personName": "Alexander Thomas",
    "startDate": "2022-07-14",
    "endDate": "2025-05-30"
  },
  {
    "id": 17,
    "workshopName": "B",
    "personName": "Mia Scott",
    "startDate": "2023-01-19",
    "endDate": "2025-09-08"
  },
  {
    "id": 18,
    "workshopName": "ZS",
    "personName": "Benjamin Harris",
    "startDate": "2022-11-05",
    "endDate": "2025-07-12"
  },
  {
    "id": 19,
    "workshopName": "R",
    "personName": "Charlotte Lewis",
    "startDate": "2023-06-23",
    "endDate": "2025-09-04"
  },
  {
    "id": 20,
    "workshopName": "ZM",
    "personName": "Henry Walker",
    "startDate": "2022-04-11",
    "endDate": "2025-06-27"
  },
  {
    "id": 21,
    "workshopName": "ZZ",
    "personName": "Amelia Young",
    "startDate": "2023-02-28",
    "endDate": "2025-08-12"
  },
  {
    "id": 22,
    "workshopName": "G",
    "personName": "Daniel King",
    "startDate": "2022-08-30",
    "endDate": "2025-05-08"
  },
  {
    "id": 23,
    "workshopName": "B",
    "personName": "Harper Wright",
    "startDate": "2023-03-17",
    "endDate": "2025-09-09"
  },
  {
    "id": 24,
    "workshopName": "ZS",
    "personName": "Jack Baker",
    "startDate": "2022-12-05",
    "endDate": "2025-07-21"
  },
  {
    "id": 25,
    "workshopName": "R",
    "personName": "Evelyn Adams",
    "startDate": "2023-05-02",
    "endDate": "2025-08-15"
  },
  {
    "id": 26,
    "workshopName": "ZM",
    "personName": "Lucas Nelson",
    "startDate": "2022-06-29",
    "endDate": "2025-06-02"
  },
  {
    "id": 27,
    "workshopName": "ZZ",
    "personName": "Avery Carter",
    "startDate": "2023-07-06",
    "endDate": "2025-09-03"
  },
  {
    "id": 28,
    "workshopName": "G",
    "personName": "William Mitchell",
    "startDate": "2022-09-18",
    "endDate": "2025-05-25"
  },
  {
    "id": 29,
    "workshopName": "B",
    "personName": "Ella Perez",
    "startDate": "2023-01-23",
    "endDate": "2025-08-19"
  },
  {
    "id": 30,
    "workshopName": "ZS",
    "personName": "James Roberts",
    "startDate": "2022-10-12",
    "endDate": "2025-07-14"
  }
]

];

// GET all workshops
app.get("/api/workshops", (req, res) => {
  res.json(workshops);
});

// POST new workshop
app.post("/api/workshops", (req, res) => {
  const newWorkshop = { id: Date.now(), ...req.body };
  workshops.push(newWorkshop);
  res.status(201).json(newWorkshop);
});

// DELETE workshop
app.delete("/api/workshops/:id", (req, res) => {
  const id = Number(req.params.id);
  workshops = workshops.filter(w => w.id !== id);
  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`✅ API running on http://localhost:${PORT}`);
});
