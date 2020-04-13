// import React, { Component } from 'react';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// //courtesy: https://levelup.gitconnected.com/crop-images-on-upload-in-your-react-app-with-react-image-crop-5f3cd0ad2b35

// export default class UploadImage extends Component {

//     constructor() {
//         super()
//         this.state = {
//             src: null,
//             crop: {
//                 unit: "%",
//                 width: 30,
//                 aspect: 1 / 1
//             },
//             croppedImageUrl: null,
//         }
//     }

//     handleFile = e => {
//         debugger;
//         const fileReader = new FileReader()
//         fileReader.onloadend = () => {
//             this.setState({ src: fileReader.result })
//         }
//         fileReader.readAsDataURL(e.target.files[0])
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         const user = this.props.currentUser
//         const formData = new FormData()

//         formData.append('user[id]', user.id)
//         formData.append('user[profile_pic]', this.state.croppedImage)

//         this.addPhotoToUser(user, formData)
//     }

//     addPhotoToUser = (user, data) => {
//         console.log("user=", user);
//         console.log("data=", data);
//     }

//     onImageLoaded = image => {
//         this.imageRef = image
//     }

//     onCropChange = (crop) => {
//         this.setState({ crop });
//     }

//     onCropComplete = crop => {
//         if (this.imageRef && crop.width && crop.height) {
//             const croppedImageUrl = this.getCroppedImg(this.imageRef, crop)
//             this.setState({ croppedImageUrl })
//         }
//     }

//     getCroppedImg(image, crop) {
//         const canvas = document.createElement("canvas");
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
//         canvas.width = crop.width;
//         canvas.height = crop.height;
//         const ctx = canvas.getContext("2d");

//         ctx.drawImage(
//             image,
//             crop.x * scaleX,
//             crop.y * scaleY,
//             crop.width * scaleX,
//             crop.height * scaleY,
//             0,
//             0,
//             crop.width,
//             crop.height
//         )

//         const reader = new FileReader()
//         canvas.toBlob(blob => {
//             reader.readAsDataURL(blob)
//             reader.onloadend = () => {
//                 this.dataURLtoFile(reader.result, 'cropped.jpg')
//             }
//         })
//     }

//     dataURLtoFile(dataurl, filename) {
//         let arr = dataurl.split(','),
//             mime = arr[0].match(/:(.*?);/)[1],
//             bstr = atob(arr[1]),
//             n = bstr.length,
//             u8arr = new Uint8Array(n);

//         while (n--) {
//             u8arr[n] = bstr.charCodeAt(n);
//         }
//         let croppedImage = new File([u8arr], filename, { type: mime });
//         this.setState({ croppedImage: croppedImage })
//     }

//     render() {
//         const { crop, profile_pic, src } = this.state

//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <label htmlFor="profile_pic">Profile Picture:</label>
//                 <input type='file' id='profile_pic' value={profile_pic}
//                     onChange={this.handleFile} />
//                 {src && (
//                     <ReactCrop
//                         src={src}
//                         crop={crop}
//                         onImageLoaded={this.onImageLoaded}
//                         onComplete={this.onCropComplete}
//                         onChange={this.onCropChange}
//                     />
//                 )}
//                 <button>save</button>
//             </form>
//         )
//     }
// }
