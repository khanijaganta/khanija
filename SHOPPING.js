import React, { useState } from 'react';
const SupermarketProduct= () => {
  const mockProducts = [
    { id: 1, name: 'diarymilk', price: 1.99, description: 'chocolate', image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/YK/UY/AY/144328445/20006689-2-15-cadbury-dairy-milk-silk-bubbly-chocolate-bar-1000x1000.jpg' },
    { id: 2, name: 'milkybar', price: 1.99, description: 'chocolate', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQr7YLcIBFYD0xgh-f4YiF1DB4Y95bJPoruLe1e8jklcSVOQ9ioNnWcLRoqjSUowVOrSx6LjOrGMVLyFFOmDtws-hsoNcukBzTSHguULn0tGY8od_WIZnKLYLk' },
    { id: 3, name: 'Orange', price: 2.49, description: 'Sweet orange', image: 'https://media.istockphoto.com/id/477836156/photo/orange-fruit-isolated-on-white.jpg?s=612x612&w=0&k=20&c=NQYciPqF0kRqnDMx7Vy96Qhtx2c37OiKPXtjMR3Oy-Y=' },
    { id: 4, name: 'Mango', price: 3.99, description: 'Tropical mango', image: 'https://c.ndtvimg.com/2023-05/3ph40r2_mango_625x300_02_May_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886' },
    { id: 5, name: 'books', price: 150.49, description: 'reading', image: 'https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=1200' },
    { id: 6, name: 'dress', price: 120.99, description: 'womens', image: 'https://img3.junaroad.com/uiproducts/10805978/pri_175_p-1465904863.jpg' },
    ,
  ]
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; 
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="supermarket-product-listing">
      <h1>Supermarket Product Listing</h1>
      <div className="products-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(mockProducts.length / productsPerPage) }, (_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SupermarketProduct;