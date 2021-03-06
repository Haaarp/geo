import React from 'react';
import {Link} from 'react-router';
import { DropdownButton, MenuItem } from 'react-bootstrap';

class AppBarButtons extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            index: this.props.index
        };
    }
    _onMouseOut(){
        if (this.props.onMouseOut) {
            this.props.onMouseOut();
        }
    }
    _onItemOver(index){
        if (this.props.onItemOver) {
            this.props.onItemOver(index);
        }
    }
    _onSelect(index){
        this.setState({
            index:index
        });
        if (this.props.onChange) {
            this.props.onChange(index);
        }
    }
    getTitle(){
        return this.state.index > -1 ? this.props.items[this.state.index].title : this.props.title;
    }
    render(){
        return(
            <DropdownButton onBlur={this._onMouseOut.bind(this)}
                            onSelect={this._onSelect.bind(this)}
                            role="menuitem"
                            title={this.props.buttonTitle ? this.props.buttonTitle : ""}
                            className={this.props.className}
                            id="select"
                            block>
                {this.props.items ? this.props.items.map((item, i) => {
                    return <MenuItem active={this.state.index === i ? true : false}
                                     bsClass="dropdown"
                                     componentClass="div"
                                     onBlur={this._onMouseOut.bind(this)}
                                     onMouseOver={() => { this._onItemOver(i);}}
                                     key={i}
                                     eventKey={i}>
                                     <Link to={item.link} >{item.title} </Link>
                    </MenuItem>;
                }) : null}
            </DropdownButton>
        );
    }
};

export default AppBarButtons;