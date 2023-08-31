const { Order, User, Order_Item } = require('../models/appModels')

module.exports = {
    submitOrder: async (req, res) => {
        try {
          let { customerName, phoneNumber, consolidatedItems, total } = req.body;
          
          // Create a new user record or fetch an existing user if necessary
          let cartUser = await User.findOrCreate({
            where: { user_name: customerName, phone: phoneNumber },
          });
      
          const user_id = cartUser[0].user_id;
      
          // Create a new order record
          const order = await Order.create({
            user_id: user_id,
            total: total,
            status: 'pending',
          });
      
          // Create order_item records for each item in consolidatedItems
          for (const item of consolidatedItems) {
            await Order_Item.create({
              order_id: order.order_id,
              item_id: item.item_id, // Make sure this is provided in consolidatedItems
              size: item.size,
              quantity: item.quantity,
              requests: item.specialRequests || null,
            });
          }
  
        
        res.status(200).send(res.data);
        console.log('Received Data from Frontend:', req.body)
        console.log('Order submitted successfully');
      } catch (error) {
        console.log('Error submitting order:', error);
      }
    },
  };