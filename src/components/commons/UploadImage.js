import React from "react";
import { post } from "axios";
import { Redirect } from "react-router-dom";
import { API_URL } from "../../config";
import { isAuthenticated } from "../../api/user";
import { getFileSize } from "../commons/CommonFunctions";

class UploadImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewFile: "",
      imageHeight: 0,
      imageWidth: 0,
      user: isAuthenticated(),
      processing: true,
      error: "",
      success: "",
    };
  }

  validateForm = () => {
    if (this.state.error.length > 0) {
      alert(this.state.error);
      return false;
    } else {
      return true;
    }
  };

  async submit(e) {
    //debugger;
    e.preventDefault();
    if (this.state.file.length === 0) {
      this.setState({
        ...this.state,
        error: "Please choose a file",
      });
      return;
    }

    if (this.validateForm() === false) {
      return false;
    }

    const url = `${API_URL}/user/UploadPhoto/${this.state.user.UserType}/${this.state.user.UserReferenceID}`;
    const formData = new FormData();
    formData.append("body", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config)
      .then((response) => {
        //debugger;
        this.setState({
          ...this.state,
          file: "",
          success: response.data.Message,
          error: "",
          processing: false,
        });
        //console.log(data);
        this.props.onRun();
      })
      .catch((err) => {
        this.setState({
          ...this.state,
          success: "",
          error: "unable to upload the file",
          processing: false,
        });
        console.log(err);
      });
  }

  setFile(e) {
    // debugger;
    // var error_message = "";
    // if (e.target.files[0].size > 1024 * 512) {
    //   var size_of_file = Number(
    //     e.target.files[0].size / (1024 * 1024).toFixed(2)
    //   );

    //   error_message = `You selected a file with ${Number(size_of_file).toFixed(
    //     2
    //   )} MB. Please choose a file with in 512KB`;
    // }

    this.setState({
      ...this.state,
      file: e.target.files[0],
      file_size: e.target.files[0].size,
      previewFile: URL.createObjectURL(e.target.files[0]),
      error: "",
      success: "",
    });
  }

  showSuccessMessage = () => {
    //return this.state.success.length > 0 ? <Redirect to="/user/profile" /> : ""
    return this.state.success.length > 0 ? (
      <div className="alert alert-success">{this.state.success}</div>
    ) : (
      ""
    );
  };

  showFailureMessage = () => {
    return this.state.error.length > 0 ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : (
      ""
    );
  };

  handleSize = (image) => {
    //console.log(image);
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
  };

  onLoadImage = (e) => {
    //console.log("on load image - e ", e);
    //debugger;
    var err = "";
    if (
      e.currentTarget.naturalHeight > 300 ||
      e.currentTarget.naturalWidth > 300
    ) {
      err =
        "Please choose a file with correct dimension (height and width between 300px X 300px) ";
      if (this.state.file_size > 1024 * 50) {
        err = err + " and Size with in 50 KB";
      }
    }
    this.setState({
      ...this.state,
      file_height: e.currentTarget.naturalHeight,
      file_width: e.currentTarget.naturalWidth,
      error: err,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <form onSubmit={(e) => this.submit(e)}>
          <div
            className="row"
            style={{ display: this.state.processing ? "block" : "none" }}
          >
            <div className="col-12 bg-page-title mb-4 pt-4">
              <b>{this.props.title}</b>
            </div>

            <div className="col-12 m-2 alert alert-text-muted mt-2 text-center">
              Note:
              <ul style={{ listStyleType: "none" }}>
                <li>Please upload a jpg/png/gif file with maximum 50 KB</li>
                <li>
                  Please choose a profile photo with height:width equals to 1:1
                  ratio. (Preferably 300px height & 300px width)
                  {/* <pre>{JSON.stringify(this.state, null, 4)}</pre> */}
                </li>
              </ul>
            </div>

            <div className="col-12 mb-4">
              <input type="file" onChange={(e) => this.setFile(e)} />
              <button className="btn btn-primary m-2" type="submit">
                UPLOAD PROFILE PHOTO
              </button>
            </div>
            <div className="col-12 m-2">
              {this.showSuccessMessage()}
              {this.showFailureMessage()}
            </div>

            <div
              className="col-12 m-2"
              style={{
                marginRight: "-20px",
                height: "600px",
                overflow: "auto",
              }}
            >
              <p
                style={{
                  display: this.state.file_height ? "" : "none",
                  borderTop: "solid 1px #ccc",
                }}
              >
                <span>
                  File Dimension:-{" "}
                  <em>
                    Height: {this.state.file_height} & Width:{" "}
                    {this.state.file_width}
                  </em>
                </span>
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <span>
                  File Size:- <em>{getFileSize(this.state.file_size)}</em>
                </span>
              </p>
              <img
                src={this.state.previewFile}
                ref={(image) => {
                  this.handleSize(image);
                }}
                onLoad={(e) => this.onLoadImage(e)}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default UploadImage;
