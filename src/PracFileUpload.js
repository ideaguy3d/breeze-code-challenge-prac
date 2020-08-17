import React, {Component} from 'react';
import Axios from 'axios';

class PracFileUpload extends Component {
    state = {
        selectedFile: null
    }

    // arrow function to bind to outer scope
    fileSelectedHandler = event => {
        const firstFile = event.target.files[0];
        console.log(firstFile);
        this.setState({selectedFile: firstFile});
    }

    fileUploadHandler = (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append(
            'jprac',
            this.state.selectedFile,
            this.state.selectedFile.name
        )

        let debug = 1;

        Axios.post(
            'http://127.0.0.1:8000/api/activity',
            formData
            // , {headers: {'scheme-type': 'http'}}
        ).then(res => {
                console.log('_> The response was: ', res);
                let debug2 = 1;
            }
        ).catch(e => {
            console.log('_> ERROR ERROR ERROR: ', e);
            let debug2b = 1;
        });

        let debug3 = 1;
    }

    render() {
        return (
            <form>
                <input type="file" onChange={this.fileSelectedHandler} name="jprac"/>
                <button onClick={this.fileUploadHandler}>upload</button>
            </form>
        );
    }
}

export default PracFileUpload;