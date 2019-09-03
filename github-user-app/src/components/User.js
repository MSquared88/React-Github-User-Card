import React from 'react'
 
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap'

function User(props) { 
    console.log(props.userData)
	return(
			<Card color= 'primary' body>
				<CardImg 
				top width="100%" 
				alt="Card image cap"
				src= {props.userData.avatar_url} 
				/>
				<CardBody className="text-center">
					<CardTitle>{props.userData.login}</CardTitle>
					<CardSubtitle>{props.userData.name}</CardSubtitle>
					<CardText>{props.userData.bio}</CardText>
					<Button>Button</Button>
				</CardBody>
			</Card>
	)
}

export default User