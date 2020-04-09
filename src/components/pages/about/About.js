import React from 'react';
import Layout from '../Layout';
import CollegeGate from '../../../assets/images/CollegeGate.jpg';
import CollegeLogo from '../../../assets/images/logo-200.png';

function About() {
    return (
        <Layout title="">
            <div className="row">
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
                <div className="col-lg-8 col-xs-8 p-2">
                    <h4 className="mb-4">About the College</h4>

                    <b>Crest of the College</b>
                    <img className="text-wrap" src={CollegeLogo} style={{ height: "200px" }}></img>
                    <p>
                        It is the symbol which show the vision, aim and objectives of the institution. It has came into existence by the founders of the institutions during the ninties of the last century.
                    </p>
                    <p>
                        At the top of the periphery, "WORK IS WORSHIP" has inscribed, carrying meaning the importance of work. On curved sides, the place of establishment and name of the college (ANCHALIKA DEGREE COLLEGE), followed by the its location (JAGANNATH PRASAD) and name of the District (GANJAM) is epigraphed.  The year of establishment (1996) is inscribed the base.
                    </p>
                    <p> Inside, there are four sections carrying the meaning below</p>
                    <ul>
                        <li><b>Books:</b> Books are symbols of learning and of knowledge, not only today but universally across different times and cultures</li>
                        <li><b>Wheel:</b> The Dharmachakra meaning generally refers to a typical Dharma Wheel with eight spokes - representing the Eightfold Path - and is the oldest, universal symbol for Buddhism. ... The rim of the Dharma Wheel further signifies the ability to hold all of the teachings together by meditating and concentrating </li>
                        <li><b>Soldier:</b> This embodies the Army's ideals of loyalty, vigilance, perseverance, truth, courage, zeal, fortitude, remembrance, determination, constancy, achievement, dignity, and honor</li>
                        <li><b>Light:</b> This is the symbol of guidance, innocence, purity, beginnings, cleanliness, and so on</li>
                    </ul>

                    <b>History</b>
                    <img className="text-wrap img-fluid rounded" src={CollegeGate} style={{ height: "300px", border: "double 3px #ccc", padding: "2px" }}></img>
                    {/* <p>with the active co-operation of the local people, during the early eighties, the dream got a shape at the hands of the local eminent personalities like Sri Kishore Chandra Tripathy, Late Dandapani Tripathy, Laxmi Narayan Dash, Prafulla Chandra Panigrahy, Gobinda Barika and others.</p> */}
                    <p>The Anchalika Degree College established in the year 1996 in Jagannath Prasad, Ganjam (Odisha)</p>

                    <p>The college is affiliated by Berhampur University. The college has sustained the global standards and best practices in higher education. It is a premier college in for highest academic standards, different educational programs, grand faculty, and various co-curricular activities and modern infrastructure.</p>

                    <b>Vision</b>
                    <p>The college provides students with quality educational experiences and support services that lead to the successful completion of degrees, transfer, certificates, career/technical education and basic skills proficiency. The college fosters academic and career success through the development of critical thinking, effective communication, creativity, and cultural awareness in a safe, accessible and affordable learning environment. In meeting the needs of our demographically diverse student population, we embrace equity and accountability through measurable learning outcomes, ethical data-driven decisions and student achievement.</p>


                    <b>Mission</b>
                    <p>The mission of the College is to provide innovative educational environments, opportunities, and experiences that enable individuals, communities, and the region to grow, thrive, and prosper.</p>
                </div>
                <div className="col-lg-2 col-xs-2">&nbsp;</div>
            </div>
        </Layout>
    );
}

export default About;