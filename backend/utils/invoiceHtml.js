export const generateInvoiceHTML = (order) => {
  return `
  <div style="font-family: Arial, sans-serif; max-width: 750px; margin: auto; padding: 20px;">
    
    <!-- HEADER -->
    <div style="text-align: center;">
      <h2 style="margin-bottom: 5px;">ORDER CONFIRMATION</h2>
      <p style="font-size: 12px;">
        <strong>Order ID:</strong> ${order._id}<br/>
        <strong>Date:</strong> ${new Date().toLocaleDateString()}
      </p>
    </div>

    <hr/>

    <!-- CUSTOMER DETAILS -->
    <h3>Customer Details</h3>
    <p style="font-size: 14px; line-height: 1.6;">
      <strong>Name:</strong> ${order.customer.name}<br/>
      <strong>Email:</strong> ${order.customer.email}<br/>
      <strong>Phone:</strong> ${order.customer.phone}<br/>
      <strong>Address:</strong> ${order.customer.address}<br/>
      <strong>State:</strong> ${order.customer.state}<br/>
      <strong>Pincode:</strong> ${order.customer.pincode}
    </p>

    <hr/>

    <!-- ORDER ITEMS -->
    <h3>Order Items</h3>
    <table >
      <thead style="background:#f5f5f5;">
        <tr>
          <th align="left">No</th>
          <th align="left">Item</th>
          <th align="center">Qty</th>
          <th align="right">Price</th>
        </tr>
      </thead>
      <tbody>
        ${order.items
          .map(
            (item, index) => `
            <tr>
              <td>${index + 1}</td>
              <td>Rs.${item.name} (${item.weight})</td>
              <td align="center">${item.quantity}</td>
              <td align="right">Rs. ${item.price}</td>
            </tr>
          `
          )
          .join("")}
      </tbody>
    </table>

    <!-- TOTALS -->
    <div >
      <p>Subtotal: <strong>Rs. ${order.subtotal}</strong></p>
      <p>Shipping: <strong>Rs. ${order.shipping?.price || 0}</strong></p>
      <h3>Total Amount: Rs. ${order.total}</h3>
    </div>

    <hr/>

    <!-- FOOTER -->
    <p >
      Thank you for shopping with us!
    </p>
  </div>
  `;
};
