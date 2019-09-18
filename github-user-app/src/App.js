import React from 'react';
import axios from 'axios'

//components
import Followers from './components/Followers'
import User from './components/User'

//styling
import { CardDeck, Row, Col, Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormTextm, CardGroup } from 'reactstrap'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName: 'MSquared88',
      userData: [],
      userFollowers: []
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getUser = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.setState({
        userData: res.data
      })

  })

    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => {
      this.setState({
        userFollowers: res.data
      })
    })
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.setState({
        userData: res.data
      })
      console.log(this.state.userData)
    })

    axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
    .then(res => {
      this.setState({
        userFollowers: res.data
      })
      console.log(this.state.userFollowers)
    })
  }
  

  render() {
    return (
      <div>
        <Jumbotron fluid >
          <Container fluid className="text-center" >
            <h1 className="display-1">GitHub User Cards</h1>
            <h4>Input a GitHub user and see that user and there followers.</h4>

            <Row form className="text-center">
              <Col md={6} >
                <FormGroup form onSubmit= {null}>
                  <Input 
                  type="text" 
                  placeholder="Enter User Name Here" 
                  value={this.state.userName}
                  type="text"
                  onChange={this.handleChange}
                  name="userName"
                  />
                  <Button 
                  color="secondary" 
                  onClick= {this.getUser}
                  >
                    Find User
                  </Button>
                </FormGroup>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
      {(this.state.userData.length === 0)
      ? <span></span>
      : 
        <div>
          <Row>
            <Col sm={3}>
              <CardDeck>
                <User userData= {this.state.userData}/>
              </CardDeck>
            </Col>
          </Row>
          <h1 style={{textAlign: 'center', color: 'black', fontSize: '6rem'}}>Followers</h1>
        </div>       
      }

      
        <Row>
          {this.state.userFollowers.map(follower => {
            return(
              <Col sm={2}>
                <Followers follower={follower}/>  
              </Col>
            )
          })}
        </Row>
      </div>
    );
  }
}

export default App;
