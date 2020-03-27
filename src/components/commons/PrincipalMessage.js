import React, { useState, useEffect, Fragment } from 'react';
import PrincipalPhoto from '../../assets/images/principal-photo-175.jpg';
import { Link } from 'react-router-dom';

const PrincipalMessage = (props) => {

    const showRestOfMessage = () => (
        <Fragment>
            <p className="text-justify">
                4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>
            <p className="text-justify">
                5 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>
            <p className="text-justify">
                6 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>

        </Fragment>
    )
    return (
        <div>
            <h4 className="home-section-title">Principal's Message</h4>
            <img className="text-wrap" src={PrincipalPhoto}></img>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget pellentesque nibh. Mauris id nisi quis metus interdum sollicitudin at id velit. Nullam eget
            </p>
            {
                props.fromHomePage ? (<Link to="/principal-message" className="text-wrap">Read more...</Link>)
                    :
                    (
                        showRestOfMessage()
                    )
            }

        </div>
    )
};

export default PrincipalMessage;