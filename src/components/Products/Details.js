import { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Details = () => {
    const { detailProduct, addToCart, openModal } = useContext(ProductContext);
    const { id, company, img, info, price, title, inCart, sizes, colors, imageMap } = detailProduct;

    // State
    const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : null);
    const [selectedColor, setSelectedColor] = useState(colors ? colors[0] : null);
    
    // Gallery State
    const [galleryImages, setGalleryImages] = useState([]);
    const [mainImage, setMainImage] = useState(img);
    const [showLightbox, setShowLightbox] = useState(false);

    // LOGIC: Update Images when Product OR Color changes
    useEffect(() => {
        // 1. Check if this product has a map for the selected color
        if (imageMap && selectedColor && imageMap[selectedColor]) {
            const newImages = imageMap[selectedColor];
            setGalleryImages(newImages);
            setMainImage(newImages[0]);
        } 
        // 2. Fallback if no map exists (legacy products)
        else if (detailProduct.images) {
            setGalleryImages(detailProduct.images);
            setMainImage(detailProduct.images[0]);
        }
        // 3. Fallback to single image
        // else {
        //     setGalleryImages([img]);
        //     setMainImage(img);
        // }
        
        // Reset selections if product ID changes
        if (detailProduct.id !== id) {
             setSelectedSize(sizes ? sizes[0] : null);
             setSelectedColor(colors ? colors[0] : null);
        }

    }, [detailProduct, selectedColor, id, imageMap, img, sizes, colors]);

    return (
        <Container className="py-5">
            <Row>
                {/* --- Left Column: Image Gallery --- */}
                <Col md={6} className="mb-5">
                    <div className="d-flex flex-column align-items-center">
                        {/* Main Image */}
                        <div 
                            className="mb-3 shadow-sm border rounded p-2 bg-white d-flex align-items-center justify-content-center" 
                            style={{ width: '100%', height: '400px', cursor: 'zoom-in', overflow: 'hidden' }}
                            onClick={() => setShowLightbox(true)}
                        >
                            <img 
                                src={mainImage} 
                                alt={title} 
                                className="img-fluid" 
                                style={{ maxHeight: '100%', objectFit: 'contain' }}
                            />
                        </div>

                        {/* Thumbnails */}
                        <div className="d-flex justify-content-center flex-wrap" style={{ gap: '10px' }}>
                            {galleryImages.map((image, index) => (
                                <div 
                                    key={index}
                                    onClick={() => setMainImage(image)}
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                        border: mainImage === image ? '2px solid var(--mainYellow)' : '1px solid #ddd',
                                        borderRadius: '5px',
                                        cursor: 'pointer',
                                        padding: '5px',
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <img 
                                        src={image} 
                                        alt={`thumb-${index}`} 
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>

                {/* --- Right Column: Product Details --- */}
                <Col md={6} className="text-capitalize">
                    <h1 className="font-weight-bold">{title}</h1>
                    <h4 className="text-muted text-uppercase mt-2 mb-3" style={{fontSize: '0.9rem', letterSpacing: '2px'}}>
                        By {company}
                    </h4>
                    <h3 className="text-blue font-weight-bold mb-4">
                        ${price}
                    </h3>

                    {/* Size Selector */}
                    {sizes && sizes.length > 0 && (
                        <div className="mb-4">
                            <p className="font-weight-bold mb-2">Size:</p>
                            <div className="d-flex flex-wrap" style={{gap: '10px'}}>
                                {sizes.map((size, index) => (
                                    <button
                                        key={index}
                                        className={`btn ${selectedSize === size ? 'btn-primary' : 'btn-outline-secondary'}`}
                                        style={{ 
                                            minWidth: '50px',
                                            backgroundColor: selectedSize === size ? 'var(--mainBlue)' : 'transparent',
                                            color: selectedSize === size ? 'var(--mainYellow)' : '#2c2c2c',
                                            borderColor: selectedSize === size ? 'var(--mainBlue)' : '#ccc'
                                        }}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Color Selector */}
                    {colors && colors.length > 0 && (
                        <div className="mb-4">
                            <p className="font-weight-bold mb-2">Color:</p>
                            <div className="d-flex flex-wrap" style={{gap: '10px'}}>
                                {colors.map((color, index) => (
                                    <button
                                        key={index}
                                        className={`btn ${selectedColor === color ? 'btn-primary' : 'btn-outline-secondary'}`}
                                        style={{ 
                                            backgroundColor: selectedColor === color ? 'var(--mainBlue)' : 'transparent',
                                            color: selectedColor === color ? 'var(--mainYellow)' : '#2c2c2c',
                                            borderColor: selectedColor === color ? 'var(--mainBlue)' : '#ccc'
                                        }}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    <p className="lead text-muted mt-3 mb-4" style={{ fontSize: '1rem', lineHeight: '1.8' }}>
                        {info}
                    </p>

                    {/* Action Buttons */}
                    <div className="d-flex align-items-center mt-4">
                        <Link to='/shop'>
                            <Button className="btn btn-outline-primary text-uppercase mr-3" style={{color: 'var(--mainBlue)', borderColor: 'var(--mainBlue)'}}>
                                Back to Shop
                            </Button>
                        </Link>
                        <Button 
                            className="btn btn-primary text-uppercase"
                            disabled={inCart}
                            style={{ 
                                backgroundColor: 'var(--lightBlue)', 
                                borderColor: 'var(--lightBlue)',
                                color: '#fff',
                                padding: '0.5rem 1.5rem'
                            }}
                            onClick={() => {
                                addToCart(id, selectedSize, selectedColor);
                                openModal(id, selectedColor);
                            }}
                        >
                            {inCart ? "In Cart" : "Add to Cart"}
                        </Button>
                    </div>
                </Col>
            </Row>

            {/* --- Lightbox Modal --- */}
            <Modal show={showLightbox} onHide={() => setShowLightbox(false)} size="lg" centered>
                <Modal.Body className="p-0 position-relative bg-transparent">
                    <button 
                        type="button" 
                        className="close position-absolute" 
                        style={{ top: '10px', right: '15px', zIndex: 10, fontSize: '2rem', color: '#000' }}
                        onClick={() => setShowLightbox(false)}
                    >
                        <span>&times;</span>
                    </button>
                    <img src={mainImage} alt={title} className="img-fluid w-100" />
                </Modal.Body>
            </Modal>
        </Container>
    );
};

export default Details;