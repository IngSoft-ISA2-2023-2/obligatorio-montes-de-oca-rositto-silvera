using PharmaGo.Domain.Entities;
using PharmaGo.Exceptions;
using PharmaGo.IBusinessLogic;
using PharmaGo.IDataAccess;

namespace PharmaGo.BusinessLogic
{
    public class ProductsManager : IProductManager
    {
        private readonly IRepository<Product> _productRepository;
        private readonly IRepository<Pharmacy> _pharmacyRepository;
        private readonly IRepository<Session> _sessionRepository;
        private readonly IRepository<User> _userRepository;

        public ProductsManager(IRepository<Product> productRepo,
                           IRepository<Pharmacy> pharmacyRepository,
                           IRepository<Session> sessionRespository,
                           IRepository<User> userRespository)
        {
            _productRepository = productRepo;
            _pharmacyRepository = pharmacyRepository;
            _sessionRepository = sessionRespository;
            _userRepository = userRespository;
        }

        public Product GetById(int id)
        {
            Product retrievedProduct = _productRepository.GetOneByExpression(d => d.Id == id);
            if (retrievedProduct == null)
            {
                throw new ResourceNotFoundException("The product does not exist.");
            }

            return retrievedProduct;
        }

        public Product Create(Product product, string token)
        {
            if (product == null)
            {
                throw new ResourceNotFoundException("Please create a product before inserting it.");
            }
            product.ValidOrFail();

            var guidToken = new Guid(token);
            Session session = _sessionRepository.GetOneByExpression(s => s.Token == guidToken);
            var userId = session.UserId;
            User user = _userRepository.GetOneDetailByExpression(u => u.Id == userId);

            Pharmacy pharmacyOfProduct = _pharmacyRepository.GetOneByExpression(p => p.Id == user.Pharmacy.Id);
            if (pharmacyOfProduct == null)
            {
                throw new ResourceNotFoundException("The pharmacy of the product does not exist.");
            }

            if (_productRepository.Exists(p => p.Code == product.Code && p.Pharmacy.Id == pharmacyOfProduct.Id))
            {
                throw new InvalidResourceException("The product already exists in that pharmacy.");
            }
            product.Pharmacy.Id = pharmacyOfProduct.Id;
            _productRepository.InsertOne(product);
            _productRepository.Save();
            return product;
        }

        public Product Update(Product updatedProduct)
        {
            if (updatedProduct == null)
            {
                throw new ResourceNotFoundException("The updated product is invalid.");
            }
            updatedProduct.ValidOrFail();
            var productSaved = _productRepository.GetOneByExpression(d => d.Id == updatedProduct.Id);
            if (productSaved == null)
            {
                throw new ResourceNotFoundException("The product to update does not exist.");
            }
            productSaved.Code = updatedProduct.Code;
            productSaved.Name = updatedProduct.Name;
            productSaved.Price = updatedProduct.Price;
            productSaved.Description = updatedProduct.Description;
            _productRepository.UpdateOne(productSaved);
            _productRepository.Save();
            return productSaved;
        }

        public void Delete(int id)
        {
            var productSaved = _productRepository.GetOneByExpression(d => d.Id == id);
            if (productSaved == null)
            {
                throw new ResourceNotFoundException("The product to delete does not exist.");
            }
            _productRepository.DeleteOne(productSaved);
            _productRepository.Save();
        }
            }
}
