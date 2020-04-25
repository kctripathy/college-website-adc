import React from 'react';
import { post } from 'axios';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../../config';
import { isAuthenticated } from '../../api/user';

class UploadFile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            EstbID: props.EstbID,
            file: '',
            user: isAuthenticated(),
            processing: true,
            error: '',
            success: ''
        };
        console.log('upload file props -', this.props)
    }


    validateForm = () => {
        if (this.state.file.length === 0) {
            this.setState({
                ...this.state,
                error: 'Please choose a file'
            });
            return false;
        }
        return true;
    }

    async submitFileToUpload(e) {
        //debugger;
        e.preventDefault();
        if (this.validateForm() === false) {
            return false;
        }

        const url = `${API_URL}/user/UploadFile/${this.props.EstbID}`;

        console.log('upload file url -', url)
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
                    //success: response.data.Message,
                    //error: '',
                    processing: false
                })
                //console.log(data);
                if (!(this.props.mode === 'edit'))
                    this.props.onUploadSuccessOrFailure(response.data.Message, 'File uploaded successfully', '');
                else
                    alert('File updated successfully');
            })
            .catch(err => {
                this.setState({
                    ...this.state,
                    //success: '',
                    //error: 'unable to upload the file',
                    processing: false
                })
                if (!(this.props.mode === 'edit'))
                    this.props.onUploadSuccessOrFailure('', '', 'Failed to upload the file: ' + err);
                else
                    alert("Some error occured while updating the file ...")
                console.log(err);
            });
    }


    setFile(e) {
        this.setState({
            ...this.state,
            file: e.target.files[0],
            //previewFile: URL.createObjectURL(e.target.files[0]),
            error: '',
            success: ''
        });
    };

    cancelUpload = () => {
        this.props.onUploadSuccessOrFailure('', '', '');
    }
    showSuccessMessage = () => {
        //return this.state.success.length > 0 ? <Redirect to="/user/profile" /> : ""
        return this.state.success.length > 0 ? <div className="alert alert-success">{this.state.success}</div> : ""
    };

    showFailureMessage = () => {
        return this.state.error.length > 0 ? <div className="alert alert-danger">{this.state.error}</div> : ""
    };


    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={e => this.submitFileToUpload(e)}>
                    <div className="row" style={{ display: this.state.processing ? 'block' : 'none' }}>
                        <div className="col-12 bg-page-title mt-4 mb-4" style={{ display: this.props.title ? 'block' : 'none' }}>
                            <b>{this.props.title}</b>
                        </div>
                        <div className="col-12 mb-2">
                            <input type="file" onChange={e => this.setFile(e)} />
                        </div>
                        <div className="col-12 mb-2">
                            <button className="btn btn-primary m-2" type="submit">UPLOAD FILE</button>
                            <button className="btn btn-primary m-2" type="button" onClick={this.cancelUpload}
                                style={{ display: this.props.mode && this.props.mode === 'edit' ? 'none' : '' }}
                            >CANCEL</button>
                        </div>
                        <div className="col-12 m-2">
                            {this.showSuccessMessage()}
                            {this.showFailureMessage()}
                        </div>
                        <div className="alert alert-warning mt-2 text-left" style={{ display: this.props.mode && this.props.mode === 'edit' ? 'none' : '' }}>
                            Note:
                        <ul>
                                <li>
                                    <em>Please upload a pdf/doc/jpg/gif/png file related to the recently added record</em>
                                </li>
                                <li>
                                    <em>Please try to avoid large files. If you wish it so, please zip it and upload</em>
                                </li>
                            </ul>
                        </div>
                        {/* <pre>
                            {JSON.stringify(this.state, null, 4)}
                        </pre> */}
                    </div>
                </form>
            </div>
        )
    }
}
export default UploadFile    