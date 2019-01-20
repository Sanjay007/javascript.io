import React from "react";
import { connect } from "react-redux";
import { Icon as IC, Row, Col } from "antd";
import { Link } from "react-router-dom";
import ListPosts from "../Home/ListPosts.js";
import { Image as ImageComponent, Divider as DC } from "semantic-ui-react";
import AllPosts from "../Home/AllPosts.js";
import FeaturedCard from "../Home/FeaturedCard.js";
import styles from "../Home/index.less";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    const data = [
      "Racing car sprays burning fuel into crowd.",
      "Japanese princess to wed commoner.",
      "Australian walks 100km after outback crash.",
      "Man charged over missing wedding girl.",
      "Los Angeles battles huge wildfires."
    ];
    this.state = {
      data: data,
      editingKey: ""
    };
  }
  componentWillUnmount() {
    window.onbeforeunload = null;
  }

  render() {
    return (
      <React.Fragment>
        <Row gutter={16}>
          <Col span={16} offset={2}>
            <h3 style={{ textAlign: "center", marginBottom: "10px" }}> </h3>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6} offset={2}>
            <FeaturedCard />
          </Col>
          <Col span={6}>
            <ListPosts />
          </Col>
          <Col span={6}>
            <FeaturedCard />
          </Col>
        </Row>

        <React.Fragment>
          <DC />
          <Row gutter={24}>
            <Col span={12} offset={2}>
              <h3 style={{ textAlign: "center", margin: "5px" }}>
                Suggested Reads{" "}
              </h3>
            </Col>
            <Col span={6}>
              {" "}
              <h3 style={{ textAlign: "center", margin: "5px" }}>
                Editor Picks{" "}
              </h3>
            </Col>
          </Row>

          <Row gutter={24}>
            <Col span={12} offset={2}>
              <AllPosts />
            </Col>
            <Col span={6}>
              <ListPosts />
            </Col>
          </Row>
        </React.Fragment>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
