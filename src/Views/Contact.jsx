import Header from '../Components/Header/Header'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function Contact() {
  return (
    <div>
      <Header/>
      <p className="page_tittle">Contacto</p>
      <p className='text-center'>Escribenos para pedidos especiales,realizamos diseños personalizados, desayunos, cajas sopresas y celebraciones especiales.</p>
      <Form.Control
          as="textarea"
          placeholder="Deja tu mensaje aquí!"
          style={{ height: '100px' }}
        />
      <Button variant="primary" >Enviar</Button>
    </div>
  )
}

export default Contact