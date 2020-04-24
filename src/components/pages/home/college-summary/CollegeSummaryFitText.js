import React from 'react';
import './CollegeSummary.css';

export default function CollegeSummaryFitText() {

    React.useEffect(() => {
        debugger;
        [...document.querySelectorAll("[data-fit-text]")].forEach(el => {
            // We just need the length of the string as a CSS variable...
            el.style.setProperty("--length", el.innerText.length);
        });

    })
    return (
        <div className="row m-0 p-2">
            <div className="col-12 text-center m-0 p-0">
                <div data-fit-text>Anchalika Degree College has</div>
                <div data-fit-text><font color="#ff0000">353</font> Students</div>
                <div data-fit-text><font color="#00ff99">18</font> Staffs</div>
                <div data-fit-text>Some longer text that wants to fit, too...</div>
                <div data-fit-text>Don't forget this text!</div>
                <div data-fit-text>It can work with really long text if you really want, but that's gonna be hard to read...</div>
            </div>
        </div>
    );
}
