import React from 'react';
import { Menu, Select, TimePicker, DatePicker, Button, Card, Row, Col } from 'antd';
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

const prices = {
    '1 Person → $35/hr': 35,
    "2 People → $40/hr": 40,
    "3 People → $45/hr": 45,
    "4 People → $50/hr": 50,
    "5 People → $55/hr": 55,
    "6 People → $60/hr": 60,
    "7 People → $65/hr": 65,
    "8 People → $70/hr": 70,
    "9 People → $75/hr": 75,
} 


const SearchBox = ({ dateChange, groupChange, test1 }) => (
    <Card className='input-container'>
        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%', }} >
            <DatePicker onChange={(e) => dateChange(e)} style={{ width: '100%' }} />
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '5px' }}> 
         <TimePicker use12Hours format="HH:mm a" minuteStep={15} style={{ width: '100%' }} />
        </Row>
        <Row style={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: '5px', marginBottom: '20px' }}>
            <Select
                showSearch
                style={{ width: 200 }}
                placeholder="Select group size"
                optionFilterProp="children"
                onChange={groupChange}
                filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            >
                {Object.keys(prices).map(price =>  
                    <Option value={price}>{price}</Option>
                )}
                
            </Select>
        </Row>


        <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to={{
                pathname: "/form",
                state: { d: test1.d, groupSize: test1.groupSize, price: test1.price },
            }}>
                <Button type='primary'> Book Tour ⚡ </Button>
            </Link>
        </Row>
    </Card>
);


export default SearchBox;

