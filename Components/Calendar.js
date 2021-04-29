/**
 * Created by kfronzeck on 08.11.2017.
 */
import React, {Component} from 'react';
import axios from 'axios'

class Event extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    };

    render() {

        let content = null;

        if (!this.state.isToggleOn) {
            content = <form>
                <input type="text"/>
                <input type="hidden" name="post_id" value={this.props.post.id}/>
            </form>;
        }

        return (
            <div>
                <p>{this.props.post.title}</p>
                <p>{this.props.post.content}</p>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button>
                {content}
            </div>
        );
    }
}

class Calendar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            data: [],
        };
    }

    componentDidMount() {
        this.getCalendar();
    };

    getCalendar() {
        axios.get(`http://localhost:8888/post`)
            .then((response) => {
                return response.data
            })
            .then((data) => {
                this.setState({
                    data: data.list,
                    isLoaded: true
                })
            });
    }

    render() {

        let content = <h2>loading...</h2>;

        if (this.state.isLoaded) {
            content = <ul>
                {this.state.data.map(function (post, index) {
                    return <Event key={ index } post={post}/>;
                })}
            </ul>;
        }

        return (
            <div>
                <h1>Calendar</h1>
                {content}
            </div>
        );
    }
}

export default Calendar;