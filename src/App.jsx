import { useState } from "react";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <h1>Build a Markdown Previewer</h1>
      <container className="fluid-container">
        <div className="editor">
          <div class="toolbar">
            <i></i>Editor
            <i class="fa fa-arrows-alt"></i>
          </div>

          <textarea className="editor-textarea" id="editor"></textarea>

          <div className="preview">
            <div class="toolbar">
              <i></i>Preview
              <i class="fa fa-arrows-alt"></i>
            </div>
            <textarea className="editor-textarea" id="preview"></textarea>
          </div>
        </div>
      </container>
    </>
  );
}

export default App;
