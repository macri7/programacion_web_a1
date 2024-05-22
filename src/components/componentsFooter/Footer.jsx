import './Footer.css';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>Sobre Inkafarma</h4>
          <ul>
            <li>Catálogo del mes</li>
            <li>Boticas 24 horas</li>
            <li>Farmacia Vecina</li>
            <li>Apoyo al Paciente Inkafarma</li>
            <li>Productos Equivalentes</li>
            <li>Cannabis Medicinal</li>
            <li>Derechos Arco</li>
            <li>Intercorp y socios estratégicos</li>
            <li>Call Center - Términos y Condiciones</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Inkaclub</h4>
          <ul>
            <li>Inkafarma Digital</li>
            <li>Blog Inkafarma</li>
            <li>Legales de Campañas</li>
            <li>Retiro en Tienda</li>
            <li>Servicio Express</li>
            <li>Zonas de cobertura</li>
            <li>Términos y Condiciones Generales</li>
            <li>Políticas de privacidad</li>
            <li>Comprobante electrónico</li>
            <li>WhatsApp - Términos y Condiciones</li>
            <li>Terceros encargados de tratamiento</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contáctanos</h4>
          <ul>
            <li>Preguntas Frecuentes</li>
            <li>Plan de Referidos</li>
            <li>Inkafono (Lima) (511) 314 2020</li>
            <li>Síguenos</li>
            <li className="social-icons">
              <img src= "https://i.pinimg.com/564x/95/d1/63/95d16377f0820c48b9ad3e679d4aa3fe.jpg"  alt="Facebook" />Facebook
            </li>
            <li className="social-icons">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolB3LA3xrUNPEDMql1p0XgoPgOSnDj_csuGGu2buRXg&s" alt="Instagram" />Instagram
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
