
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
﻿using PharmaGo.Exceptions;
using System.Collections.Generic;
using System.Diagnostics;


namespace PharmaGo.Domain.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public Pharmacy? Pharmacy { get; set; }
        public decimal Price { get; set; }

        public void ValidOrFail()
        {
            if (string.IsNullOrEmpty(Code) || string.IsNullOrEmpty(Name))
                    
                   
            {
                throw new InvalidResourceException("The Drug is not correctly created.");
            }
        }



        /* public Product(int code, string productName, string productDescription, decimal productPrice)
          {
              this.Name = productName;
              this.Description = productDescription;
              this.Price = productPrice;
              this.Id = code;
          }*/

    }
}

