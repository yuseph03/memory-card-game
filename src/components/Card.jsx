import PropTypes from 'prop-types'; 

export default function Card({ name, pic }) {   
    return (
        <div>
            <img src={pic} alt="Pokemon" />
            <p>{name}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    pic: PropTypes.string.isRequired
}
  