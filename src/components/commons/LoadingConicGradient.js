import React from 'react';
import './Loading.css';

export default function LoadingConicGraident() {
    return (
        <div className="container" style={{ width: "200px", height: "200px" }}>
            <div className="back side"></div>
            <div className="left side"></div>
            <div className="right side"></div>
            <div className="top side"></div>
            <div className="bottom side"></div>
            <div className="front side"></div>
        </div>
    );
}
