import React from "react";
import { connect } from "react-redux";
import { InputNumber, Icon as IC, Tooltip, Row, Tag, Col, Avatar } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import {
  Image as ImageComponent,
  Item,
  Button,
  Card,
  Image,
  Divider as DC
} from "semantic-ui-react";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {};
};

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card style={{ background: "#FFF", boxShadow: "none", width: "200px" }}>
        <Card.Content>
          <Avatar
            style={{ backgroundColor: "#87d068", float: "right" }}
            size={36}
            icon="user"
          />
          <Card.Header>Steve Sanders</Card.Header>
          <Card.Meta>Memer Since Jul 8</Card.Meta>
          <Card.Description>
            Steve wants to add you to the group dsf dffffffffd d ddddddddd
            ddddddd ddddd ffffff <strong>best friends</strong>
            <Tag
              onClick={this.showInput}
              style={{
                background: "#fff",
                marginTop: "5px",
                borderStyle: "dashed"
              }}
            >
              <IC type="plus" /> Follow
            </Tag>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

ProfileInfo.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  likeCount: PropTypes.number,
  viewCount: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileInfo);
