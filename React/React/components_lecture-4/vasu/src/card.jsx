import React from 'react'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';


function card() {
    return (
        <Container>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" className='gill' src="https://static.toiimg.com/photo/99909607.cms" />
                <Card.Body>
                    <Card.Title> Shubman Gill </Card.Title>
                    <Card.Text>
                        Shubman Gill is an Indian international cricketer who represents the Indian cricket team across all three formats. He is the captain of the Gujarat Titans in the Indian Premier League and plays for Punjab in domestic cricket. He is widely considered as one the best batsmen in
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </Container>

    )
}

export default card
