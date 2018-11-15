import '../styles/main.scss'

const SearchBox = () => (
    <div class="searchbox">
        <div class="form-block w-form">
            <form id="email-form" name="email-form" data-name="Email Form"><input type="text" class="search_input w-input" maxLength="256" name="search_input" data-name="search_input" id="search_input" /></form>
        </div>
        <a href="interests.html" class="button w-button">Meet Locals</a>
    </div>
);


export default SearchBox;

