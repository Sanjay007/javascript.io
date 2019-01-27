import React from "react";
import { connect } from "react-redux";
import {
  Badge,
  Tag,
  Popover,
  Icon as IC,
  Tooltip,
  Row,
  Col,
  Avatar
} from "antd";
import { Link } from "react-router-dom";
import { Image as ImageComponent, Card as CS } from "semantic-ui-react";
import PropTypes from "prop-types";
import Profileinfo from "../ProfileInfoPopover/ProfileInfo.js";
import styles from "./index.less";
import { getReadTime } from "../../utils/commonUtils.js";
import _ from "lodash";
var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

class FeaturedCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CS>
        <ImageComponent src={this.props.imageSrc} style={{ height: "200px" }} />
        <CS.Content style={{ background: "#f0f2f5" }}>
          <CS.Header style={{ textAlign: "center" }}>
            {this.props.title ? this.props.title : "SSSSSSSSSSS"}
          </CS.Header>
          <CS.Meta>
            <span style={{ fontSize: "0.6em", margin: "3px" }} className="stay">
              <IC type="schedule" />{" "}
              {this.props.postDate != undefined
                ? this.props.postDate
                : "00-JAN-00"}
            </span>
            <span
              style={{ fontSize: "0.6em", margin: "8px" }}
              className="price"
            >
              <IC type="clock-circle" />{" "}
              {this.props.shortDescription != undefined
                ? getReadTime(this.props.shortDescription)
                : "Test Content"}
            </span>
          </CS.Meta>
          <CS.Description>
            {_.truncate(this.props.shortDescription, {
              length: 50,
              separator: " "
            })}{" "}
          </CS.Description>
        </CS.Content>
        <CS.Content extra>
          <Row gutter={24} style={{ padding: "3px" }}>
            <Col span={4}>
              {" "}
              <Popover
                style={{ background: "#f0f2f5", margin: "0px", padding: "0px" }}
                content={<Profileinfo />}
                trigger="hover"
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  size={36}
                  icon="user"
                />
              </Popover>
            </Col>
            <Col span={6}>
              {" "}
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
            </Col>
            {/*<Col span={4}>
                    <IC type="github" />
                  </Col>*/}
            <Col span={8} />
            <Col span={5}>
              <Badge
                count={"9"}
                style={{
                  backgroundColor: "#fff",
                  color: "#999",
                  boxShadow: "0 0 0 1px #d9d9d9 inset",
                  fontSize: "11px"
                }}
              >
                <IC style={{ fontSize: "28px" }} type="like" />
              </Badge>
            </Col>

            {/*<Col span={5}>
                    <Badge
                      count={"9"}
                      style={{
                        backgroundColor: "#fff",
                        color: "#999",
                        boxShadow: "0 0 0 1px #d9d9d9 inset",
                        fontSize: "11px"
                      }}
                    >
                      <IC style={{ fontSize: "30px" }} type="dislike" />
                    </Badge>
                  </Col>*/}
          </Row>
        </CS.Content>
      </CS>
    );
  }
}

FeaturedCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  avatarSrc: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  likeCount: PropTypes.number,
  viewCount: PropTypes.number
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedCard);
