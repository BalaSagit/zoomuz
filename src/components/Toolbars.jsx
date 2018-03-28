import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';

export default class Toolbars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 7,
        };
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <FontIcon className="muidocs-icon-custom-sort" />                  

                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options">                        
                    </ToolbarTitle>
                    <FontIcon className="muidocs-icon-custom-sort" />
                    <ToolbarSeparator />
                    <RaisedButton label="Create Broadcast" primary={true} />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download" />
                        <MenuItem primaryText="More Info" />
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}