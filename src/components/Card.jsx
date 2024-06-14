import PropTypes from 'prop-types'; 

export default function Card(props) {   
    return (
        <div>
            <img src={props.image.large} alt="Pokemon" />
            <p>
                {props.name}
            </p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired
}
  