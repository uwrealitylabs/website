import PropTypes from 'prop-types';

export default function Member({photo, position, email}){
    return(
        <div>
            
        </div>
    )
}

Member.propTypes = {
    photo: PropTypes.object.isRequired,
    position: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};