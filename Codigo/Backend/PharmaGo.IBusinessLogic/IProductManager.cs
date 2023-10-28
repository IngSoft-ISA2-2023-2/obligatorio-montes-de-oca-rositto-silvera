using ExportationModel.ExportDomain;
using PharmaGo.Domain.Entities;
using PharmaGo.Domain.SearchCriterias;

namespace PharmaGo.IBusinessLogic
{
    public interface IProductManager
    {
        Product GetById(int id);
        Product Create(Product product, string token);
        Product Update(Product product, string token);
        void Delete(String id);
        IEnumerable<Product> GetAll(ProductSearchCriteria productSearchCriteria);        
    }
}