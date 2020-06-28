const { CREATE_LINK } = require('./utils/linkQueries');
const sendQuery = require('./utils/sendQuery');
const formatResponse = require('./utils/formatResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') {
        return formatResponse(405, { err: 'Method not supported' });
    }
    const { url, name, description } = JSON.parse(event.body);
    try {
        const { createLink: createdLink } = await sendQuery(CREATE_LINK, {
            url,
            name,
            description,
        });
        return formatResponse(200, createdLink);
    } catch (err) {
        console.error(err);
        return formatResponse(500, { err: 'Something went wrong' });
    }
};
