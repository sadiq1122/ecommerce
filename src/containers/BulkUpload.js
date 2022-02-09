import axios from "axios";
import React, { Component } from "react";
import { ADMIN_SERVICE_BULK_UPLOAD } from "../constants/Api_Details";

export default class BulkUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.myfile = React.createRef();
  }

  onFileChange = (e) => {
    this.setState({
      selectedFile: e.target.files[0],
    });
  };

  fileUploadCall = async (formData) => {
    const response = await axios
      .post(ADMIN_SERVICE_BULK_UPLOAD, formData)
      .catch((err) => console.log(err));

    console.log(response);
  };

  handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", this.state.selectedFile);

    this.fileUploadCall(formData);
    console.log(formData);
  };

  render() {
    return (
      <div className="bulk-upload">
        <center>
          <form>
            <input type="file" ref={this.myfile} onChange={this.onFileChange} />

            <button className="btn btn-success" onClick={this.handleUpload}>
              Upload
            </button>
          </form>
        </center>
      </div>
    );
  }
}
