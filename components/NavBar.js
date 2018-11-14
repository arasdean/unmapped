import '../styles/main.scss'

const NavBar = () => (
    <div class="nav_section">
        <div class="nav_row">
            <div class="column logo"> <img src="/static/Unmapped-1.png" width="206" alt="" /> </div>
            <div class="column">  <a href="#" class="nav_link w-inline-block">
                <h4>How it works</h4>
            </a>
                <a href="#" class="nav_link w-inline-block">
                    <h4>What&#x27;s included</h4>
                </a>
            </div>
            <div class="column"> <a href="#" class="nav_link w-inline-block">
                <h4>FAQs</h4>
            </a>
                <a href="#" class="nav_link w-inline-block">
                    <h4>Contact</h4>
                </a>
                <a href="#" class="nav_link w-inline-block">
                    <h4>My Tours</h4>
                </a> </div>
        </div>
    </div>
);


export default NavBar;

