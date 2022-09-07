import mockNewsData from '../mockNewsData.json';
import Card from './Card.jsx';
import newsDataModel from './utils/NewsDataModel';

const AllCards = ({ allNewsData }) => {

    //allNewsData = mockNewsData.response.results; // used for static app

    const cards = allNewsData.map(currentcard => {
        const { webTitle, webPublicationDate, webUrl, id, fields } = currentcard;
        const card = new newsDataModel(webTitle, webPublicationDate, webUrl, id, fields);
        return <Card card={card} key={card.id} />
    });

    return (
        <div>
            {cards}
        </div >

    );
}

export default AllCards;