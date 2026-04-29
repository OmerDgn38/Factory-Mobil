(function () {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const role = document.getElementById("role").value;
      const user = Model.login(username, password, role);
      if (!user) return alert("Hatalı giriş bilgileri");
      localStorage.setItem("factoryUser", JSON.stringify(user));
      location.href = "dashboard.html";
    });
  }

  const content = document.getElementById("content");
  if (content) {
    const user = JSON.parse(localStorage.getItem("factoryUser") || "null");
    if (!user) location.href = "index.html";

    const workers = Model.getWorkers();
    const payrolls = Model.getPayrolls();
    const overtimes = Model.getOvertimes();
    const leaves = Model.getLeaves();

    function render(page) {
      if (page === "workers") content.innerHTML = View.workers(workers);
      if (page === "payroll") content.innerHTML = View.payroll(payrolls, workers);
      if (page === "overtime") content.innerHTML = View.overtime(overtimes, workers);
      if (page === "leaves") content.innerHTML = View.leaves(leaves, workers);
      if (page === "admin") {
        if (user.role !== "admin") return alert("Bu alan sadece admin içindir.");
        content.innerHTML = View.admin(workers, overtimes);
      }
    }

    render("workers");
    document.querySelectorAll("[data-page]").forEach(item => item.addEventListener("click", (e) => {
      e.preventDefault();
      render(item.dataset.page);
    }));

    document.getElementById("logoutBtn").addEventListener("click", () => {
      localStorage.removeItem("factoryUser");
      location.href = "index.html";
    });
  }
})();
