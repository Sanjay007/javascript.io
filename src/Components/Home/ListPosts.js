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
  render() {
    const { dashboard } = this.props;
    console.log(dashboard.length, "NNNNNNNNNNNNNNNNNNN");
    const listItems = this.props.dashboard.map(itemData => (
      <ListPostsItem itemData={itemData} />
    ));
    return (
      <React.Fragment>
        <Item.Group>{listItems}</Item.Group>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
