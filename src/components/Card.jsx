import PropTypes from 'prop-types'; 

export default function Card({ name }) {   
    return (
        <div>
            <img src="#" alt="Pokemon" />
            <p>{name}</p>
        </div>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired
}
  