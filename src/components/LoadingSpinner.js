import React from 'react';
import ReactLoading from 'react-loading';

const LoadingSpinner = ({ type, color }) => {
    return (
        <div>
        {type === 'blank' ?
            null
            : <ReactLoading type={type} className='custom-spinner' color={color} height={356} width={200} /> }
        </div>
    );
};

export default LoadingSpinner;
