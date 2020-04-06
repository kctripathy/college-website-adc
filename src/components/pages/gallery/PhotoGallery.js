import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../Layout';
import { fetchEstablishments } from '../../../actionMethods/estbActionMethods'
import Loading from '../../commons/Loading';
import { WEB_URL } from '../../../config';
import { EstbTypeCode } from '../../../constants/actionTypes';

import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";


export default function PhotoGallery() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.estb);
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (state.establishments && state.establishments.length === 0) {
            dispatch(fetchEstablishments());
        }
        else {
            const photos = state.establishments && state.establishments.length > 0 &&
                state.establishments
                    .filter(e => e.EstbTypeCode === EstbTypeCode.IMAGE)
                    .map((photo, i) => {
                        return {
                            original: `${WEB_URL}/Documents/${photo.FileNameWithPath}`,
                            thumbnail: `${WEB_URL}/Documents/${photo.FileNameWithPath}`,
                            originalTitle: photo.EstbTitle,
                            description: photo.EstbDescription
                        }
                    }
                    )
            if (photos)
                setImages(photos);
            else
                setImages([])
        }

    }, [state]);

    const showPhotoGallery = () => {
        //debugger;
        return (
            state.Loading ? (<Loading text="Retriving photos..." />) : (
                state.establishments && state.establishments.length === 0 ? (<h5>No photos found...</h5>) :
                    (
                        <div className="row">
                            {state.establishments
                                .filter(e => e.EstbTypeCode === 'Y')
                                .map((photo, i) => {
                                    return (
                                        <div className="col-lg-3 col-sm-12 m-2 p-0" key={i}>
                                            <img src={`${WEB_URL}/Documents/${photo.FileNameWithPath}`}
                                                alt={photo.FileNameWithPath}
                                                className="img-responsive w-100"
                                                style={{ border: "solid 1px red" }} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
            )
        )
    }
    //console.log("images=", images);

    return (
        <Layout>
            {
                images && images.length === 0 ? (<Loading text="Retriving photos..." />) :
                    (
                        <ImageGallery
                            items={images}
                            thumbnailPosition="top"
                            disableThumbnailScroll={false}
                            autoPlay={true}
                            showBullets={true} />

                    )
            }
        </Layout>
    );
}
