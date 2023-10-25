﻿using Microsoft.AspNetCore.Mvc;
using PharmaGo.BusinessLogic;
using PharmaGo.Domain.Entities;
using PharmaGo.Domain.SearchCriterias;
using PharmaGo.IBusinessLogic;
using PharmaGo.WebApi.Enums;
using PharmaGo.WebApi.Filters;
using PharmaGo.WebApi.Models.In;
using PharmaGo.WebApi.Models.Out;

namespace PharmaGo.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [TypeFilter(typeof(ExceptionFilter))]
    public class ProductsController : Controller
    {
        private readonly IProductManager _productManager;

        public ProductsController(IProductManager manager)
        {
            _productManager = manager;
        }

        //[HttpGet]
        //[AuthorizationFilter(new string[] { nameof(RoleType.Employee) })]
        //public IActionResult GetAll()
        //{
            
        //    return Ok(Array.Empty<UpdateProductModel>());
        //}
        

        [HttpPost]
        [AuthorizationFilter(new string[] { nameof(RoleType.Employee) })]
        public IActionResult Create([FromBody] UpdateProductModel productModel)
        {
            string token = HttpContext.Request.Headers["Authorization"];
            Product productCreated = _productManager.Create(productModel.ToEntity(), token);
            ProductDetailModel productResponse = new ProductDetailModel(productCreated);
            return Ok(productResponse);
        }

        [HttpPut]
        [AuthorizationFilter(new string[] { nameof(RoleType.Employee) })]
        public IActionResult Update([FromBody] UpdateProductModel updatedProduct)
        {
            Product product = _productManager.Update(updatedProduct.ToEntity());
            return Ok(new ProductDetailModel(product));
        }

        [HttpDelete("{id}")]
        [AuthorizationFilter(new string[] { nameof(RoleType.Employee) })]
        public IActionResult Delete([FromRoute] int id)
        {
            _productManager.Delete(id);
            return Ok(true);
        }

        [HttpGet]
        public IActionResult GetAll([FromQuery] ProductSearchCriteria productSearchCriteria)
        {
            IEnumerable<Product> products = _productManager.GetAll(productSearchCriteria);
            IEnumerable<ProductBasicModel> productToReturn = products.Select(p => new ProductBasicModel(p));
            return Ok(productToReturn);
        }
    }

        
}

