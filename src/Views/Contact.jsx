import Header from "../Components/Header/Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {BsWhatsapp} from "react-icons/bs";
import "../Styles/App.scss";
import { useState } from "react";


function Contact() {
  const [message, setMessage] = useState("")
  const sendMessage = () => {
    window.open("https://api.whatsapp.com/send?phone=573173657520&text="+message, "_blank")
  }
  return (
    <div>
      <Header />
      <div className="container">
        <p className="page_tittle">Contacto</p>
        <p className="text-center">
          Escribenos para pedidos especiales,realizamos diseños personalizados,
          desayunos, cajas sopresas y celebraciones especiales.
        </p>
        <Form.Control
          onChange={(e)=>setMessage(e.target.value)}
          as="textarea"
          placeholder="¡Deja tu mensaje aquí!"
          style={{ height: "120px", width: "100%", marginBottom:"2%" }}
        />
      <Button variant="primary" onClick={sendMessage}> Enviar <BsWhatsapp/></Button>
      </div>
    </div>
  );
}

export default Contact;
