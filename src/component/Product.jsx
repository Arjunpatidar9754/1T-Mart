import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';

export default function Product() {

    const {id} = useParams();
    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();
    const addProduct = (product) => {
        return dispatch(addCart(product));
    }

    useEffect(()=> {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            setProduct(await response.json());
        }
        getProduct();
    }, [])

    const ShowProduct = () => {
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>{product.category}</h4>
                <h1 className='display-5'>{product.title}</h1>
                <p className="lead">
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className="lead"> {product.description} </p>
                <Button variant='outline-dark' onClick={()=>addProduct(product)}>Add To Cart</Button>
                <NavLink to="/cart" className="btn btn-dark px-3 ms-2 py-2">Go To Cart</NavLink>
            </div>
            </>
        )
    }
    return (
        <div>
            <div className="container">
                <div className="row py-4">
                    <ShowProduct />
                </div>
            </div>
        </div>
    )
}
