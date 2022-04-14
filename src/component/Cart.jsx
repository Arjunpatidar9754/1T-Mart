import React from 'react'
// import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';



export default function Cart() {
    const state = useSelector((state)=> state.handleCart);
    console.log(state)
    const ShowProducts = () => {
        {state.map((product) => {
            return(
                <>
                <div className="row">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.image} height="200px" width="180px" />
                    </div>
                    <div className="col-md-4">
                        <h3>{product.title}</h3>
                        <p className='lead fw-bold'>
                             {product.qty} X {product.price} = $ {product.qty * product.price}
                        </p>
                        {/* <Button variant='outline-dark' className='me-4' onClick={()=>handleButton(product)}>
                            <i className='fa fa-minus'></i>
                        </Button>
                        <Button variant='outline-dark' className='me-4' onClick={()=>handleButton(product)}>
                            <i className='fa fa-plus'></i>
                        </Button> */}
                    </div>
                </div>
                </>
            )
        })}
    }

  return (
    <div>
        <div className="container">
           <ShowProducts />
        </div>
    </div>
  )
}
