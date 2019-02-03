import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../Header';
import Footer from '../../Footer';
import { Container, Content, Breadcrumb, BreadcrumbItem } from 'bloomer';
import { Link } from 'react-router-dom'
  
class DetailInfo extends Component {

    state = {
        user: [],
        albums: [],
        photos: []
    }
    
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
          .then(({ data }) => {
            this.setState({ user: data });
          });

          axios.get(`https://jsonplaceholder.typicode.com/albums`)
          .then(({ data }) => {
            this.setState({ albums: data });
          });

          axios.get(`https://jsonplaceholder.typicode.com/photos`)
          .then(({ data }) => {
            this.setState({ photos: data });
          });
      }

    render() {
        return (
            <div>
                <Header/>
                    <Container>
                        <Breadcrumb>
                            <ul>
                                <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to="/faq">Faq</Link></BreadcrumbItem>
                                <BreadcrumbItem isActive><b>{this.state.user.username}</b></BreadcrumbItem>
                            </ul>
                        </Breadcrumb>
                        <Content className="detail-info">
                            <h1>{this.state.user.username}</h1>
                            <ul>
                                <li><span>Name</span>: {this.state.user.name}</li>
                                <li><span>Email</span>: {this.state.user.email}</li>
                                <li><span>Phone</span>: {this.state.user.phone}</li>
                                <li><span>Website</span>: { this.state.user.website}</li>

                                {
                                    this.state.albums.map((val,inx) => {
                                        return(
                                            this.state.user.id === val.id ? 
                                            <div>
                                                <li><span>Title</span>: {val.title}</li>
                                                { this.state.photos.map(varPhoto => {
                                                    return(
                                                        val.userId === varPhoto.albumId ?
                                                        <div className="photos-grid"><img src={varPhoto.thumbnailUrl}></img></div>:""
                                                    )
                                                })
                                                }
                                            </div> : ""
                                        )
                                    })
                                }
                            </ul>
                        </Content>
                    </Container>
                <Footer/>
            </div>
        );
    }
}

export default DetailInfo;