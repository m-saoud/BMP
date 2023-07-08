import { useState } from "react";
import marked from "marked";
import ReactMarkdown from "react-markdown";

import "./App.css";

function App() {
  const [editorContent, setEditorContent] = useState("");

  const handleEditorChange = (e) => {
    setEditorContent(e.target.value);
  };
  const getPreviewHtml = () => {
    return { __html: marked(editorContent) };
  };
  return (
    <>
      <h1>Build a Markdown Previewer</h1>
      <div className="fluid-container">
        <div className="editor">
          <div className="toolbar">
            <i></i>Editor
            <i className="fa fa-arrows-alt"></i>
          </div>

          <textarea
            className="editor-textarea"
            id="editor"
            value={editorContent}
            onChange={handleEditorChange}
          ></textarea>

          <div className="preview">
            <div className="toolbar">
              <i></i>Preview
              <i className="fa fa-arrows-alt"></i>
            </div>
           <div className="preview-textarea" id="preview">
            <ReactMarkdown>{editorContent}</ReactMarkdown>
          </div> 
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
