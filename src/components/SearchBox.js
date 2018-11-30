import React from 'react';
import { Menu, Select, Icon, DatePicker, Button, Card, Row, Col } from 'antd';
import { Link } from "react-router-dom";
import 'antd/dist/antd.css';
import '../styles/_hero.scss';

const Option = Select.Option;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);
const testing123 = {b: 2};

const SearchBox = ({ dateChange, groupChange, test1 }) => (
    <Card className='input-container'>
        {console.log(test1)}
        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%', }} >
            <DatePicker onChange={(e) => dateChange(e)} style={{width: '100%'}}/>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '5px', marginBottom: '15px' }}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select group size"
                optionFilterProp="children"
                onChange={groupChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                <Option value="2-4">2-4</Option>
                <Option value="5-6">5-6</Option>
                <Option value="7-8">7-8</Option>
            </Select>
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={{
                pathname: "/form",
                state: {d: test1.d, groupSize: test1.groupSize},
            }}>
                <Button type='primary'> Book Tour ⚡ </Button>
            </Link>
        </Row>
    </Card>
);


export default SearchBox;

