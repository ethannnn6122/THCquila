import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.FooterWrapper}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* Brand / Logo Area */}
                        <h3 className={classes.Brand}>THCquila</h3>
                        {/* Copyright Area */}
                        <div className={classes.Text}>
                            <p className='mb-0'>Infused Apparel for the bold and the buzzed</p>
                            <br/>
                            <p className="mb-0">
                                {new Date().getFullYear()} Milehighcoding &copy; All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;