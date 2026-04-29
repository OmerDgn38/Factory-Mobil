CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('user','admin'))
);

CREATE TABLE workers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  address TEXT,
  position TEXT,
  hire_date DATE,
  status TEXT
);

CREATE TABLE payrolls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  worker_id INTEGER NOT NULL,
  period TEXT NOT NULL,
  base_salary REAL NOT NULL,
  overtime_payment REAL DEFAULT 0,
  bonus REAL DEFAULT 0,
  deductions REAL DEFAULT 0,
  FOREIGN KEY(worker_id) REFERENCES workers(id)
);

CREATE TABLE overtimes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  worker_id INTEGER NOT NULL,
  overtime_date DATE NOT NULL,
  hours REAL NOT NULL,
  description TEXT,
  FOREIGN KEY(worker_id) REFERENCES workers(id)
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  worker_id INTEGER NOT NULL,
  leave_type TEXT,
  total_days INTEGER,
  used_days INTEGER,
  remaining_days INTEGER,
  FOREIGN KEY(worker_id) REFERENCES workers(id)
);

INSERT INTO users (username, password, role) VALUES
('personel', '123456', 'user'),
('admin', 'admin123', 'admin');
