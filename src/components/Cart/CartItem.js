import { Row, Col, Button } from 'react-bootstrap';

const CartItem = (props) => {
    const { id, cartId, title, img, price, total, count, selectedSize, selectedColor, imageMap } = props.item;
    const { increment, decrement, removeItem } = props.value;

    // LOGIC: Determine which image to show in the cart
    // If the user picked a color, and that color has images mapped, use the first one.
    // Otherwise, fall back to the default 'img'.
    const displayImage = (imageMap && selectedColor && imageMap[selectedColor]) 
        ? imageMap[selectedColor][0] 
        : img;

    return (
        <Row className="row my-4 text-capitalize text-center align-items-center border-bottom pb-3">
            {/* Image Column */}
            <Col className="col-10 mx-auto col-lg-2">
                <img 
                    src={displayImage} 
                    style={{ width: '6rem', height: '6rem', objectFit: 'contain' }} 
                    className="img-fluid rounded" 
                    alt="product" 
                />
            </Col>

            {/* Title & Options Column */}
            <Col className="col-10 mx-auto col-lg-2 font-weight-bold">
                <span className="d-lg-none">Product: </span> 
                {title}
                
                {/* Visual feedback for selected options */}
                <div className="mt-2 font-weight-normal">
                    {selectedSize && (
                        <div className="text-muted" style={{fontSize: '0.85rem'}}>
                            Size: <span className="text-dark">{selectedSize}</span>
                        </div>
                    )}
                    {selectedColor && (
                        <div className="text-muted" style={{fontSize: '0.85rem'}}>
                            Color: <span className="text-dark">{selectedColor}</span>
                        </div>
                    )}
                </div>
            </Col>

            {/* Price Column */}
            <Col className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>
                $ {price}
            </Col>

            {/* Quantity Controls */}
            <Col className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center align-items-center">
                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        className="mx-1" 
                        onClick={() => decrement(cartId)}
                        style={{ width: '30px', height: '30px', padding: 0, borderRadius: '50%' }}
                    >
                        -
                    </Button>
                    <span className="mx-2 font-weight-bold" style={{minWidth: '20px'}}>{count}</span>
                    <Button 
                        variant="outline-dark" 
                        size="sm" 
                        className="mx-1" 
                        onClick={() => increment(cartId)}
                        style={{ width: '30px', height: '30px', padding: 0, borderRadius: '50%' }}
                    >
                        +
                    </Button>
                </div>
            </Col>

            {/* Remove Icon */}
            <Col className="col-10 mx-auto col-lg-2">
                <div 
                    className="cart-icon text-danger" 
                    onClick={() => removeItem(cartId)}
                    style={{ cursor: 'pointer', fontSize: '1.2rem' }}
                >
                    <i className="fas fa-trash"></i>
                </div>
            </Col>

            {/* Item Total */}
            <Col className="col-10 mx-auto col-lg-2">
                <strong>Item Total: $ {total.toFixed(2)}</strong>
            </Col>
        </Row>
    );
}

export default CartItem;