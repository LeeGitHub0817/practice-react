import React from 'react';

import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';

function TodoListUI(props) {
  return (
    <div>
      <Input onChange={ props.handleChange } 
        placeholder={ props.inputValue }
        style={{ width: '92%' }}
        value={ props.inputValue }
      >
      </Input>
      <Button onClick= { props.handleAdd } type="primary">添加</Button>

      <List dataSource={ props.list }
        bordered
        renderItem={(item, idx) => {
          return (
            <List.Item
              actions={[<Button onClick={ props.handleDelete(idx) } type="danger">删除</Button>]}
            >
              {idx + 1}、{ item }
            </List.Item>
          )
        }}
      >
      </List>
    </div>
  );
}

export default TodoListUI;