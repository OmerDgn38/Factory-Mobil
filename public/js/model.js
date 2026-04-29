const DB = {
  users: [
    { username: "personel", password: "123456", role: "user" },
    { username: "admin", password: "admin123", role: "admin" }
  ],
  workers: [
    { id: 1, name: "Ahmet", surname: "Yılmaz", phone: "05551112233", address: "İstanbul", position: "Operatör", status: "Geldi" },
    { id: 2, name: "Ayşe", surname: "Demir", phone: "05553334455", address: "Kocaeli", position: "Paketleme", status: "Gelmedi" },
    { id: 3, name: "Mehmet", surname: "Kara", phone: "05556667788", address: "Bursa", position: "Vardiya Şefi", status: "Mesai" }
  ],
  payrolls: [
    { workerId: 1, month: "Nisan 2026", base: 32000, overtime: 2500, bonus: 1000 },
    { workerId: 2, month: "Nisan 2026", base: 29000, overtime: 0, bonus: 500 },
    { workerId: 3, month: "Nisan 2026", base: 40000, overtime: 4200, bonus: 1500 }
  ],
  overtimes: [
    { workerId: 1, date: "2026-04-28", hours: 2 },
    { workerId: 3, date: "2026-04-29", hours: 4 }
  ],
  leaves: [
    { workerId: 1, total: 14, used: 4 },
    { workerId: 2, total: 14, used: 8 },
    { workerId: 3, total: 20, used: 3 }
  ]
};

const Model = {
  login(username, password, role) {
    return DB.users.find(u => u.username === username && u.password === password && u.role === role);
  },
  getWorkers() { return DB.workers; },
  getPayrolls() { return DB.payrolls; },
  getOvertimes() { return DB.overtimes; },
  getLeaves() { return DB.leaves; }
};
