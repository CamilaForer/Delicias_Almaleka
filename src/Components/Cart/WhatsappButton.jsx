import Button from "react-bootstrap/Button";
import {BsWhatsapp} from "react-icons/bs";

const WhatsappButton = () => {
  return (
    <div>
      <Button variant="primary" className="whats-icon" >Envia a whatsapp <BsWhatsapp/> </Button>
    </div>
  )
}

export default WhatsappButton