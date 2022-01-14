using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Domain
{
    public class Activity
    {
        //можно указать [Key] перед первичным ключом, а можно просто имя "Id"
        public Guid Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string City { get; set; }
        public string Venue { get; set; }
        
        public bool IsCancelled { get; set; }
        public ICollection<ActivityAttendee> Attendees { get; set; } = new List<ActivityAttendee>();

        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}