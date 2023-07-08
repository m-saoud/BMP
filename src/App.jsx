import { useState } from "react";

import "./App.css";
import { Container } from "react-bootstrap";

function App() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (e) => {
    setEditorContent(e.target.value);
  };

  return (
    <>
      <h1>Build a Markdown Previewer</h1>
      <container className="fluid-container">
        <div className="editor">
          <div class="toolbar">
            <i></i>Editor
            <i class="fa fa-arrows-alt"></i>
          </div>

          <textarea
            className="editor-textarea"
            id="editor"
            value={editorContent}
            onChange={handleEditorChange}
          ></textarea>

          <div className="preview">
            <div class="toolbar">
              <i></i>Preview
              <i class="fa fa-arrows-alt"></i>
            </div>
            <textarea
              value={editorContent}
              readOnly
              className="editor-textarea"
              id="preview"
            ></textarea>
          </div>
        </div>
      </container>
    </>
  );
}

export default App;
