// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import Carousel from 'react-bootstrap/Carousel'
// import { fetchEstablishments } from '../../../../actionMethods/estbActionMethods';
// import { WEB_URL } from '../../../../config';
// import { EstbTypeCode } from '../../../../constants/actionTypes';

// export default function SlideShow() {
//     const state = useSelector(state => state.estb);
//     const dispatch = useDispatch();
//     const [slideImages, setSlideImages] = useState([]);

//     useEffect(() => {

//         if (state.establishments && state.establishments.length === 0) {
//             dispatch(fetchEstablishments());
//         }
//         else {
//             debugger;
//             const photos = state.establishments &&
//                 state.establishments.length > 0 &&
//                 state.establishments
//                     .filter(e => e.EstbTypeCode === EstbTypeCode.IMAGE)
//                     .map((photo, i) => {
//                         return {
//                             id: photo.EstbID,
//                             source: `${WEB_URL}/Documents/${photo.FileNameWithPath}`,
//                             captionHead: photo.EstbTitle,
//                             captionLabel: photo.EstbDescription
//                         }
//                     }
//                     )

//             if (photos)
//                 setSlideImages(photos);
//             else
//                 setSlideImages([])
//         }
//     }, []);

//     return (
//         <>
//             <Carousel>
//                 {
//                     slideImages.map(i => {
//                         return <Carousel.Item key={i.id}>
//                             <img
//                                 className="img-fluid d-block m-0 p-0 rounded"
//                                 src={i.source}
//                                 alt={i.captionHead}
//                             />
//                             <Carousel.Caption>
//                                 <h3 className="caption-head text-light m-0 p-0">{i.captionHead}</h3>
//                                 <p className="caption-label text-light m-0 p-0">{i.captionLabel}</p>
//                             </Carousel.Caption>
//                         </Carousel.Item>
//                     })
//                 }
//                 {/* <Carousel.Item>
//                     <img
//                         className="img-fluid d-block w-100 m-0 p-0 rounded"
//                         src="./slides/slide_1_women_empowerment.jpg"
//                         alt="WEL-COME TO OUR COLLEGE WEBSITE"
//                     />
//                     <Carousel.Caption>
//                         <h3 className="caption-label text-light pt-4">WORKSHOP ON WOMEN EMPOWERMENT</h3>
//                         <p className="caption-sub-label text-dark">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="./slides/slide_2.jpg"
//                         alt="Second slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>INDEPENDENCE DAY CELEBRATION AT OUR COLLEGE</h3>
//                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>
//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="./slides/slide_3.jpg"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>PARENT & TEACHER MEETING</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item>

//                 <Carousel.Item>
//                     <img
//                         className="d-block w-100"
//                         src="./slides/slide_4.jpg"
//                         alt="Third slide"
//                     />

//                     <Carousel.Caption>
//                         <h3>Fourth slide label</h3>
//                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//                     </Carousel.Caption>
//                 </Carousel.Item> */}
//             </Carousel>
//         </>
//     );
// }
