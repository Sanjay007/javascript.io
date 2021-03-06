import React from "react";
import { connect } from "react-redux";
import { Icon as IC, Tooltip, Row, Col } from "antd";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Item, Divider as DC } from "semantic-ui-react";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {};
};

class ListPostsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.itemData, "Ind Item");
    const { itemData } = this.props;
    return (
      <Item>
        <Item.Image
          size="tiny"
          src="https://react.semantic-ui.com/images/wireframe/image.png"
        />

        <Item.Content>
          <Item.Header style={{ fontSize: "0.8em", fontFamily: "Roboto" }}>
            <Link to={`/${itemData.userbio.providerId}/${itemData.title}`}>
              {" "}
              {itemData.title}
            </Link>
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
              <IC type="schedule" /> {"  "}
              {itemData.postDate}
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
    );
  }
}

ListPostsItem.propTypes = {
  itemData: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPostsItem);
