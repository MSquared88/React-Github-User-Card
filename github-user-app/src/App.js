import React from 'react';
import axios from 'axios'

//components
import FollowersList from './components/FollowersList'
import User from './components/User'

//styling
import { CardDeck, Row, Col, Jumbotron, Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName: 'MSquared88',
      userData: []
    }
  }
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
    .then(res => {
      this.setState({
        userData: res.data
      })
      console.log(this.state.userData)
    })


  }
  
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid className="text-center" >
            <h1 className="display-1">GitHub User Cards</h1>
            <h4>Input a GitHub user and see that user and there followers.</h4>

            <Row form className="text-center">
              <Col md={6} >
                <FormGroup form >
                  <Input type="email" name="email" id="exampleEmail" placeholder="Enter User Name Here" />
                  <Button color="primary" onClick= {this.getUser}>Find User</Button>
                </FormGroup>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
        <Row>
          <Col sm={4}>
            <CardDeck>
              <User userData= {this.state.userData}/>
            </CardDeck>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
