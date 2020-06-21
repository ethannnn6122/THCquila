import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

// components
import ProductList from '../../components/Products/ProductList';
import Details from '../../components/Products/Details';
import Cart  from '../../components/Cart/Cart';
import Default from '../../components/Default';

class ShopContainer extends Component {
    render() {
        return(
            <>
                <Switch>
                    <Route path="/shop" exact component={ProductList} />
                    <Route path="/shop/details" component={Details} />
                    <Route path="/shop/cart" component={Cart} />
                    <Route  component={Default} />
                </Switch>
            </>
        )
    }
    
}

export default ShopContainer;