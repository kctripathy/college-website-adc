import React from 'react';
import Layout from '../Layout';
import Establishments from '../../commons/Establishments';
import PrincipalMessage from '../../commons/PrincipalMessage';
import FooterLinks from './FooterLinks';
import CollegeSnapshot from './CollegeSnapshot';
import CollegeSummary from './CollegeSummary';
//import Publications from './Publications';


function Home() {
    return (
        <Layout title="">
            <div className="jumbotron">
                <h2 className="display-8">Welcome to our college website</h2>
                <p className="lead">The College Established in the year 1996 and located in Ganjam, Odisha.</p>
                <hr className="my-4" />
                <p>
                    The Anchalika Degree College is a premier college in for highest academic standards, different educational programs, grand faculty, and various co-curricular activities and modern infrastructure. Anchalika Degree College affiliated by Berhampur University. the college sustained the highest global standards and best practices in higher education
                </p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg btn-xs bg-adc" href="/about" role="button">Learn more</a>
                </p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 shadow-sm p-3 mb-5">
                    <Establishments fromHomePage={true} activeIndex="3" />
                </div>
                <div className="col-lg-4 col-sm-12 shadow-sm p-3 mb-5">
                    <CollegeSummary />
                </div>
                <div className="col-lg-4 col-sm-12 shadow-sm p-3 mb-5">
                    <PrincipalMessage fromHomePage={true} />
                </div>
            </div>
            <div className="row">
                <FooterLinks />
            </div>
        </Layout>
    );
}

export default Home;