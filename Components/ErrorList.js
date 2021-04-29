/**
 * Created by kfronzeck on 08.11.2017.
 */
import React, {Component} from 'react';

class ErrorList extends Component {

    render() {
        return (
            <div>
                {this.props.errors.map(function (error, index) {
                    return <p key={index}> {error}</p>;
                })}
            </div>
        );
    }
}

export default ErrorList;