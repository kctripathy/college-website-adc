import React from 'react';
import { post } from 'axios';
import { Redirect } from 'react-router-dom'
import { API_URL } from '../../config';
import { isAuthenticated } from '../../api/user';

class Fileupload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: '',
            user: isAuthenticated(),
            processing: true,
            error: '',
            success: ''
        };
    }

    async submit(e) {
        //debugger;
        e.preventDefault();
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
            file: e.target.files[0]
        });
    };

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
                {this.showSuccessMessage()}
                {this.showFailureMessage()}
                <form onSubmit={e => this.submit(e)}>
                    <div className="row" style={{ display: this.state.processing ? 'block' : 'none' }}>

                        <div className="col-12 bg-page-title mb-4">{this.props.title}</div>
                        <input type="file" onChange={e => this.setFile(e)} />
                        <button className="btn btn-primary" type="submit">Upload</button>

                    </div>
                </form>
            </div>
        )
    }
}
export default Fileupload    