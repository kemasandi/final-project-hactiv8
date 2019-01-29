import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header';
import Footer from '../../Footer'

class DetailInfo extends Component {

    state = {
        user: [],
    }

    componentDidMount() {
        const { match: { params } } = this.props;
      
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then(({ data }) => {
            this.setState({ user: data });
          });
      }

    render() {
        return (
            <div>
                <Header/>
                <ul>
                    <li>{this.state.user.name}</li>
                    <li>{this.state.user.email}</li>
                    <li>{this.state.user.phone}</li>
                    <li>{this.state.user.website}</li>
                </ul>
                <Footer/>
            </div>
        );
    }
}

export default DetailInfo;