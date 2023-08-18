// const {Item} = require('../models/menus')


module.exports = {
    // getAllItems: async (req, res) =>{
    //     try {
    //         // const items = await Item.findAll();
    //         // console.log(items)
    //         res.status(200).send('hello')
    //       } catch (error) {
    //         console.error('Error fetching items:', error);
    //         return [];
    //       }
    // }

    getAllItems: (req, res) =>{
        res.status(200).send('hello')
    }
}