import React from 'react';
import Layout from '../Layout';
import Logo from '../../../assets/images/logo-100.png';

function About() {
    return (
        <Layout title="">
            <div className="row">
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
                <div className="col-lg-8 col-xs-8 p-2">
                    <h4 className="mb-4">About the College</h4>

                    <b>Crest of the College</b>
                    <img className="text-wrap" src={Logo} style={{ height: "300px" }}></img>
                    <p>
                        It is the symbol which show the vision, aim and objectives of the institution. It has came into existence by the founders of the institutions during the ninties of the last century.
                    </p>
                    <p>
                        At the top of the periphery, "WORK IS WORSHIP" has inscribed, carrying meaning the importance of work. On curved sides, the place of establishment and name of the college (ANCHALIKA DEGREE COLLEGE), followed by the its location (JAGANNATH PRASAD) and name of the District (GANJAM) is epigraphed.  The year of establishment (1996) is inscribed the base. Inside, there are four sections carrying the meaning below
                    </p>
                    <ul>
                        <li>Books: </li>
                        <li>Wheel: </li>
                        <li>Soldier: </li>
                        <li>Light: </li>
                    </ul>

                    <b>History</b>
                    {/* <p>with the active co-operation of the local people, during the early eighties, the dream got a shape at the hands of the local eminent personalities like Sri Kishore Chandra Tripathy, Late Dandapani Tripathy, Laxmi Narayan Dash, Prafulla Chandra Panigrahy, Gobinda Barika and others.</p> */}
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                    <b>Vision & Mission</b>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockupsLorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

                </div>
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
            </div>
        </Layout>
    );
}

export default About;