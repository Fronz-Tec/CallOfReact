/**
 * Created by kfronzeck on 08.11.2017.
 */
import React, {Component} from 'react';

class Toggle extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // this.handleClick = this.handleClick.bind(this);
    }


    componentWillMount() {
        console.log("componentWillMount");
    };

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
        console.log(nextProps);
        console.log(nextState);
    };

    // handleClick() {
    //     console.log(this);
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }));
    // }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

export default Toggle;