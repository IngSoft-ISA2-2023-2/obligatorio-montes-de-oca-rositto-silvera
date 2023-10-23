using PharmaGo.Domain.Entities;

namespace PharmaGo.WebApi.Models.In
{
    public class ProductModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public int PharmacyId { get; set; }
        
        public Product ToEntity()
        {
            return new Product()
            {
                Id = Id,
                Name = Name,                
                Price = Price,
                Description = Description,
                Pharmacy = new Pharmacy() { Id = this.PharmacyId }
            };
        }
    }
}
