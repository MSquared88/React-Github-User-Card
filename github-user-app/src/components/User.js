import React from 'react'
 
import { Card, Button, CardImg, CardTitle, CardText, CardSubtitle, CardBody, CardHeader } from 'reactstrap'

function User(props) { 
	return(
			<Card color= 'primary' body>
				<CardHeader>{props.userData.login}</CardHeader>
				<CardImg 
				top width="100%" 
				alt="Card image cap"
				src= {props.userData.avatar_url} 
				/>
				<CardBody className="text-center">
					<CardTitle>Name: {props.userData.name}</CardTitle>
					<CardSubtitle>Following: {props.userData.following}</CardSubtitle>
					<CardSubtitle>Followers: {props.userData.followers}</CardSubtitle>
					<CardSubtitle>Repositories: {props.userData.public_repos}</CardSubtitle>

					<CardText>{props.userData.bio}</CardText>
					<Button href= {`https://github.com/${props.userData.login}`}>GitHub Profile</Button>
				</CardBody>
			</Card>
	)
}

export default User