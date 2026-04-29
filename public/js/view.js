const View = {
  workers(workers) {
    return `<section class="card"><h2>İşçi Bilgileri</h2><table><tr><th>Ad</th><th>Soyad</th><th>Telefon</th><th>Adres</th><th>Mevki</th><th>Durum</th></tr>${workers.map(w => `<tr><td>${w.name}</td><td>${w.surname}</td><td>${w.phone}</td><td>${w.address}</td><td>${w.position}</td><td>${w.status}</td></tr>`).join("")}</table></section>`;
  },
  payroll(payrolls, workers) {
    return `<section class="card"><h2>Bordrolar</h2>${payrolls.map(p => {
      const w = workers.find(x => x.id === p.workerId);
      return `<div class="tile"><h3>${w.name} ${w.surname}</h3><p>${p.month}</p><p>Temel: ₺${p.base}</p><p>Mesai: ₺${p.overtime}</p><p>Prim: ₺${p.bonus}</p><strong>Toplam: ₺${p.base + p.overtime + p.bonus}</strong></div>`;
    }).join("")}</section>`;
  },
  overtime(overtimes, workers) {
    return `<section class="card"><h2>Mesai Kayıtları</h2><ul>${overtimes.map(o => {
      const w = workers.find(x => x.id === o.workerId);
      return `<li>${o.date}: ${w.name} ${w.surname} - ${o.hours} saat</li>`;
    }).join("")}</ul></section>`;
  },
  leaves(leaves, workers) {
    return `<section class="card"><h2>İzin Takibi</h2>${leaves.map(l => {
      const w = workers.find(x => x.id === l.workerId);
      return `<div class="tile"><h3>${w.name} ${w.surname}</h3><p>Toplam izin: ${l.total} gün</p><p>Kullanılan: ${l.used} gün</p><strong>Kalan: ${l.total - l.used} gün</strong></div>`;
    }).join("")}</section>`;
  },
  admin(workers, overtimes) {
    const absent = workers.filter(w => w.status === "Gelmedi").length;
    const overtimeCount = workers.filter(w => w.status === "Mesai").length;
    return `<section class="card"><h2>Admin Dashboard</h2><div class="stats"><div class="stat">Toplam İşçi: ${workers.length}</div><div class="stat danger">Bugün Gelmeyen: ${absent}</div><div class="stat success">Bugün Mesai Yapan: ${overtimeCount}</div><div class="stat">Toplam Mesai Kaydı: ${overtimes.length}</div></div><p>Detaylar için üst menüden ilgili alanlara geçiş yapabilirsiniz.</p></section>`;
  }
};
