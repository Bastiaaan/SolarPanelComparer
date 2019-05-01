using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Webshop.Data.Models
{
    [Table("User")]
    public class User
    {
        public int Id { get; set; }
    }
}
