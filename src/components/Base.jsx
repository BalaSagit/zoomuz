import React, { Component } from 'react';
import '../styles/Base.scss';
import Toolbars from '../components/Toolbars.jsx';
class Base extends Component {
    render() {
        return (
            <div >           
                <Toolbars/>                     
            </div>
        );
    }
}

export default Base;