import React from 'react'
import Product from "./Product"
import './ProductList.css'

const ProductList = ({data, currentPage, getAllProducts}) => {
  return (
    <>
    <h1 className="productsHeader">Products:</h1>
      <main className = 'main'>
          {data?.content?.length === 0 && <div>No Products Available</div>}

          <ul className='product_list'>
              {data?.content?.length > 0 && data.content.map(product => <Product  product= {product} key={product.id}/>)}
          </ul>

          {data?.content?.length > 0 && data?.totalPages > 1 &&
          <div className='pagination'>
              <a onClick={() => getAllProducts(currentPage - 1)} className={0 === currentPage ? 'disabled' : ''}>&laquo;</a> 
              {data && [...Array(data.totalPages).keys()].map((page,index) => 
              <a onClick = {getAllProducts(page)} className={currentPage === page ? 'active' : ''} key={page} >{page + 1}</a>)}
              <a onClick={() => getAllProducts(currentPage + 1)} className={data.totalPages === currentPage+1 ? 'disabled' : ''}>&raquo;</a> 
          </div>

          }
      </main>
    </>
  )
}

export default ProductList;
