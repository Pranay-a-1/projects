export default class newsDataModel {
    constructor(webTitle, webPublicationDate, webUrl, id, fields) {
        this.webTitle = webTitle;
        this.webPublicationDate = webPublicationDate;
        this.webUrl = webUrl;
        this.id = id;
        this.thumbnail = fields.thumbnail;
        this.bodyText = fields.bodyText;
    }
}


