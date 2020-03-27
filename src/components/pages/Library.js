import React, { useState, useEffect } from 'react';

const Library = () => {
    const [establishments, setEstablishments] = useState([]);

    useEffect(() => {
        console.log('establishments...');
    }, []);

    return (
        <div>
            <h4 className="home-section-title">Library:</h4>
            <ul>
                <li>
                    .....
                </li>
            </ul>
        </div>
    )
};

export default Library;