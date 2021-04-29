/**
 * Created by kfronzeck on 08.11.2017.
 */
import React, {Component} from 'react';

class Captcha extends Component {

    render() {
        return (
            <div>
                <img src={"http://localhost:8888/captcha?" + new Date().getTime()} alt="Captcha"/><br/>
                <input type="text" name="code" value={this.props.code} onChange={this.props.onChangeHandler}/>
            </div>
        );
    }
}

export default Captcha;