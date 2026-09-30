using Microsoft.EntityFrameworkCore;
using WebApplication_HBA.Models;

namespace WebApplication_HBA.Data;

public class AppDbContext : DbContext
{
	public AppDbContext(DbContextOptions<AppDbContext> options)
		: base(options)
	{
	}

	public DbSet<Todo> Todos { get; set; }
}
