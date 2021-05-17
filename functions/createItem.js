const axios = require('axios');
require('dotenv').config();
const { CREATE_ITEM } = require('./utils/itemQueries.js');
const sendQuery = require('./utils/sendQuery');
const formattedResponse = require('./utils/formattedResponse');
exports.handler = async (event) => {
    const { name,
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
    } = JSON.parse(event.body);
    const variables = { 
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
        const { createItem: createdItem } = await sendQuery(
            CREATE_ITEM,
            variables
        );

        return formattedResponse(200, createdItem);
    } catch (err) {
        console.error(err);
        return formattedResponse(500, { err: 'Something went wrong' });
    }
};
