using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //create a new table - new entity of Activity (у нас уже есть этот класс - это название таблицы в БД)
        public DbSet<Activity> Activities { get; set; }
    }
}