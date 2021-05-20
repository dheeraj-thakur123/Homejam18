import React from 'react';
import Welcome from './welcome'
import Home from './home'
class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="Tool_bar">
                    <div className="svg_menu">
                        <span className="svg_block">
                            <svg class="svg" width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 11c0-1.657 1.343-3 3-3h5c1.657 0 3 1.343 3 3 0 1.043-.533 1.963-1.341 2.5.808.537 1.341 1.457 1.341 2.5 0 1.657-1.343 3-3 3-.768 0-1.47-.289-2-.764V21c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.044.533-1.962 1.341-2.5C10.533 17.962 10 17.044 10 16c0-1.043.533-1.963 1.341-2.5C10.533 12.963 10 12.043 10 11zm3 2c-1.105 0-2-.895-2-2 0-1.105.895-2 2-2h2v4h-2zm2 1h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2h2v-4zm0 5h-2c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2v-2zm3-5c-1.105 0-2 .895-2 2 0 1.105.895 2 2 2 1.105 0 2-.895 2-2 0-1.105-.895-2-2-2zm0-1c1.105 0 2-.895 2-2 0-1.105-.895-2-2-2h-2v4h2z" fill-rule="evenodd" fill-opacity="1" fill="#000" stroke="none">
                                </path>
                            </svg>
                        </span>
                        <div>
                            <span class="">
                                <svg class="svg" width="8" height="7" viewBox="0 0 8 7" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.646 5.354l-3-3 .708-.708L4 4.293l2.646-2.647.708.708-3 3L4 5.707l-.354-.353z" fill-rule="evenodd" fill-opacity="1" fill="#fff" stroke="none">
                                    </path>
                                </svg>
                            </span>
                        </div>
                        <div className="">
                            <span className="svg_hand">
                                <svg class="svg" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.026 12.382c-.518-.487-.57-1.308-.118-1.856.435-.527 1.191-.62 1.74-.216l1.347.996 1 .739V4c0-.552.448-1 1-1 .553 0 1 .448 1 1v5h1V2c0-.552.448-1 1-1 .553 0 1 .448 1 1v7h1V3c0-.552.448-1 1-1 .553 0 1 .448 1 1v6h1V6c0-.552.448-1 1-1 .553 0 1 .448 1 1v8c0 2.762-2.238 5-5 5h-1c-1.553 0-2.94-.708-3.858-1.82-.036-.028-.071-.06-.106-.092l-5.005-4.706zm4.4 5.507l-.08-.072-5.005-4.706c-.902-.848-.993-2.267-.204-3.221.772-.936 2.127-1.106 3.105-.384l.753.557V4c0-1.104.896-2 2-2 .365 0 .706.097 1 .268V2c0-1.105.896-2 2-2 .873 0 1.615.559 1.888 1.338.318-.214.7-.338 1.112-.338 1.105 0 2 .895 2 2v1.268c.295-.17.636-.268 1-.268 1.105 0 2 .896 2 2v8c0 3.314-2.686 6-6 6h-1c-1.83 0-3.47-.821-4.57-2.111z" fill-rule="evenodd" fill-opacity="1" fill="#fff" stroke="none"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div className="homejam">
                        <p>
                            Homejam - Home Page Components Test-18
                        </p>
                    </div>
                    <div className="toolbar_rightside">
                        <div class="avtar_block" data-tooltip-type="text" data-tooltip="Anonymous">
                            <span class="avtar_right">?</span>
                        </div>
                        <div>
                            <div className="login_btn_block">
                                <div className="login_btn" data-tooltip-type="lookup" data-tooltip="">Log in</div>
                            </div>
                        </div>
                        <div className="arrow">
                            <span className="">
                                <svg class="svg" width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 14.098l.765.478 8 5 .678.424-.678.424-8 5-.765.478V14.098zm1 1.804v8.196L24.557 20 18 15.902z" fill-rule="evenodd" fill-opacity="1" fill="#fff" stroke="none">
                                    </path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div div className="welcome">
                    <Welcome />
                </div>
                <div className="home_Comp">
                    <Home />
                </div>
            </div>
        );
    }
}

export default Header;