using FactoryMobil.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FactoryMobil.Web.Controllers;

public class DashboardController : Controller
{
    public IActionResult Index(string role = "User")
    {
        var vm = new DashboardViewModel
        {
            TotalEmployees = 124,
            AbsentToday = 7,
            OvertimeToday = 18,
            ActiveLeaves = 5,
            Role = role,
            SalaryDistribution = new List<ChartPoint>
            {
                new("Üretim", 35), new("Paketleme", 28), new("Lojistik", 22), new("Yönetim", 15)
            },
            OvertimeDensity = new List<ChartPoint>
            {
                new("Pzt", 12), new("Sal", 15), new("Çar", 11), new("Per", 17), new("Cum", 20)
            }
        };
        return View(vm);
    }
}
