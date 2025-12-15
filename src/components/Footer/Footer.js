import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './Footer.module.css';

const Footer = () => {
    // State to control Modals
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    // Reusable "Custom Modal" Structure
    const LegalModal = ({ title, onClose, children }) => (
        <div className={classes.ModalContainer} onClick={onClose}>
            <Container>
                <Row>
                    <Col className={`col-10 mx-auto ${classes.Modal}`} onClick={(e) => e.stopPropagation()}>
                        <i 
                            className={`fas fa-times ${classes.CloseIcon}`} 
                            onClick={onClose}
                        ></i>
                        <div className="text-center mb-4">
                            <h3 className={classes.Brand} style={{color: 'var(--mainBlue)'}}>{title}</h3>
                        </div>
                        
                        <div className={classes.LegalText}>
                            {children}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );

    return (
        <footer className={classes.FooterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        
                        <h3 className={classes.Brand}>THCquila</h3>
                        <p className={classes.SubBrand}>An Infused Culture Brand</p>

                        <ul className={classes.LinkList}>
                            <li><Link to="/shop" className={classes.FooterLink}>Shop</Link></li>
                            <li>
                                <span 
                                    className={classes.FooterLink} 
                                    onClick={() => setShowTerms(true)}
                                    style={{cursor: 'pointer'}}
                                >
                                    Terms of Service
                                </span>
                            </li>
                            <li>
                                <span 
                                    className={classes.FooterLink} 
                                    onClick={() => setShowPrivacy(true)}
                                    style={{cursor: 'pointer'}}
                                >
                                    Privacy Policy
                                </span>
                            </li>
                            <li><Link to="/contact" className={classes.FooterLink}>Contact</Link></li>
                        </ul>

                        <div className={classes.Copyright}>
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} <strong>Infused Culture, LLC</strong>. All rights reserved.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- TERMS OF SERVICE MODAL --- */}
            {showTerms && (
                <LegalModal title="Terms of Service" onClose={() => setShowTerms(false)}>
                    <h5>1. Overview</h5>
                    <p>This website is operated by Infused Culture, LLC (DBA THCquila). Throughout the site, the terms "we", "us" and "our" refer to Infused Culture. By purchasing from us, you agree to these Terms of Service.</p>
                    
                    <h5>2. Made-to-Order Policy</h5>
                    <p>We utilize a print-on-demand fulfillment model. This means all products are unique and produced only once ordered. This also means that <strong>returns and exchanges are not supported</strong> if you ordered the wrong size, color, or simply changed your mind.</p>
                    
                    <h5>3. Returns & Refunds</h5>
                    <p>Because items are made to order, we only offer a replacement or a refund if the item arrives <strong>damaged or defective</strong>. If you receive a damaged product, please contact us within 7 days of delivery with a photo of the issue.</p>
                    
                    <h5>4. Shipping & Delivery</h5>
                    <p>Shipping times are estimates, not guarantees. Our fulfillment partner typically takes 2-5 business days to create your product before it is shipped. We are not liable for delays caused by the carrier (USPS/UPS).</p>
                    
                    <h5>5. Intellectual Property</h5>
                    <p>All branding, logos, and designs on this site are the exclusive property of Infused Culture, LLC. Unauthorized use is prohibited.</p>
                </LegalModal>
            )}

            {/* --- PRIVACY POLICY MODAL --- */}
            {showPrivacy && (
                <LegalModal title="Privacy Policy" onClose={() => setShowPrivacy(false)}>
                    <h5>1. Information We Collect</h5>
                    <p>When you make a purchase, we collect your name, billing address, shipping address, email address, and phone number. We refer to this as "Order Information".</p>
                    
                    <h5>2. How We Use Your Information</h5>
                    <p>We use your Order Information to fulfill orders placed through the Site (including processing payment information, arranging for shipping, and providing invoices).</p>
                    
                    <h5>3. Sharing with Third Parties</h5>
                    <p>We share your Personal Information with third parties to help us use your Personal Information, as described above:</p>
                    <ul>
                        <li><strong>Fulfillment:</strong> We share your shipping address with our print-on-demand partner (Printful) solely for the purpose of delivering your order.</li>
                        <li><strong>Payments:</strong> We use Stripe to process payments securely. We do not store your credit card details on our servers.</li>
                    </ul>

                    <h5>4. Data Retention</h5>
                    <p>When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.</p>
                    
                    <h5>5. Contact Us</h5>
                    <p>For more information about our privacy practices, questions, or if you would like to make a complaint, please <Link to="/contact">Contact Us</Link></p>
                </LegalModal>
            )}

        </footer>
    );
}

export default Footer;