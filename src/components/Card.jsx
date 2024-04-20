import PropTypes from 'prop-types'; 

export default function Card({ name, sprite }) {   
    return (
        <div>
            <img src={sprite} alt="Pokemon" />
            <p>{name}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired
}
  