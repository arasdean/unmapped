import React from 'react';
import { Link } from "react-router-dom";
import '../styles/main.scss';

const SearchBox = () => (
    <div className="searchbox">
        <div className="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form"><input type="text" className="search_input w-input" maxLength="256" name="search_input" data-name="search_input" id="search_input" /></form>
        </div>
        <Link to={{
              pathname: "/form",
            }}>
            <a className="button w-button">Meet Locals</a>
        </Link>
    </div>
);


export default SearchBox;

