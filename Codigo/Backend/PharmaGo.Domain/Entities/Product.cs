using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PharmaGo.Domain.Entities
{
    public class Product
    {
        private string productName;
        private string productDescription;
        private double productPrice;
        private int productCode;

        public Product()
        {
        }

        public Product(int code,string productName, string productDescription, double productPrice)
        {
            this.productName = productName;
            this.productDescription = productDescription;
            this.productPrice = productPrice;
            this.productCode = code;
        }

        public string Name { get; set; }
        public string Description { get; set; }
        public int Code { get; set; }
        public double Price { get; set; }
    }
}
