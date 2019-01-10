import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Editor } from "react-draft-wysiwyg";
import axios from "../utils/axiosServer";

import { connect } from "react-redux";
import {
  Row,
  Button,
  Affix,
  Col,
  Badge,
  Tooltip,
  Tag,
  Icon,
  Avatar,
  Form,
  Input,
  Card
} from "antd";
import debounce from "lodash/debounce";
import styles from "../Components/index.less";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };
  }
  getSavedEditorData() {
    const savedData = localStorage.getItem("content");

    return savedData ? JSON.parse(savedData) : null;
  }

  componentDidMount() {
    axios
      .get("/posts")
      .then(response => {
        console.log("apiResponse", response);
        const rawEditorData = JSON.parse(response.data.data);
        if (rawEditorData !== null) {
          const contentState = convertFromRaw(rawEditorData);
          this.setState({
            editorState: EditorState.createWithContent(contentState)
          });
        }
      })
      .catch(err => {});

    //     // Load editor data (raw js object) from local storage
    //     const rawEditorData = this.getSavedEditorData();
    // console.log(rawEditorData,"DDDDDDDDDDDDDDDDDDDDDD");
    //     if (rawEditorData !== null) {
    //       const contentState = convertFromRaw(rawEditorData);
    //       this.setState({
    //         editorState: EditorState.createWithContent(contentState)
    //       });
    //     }
  }

  render() {
    const IconFont = Icon.createFromIconfontCN({
      scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"
    });

    return (
      <Row type="flex">
        <Col span={4} order={3}>
          <Affix offsetTop={120} onChange={affixed => console.log(affixed)}>
            <div style={{ width: 30 }}>
              <div className="icons-list">
                <Badge count={5}>
                  <Icon
                    style={{ fontSize: "25px", marginBottom: "1px" }}
                    type="like"
                    theme="filled"
                  />
                </Badge>

                <Icon
                  style={{ fontSize: "25px", marginBottom: "1px" }}
                  type="google-plus"
                />
                <Icon
                  style={{
                    fontSize: "25px",
                    marginBottom: "1px",
                    marginTop: "1px"
                  }}
                  type="facebook"
                />
                <Icon
                  style={{
                    fontSize: "25px",
                    marginBottom: "1px",
                    marginTop: "1px"
                  }}
                  type="twitter"
                />
              </div>
            </div>
          </Affix>
        </Col>
        <Col span={16} order={2}>
          <Card title={localStorage.getItem("title")}>
            <Row gutter={24}>
              <Col className="gutter-row" span={8}>
                <div className="gutter-box">
                  <Tooltip title="Sanjay Yadav">
                    <Avatar shape="square" size={32} icon="user" /> 2 min read{" "}
                    {}
                  </Tooltip>
                  <Tag
                    onClick={this.showInput}
                    style={{ background: "#fff", borderStyle: "dashed" }}
                  >
                    <Icon type="plus" /> Follow
                  </Tag>
                  <Icon type="github" />
                </div>
              </Col>

              {/*<Col className="gutter-row" span={2}>
                <div className="gutter-box" style={{ textAlign: 'center' }}>
                  <Badge count={5}>
                    <Button type="primary" shape="circle" icon="like" size={22} />
                  </Badge>
                </div>
              </Col>*/}

              {/*<Col className="gutter-row" span={2}>
                <div className="gutter-box" style={{ textAlign: 'center' }}>
                  <Badge count={5}>
                    <Button type="primary" shape="circle" icon="like" size={22} />
                  </Badge>
                </div>
              </Col>

              <Col className="gutter-row" span={2}>
                <div className="gutter-box">
                  <span>
    <Icon type='like' style={{ marginRight: 8 }} />{222}
    
  </span>
                </div>
              </Col>*/}
            </Row>

            <Row gutter={16}>
              <Col className="gutter-row" span={16}>
                <br />
                <div className="gutter-box">
                  <div>
                    <Tag color="cyan"> Css</Tag>
                    <Tag color="magenta">
                      <a href="https://github.com/ant-design/ant-design/issues/1862">
                        Jquery
                      </a>
                    </Tag>
                    <Tag color="volcano">Javascript</Tag>
                    <Tag color="gold">Html</Tag>
                  </div>
                </div>
              </Col>
            </Row>
            <Editor
              toolbarHidden
              readOnly={true}
              editorState={this.state.editorState}
            />
          </Card>
        </Col>

        <Col span={4} order={1} />
      </Row>
    );
  }
}

export default Preview;
