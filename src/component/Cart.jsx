import React from 'react'
import { useSelector } from 'react-redux';



export default function Cart() {
    const state = useSelector((state) => state.handleCart);
    console.log(state)
    const ShowProducts = () => {
        // eslint-disable-next-line
        {
            state.map((product, index) => {
                return (
                    <>
                        <div className="row" key={index}>
                            <div className="col-md-4" key={index}>
                                <img src={product.image} alt={product.image} height="200px" width="180px" key={index} />
                            </div>
                            <div className="col-md-4">
                                <h3 key={index}>{product.title}</h3>
                                <p className='lead fw-bold' key={index}>
                                    {product.qty} X {product.price} = $ {product.qty * product.price}
                                </p>
                            </div>
                        </div>
                    </>
                )
            });
        }// End of lone block
    }

    return (
        <div>
            <div className="container">
                <ShowProducts />
            </div>
        </div>
    )
}
