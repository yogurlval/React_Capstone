const { Item, Order, User, Order_Item } = require("../models/appModels");

module.exports = {
  getOrders: async (req, res) => {
    try {
      const orders = await Order.findAll({
        include: [
          { model: User },
          {
            model: Order_Item,
            include: [
              {
                model: Item,
                attributes: ['item_id','item_name'],
              },
            ],
          },
        ],
      });

      console.log('Fetched orders:', orders);
      res.status(200).send(orders);
    } catch (error) {
      console.log("Error fetching orders:", error);
    }
  },
  deleteOrder: async (req, res) => {
    const orderId = req.params.id;

    try {
      // Find the order by ID and attempt to destroy it
      await Order.destroy({
        where: {
          order_id: orderId,
        },
      });

      res.sendStatus(200);
    } catch (error) {
      console.log('Error destroying order:', error);
      res.sendStatus(400)
    }
  },
};
