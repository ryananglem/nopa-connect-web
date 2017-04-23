import React from 'react'
import shapes from '../../../static/images/Shapes.png';
const ProductDetails = () => {
  return (
    <div className="product-details">

      <div className="product-details-container">
      <div className="product-details-left">
      <h3>
        There's no such things are "one size fits all" finance
      </h3>
      <p>
        We were founded to make money simple and fair, for everyone: whether you're
        looking for a loan, or to get better rewards for your investments
      </p>
      </div>
      <div className="product-details-right">
        <img alt="shapes" src={shapes} />
      </div>
      </div>
    </div>
  )
}
export default ProductDetails;
