using ExportationModel.ExportDomain;
using PharmaGo.Domain.Entities;
using PharmaGo.Domain.SearchCriterias;

namespace PharmaGo.IBusinessLogic
{
    public interface IProductManager
    {
        Product GetById(int id);
        Product Create(Product product, string token);
        Product Update(Product product);
        void Delete(int id);
        
    }
}