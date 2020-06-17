import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import defaultText from './utils/defaultText';
import marked from 'marked';
import DOMPurify from 'dompurify';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editor: defaultText,
      preview: marked(defaultText)
    };
  }

  onEditorChange = (event) => {
    // First convert user input to markdown
    let markdown = marked(event.target.value);
    // Then sanitize the user input before inserting into preview
    let clean = DOMPurify.sanitize(markdown);

    this.setState({
      editor: event.target.value,
      preview: clean
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Markdown Previewer</h1>
        <main className="App__main">
          <Editor text={this.state.editor} onChange={this.onEditorChange} />
          <Preview html={this.state.preview} />
        </main>
      </div>
    );
  }
}

export default App;
