import React, { useState, useEffect, Fragment } from 'react';
import PrincipalPhoto from '../../assets/images/principal-photo-100.jpg';
import { Link } from 'react-router-dom';

const PrincipalMessage = (props) => {

    const showRestOfMessage = () => (
        <Fragment>

            <p className="text-justify">
                Together we can see new dreams and scale of new heights. Once again, I welcome to the newcomers and wish the best to all of you in your pursuit of knowledge and excellence.
            </p>

            <p className="text-justify">
                We believe that excellence is the gradual result of always striving to do better, hence our Motto “In Pursuit of Excellence!”
            </p>
            <p className="text-justify">
                With a long and rewarding history of achievement in education behind us, our school community continues to move forward together with confidence, pride and enthusiasm.
            </p>
            <p>
                I hope you enjoy your visit to the website and should you wish to contact us, please find details at the <Link to="/contact">contact page</Link>.
            </p>
            <p className="text-right">
                <b>Prof. Sanatana Sahu</b>
                <br /><span>Principal</span>
            </p>
        </Fragment>
    );

    return (
        <div>
            <h4 className="home-section-title">Principal's Message</h4>
            <img className="text-wrap m-0 ml-2 pt-2" src={PrincipalPhoto}></img>
            <p className="text-justify">
                It is with great pleasure that I welcome you to the official website of our <strong>Anchalika Degree College</strong>, Jagannath Prasad, Ganjam (Odisha)
            </p>
            <p className="text-justify">
                Situating in the block head quarter and a peaceful area, the college has been spreading the knowledge to the near by rural students. I am conscious about the history and heritage of this pioneer institution is proud of. </p>
            <p className="text-justify">
                I am happy to inform you all that this institution has been expanding fast enough to meet the challenge of the changing times.
                Our college has an outstanding reputation for establishing high expectations and achieving excellent academic results.
                Talents too are constantly developed through sports and varied co-curricular activities.
                This in turn results in widening the scope of education and makes it more consequential
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