// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// export const sendCustomerEmail = async (order) => {
//   await transporter.sendMail({
//     from: `"Spices Store" <${process.env.EMAIL_USER}>`,
//     to: order.customer.email,
//     subject: "Order Confirmation - Spices Store",
//     html: `
//       <h2>Thank you for your order, ${order.customer.name}!</h2>
//       <p><strong>Order ID:</strong> ${order._id}</p>
//       <p><strong>Total:</strong> ₹${order.total}</p>
//       <p><strong>Payment:</strong> ${order.paymentMethod}</p>
//       <p>We’ll notify you when your order is shipped.</p>
//     `,
//   });
// };

// export const sendOwnerEmail = async (order) => {
//   await transporter.sendMail({
//     from: `"Spices Store" <${process.env.EMAIL_USER}>`,
//     to: process.env.OWNER_EMAIL,
//     subject: "New Order Received",
//     html: `
//       <h3>New Order</h3>
//       <p><strong>Name:</strong> ${order.customer.name}</p>
//       <p><strong>Email:</strong> ${order.customer.email}</p>
//       <p><strong>Total:</strong> ₹${order.total}</p>
//       <p><strong>Order ID:</strong> ${order._id}</p>
//     `,
//   });
// };

import nodemailer from "nodemailer";
import { generateInvoicePDF } from "./invoiceGenerator.js";
import { generateInvoiceHTML } from "./invoiceHtml.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendCustomerEmail = async (order) => {
  const pdfBuffer = await generateInvoicePDF(order);

  await transporter.sendMail({
    from: `"DEALS KERALA" <${process.env.EMAIL_USER}>`,
    to: order.customer.email,
    subject: "Invoice - Your Order Confirmation",
    text: "Please find attached your invoice.",
    attachments: [
      {
        filename: `Invoice-${order._id}.pdf`,
        content: pdfBuffer,
        contentType: "application/pdf",
      },
    ],
  });
};


export const sendOwnerEmail = async (order) => {
  const pdfBuffer = await generateInvoicePDF(order);
  const invoiceHTML = generateInvoiceHTML(order);

  await transporter.sendMail({
    from: `"DEALS KERALA" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: "New Order Invoice",

    text: `New order received.
Order ID: ${order._id}
Total: Rs. ${order.total}`,

    html: invoiceHTML,

    attachments: [
      {
        filename: `Invoice-${order._id}.pdf`,
        content: pdfBuffer,
      },
    ],
  });
};




// export const sendOwnerEmail = async (order) => {
//   const pdfBuffer = await generateInvoicePDF(order);

//   await transporter.sendMail({
//     from: `"DEALS KERALA" <${process.env.EMAIL_USER}>`,
//     to: process.env.OWNER_EMAIL,
//     subject: `<b>New Order Invoice</b>`,
//     text: "New order received. Invoice attached.",
//     attachments: [
//       {
//         filename: `Invoice-${order._id}.pdf`,
//         content: pdfBuffer,
//       },
//     ],
//   });
// };
// export const sendOwnerEmail = async (order) => {
//   const pdfBuffer = await generateInvoicePDF(order);

//   await transporter.sendMail({
//     from: `"DEALS KERALA" <${process.env.EMAIL_USER}>`,
//     to: process.env.OWNER_EMAIL,
//     subject: "New Order Received – Invoice Attached",

//     text: `A new order has been placed.

// Order ID: ${order._id}
// Total Amount: ₹${order.total}

// Please find the invoice attached.`,

//     html: `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//         <h3>📦 New Order Received</h3>
//         <p>Hello,</p>

//         <p>A new order has been placed on <strong>DEALS KERALA</strong>.</p>

//         <p>
//           <strong>Order ID:</strong> ${order._id}<br/>
//           <strong>Total Amount:</strong> ₹${order.total}
//         </p>

//         <p>The invoice is attached with this email.</p>

//         <p style="margin-top: 20px;">
//           Regards,<br/>
//           <strong>DEALS KERALA System</strong>
//         </p>
//       </div>
//     `,

//     attachments: [
//       {
//         filename: `Invoice-${order._id}.pdf`,
//         content: pdfBuffer,
//       },
//     ],
//   });
// };

