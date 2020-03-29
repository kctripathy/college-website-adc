import React from 'react';
import Layout from '../Layout';
import Establishments from '../../commons/Establishments';
import PrincipalMessage from '../../commons/PrincipalMessage';
import HomePageLinks from './home-page-links/HomePageLinks';
import CollegeSummary from './college-summary/CollegeSummary';
import SlideShow from './SlideShow';


function Home() {
    return (
        <Layout title="">
            <SlideShow />
            <div className="row fluid m-0 p-0">
            </div>
            <div className="jumbotron">

                {/* <h2 className="display-8">Welcome to our college website</h2> */}
                <p className="lead">Established in the year 1996 and located in Jagannath Prasad, Ganjam, Odisha - 761121.</p>
                <hr className="my-4" />
                <p>
                    The Anchalika Degree College is a premier college in for highest academic standards, different educational programs, grand faculty, and various co-curricular activities and modern infrastructure. Anchalika Degree College affiliated by Berhampur University. the college sustained the highest global standards and best practices in higher education
                </p>
                <blockquote class="blockquote">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
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
                <HomePageLinks />
            </div>
        </Layout>
    );
}

export default Home;