// node modules
import React from "react";
import ReactDOM from "react-dom";
import {Container, Header} from "semantic-ui-react";

// custom components
import ResultsList from "./ResultsList";
import UploadRail from './UploadRail';
import PracFileUpload from './PracFileUpload';

const App = ({children}) => (
    <Container style={{margin: 20}}>
        <UploadRail/>

        {children}

        <br/><br/>

        <h1>Practice file upload component</h1>
        <PracFileUpload/>
    </Container>
);

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
    <App>
        <ResultsList/>
    </App>,
    document.getElementById("root")
);
