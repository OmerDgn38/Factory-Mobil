namespace FactoryMobil.Web.ViewModels;

public class DashboardViewModel
{
    public int TotalEmployees { get; set; }
    public int AbsentToday { get; set; }
    public int OvertimeToday { get; set; }
    public int ActiveLeaves { get; set; }
    public string Role { get; set; } = "User";
    public List<ChartPoint> SalaryDistribution { get; set; } = new();
    public List<ChartPoint> OvertimeDensity { get; set; } = new();
}

public record ChartPoint(string Label, int Value);
