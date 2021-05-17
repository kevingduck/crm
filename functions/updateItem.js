const axios = require('axios');
require('dotenv').config();
const { UPDATE_ITEM } = require('./utils/itemQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    if (event.httpMethod !== 'PUT') {
        return formattedResponse(405, { err: 'Method not supported' });
    }
    const { 
        _id: id,
        name,
        vendor,
        due_date,
        sales_tax_rate,
        quantity,
        item_number,
        description,
        unit_cost,
        unit_sales_price,
        insurance_needed,
        tax_needed,
        link    
    } = JSON.parse(
        event.body
    );
    const variables = { 
        id,
        name,
        vendor,
        due_date,
        sales_tax_rate,
        quantity,
        item_number,
        description,
        unit_cost,
        unit_sales_price,
        insurance_needed,
        tax_needed,
        link
    };
    try {
        const { updateItem: updatedItem } = await sendQuery(
            UPDATE_ITEM,
            variables
        );

        return formattedResponse(200, updatedItem);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
