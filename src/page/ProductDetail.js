import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);

    const getProductDetail = async () => {
        let url = `https://my-json-server.typicode.com/ddori5338/react-shop/products/${id}`
        let response = await fetch(url);
        let data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <Container>
            <Row>
                <Col className="product-img">
                    <img src={product?.img}/>
                </Col>
                <Col className="product-info">
                    <div className="product-title">{product?.title}</div>
                    <div className="product-price">₩{product?.price}</div>
                    <div className="choice-area">{product?.choice?'Conscious Choice':''}</div>
                    <DropdownButton id="dropdown-basic-button" title="사이즈 선택">
                        <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                    </DropdownButton>
                    <Button id="purchase-btn" variant="dark">추가</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail
