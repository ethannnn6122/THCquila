import React, {Component} from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from "../../context";

class ProductList extends Component {
    render() {
        return (
            <>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                            <ProductConsumer>
                                { val => {
                                    return val.products.map( xproduct => {
                                        return <Product key={xproduct.id} product={xproduct} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ProductList;
