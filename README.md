# Factory Mobil - ASP.NET MVC Proje Taslağı

Bu repo, talep edilen **ASP.NET MVC + SQL Server + HTML/CSS/JS** mimarisi için geliştirilmiş kapsamlı bir başlangıç iskeletidir.

## İçerik
- `FactoryMobil.Web/Controllers`: Auth, Dashboard, Employee controller'ları
- `FactoryMobil.Web/ViewModels`: Login ve Dashboard view model'leri
- `FactoryMobil.Web/Views`: Razor view ekranları
- `FactoryMobil.Web/wwwroot/css/site.css`: Modern responsive tema
- `FactoryMobil.Web/wwwroot/js/dashboard.js`: Chart.js dashboard grafikleri
- `database/schema.sql`: SQL Server tablo tasarımı (Roles, Users, Employees, Salaries, Overtimes, Leaves)

## Sağlanan özellikler
- Kullanıcı/Admin giriş akışı (demo logic)
- Rol bazlı ayrıştırılmış sayfa akışı
- Dashboard KPI kartları
- Maaş dağılımı ve mesai yoğunluk grafikleri
- SQL Server için profesyonel tablo yapısı

## Sonraki adımlar
1. ASP.NET Core MVC projesini `dotnet new mvc` ile initialize etmek
2. EF Core + SQL Server bağlantısı eklemek
3. Cookie authentication + authorization policy eklemek
4. CRUD ekranlarını DB ile tam entegre hale getirmek
5. Export (Excel/PDF), filtreleme ve bildirim modüllerini eklemek
