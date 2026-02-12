import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";


export const generateInvoicePDF = (order) => {
  return new Promise((resolve) => {
    const doc = new PDFDocument({ margin: 50 });
    const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 doc
  .rect(20, 20, doc.page.width - 40, doc.page.height - 40)
  .lineWidth(0.8)
  .strokeColor("#000000")
  .stroke();


  // Outer border
// doc.rect(15, 15, doc.page.width - 30, doc.page.height - 30).stroke();

// Inner border
doc.rect(25, 25, doc.page.width - 50, doc.page.height - 50).stroke();

    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.on("end", () => resolve(Buffer.concat(buffers)));

    /* HEADER */
    doc
      .fontSize(22)
      .font("Helvetica-Bold")
      .text("ORDER CONFIRMATION", { align: "center" });
   const logoPath = path.join(__dirname, "../asset/logo.png");
    doc.image(logoPath, 50, 45, { width: 60 });

    doc.moveDown(1.5);

    doc
      .fontSize(10)
      .font("Helvetica")
      .text(`Order ID: ${order._id}`)
      .text(`Date: ${new Date().toLocaleDateString()}`);

    doc.moveDown();
    drawLine(doc);

    /* CUSTOMER DETAILS */
    doc
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("Customer Details");

    doc.moveDown(0.5);

    doc.fontSize(11).font("Helvetica")
      .text(`Name: ${order.customer.name}`)
      .text(`Email: ${order.customer.email}`)
      .text(`Phone: ${order.customer.phone}`)
      .text(`Address: ${order.customer.address}`)
      .text(`State: ${order.customer.state}`)
      .text(`Pincode: ${order.customer.pincode}`);

    doc.moveDown();
    drawLine(doc);

    /*  ORDER ITEMS TABLE */
    doc
      .fontSize(14)
      .font("Helvetica-Bold")
      .text("Order Items");

    doc.moveDown(0.5);

    // Table header
    doc.fontSize(11).font("Helvetica-Bold");
    doc.text("No", 50);
    doc.text("Item", 90);
    doc.text("Qty", 320);
    doc.text("Price", 380, undefined, { align: "right" });

    doc.moveDown(0.3);
    drawLine(doc);

    // Table rows
    doc.font("Helvetica");

    order.items.forEach((item, i) => {
      doc.text(i + 1, 50);
doc.text(`Rs.${item.name} (${item.weight})`, 90);
      doc.text(item.quantity, 320);
      doc.text(`Rs. ${item.price}`, 380, undefined, { align: "right" });
      doc.moveDown(0.3);
    });

    doc.moveDown();
    drawLine(doc);

    /* TOTALS (RIGHT ALIGNED)*/
    const rightX = 380;

    doc.fontSize(11).font("Helvetica");
    doc.text(`Subtotal: Rs. ${order.subtotal}`, rightX, undefined, { align: "right" });
    doc.text(`Shipping: Rs. ${order.shipping?.price || 0}`, rightX, undefined, { align: "right" });

    doc.moveDown(0.3);

    doc
      .font("Helvetica-Bold")
      .fontSize(13)
      .text(`Total Amount: Rs. ${order.total}`, rightX, undefined, { align: "right" });

    doc.moveDown(2);
    drawLine(doc);

    /*  FOOTER*/
    doc
      .fontSize(10)
      .font("Helvetica")
      .text("Thank you for shopping with us!", { align: "center" });

    doc.end();
  });
};

/*  HELPER*/
function drawLine(doc) {
  doc
    .moveTo(50, doc.y)
    .lineTo(550, doc.y)
    .strokeColor("#cccccc")
    .stroke();
  doc.moveDown();
}
