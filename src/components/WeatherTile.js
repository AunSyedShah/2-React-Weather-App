import Card from 'react-bootstrap/Card'

function WeatherTile(props) {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Day {props.dayNum}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Temperature: {props.temp}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Min: {props.min}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Max: {props.max}</Card.Subtitle>
                </Card.Body>
            </Card>
    )
}

export default WeatherTile;