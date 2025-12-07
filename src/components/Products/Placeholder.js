import { useState } from 'react';
import Title from './Title';
import styles from './Placeholder.module.css';

const Placeholder = () => {
    const [email, setEmail] = useState('');
    const [subscribe, setSubscribe] = useState(true);
    
    // state to manage submission status manually
    const [status, setStatus] = useState({
        submitting: false,
        succeeded: false,
        error: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic Validation
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        // Set loading state
        setStatus({ ...status, submitting: true, error: null });
        try {
            // Call Python backend
            const API_URL = import.meta.env.VITE_API_URL
            const response = await fetch(`${API_URL}/api/join`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    subscribe: subscribe
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // Success: Update UI and clear email
                setStatus({ submitting: false, succeeded: true, error: null });
                setEmail(''); 
            } else {
                // Server returned an error
                setStatus({
                    submitting: false,
                    succeeded: false,
                    error: data.detail || "Subscription failed. Please try again."
                });
            }
        } catch (error) {
            // Network or other client-side error
            console.error("Submission error:", error);
            setStatus({
                submitting: false,
                succeeded: false,
                error: "Network error. Please try again later."
            });
        }
    }

    return (
        <div className="py-5">
            <div className="container">
                <Title name="our" title="Threads" />
                <div className={`row ${styles.heroRow}`}>
                    <div className="col-10 mx-auto col-md-8 my-3 text-center">
                        <div className={styles.hero}>
                            <h2 className="text-capitalize">Apparel is coming soon</h2>
                            <p className="lead">We're working on a fresh apparel drop — high quality tees, hoodies, and more. Sign up to get exclusive early access and a launch-day offer.</p>
                                
                                <form onSubmit={handleSubmit} className={styles.form} aria-label="notify-form">
                                    <input
                                        type="email"
                                        name="email"
                                        className={`form-control ${styles.input}`}
                                        placeholder="Enter your email to get notified"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        disabled={status.succeeded}
                                    />
                                    <button 
                                        type="submit" 
                                        className={`btn ${styles.Btn} ml-md-4 mt-2 mt-md-0`} 
                                        disabled={status.submitting || status.succeeded}
                                    >
                                        {status.submitting ? 'Sending...' : 'Notify me'}
                                    </button>
                                    <label className={`ml-md-4 mt-2 mt-md-0 ${styles.checkboxLabel}`}>
                                        <input 
                                            type="checkbox" 
                                            name="subscribe" 
                                            checked={subscribe} 
                                            onChange={(e) => setSubscribe(e.target.checked)} 
                                            disabled={status.succeeded}
                                        />{' '}Email Me!
                                    </label>
                            </form>

                            {/* Success Message */}
                            { status.succeeded && (
                                <p className={styles.thanks}>
                                    Thanks — we’ll notify you when apparel drops!
                                </p> 
                            )}

                            {/* Error Message */}
                            { status.error && (
                                <div className={styles.error} role="alert">
                                    <p>{status.error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mystery Items Grid (Unchanged) */}
                <div className={`row ${styles.grid}`}>
                    {[1,2,3].map((n) => (
                        <div className="col-10 mx-auto col-md-4 my-3 text-center" key={n}>
                            <div className={styles.card} aria-hidden="true">
                                <div className={styles.imgWrap}>
                                    <div className={styles.badge}>Coming Soon</div>
                                </div>
                                <h5 className="mt-3">Mystery Item {n}</h5>
                                <p className="text-muted">Premium fabric, modern fit — launching soon.</p>
                                <button className="btn" disabled>Order Soon!</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Placeholder;