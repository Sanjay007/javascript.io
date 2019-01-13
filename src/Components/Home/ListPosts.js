import React from "react";
import { connect } from "react-redux";
import { InputNumber, Icon as IC, Tooltip, Row, Col } from "antd";
import { Link } from "react-router-dom";

import {
  Image as ImageComponent,
  Item,
  Card as CS,
  Divider as DC
} from "semantic-ui-react";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

class ListPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Item.Group>
          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header style={{ fontSize: "0.8em", fontFamily: "Roboto" }}>
                Arrowhead Valley Camp Arrowhead Valley Camp
              </Item.Header>
              <Item.Meta>
                <span
                  style={{
                    fontSize: "0.6em",
                    margin: "3px",
                    fontFamily: "Roboto"
                  }}
                  className="stay"
                >
                  <IC type="schedule" /> {"  "}Jan-7-2019
                </span>
                <span
                  style={{
                    fontSize: "0.6em",
                    margin: "8px",
                    fontFamily: "Roboto"
                  }}
                  className="price"
                >
                  <IC type="clock-circle" /> {" 2 min read"}
                </span>
              </Item.Meta>
              {/*<Item.Description>{paragraph}</Item.Description>*/}
              <Item.Extra>
                <Row gutter={16}>
                  <Col span={5}>
                    <Tooltip title="views">
                      <IC type="eye" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                  <Col span={5}>
                    {" "}
                    <Tooltip title="views">
                      <IC type="like" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                </Row>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header style={{ fontSize: "0.8em", fontFamily: "Roboto" }}>
                Arrowhead Valley Camp Arrowhead Valley Camp
              </Item.Header>
              <Item.Meta>
                <span
                  style={{
                    fontSize: "0.6em",
                    margin: "3px",
                    fontFamily: "Roboto"
                  }}
                  className="stay"
                >
                  <IC type="schedule" /> {"  "}Jan-7-2019
                </span>
                <span
                  style={{ fontSize: "0.6em", margin: "8px" }}
                  className="price"
                >
                  <IC type="clock-circle" /> {" 2 min read"}
                </span>
              </Item.Meta>
              {/*<Item.Description>{paragraph}</Item.Description>*/}
              <Item.Extra>
                <Row gutter={16}>
                  <Col span={5}>
                    <Tooltip title="views">
                      <IC type="eye" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                  <Col span={5}>
                    {" "}
                    <Tooltip title="views">
                      <IC type="like" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                </Row>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header style={{ fontSize: "0.8em" }}>
                Arrowhead Valley Camp Arrowhead Valley Camp
              </Item.Header>
              <Item.Meta>
                <span
                  style={{ fontSize: "0.6em", margin: "3px" }}
                  className="stay"
                >
                  <IC type="schedule" /> {"  "}Jan-7-2019
                </span>
                <span
                  style={{ fontSize: "0.6em", margin: "8px" }}
                  className="price"
                >
                  <IC type="clock-circle" /> {" 2 min read"}
                </span>
              </Item.Meta>
              {/*<Item.Description>{paragraph}</Item.Description>*/}
              <Item.Extra>
                <Row gutter={16}>
                  <Col span={5}>
                    <Tooltip title="views">
                      <IC type="eye" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                  <Col span={5}>
                    {" "}
                    <Tooltip title="views">
                      <IC type="like" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                </Row>
              </Item.Extra>
            </Item.Content>
          </Item>

          <Item>
            <Item.Image
              size="tiny"
              src="https://react.semantic-ui.com/images/wireframe/image.png"
            />

            <Item.Content>
              <Item.Header style={{ fontSize: "0.8em" }}>
                Arrowhead Valley Camp Arrowhead Valley Camp
              </Item.Header>
              <Item.Meta>
                <span
                  style={{ fontSize: "0.6em", margin: "3px" }}
                  className="stay"
                >
                  <IC type="schedule" /> {"  "}Jan-7-2019
                </span>
                <span
                  style={{ fontSize: "0.6em", margin: "8px" }}
                  className="price"
                >
                  <IC type="clock-circle" /> {" 2 min read"}
                </span>
              </Item.Meta>
              {/*<Item.Description>{paragraph}</Item.Description>*/}
              <Item.Extra>
                <Row gutter={16}>
                  <Col span={5}>
                    <Tooltip title="views">
                      <IC type="eye" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                  <Col span={5}>
                    {" "}
                    <Tooltip title="views">
                      <IC type="like" />
                      {"  "}
                    </Tooltip>
                    0
                  </Col>
                </Row>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
