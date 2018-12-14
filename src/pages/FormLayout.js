import React from 'react';
import Layout from "../components/Layout";
import '../styles/pages.scss'; 

const FormLayout = (props) => (
    <Layout type='form'>
        <div className='breadcrumb'> 
            <b> “Traveling—it leaves you speechless, then turns you into a storyteller.” - Ibn Batuta </b>
        </div> 
        <div className='form-container'>
            {props.children}
        </div>
    </Layout>
);

export default FormLayout; 