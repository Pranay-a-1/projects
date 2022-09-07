import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import ScrollToTop from '../scrollToTop';

const Summary = ({ allNewsData }) => {
    const { id } = useParams();

    let headline = "";
    let picture = "";
    let webLink = "";
    let summaryText = "";
    let bodyHtml = "";

    allNewsData.forEach(card => {
        const { webTitle, webUrl, fields: { thumbnail, bodyText, body } } = card;
        if (id === webTitle) {
            picture = thumbnail;
            headline = webTitle;
            webLink = webUrl;
            summaryText = bodyText;
            bodyHtml = parse(body ?? "");
        }
    })

    let toRender = bodyHtml.length > 0 ? bodyHtml : summaryText;

    return (
        <div className="card text-center" >
            <ScrollToTop />
            <a className="card-text" href={webLink}>
                <div className="card-body">
                    <h4>
                        {headline}
                    </h4>
                </div>
                <img className="card-img-top mx-auto" style={{
                    "maxHeight": "750px", "maxWidth": "450px"
                }} src={picture} alt={id} />
            </a>
            <div className="card-body">
                {toRender}
            </div>
        </div >
    );
}


export default Summary;