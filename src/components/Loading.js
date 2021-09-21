import React from 'react';

import carloading from '../assets/img/catLoading.png';

export const Loading = () => {
    return (
        <div className="div__Loading">

            <img src={carloading}  alt="catLoading" />
            <span>Loading...</span>

        </div>
    )
}
