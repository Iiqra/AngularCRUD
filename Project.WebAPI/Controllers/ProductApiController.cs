using Project.DAL;
using Project.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project.WebAPI.Controllers
{
    [RoutePrefix("api/Product")]
    public class ProductApiController : ApiController
    {
        [HttpGet]
        [Route("GetProduct")]
        public IHttpActionResult Get(int productId)
        {
            var dbConnection = new DbConnection();
            var product = dbConnection.GetById("GetProduct", productId).ToEntity<Product>();
            return Ok(product);
        }

        [HttpPost]
        [Route("SaveProduct")]
        public IHttpActionResult Post(Product product)
        {
            var dbConnection = new DbConnection();
            var parameters = new Dictionary<string, string>();
            parameters.Add("name", product.Name);
            parameters.Add("description", product.Description);
            var noOfRecordsAffected = dbConnection.Create("InsertProduct", parameters);
            return Ok(noOfRecordsAffected >= 1);
        }

        [HttpDelete]
        //[HttpGet]
        [Route("DeleteProduct")]
        public IHttpActionResult Delete(int productId)
        {
            var dbConnection = new DbConnection();
            var noOfRecordsAffected = dbConnection.Delete("DeleteProduct", productId);
            return Ok(noOfRecordsAffected >= 1);
        }

        [HttpGet]
        [Route("GetProductList")]
        public IHttpActionResult GetProductList()
        {
            var dbConnection = new DbConnection();
            var productlist = dbConnection.GetAll("GetProductList").ToList<Product>();
            return Ok(productlist);
        }

        [HttpPut]
        //[HttpPost]
        [Route("UpdateProduct")]
        public IHttpActionResult UpdateProduct(Product product)
        {
            var dbConnection = new DbConnection();
            var parameters = new Dictionary<string, string>();
            parameters.Add("id", Convert.ToString(product.Id));
            parameters.Add("name", product.Name);
            parameters.Add("description", product.Description);
            var noOfRecordsAffected = dbConnection.Update("UpdateProduct", parameters);
            return Ok(noOfRecordsAffected >= 1);
        }
    }
}