import React from "react";
import { connect } from "react-redux";
import { Row, Col, Form, Input, Card } from "antd";
import { Editor } from "react-draft-wysiwyg";
import debounce from "lodash/debounce";
import styles from "../Components/index.less";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import axios from "../utils/axiosServer";
import Title from "../Components/EditPost/Title";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: ""
    };
  }

  onEditorStateChange: Function = editorState => {
    this.saveContent(editorState.getCurrentContent());
    console.log(editorState, "State Changed");
    console.log(convertToRaw(editorState.getCurrentContent()));

    this.setState({
      editorState
    });
  };

  uploadImageCallBack: Function = file => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8084/upload");
      // xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append("file", file);
      xhr.send(data);
      xhr.addEventListener("load", () => {
        console.log(xhr.responseText);
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener("error", () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    });
  };

  saveContent = debounce(content => {
    axios
      .post("/posts", { data: JSON.stringify(convertToRaw(content)) })
      .then(response => {
        console.log("api", response);
      })
      .catch(err => {});
    window.localStorage.setItem(
      "content",
      JSON.stringify(convertToRaw(content))
    );
    window.localStorage.setItem("title", this.state.title);
  }, 3000);

  onChangeUserName = e => {
    this.setState({ title: e.target.value });
    console.log(e.target.value);
  };

  componentDidMount() {
    console.log("Mounted Edit Post");
  }
  render() {
    const { editorState } = this.state;

    return (
      <Row type="flex" bordered={false} style={{ background: "#f0f2f5" }}>
        <Col span={4} order={3} style={{ background: "#f0f2f5" }} />
        <Col span={16} order={2} style={{ background: "#f0f2f5" }}>
          <Title onChangeUserName={this.onChangeUserName} />
          <Card style={{ minHeight: "280px", background: "#f0f2f5" }}>
            <Editor
              editorState={editorState}
              placeholder="Start Writing Your Ideas"
              toolbar={{
                image: {
                  uploadCallback: this.uploadImageCallBack,
                  alt: { present: true, mandatory: true }
                }
              }}
              wrapperClassName="demo-wrapper"
              onEditorStateChange={this.onEditorStateChange}
            />
          </Card>
        </Col>

        <Col span={4} order={1} />
      </Row>
    );
  }
}

var mapDispatchToProps = dispatch => {
  return {
    userInit: () => dispatch({ type: "USER_INIT", loading: true })
  };
};

var mapStateToProps = state => {
  return {
    store: state,
    userData: state.userFunctions.user,
    isAuthenticated: state.userFunctions.isAuthenticated,
    isEditMode: state.userFunctions.isEditMode,
    userImage: state.userFunctions.user.imageUrl
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
