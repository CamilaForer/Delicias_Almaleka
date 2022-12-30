import Button from "react-bootstrap/Button";
import { BsWhatsapp } from "react-icons/bs";

const WhatsappButton = ({ content, total }) => {
  const headerText = "👋 Hola!, me gustaría comprar:";
  let items = "";
  content.forEach((element) => {
    items += `\n- ${element.name} x ${element.quantity}`;
  });
  const totalAmount = `\n\nTotal: ${total}`;

  const message = headerText + items + totalAmount;
  const sendMessage = () => {
    // encodeURIComponent convierte el texto en un formato perimitido por la url
    window.open(
      "https://api.whatsapp.com/send?phone=573173657520&text=" +
        encodeURIComponent(message),
      "_blank"
    );
  };

  return (
    <div>
      <Button variant="primary" className="whats-icon" onClick={sendMessage}>
        Envia a whatsapp <BsWhatsapp style={{ color: "white"}}/>{" "}
      </Button>
    </div>
  );
};

export default WhatsappButton;
