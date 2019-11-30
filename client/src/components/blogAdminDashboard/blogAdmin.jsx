import React from 'react';
import axios from 'axios';
import { Grid, Cell } from 'react-md';
import { Input, Button } from 'antd';
import 'antd/dist/antd.css';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import './blogAdmin.scss';

const MOCK_DATA = 'Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.';

class blogAdmin extends React.Component {
    state= {
      content: '',
      author: '',
      title: '',
      image: '',
    }


    mdParser = null

    constructor(props) {
      super(props);
      this.mdParser = new MarkdownIt(/* Markdown-it options */);
    }

    componentDidMount() {
      const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
      if (idToken.idToken.claims.name === 'Sarra Ben Mansour') {
        this.setState({
          author: 'Persephone',
        });
      } else {
        this.setState({
          author: 'Hades',
        });
      }
    }

    handleEditorChange = ({ html, text }) => {
      this.setState({
        content: html,
      });
    }

    postBlog(content, title, author, image) {
      const blog = {
        blog_title: title, blog_content: content, blog_author: author, blog_image: image,
      };
      axios.post('https://blogger-system.herokuapp.com/blogs/add', { ...blog })
        .then((res) => {
          console.log(res);
          console.log(res.data);
        });
      window.location = '/';
    }

    render() {
      const {
        content, title, author, image,
      } = this.state;
      return (
        <div>
          <Grid>
            <Cell size={8}>
              <Input
                placeholder="title"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </Cell>
            <Cell size={12} style={{ height: '700px' }}>
              <MdEditor
                value={MOCK_DATA}
                renderHTML={text => this.mdParser.render(text)}
                onChange={this.handleEditorChange}
              />
            </Cell>
            <Cell size={8}>
              <Input
                placeholder="Image"
                onChange={e => this.setState({ image: e.target.value })}
              />
            </Cell>
            <Cell size={8}>
              <Button style={{ margin: '25px' }} type="primary" onClick={() => this.postBlog(content, title, author, image)}>Publish</Button>
              <Button type="danger" onClick={() => window.location = '/'}>Cancel</Button>
            </Cell>
          </Grid>
        </div>
      );
    }
}


export default blogAdmin;
