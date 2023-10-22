using PharmaGo.Exceptions;
using System.Collections.Generic;
using System.Diagnostics;

namespace PharmaGo.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Pharmacy? Pharmacy { get; set; }
        public decimal Price { get; set; }

        
    }
}