import React, {useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSingleProduct } from '../redux/reducers/productSlice';

const ProductDetail = () => {
    let {id} = useParams();
    const product = useSelector(state => state.product.selectedItem);
    const dispatch = useDispatch();

    const getProductDetail = () => {
        dispatch(fetchSingleProduct(id));
    }

    useEffect(() => {
        getProductDetail();
    }, [])

    return (
        <Container>
            <Row>
                <Col sm={6} className="product-img">
                    <img src={product?.img} alt=""/>
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
