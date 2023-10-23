﻿using PharmaGo.Domain.Entities;

namespace PharmaGo.WebApi.Models.Out
{
    public class ProductBasicModel
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public PharmacyBasicModel Pharmacy { get; set; }

        public ProductBasicModel(Product product)
        {
            Id = product.Id;
            Code = product.Code;
            Name = product.Name;
            Price = product.Price;
            Pharmacy = new PharmacyBasicModel(product.Pharmacy);
        }
    }
}
