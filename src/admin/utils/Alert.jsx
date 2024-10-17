import React from 'react';
import '../style/alert.css';

const AlertUtils = ({ message, status }) => {
    return (
        <div className="alert-content">
            {status >= 300 ? (
                <div className="alert alert-danger" role="alert">
                    {message}
                </div>
            ) : (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
        </div>
    );
};

export default AlertUtils;
