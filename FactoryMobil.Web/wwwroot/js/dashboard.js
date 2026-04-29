window.renderDashboardCharts = function (salary, overtime) {
  new Chart(document.getElementById('salaryChart'), {
    type: 'doughnut',
    data: { labels: salary.map(x => x.label), datasets: [{ data: salary.map(x => x.value) }] }
  });
  new Chart(document.getElementById('overtimeChart'), {
    type: 'bar',
    data: { labels: overtime.map(x => x.label), datasets: [{ label: 'Saat', data: overtime.map(x => x.value) }] }
  });
};
