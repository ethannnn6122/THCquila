import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';

const ProductContext = React.createContext();
//Provider 
//Consumer

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0.00,
        cartTax: 0.00,
        cartTotal: 0.00
    };

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem]
        })
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return {detailProduct: product};
        })
    };

    addToCart = (id, size, color) => {
        // 1. Generate a unique ID for this specific variant
        const cartId = `${id}-${size}-${color}`;
        
        let tempCart = [...this.state.cart];
        
        // 2. Check if this exact variant is already in the cart
        const existingItem = tempCart.find(item => item.cartId === cartId);

        if (existingItem) {
            // If exists, just update count
            existingItem.count += 1;
            existingItem.total = existingItem.count * existingItem.price;
        } else {
            // 3. If new, create a CLONE of the product details
            const product = this.getItem(id);
            const newCartItem = {
                ...product,
                cartId: cartId, // The new unique identifier
                selectedSize: size,
                selectedColor: color,
                count: 1,
                total: product.price,
                inCart: true
            };
            tempCart.push(newCartItem);
        }

        this.setState(() => {
            return { cart: tempCart };
        }, () => {
            this.addTotals();
        });
    };

    openModal = (id, color) => {
        const product = this.getItem(id);
        const modalProduct = {...product, selectedColor: color};
        this.setState(() => {
            return {modalProduct: modalProduct, modalOpen: true};
        });
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen: false};
        })
    }

    increment = (cartId) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.cartId === cartId);
        
        // Safety check
        if (!selectedProduct) return;

        selectedProduct.count = selectedProduct.count + 1;
        selectedProduct.total = selectedProduct.count * selectedProduct.price;

        this.setState(() => {
            return { cart: [...tempCart] }
        }, () => {
            this.addTotals();
        });
    }

    decrement = (cartId) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.cartId === cartId);

        if (!selectedProduct) return;

        selectedProduct.count = selectedProduct.count - 1;
        if (selectedProduct.count === 0) {
            this.removeItem(cartId);
        } else {
            selectedProduct.total = selectedProduct.count * selectedProduct.price;
            this.setState(() => {
                return { cart: [...tempCart] }
            }, () => {
                this.addTotals();
            });
        }
    }

    removeItem = (cartId) => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.cartId !== cartId);

        this.setState(() => {
            return {
                cart: [...tempCart],
            }
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] };
        }, () => {
            this.setProducts();
            this.addTotals();
        });
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(i => (subTotal += i.total))
        const tempTax = subTotal * .081;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }          
        });
    }

    render() {
        return(
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}>
                    {this.props.children}
            </ProductContext.Provider>
        )
    };
};



const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };