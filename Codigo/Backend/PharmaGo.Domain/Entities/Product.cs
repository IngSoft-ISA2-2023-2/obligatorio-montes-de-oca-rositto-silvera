
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;

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

        public Product()
        {
        }

        public void ValidOrFail()
        {
            if (string.IsNullOrWhiteSpace(Code))
            {
                throw new ValidationException("El código no puede ser vacío.");
            }
            /*
            if (productList.Any(p => p != this && p.Code == Code))
            {
                throw new ValidationException("El código ya está en uso por otro producto.");
            }*/

            if (string.IsNullOrWhiteSpace(Name))
            {
                throw new ValidationException("El nombre no puede ser vacío.");
            }

            if (string.IsNullOrWhiteSpace(Description))
            {
                throw new ValidationException("La descripción no puede estar vacía.");
            }
        }
    }
}

