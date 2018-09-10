using Project.DAL;
using Project.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Project.Web.Controllers.Api
{
    [RoutePrefix("api/Product")]
    public class ProductApiController : ApiController
    {
        [HttpGet]
        [Route("GetProduct")]
        public IHttpActionResult Get(int productId)
        {
            return Ok();
        }

        //[HttpPost]
        [Route("SaveProduct")]
        public IHttpActionResult Post(Product product)
        {
            return Ok(true);
        }

        //[HttpDelete]
        //[Route("DeleteProduct")]
        //public IHttpActionResult Delete(int productId)
        //{
        //    return Ok(true);
        //}

        //[HttpGet]
        //[Route("GetProductList")]
        //public IHttpActionResult GetProductList()
        //{
        //    var dbConnection = new DbConnection();
        //    var productlist = dbConnection.GetAll("GetProductList");
        //    return Ok(true);
        //}

        //[HttpPut]
        //[Route("UpdateProduct")]
        //public IHttpActionResult UpdateProduct(Product product)
        //{
        //    return Ok(true);
        //}
    }
}
