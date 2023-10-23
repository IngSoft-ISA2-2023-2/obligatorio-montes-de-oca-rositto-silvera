using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Update;
using Microsoft.VisualBasic;
using PharmaGo.Domain.Entities;
using System;
using System.ComponentModel.Design;
using TechTalk.SpecFlow;
using TechTalk.SpecFlow.CommonModels;

namespace SpecFlowPharmacyGo.StepDefinitions
{
    [Binding]
    public class AddingAProductStepDefinitions
    {
        private Product _product = new Product();
        public string? OkObjectResult { get; set; }


        [Given(@"that I input the code (.*)")]
        public void GivenThatIInputTheCode(int code)
        {
            _product.Id = code;
        }

        [Given(@"that I input the code is empty (.*)")]
        public void GivenThatIInputTheCodeEmpty(int code)
        {
            _product.Id = code;
        }

        [Then(@"the result  '([^']*)'")]
        public void ThenTheResult(string result)
        {
            OkObjectResult = result;
        }

        [Given(@"that I input the name '([^']*)'")]
        public void GivenThatIInputTheName(string name)
        {
            _product.Name = name;
        }

        [Given(@"that I input the description '([^']*)',")]
        public void GivenThatIInputTheDescription(string description)
        {
            _product.Description = description;
        }

        [Given(@"that I input the price  (.*),")]
        public void GivenThatIInputThePrice(decimal price)
        {
            _product.Price = price;
        }

        [Then(@"the result  ""El código de producto no puede ser vacío'")]
        public void ThenTheResultElCodigoDeProductoNoPuedeSerVacio()
        {
            string expectedMessage = "El código de producto no puede ser vacío";
            if (OkObjectResult != expectedMessage)
            {
                throw new Exception($"El mensaje esperado es '{expectedMessage}' pero se obtuvo '{OkObjectResult}'");
            }
        }

        [When(@"I press the ""([^""]*)"" button")]
        public void WhenIPressTheButton(string add)
        {
            OkObjectResult = add;
        }
    }
}
