import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import Establishments from '../../commons/Establishments';
import PrincipalMessage from '../../commons/PrincipalMessage';
import CollegeSummary from './college-summary/CollegeSummary';
import SlideShow from './slide-show/SlideShowStaticImages';
import LatestMediaRelease from './college-summary/LatestMediaRelease';
import LatestPhotoInGallery from './college-summary/LatestPhotoInGallery';


function Home() {
    return (
        <Layout title="">
            {/* <Link to="/gallery/photo"> */}
            <SlideShow />
            {/* </Link> */}
            <div className="jumbotron m-0 pt-4 pr-4 pl-4 pb-1">
                {/* <h2 className="display-8">Welcome to our college website</h2> */}
                <p className="lead">The <b>Anchalika Degree College</b> established in the year <b>1996</b> in Jagannath Prasad, Ganjam (Odisha)</p>
                {/* <hr className="my-4" /> */}
                <p>
                    Anchalika Degree College is affiliated by Berhampur University. The college has sustained the global standards and best practices in higher education.
                    It is a premier college in for highest academic standards, different educational programs, grand faculty, and various co-curricular activities and modern infrastructure.
                    <Link className="btn btn-outline-primary btn-sm m-2" to="/about">Learn more</Link>
                </p>
                {/* <blockquote className="blockquote">
                    <hr className="my-4" />
                    <p className="mb-0">Educate our people, so that they may be able to solve their own problems. Until that is done, all these ideal reforms will remain ideals only</p>
                    <footer className="blockquote-footer">Swami Vivekananda<cite title="Source Title"></cite></footer>
                </blockquote> */}
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12 shadow-sm p-3 mb-5">
                    <Establishments fromHomePage={true} activeIndex="3" />
                </div>
                <div className="col-lg-2 col-sm-12 shadow-sm p-1 mb-5">
                    <LatestMediaRelease />
                    <LatestPhotoInGallery />
                </div>
                <div className="col-lg-2 col-sm-12 shadow-sm p-1 mb-5">
                    <CollegeSummary />
                    {/* <LastFourMediaReleases /> */}
                </div>
                <div className="col-lg-4 col-sm-12 shadow-sm p-3 mb-5">
                    <PrincipalMessage fromHomePage={true} />
                </div>
            </div>
            <div className="row">

            </div>
            {/* <div className="row">
                <LoadingConicGraident />
            </div>
            <div className="row">
                <CollegeSummaryFitText />
            </div> */}
        </Layout >
    );
}

export default Home;