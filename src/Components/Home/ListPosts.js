import React from "react";
import { connect } from "react-redux";
import { Icon as IC, Col } from "antd";
import { Link } from "react-router-dom";
import ListPostsItem from "../Home/ListPostsItem.js";
import { Image as ImageComponent, Item } from "semantic-ui-react";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {};
};

class ListPosts extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Item.Group>
          <ListPostsItem />
          <ListPostsItem />
          <ListPostsItem />
          <ListPostsItem />
        </Item.Group>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
