import React, {Component} from 'react'
import Axios from 'axios';
import {Rail, Icon, Button, Segment, Header} from 'semantic-ui-react'

class UploadRail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            file: '',
            success: false,
            error: false,
            filePreviewUrl: false
        };

        // bind to outer scope
        this.fileUpload = this.fileUpload.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let files = e.target.files || e.dataTransfer.files;

        if (!files.length) return;

        this.createImage(files[0]);
    }

    createImage(file) {
        let reader = new FileReader();

        reader.onload = (e) => {
            this.setState({image: e.target.result});
        };

        reader.readAsDataURL((file));
    }

    fileUpload = async () => {
        const values = this.state.image;
        const self = this;

        await Axios.post('http://localhost:8000/api/activity', values)
            .then((res) => {
                self.setState({success: true});
            })
            .catch((e) =>{
                console.log(e);
            })
    }

    render() {
        return (
            <Header as="h3"><span role="img" aria-label="logo">⛵️</span>
                Breeze Church Management
                <Segment placeholder>
                    <Header icon>
                        <Icon name='file outline'/>
                        <form onSubmit={this.fileUpload}  encType="multipart/form-data" >
                            <h1>Insert Material</h1>
                            <label> Upload a CSV </label>
                            <input type="file"  onChange={this.onChange} />
                            <button type="submit">upload</button>
                        </form>
                    </Header>
                </Segment>
            </Header>
        );
    }

}

export default UploadRail;