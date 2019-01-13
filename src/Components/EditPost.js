import React from "react";
import { connect } from "react-redux";
import { Row, Col, message, Form, Input, Card } from "antd";
import { Editor } from "react-draft-wysiwyg";
import debounce from "lodash/debounce";
import styles from "../Components/index.less";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import axios from "../utils/axiosServer";
import Title from "../Components/EditPost/Title";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

window.onbeforeunload = function() {
  return "Data will be lost if you leave the page, are you sure?";
};
var mapDispatchToProps = dispatch => {
  return {
    triggerEdit: () =>
      dispatch({ type: "EDIT_MODE_TRIGGERED", isEditMode: true }),
    triggerNoEdit: () =>
      dispatch({ type: "EDIT_MODE_TRIGGERED", isEditMode: false }),
    storeEditedData: data =>
      dispatch({ type: "EDITOR_DATA_SAVE", editedData: data })
  };
};

var mapStateToProps = state => {
  return {
    store: state,
    userData: state.userFunctions.user,
    isAuthenticated: state.userFunctions.isAuthenticated,
    isEditMode: state.userFunctions.isEditMode,
    userImage: state.userFunctions.user.imageUrl,
    editedData: state.userFunctions.currentDraftPost
  };
};

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      title: "",
      hashedId: "",
      featuredImage: ""
    };
  }

  onEditorStateChange: Function = editorState => {
    this.saveContent(editorState.getCurrentContent());
    ////console.log(editorState, "State Changed");
    /// console.log(convertToRaw(editorState.getCurrentContent()));

    this.setState({
      editorState
    });
  };

  uploadImageCallBack: Function = file => {
    const data = new FormData();
    data.append("file", file);
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://spring-javascript.herokuapp.com/upload");
      const data = new FormData();
      data.append("file", file);
      xhr.setRequestHeader(
        "Authorization",
        "Bearer " + localStorage.getItem("ACCESS_TOKEN")
      );
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
    console.log();
    let sanjay = JSON.stringify(content);
    let index = sanjay.indexOf('data":{"src"');
    let x = sanjay.substr(index, sanjay.length);
    console.log(index);

    console.log(x);
    let request = {
      data: JSON.stringify(convertToRaw(content)),
      title: this.state.title,
      hashedId: this.state.hashedId
    };
    message
      .loading("Saving..", 1.5)
      .then(() => message.success("Saving Done", 0.5));

    console.log("Request", request);
    axios
      .post("/posts", {
        data: JSON.stringify(convertToRaw(content)),
        title: this.state.title,
        hashedId: this.state.hashedId
      })
      .then(response => {
        console.log("api", response);

        console.log(response.data.data.hashedId, "Hashed");

        this.setState({
          hashedId: response.data.data.hashedId,
          featuredImage: response.data.data.featuredImage
        });

        console.log("Edit posts Own State", this.state);
        let dataStored = {
          title: this.state.title,
          postsdata: JSON.stringify(convertToRaw(content)),
          tags: [],
          featuredImage: response.data.data.featuredImage,
          minRead: "2 min read",
          hashedId: response.data.data.hashedId
        };

        this.props.storeEditedData(dataStored);
      })
      .catch(err => {
        message.error("Error Occured!");

        console.log("SDDDDDDDDDD");
      });
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

  onFocus = () => {
    console.log("Focused");
  };

  componentDidMount() {
    console.log("Mounted Edit Post");
    console.log("Edited Data", this.props.editedData);
    // this.setState({
    //   editorState:
    //     this.props.editedData === undefined
    //       ? EditorState.createEmpty()
    //       : JSON.parse(this.props.editedData.postsdata),
    //   title: this.props.editedData.title,
    //   hashedId: this.props.editedData.hashedId
    // });
  }
  componentWillMount() {
    this.props.triggerEdit();
  }

  componentWillUnmount() {
    console.log("Edit Post Unmounted");
    this.props.triggerNoEdit();
  }
  render() {
    const { editorState } = this.state;

    return (
      <Row type="flex" bordered={false} style={{ background: "#f0f2f5" }}>
        <Col span={4} order={3} style={{ background: "#f0f2f5" }} />
        <Col span={16} order={2} style={{ background: "#f0f2f5" }}>
          <Title
            onfocus={this.onFocus}
            onChangeUserName={this.onChangeUserName}
          />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
