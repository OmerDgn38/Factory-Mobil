using FactoryMobil.Web.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace FactoryMobil.Web.Controllers;

public class AuthController : Controller
{
    [HttpGet]
    public IActionResult Login() => View(new LoginViewModel());

    [HttpPost]
    public IActionResult Login(LoginViewModel model)
    {
        if (!ModelState.IsValid) return View(model);
        // TODO: DB doğrulama + Cookie Authentication
        if (model.UserName == "admin" && model.Password == "admin123")
            return RedirectToAction("Index", "Dashboard", new { role = "Admin" });

        if (model.UserName == "personel" && model.Password == "123456")
            return RedirectToAction("MyProfile", "Employee");

        ModelState.AddModelError(string.Empty, "Kullanıcı adı veya şifre hatalı.");
        return View(model);
    }

    public IActionResult Logout() => RedirectToAction(nameof(Login));
}
