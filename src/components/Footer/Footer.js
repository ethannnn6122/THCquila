import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.FooterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Brand / Logo Area */}
                        <h4 className={classes.Brand}>THCquila</h4>
                        {/* Copyright Area */}
                        <div className={classes.Text}>
                            <p className="mb-0">
                                Infused Apparel for the bold and the buzzed {new Date().getFullYear()} &copy; Milehighcoding. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;