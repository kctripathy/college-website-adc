import React from 'react';
import './LastFourMediaReleases.css'
export default function LastFourMediaReleases() {
    return (
        <div className="box-row m-0 p-0">


            <div className="box box--left box--small">
                <div className="box__inner">
                    <a href="#">
                        <img src="https://source.unsplash.com/random/1024x602" alt="" />
                    </a>
                </div>
            </div>

            <div className="box box--right box--small">
                <div className="box__inner">
                    <a href="#">
                        <img src="https://source.unsplash.com/random/1024x603" alt="" />
                    </a>
                </div>
            </div>
            <div className="box box--left">
                <div className="box__inner">
                    <a href="#">
                        <img src="https://source.unsplash.com/random/1024x600" alt="" />
                    </a>
                </div>
            </div>

            <div className="box box--right">
                <div className="box__inner">
                    <a href="#">
                        <img src="https://source.unsplash.com/random/1024x601" alt="" />
                    </a>
                </div>
            </div>
        </div>

    );
}
