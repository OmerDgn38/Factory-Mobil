using Microsoft.AspNetCore.Mvc;

namespace FactoryMobil.Web.Controllers;

public class EmployeeController : Controller
{
    public IActionResult Index() => View();
    public IActionResult MyProfile() => View();
    public IActionResult Payroll() => View();
    public IActionResult Overtimes() => View();
    public IActionResult Leaves() => View();
}
