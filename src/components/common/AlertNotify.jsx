import React, { useEffect } from 'react';

const AlertNotify = ({ message, duration = 5000, status, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            if (onClose) {
                onClose();
            }
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return status >= 400 ? (
        <div
            className="alert alert-danger"
            role="alert"
            style={{ opacity: 1, transition: 'opacity 0.5s', position: 'absolute' }}
        >
            {message}
        </div>
    ) : (
        <div className="alert alert-primary" role="alert" style={{ opacity: 1, transition: 'opacity 0.5s' }}>
            {message}
        </div>
    );
};

export default AlertNotify;
