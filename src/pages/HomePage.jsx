import { Col, Container, Row } from "react-bootstrap";
import { MdFastfood } from "react-icons/md";
import { BiFoodMenu } from "react-icons/bi";
import { AiOutlineShop } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  return (
    <Container>
      <Row className="welcome-title ">
        <Col className="col-10">
          <h2>
            Bentornato <br />
            {user?.name} {user?.lastname}
          </h2>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-around text-center">
        <Col
          onClick={() => navigate("/products")}
          className="col-10 col-lg-4  container-button-home"
        >
          <div>
            <p>Products</p>
            <MdFastfood />
          </div>
        </Col>
        <Col
          onClick={() => navigate("/category")}
          className="col-10 col-lg-4  container-button-home"
        >
          <div>
            <p>Category</p>
            <BiFoodMenu />
          </div>
        </Col>
        <Col
          onClick={() => navigate("/myinfo")}
          className="col-10 col-lg-4  container-button-home"
        >
          <div>
            <p>My info</p>
            <AiOutlineShop />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-10 col-lg-8 box-description">
          <h3>Cos'è MENU.IO?</h3>
          <p>
            MENU.IO è Web App di Back Office è una potente piattaforma
            progettata per semplificare la gestione di tre aree vitali per
            qualsiasi azienda: Prodotti, Categorie e Informazioni sull'Attività.
            Questa applicazione fornisce agli amministratori e agli utenti
            autorizzati gli strumenti necessari per massimizzare l'efficienza e
            la produttività aziendale.
          </p>
        </Col>
        <Col className="col-10 col-lg-4 justify-content-end align-items-center d-flex box-credit ">
          <p>
            created by: <br />
            Antonio Cancemi
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
