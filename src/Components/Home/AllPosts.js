import React from "react";
import { connect } from "react-redux";
import {
  Table,
  InputNumber,
  Divider,
  Input,
  Badge,
  Form,
  Tag,
  Icon as IC,
  Card,
  Tooltip,
  Row,
  Col,
  Avatar,
  Popconfirm,
  List
} from "antd";
import { Link } from "react-router-dom";

import {
  Image as ImageComponent,
  Item,
  Card as CS,
  Divider as DC
} from "semantic-ui-react";
import styles from "../Home/index.less";
const paragraph = (
  <ImageComponent src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
);

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};
const IconText = ({ type, text }) => (
  <span>
    <IC type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."
  });
}

class AllPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editingKey: ""
    };
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={listData}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="eye-o" text="156" />,
              <IconText type="like-o" text="156" />
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPosts);
