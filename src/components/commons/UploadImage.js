import React from 'react';
import { post } from 'axios';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../../config';
import { isAuthenticated } from '../../api/user';

class UploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            previewFile: '',
            imageHeight: 0,
            imageWidth: 0,
            user: isAuthenticated(),
            processing: true,
            error: '',
            success: ''
        };
    }

    validateForm = () => {

        return true;
    }

    async submit(e) {
        //debugger;
        e.preventDefault();
        if (this.state.file.length === 0) {
            this.setState({
                ...this.state,
                error: 'Please choose a file'
            });
            return;
        }

        const url = `${API_URL}/user/UploadPhoto/${this.state.user.UserType}/${this.state.user.UserReferenceID}`;
        const formData = new FormData();
        formData.append('body', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return post(url, formData, config)
            .then(response => {
                //debugger;
                this.setState({
                    ...this.state,
                    file: '',
                    success: response.data.Message,
                    error: '',
                    processing: false
                })
                //console.log(data);
                this.props.onRun();
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    success: '',
                    error: 'unable to upload the file',
                    processing: false
                })
                console.log(err);
            });
    }


    setFile(e) {
        this.setState({
            ...this.state,
            file: e.target.files[0],
            previewFile: URL.createObjectURL(e.target.files[0]),
            error: '',
            success: ''
        });
    };

    showSuccessMessage = () => {
        //return this.state.success.length > 0 ? <Redirect to="/user/profile" /> : ""
        return this.state.success.length > 0 ? <div className="alert alert-success">{this.state.success}</div> : ""
    };

    showFailureMessage = () => {
        return this.state.error.length > 0 ? <div className="alert alert-danger">{this.state.error}</div> : ""
    };

    handleSize = (image) => {
        // debugger
        // if (image !== null) {
        //     //console.log(image.offsetWidth, image.offsetHeight)
        //     // this.setState({
        //     //     ...this.state,
        //     //     imageHeight: image.height,
        //     //     imageWidth: image.width,
        //     // });
        //     //console.log(image);
        //     if (image.height > 150 || image.height < 100) {
        //         alert('Please choose an image height between 125px to 150px');
        //     }
        // }
    }
    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={e => this.submit(e)}>
                    <div className="row" style={{ display: this.state.processing ? 'block' : 'none' }}>
                        <div className="col-12 bg-page-title mb-4">
                            <b>{this.props.title}</b>
                            <em className="ml-4">(please choose a profile photo with width of 200px to 250px and height between 125px to 150px)</em>
                        </div>
                        <div className="col-12 mb-4">
                            <input type="file" onChange={e => this.setFile(e)} />
                            <button className="btn btn-primary m-2" type="submit">UPLOAD PROFILE PHOTO</button>
                        </div>
                        <div className="col-12 m-2">
                            {this.showSuccessMessage()}
                            {this.showFailureMessage()}
                        </div>
                        <div className="col-12 m-2" style={{ marginRight: "-20px", height: "600px", overflow: "auto" }}>
                            <img src={this.state.previewFile}
                                ref={image => {
                                    this.handleSize(image);
                                }}
                            />
                        </div>
                        <pre>
                            {JSON.stringify(this.state, null, 4)}
                        </pre>
                    </div>
                </form>
            </div>
        )
    }
}
export default UploadImage    