import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './product.css';

// import { useEffect, useState } from 'react';



export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);

  console.log(filter);
  useEffect(() => {
    const fakestore = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      // console.log(response);
      setData(await response.clone().json());
      // console.log(jsonData);
      setFilter(await response.json());

    }
    fakestore();
  }, []);


  const filterProducts = (cat) => {
    const updatedList = data.filter((x)=>x.category === cat);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="my-2 justify-content-center d-flex">
          <Button variant="outline-dark" className="me-2" onClick={()=>setFilter(data)}>All</Button>
          <Button variant="outline-dark" className="me-2" onClick={()=>filterProducts("electronics")}>Electronics</Button>
          <Button variant="outline-dark" className="me-2" onClick={()=>filterProducts("men's clothing")}>Men's Clothing</Button>
          <Button variant="outline-dark" className="me-2" onClick={()=>filterProducts("women's clothing")}>Women's Clothing</Button>
          <Button variant="outline-dark" className="me-2" onClick={()=>filterProducts("jewelery")}>jewelery</Button>

        </div>

        <Container spacing={2}>
          <Row xs={1} md={2} lg={4}>

            {filter.map((values) => {
              return (
                <><Col>
                  <Card className='me-3 my-2 border-0 product-card' style={{ width: 'auto' }}>
                    <Card.Img className='mt-2' style={{ height: '200px', width: '150px', alignSelf: "center" }} variant="top" src={values.image} />
                    <Card.Body>
                      <Card.Title>{values.title}</Card.Title>
                      <Card.Text>
                        Price: ${values.price}<br />
                        Rating: {values.rating.rate}*
                      </Card.Text>
                      <NavLink to={`/products/${values.id}`} className="btn btn-outline-dark w-100">Buy Now</NavLink>
                    </Card.Body>
                  </Card>
                </Col>
                </>
              )
            })}


          </Row>
        </Container>
      </>
    );
  }


  return (
    <div>
      <h2 className='text-center my-5 py-2 display-6'>NEW ARRIVALS</h2>

      <ShowProducts />
    </div>

  )
}
