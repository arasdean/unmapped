import React from 'react';
import Layout from "../components/Layout";
import '../styles/pages.scss'; 

const FormLayout = (props) => (
    <Layout type='form'>
        <div style={{ height: '50px', background: '#6dec67' }} />
        <div className='form-container'>
            {props.children}
        </div>
    </Layout>
);

export default FormLayout; 