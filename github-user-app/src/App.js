import React from 'react';
import axios from 'axios';

//components
import Followers from './components/Followers'
import User from './components/User'

//styling
import { CardDeck, Row, Col, Jumbotron, Container, Button, Form, Input,} from 'reactstrap'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName: 'MWeberLambdaweb19',
      userData: [],
      userFollowers: [],
      searchedName: ''
    }
  }

  handleChange = e => {
    console.log(this.state.searchedName)
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  getUser = () => {
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

  // componentDidMount() {
  //   axios.get(`https://api.github.com/users/${this.state.userName}`)
  //   .then(res => {
  //     this.setState({
  //       userData: res.data
  //     })
  //     // console.log(this.state.userData)
  //   })

  //   axios.get(`https://api.github.com/users/${this.state.userName}/followers`)
  //   .then(res => {
  //     this.setState({
  //       userFollowers: res.data
  //     })
  //     // console.log(this.state.userFollowers)
  //   })
  // }
  
  componentDidMount() {
    this.getUser()
  }

  componentDidUpdate() {
    if (!this.state.searchedName) {
    }
    else { 
      this.getUser()
    }
  }

  updateUser = e => {
    e.preventDefault()
    this.setState({
      userName: this.state.searchedName
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
                <Form onSubmit={this.updateUser}>
                  <Input 
                  type="text" 
                  placeholder="Enter User Name Here" 
                  value={this.state.searchedName}
                  onChange={this.handleChange}
                  name="searchedName"
                  />
                  <Button 
                  color="secondary" 
                  type="submit"
                  >
                    Find User
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
      </Jumbotron>
        <Row>
          <Col sm={3}>
            <CardDeck>
              <User userData= {this.state.userData}/>
            </CardDeck>
          </Col>
        </Row>
      
        <h1 style={{textAlign: 'center', color: 'black', fontSize: '6rem'}}>Followers</h1>
        <Row>
          {this.state.userFollowers.map(follower => {
            return(
              <Col key={follower.login} sm={2}>
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
