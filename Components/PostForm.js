/**
 * Created by kfronzeck on 08.11.2017.
 */
import React, {Component} from 'react';
import axios from 'axios';
import {stringify} from 'qs';
import Captcha from './Captcha';
import ErrorList from './ErrorList'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {title: "", content: "", code: "", errors: []};
    }

    render() {
        return (
            <div>
                <h2>Postform</h2>
                <form>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleFormChange}/>
                    <input type="text" name="content" value={this.state.content} onChange={this.handleFormChange}/>
                </form>

                <h4>Title render: {this.state.title}</h4>
                <h4>Content render: {this.state.content}</h4>

                <Captcha onChangeHandler={this.handleFormChange} code={this.state.code}/>
                <button onClick={this.createPost}>Create Post</button>
                <ErrorList errors={this.state.errors}/>
            </div>
        );
    }

    handleFormChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    createPost = () => {

        let data = {
            title: this.state.title,
            content: this.state.content,
            code: this.state.code,

        };

        let config = {
            method: 'POST',
            url: 'http://localhost:8888/post',
            data: stringify(data),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true
        };

        axios(config)
            .then(this.successHandler)
            .catch(function (error) {
                console.log(error);
            });
    };

    successHandler = (response) => {
        /*        console.log(response.data.errors);*/
        this.setState({errors: response.data.errors});
        this.props.refreshPosts();
    };
}

export default PostForm;