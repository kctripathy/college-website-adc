import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel'


export default function SlideShowStaticImages() {
    const [slideImages, setSlideImages] = useState([]);

    useEffect(() => {
        const images = [
            {
                id: 1,
                source: './slides/slide_0_principal_with_minister.jpg',
                captionHead: '',
                captionLabel: ''
            },
            // {
            //     id: 2,
            //     source: './slides/slide_2_independence_day_celebration.jpg',
            //     captionHead: 'Independece Day Celebration',
            //     captionLabel: '73rd Independece Day has been celebrated at our College '
            // },
            {
                id: 5,
                source: './slides/slide_5_college_library.jpg',
                captionHead: 'Library of the College',
                captionLabel: ''
            },
            {
                id: 3,
                source: './slides/slide_3_pt_meeting.jpg',
                captionHead: 'Parent and Teachers Meeting',
                captionLabel: ''
            },
            // {
            //     id: 4,
            //     source: './slides/slide_4_seminar.jpg',
            //     captionHead: 'Seminar on Indo Pak Relation',
            //     captionLabel: ''
            // },
            {
                id: 6,
                source: './slides/slide_6_self_defence.jpg',
                captionHead: 'Self Defence Training for Girls',
                captionLabel: ''
            },
            {
                id: 7,
                source: './slides/slide_7_redcross.jpg',
                captionHead: 'Red Cross Team in State Level Training',
                captionLabel: ''
            }
            // ,{
            //     id: 8,
            //     source: './slides/slide_8_athletic_meet_odia.jpg',
            //     captionHead: 'Annual Athletic Meet & Odia Seminar',
            //     captionLabel: ''
            // }
        ];

        setSlideImages(images);
    }, [])
    return (
        <>
            <Carousel>
                {
                    slideImages.map(i => {
                        return <Carousel.Item key={i.id}>
                            <img
                                className="img-fluid d-block h-100 m-0 p-0 rounded"
                                src={i.source}
                                alt={i.captionHead}
                            />
                            <Carousel.Caption>
                                <h3 className="caption-head text-light m-0 p-0">{i.captionHead}</h3>
                                <p className="caption-label text-light m-0 p-0">{i.captionLabel}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    })
                }
                {/* <Carousel.Item>
                    <img
                        className="img-fluid d-block w-100 m-0 p-0 rounded"
                        src="./slides/slide_1_women_empowerment.jpg"
                        alt="WEL-COME TO OUR COLLEGE WEBSITE"
                    />
                    <Carousel.Caption>
                        <h3 className="caption-label text-light pt-4">WORKSHOP ON WOMEN EMPOWERMENT</h3>
                        <p className="caption-sub-label text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./slides/slide_2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>INDEPENDENCE DAY CELEBRATION AT OUR COLLEGE</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./slides/slide_3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>PARENT & TEACHER MEETING</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="./slides/slide_4.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    );
}
