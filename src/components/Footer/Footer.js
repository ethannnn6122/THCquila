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
                        <div className={classes.Copyright}>
                            <p className="mb-0">
                                &copy; {new Date().getFullYear()} Milehighcoding. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;