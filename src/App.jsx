import { useState } from "react";

import "./App.css";
import { Container } from "react-bootstrap";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <>
      <h1>Build a Markdown Previewer</h1>
      <Container className="fluid-container">
        <div className="editor">

          <div class="toolbar">
            <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i>Editor
            <i class="fa fa-arrows-alt"></i>
          </div>

          <textarea 
            style={{ maxWidth: 200, maxHeight: 200 }}
            id="editor"
          ></textarea>
        </div>
{/* 
        <div className="preview">
          <label htmlFor="preview">Previewer:</label>

          <textarea
            style={{ maxWidth: 400, maxHeight: 400 }}
            id="preview"
          ></textarea>
        </div> */}
      </Container>
    </>
  );
}

export default App;
