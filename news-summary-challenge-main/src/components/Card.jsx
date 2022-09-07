import PropTypes from 'prop-types';
import newsDataModel from './utils/NewsDataModel';
import { Link, NavLink } from 'react-router-dom';

const Card = ({ card }) => {
    const { webTitle, thumbnail } = card;
    const picture = thumbnail;
    const headline = webTitle;

    return (
        <div className="card text-center mx-auto" >
            <img className="card-img-top mx-auto" style={{
                "maxHeight": "750px", "maxWidth": "450px"
            }} src={picture} alt={headline} />
            <NavLink className="card-text" to={`/summary/${headline}`}>
                <div className="card-body">
                    <h4>
                        {headline}
                    </h4>
                </div>
            </NavLink>
        </div >
    );
}


Card.propTypes = {
    card: PropTypes.instanceOf(newsDataModel)
};


export default Card;