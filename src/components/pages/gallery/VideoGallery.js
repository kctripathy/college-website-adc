import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import ReactPlayer from "react-player"
import Loading from '../../commons/Loading';
import { EstbTypeCode } from '../../../constants/actionTypes';
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'

export default function VideoGallery() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.estb);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        if (state.establishments && state.establishments.length === 0) {
            dispatch(fetchEstablishments());
        }
        else {
            const video_urls = state.establishments && state.establishments.length > 0 &&
                state.establishments
                    .filter(e => e.EstbTypeCode === EstbTypeCode.VIDEO)
                    .map((vdo, i) => {
                        return {
                            url: vdo.EstbTitle,
                            description: vdo.EstbDescription
                        }
                    }
                    )
            if (video_urls)
                setVideos(video_urls);
            else
                setVideos([])
        }

    }, [state]);

    const showVideoGallery = () => {
        //debugger;
        return (
            state.loading ? (<Loading text="Retriving videos..." />) : (
                videos && videos.length === 0 ? (<h2>No videos found</h2>) :
                    (
                        videos.map((vdo, i) => {
                            return (
                                <div key={i} className="col-lg-4 col-sm-12 m-0 p-1 text-center">
                                    <div className='player-wrapper'>
                                        <ReactPlayer
                                            className='react-player'
                                            url={vdo.url}
                                            width='100%'
                                            height='100%'
                                        />
                                    </div>
                                </div>
                            )
                        })
                    )
            )

        )
    }
    return (
        <Layout title="Video Gallery">
            <div className="row m-0 p-0 text-center">
                {showVideoGallery()}
                {/* <div className="col-lg-4 col-sm-12 m-0 p-1 text-center">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.facebook.com/adc.jagannathprasad/videos/1334017633442000/'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 m-0 p-1">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.facebook.com/adc.jagannathprasad/videos/876937442483357/'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 m-0 p-1">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://www.facebook.com/adc.jagannathprasad/videos/649469981896772/'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 m-0 p-1 text-center">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/le8vkBp0JTs'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 m-0 p-1">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/e9N7fBVwUNY'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12 m-0 p-1">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/Z4XeBzUiLKc'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>

                <div className="col-lg-4 col-sm-12 m-0 p-1 text-center">
                    <div className='player-wrapper'>
                        <ReactPlayer
                            className='react-player'
                            url='https://youtu.be/zyEnlhP3v4Q'
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
 */}

            </div>
        </Layout>
    );
}
