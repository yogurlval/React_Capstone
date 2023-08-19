const {Item} = require('../models/appModels')

const seed = async () => {
    await Item.bulkCreate([
        {
            item_name: 'Vietnamese fried egg rolls w/meat',
            item_type: 'Appetizers',
            price: 3.95
        },
        {
            item_name: 'Vietnamese fried egg rolls w/veg',
            item_type: 'Appetizers',
            price: 3.95
        },
        {
            item_name: 'Vegetarian Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        },
        {
            item_name: 'Shrimp Spring Roll',
            item_type: 'Appetizers',
            price: 4.50
        }
    ])
    console.log('seed complete!')
}

module.exports = seed