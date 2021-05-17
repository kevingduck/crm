const GET_ITEMS = `
# Write your query or mutation here
query{
  allItems{
    data {
      name
      _id
      vendor
      due_date
      sales_tax_rate
      quantity
      item_number
      description
      unit_cost
      unit_sales_price
      insurance_needed
      tax_needed
    }
  }
}`;

const CREATE_ITEM = `
    mutation(
      $tax_needed: Boolean, 
      $name: String!, 
      $quantity: Int!,
      $description: String!,
      $unit_cost: Float!,
      $unit_sales_price: Float!,
      $sales_tax_rate: Float,
      $insurance_needed: Boolean,
      $due_date: String!,
      $vendor: String!,
      $item_number: String!
    ) {
        createItem( data: { 
          name:$name,
          vendor:$vendor,
          due_date:$due_date,
          sales_tax_rate:$sales_tax_rate,
          quantity:$quantity,
          item_number:$item_number,
          description:$description,
          unit_cost:$unit_cost,
          unit_sales_price:$unit_sales_price,
          insurance_needed:$insurance_needed,
          tax_needed:$tax_needed,
          link: {
            create: [
              {
                name: "default",
                url: "test.com",
                description: "test description"
              }
            ]
          }
          
        }) {
            name
            vendor
            due_date
            sales_tax_rate
            quantity
            item_number
            description
            unit_cost
            unit_sales_price
            insurance_needed
            tax_needed
            link {
              data {
                name
              }
            }
        }
    }
`;

const UPDATE_ITEM = `
  mutation($id: ID!, 
          $tax_needed: Boolean, 
          $name: String!, 
          $quantity: Int!,
          $description: String!,
          $unit_cost: Float!,
          $unit_sales_price: Float!,
          $sales_tax_rate: Float,
          $insurance_needed: Boolean,
          $link: Link,
          $due_date: String!,
          $vendor: String!,
          $item_number: String!
      ) {
        updateItem( id: $id, data: { 
          name:$name,
          vendor:$vendor,
          due_date:$due_date,
          sales_tax_rate:$sales_tax_rate,
          quantity:$quantity,
          item_number:$item_number,
          description:$description,
          unit_cost:$unit_cost,
          unit_sales_price:$unit_sales_price,
          insurance_needed:$insurance_needed,
          tax_needed:$tax_needed,
          link:$link
        }) {
            name
            _id
            vendor
            due_date
            sales_tax_rate
            quantity
            item_number
            description
            unit_cost
            unit_sales_price
            insurance_needed
            tax_needed
            link
        }
    }
`;

const DELETE_ITEM = `
  mutation($id: ID!) {
        deleteItem( id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_ITEMS,
    CREATE_ITEM,
    UPDATE_ITEM,
    DELETE_ITEM,
};
