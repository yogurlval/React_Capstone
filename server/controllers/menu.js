const {Item} = require('../models/appModels')


module.exports = {
    getAllItems: async (req, res) =>{
        try {
            const items = await Item.findAll();
            console.log(items)
            res.status(200).send(items)
          } catch (error) {
            console.error('Error fetching items:', error);
          }
    }

}