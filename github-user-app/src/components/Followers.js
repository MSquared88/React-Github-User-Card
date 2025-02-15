import React from 'react'
 
import { Card, Button, CardImg, CardText, CardBody, CardHeader } from 'reactstrap'

function Follower(props) { 
	return(
		
			<Card color= 'primary' body>
				<CardHeader>{props.follower.login}</CardHeader>
				<CardImg 
				top width="100%" 
				alt="Card image cap"
				src= {props.follower.avatar_url} 
				/>
				<CardBody className="text-center">

					<CardText>{props.follower.bio}</CardText>
					<Button href= {`https://github.com/${props.follower.login}`}>GitHub Profile</Button>
				</CardBody>
			</Card>
	)
}

export default Follower