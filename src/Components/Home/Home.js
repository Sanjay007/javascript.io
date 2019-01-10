import React from "react";
import { connect } from "react-redux";
import {
  Table,
  InputNumber,
  Divider,
  Input,
  Form,
  Tag,
  Icon,
  Popconfirm
} from "antd";

var mapStateToProps = state => {
  return {};
};

var mapDispatchToProps = dispatch => {
  return {
    changeConfigPageMenu: value =>
      dispatch({ type: "CHANGE_CONFIGURATION_PAGE_MENU", value })
  };
};

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === "number") {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    //localStorage.setItem("user","");

    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `Please Input ${title}!`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      editingKey: ""
    };
  }
  isEditing = record => {
    return record.key === this.state.editingKey;
  };
  cancel = () => {
    this.setState({ editingKey: "" });
  };
  edit = key => {
    this.setState({ editingKey: key });
  };

  save = (form, key) => {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  };

  render() {
    const columns = [
      {
        title: "Candidate",
        dataIndex: "name",
        width: "25%",
        editable: true
      },
      {
        title: "Age",
        dataIndex: "age",
        width: "15%",
        editable: true
      },
      {
        title: "Address",
        dataIndex: "address",
        width: "40%",
        editable: true
      },
      {
        title: "Action",
        dataIndex: "operation",
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        Save
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm
                    title="Sure to cancel?"
                    onConfirm={() => this.cancel(record.key)}
                  >
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
            </div>
          );
        }
      }
    ];

    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const outPut = columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === "age" ? "number" : "text",
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record)
        })
      };
    });

    return (
      <React.Fragment>
        <div>
          <h1>hhhhhhhhhhhhhhhhhhhh</h1>
          <Table
            components={components}
            bordered
            dataSource={this.state.data}
            columns={outPut}
            rowClassName="editable-row"
          />
        </div>
      </React.Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
