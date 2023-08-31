import "./Orders.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("http://localhost:4004/orders");
        setOrders(response.data);
        console.log("setOrders to:", response.data);
      } catch (error) {
        console.log("Error fetching orders:", error);
      }
    }

    fetchOrders();
  }, []);

  const handleRemoveOrder = async (orderId) => {
    try {
      // Make a DELETE request to your server
      await axios.delete(`http://localhost:4004/orders/${orderId}`);
      console.log('Order deleted:', orderId);
      setOrders(prevOrders => prevOrders.filter(order => order.order_id !== orderId));
    
    } catch (error) {
      console.log('Error deleting order:', error);
    }
  };

  return (
    <div>
      <h2 className="ordersHeader">Orders</h2>
      <div className="ordersBox">
      <ul>
        {orders.map((order) => (
          <li className="orderList-headers" key={order.order_id}>
            <h3 className="orderID">Order ID: {order.order_id}</h3>
            <h4>Customer Name: <br />{order.User.user_name}</h4>
            <h4>Total: ${parseFloat(order.total).toFixed(2)} + tax</h4>
            {/* <h4>Status: {order.status}</h4> */}
            <button
                className="Order-removeButton"
                onClick={() => handleRemoveOrder(order.order_id)}
              >
                Cancel Order
              </button>
            <ul>
              {order.Order_Items.map((orderItem) => (
                <li className="orderdetails-List" key={orderItem.id}>
                  <p>
                    {orderItem.Item ? orderItem.Item.item_name : "N/A"}
                  </p>
                  {orderItem.size && <p>Size: {orderItem.size}</p>}
                  <p>Quantity: {orderItem.quantity}</p>
                  {orderItem.requests && <p>Requests: <br />{orderItem.requests}</p>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Orders;
