import React from 'react';
import Aux from '../../hoc/Auxx'
import Navbar from "../../containers/Navbar/Navbar";
import './Layout.scss';

const layout = (props) => (
    <Aux>
        <div className="container-fluid">
            <div className="row">
                <Navbar />
                <main className="content">
                    {props.children}
                </main>
            </div>
        </div>
    </Aux>
)

export default layout;