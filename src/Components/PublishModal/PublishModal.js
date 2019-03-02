import { Modal, Button, Select, Row, Col } from "antd";
import { Link } from "react-router-dom";
import FeaturedCard from "../Home/FeaturedCard.js";
import React from "react";
import { connect } from "react-redux";
import { Icon as IC } from "semantic-ui-react";
import axios from "../../utils/axiosServer.js";

import styles from "../../Components/PublishModal/index.less";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    storeTags: value => dispatch({ type: "TAGS_POST", value })
  };
};

class PublishModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: [],
      fetching: false
    };
    this.baseState = this.state;
  }
  handleChange = value => {
    console.log(value, "kdkdk");
    var yz = [];
    if (value.length < 5) {
      //Storing Tags in Store
      for (let i = 0; i < value.length; i++) {
        yz.push(value[i].key);
        this.props.storeTags(yz);
      }

      this.setState({
        value,
        data: [],
        fetching: false
      });
    }
  };

  fetchUser = value => {
    console.log("fetching user", value);

    this.setState({ data: [], fetching: true });
    axios
      .get("/tags")
      .then(response => {
        console.log("TAG API", response);
        const rdata = response.data.data.map(user => ({
          text: `${user.tagName}`,
          value: user.tagName
        }));
        this.setState({ data: rdata, fetching: false });
      })
      .catch(err => {});
  };

  render() {
    const { fetching, data, value, tagsText } = this.state;
    console.log(data);
    return (
      <Modal
        style={{ textAlign: "center" }}
        mask={true}
        visible={this.props.visible}
        footer={null}
        onOk={this.props.handleOk}
        width={900}
        onCancel={this.props.handleCancel}
      >
        <Row>
          <Col span={10}>
            <FeaturedCard
              imageSrc={this.props.image}
              title={this.props.title}
              shortDescription={this.props.textData}
              postDate={this.props.postDate}
            />
          </Col>
          <Col span={12} style={{ padding: "5px" }}>
            <br />
            <h3>Prepare Your Target Audience </h3>
            <p>Select at max 5 tags </p>

            <Select
              mode="tags"
              labelInValue
              value={value}
              placeholder="Select users"
              onChange={this.handleChange}
              onSearch={this.fetchUser}
              style={{ width: "100%" }}
            >
              {data.map(d => (
                <Select.Option key={d.value}>{d.text}</Select.Option>
              ))}
            </Select>

            <p />
            <a onClick={this.props.publishNow}>
              {" "}
              <Button
                dashed
                loading={this.props.buttonloading}
                icon="download"
                size={22}
              >
                Publish Now !
              </Button>
            </a>
          </Col>
        </Row>
      </Modal>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishModal);
