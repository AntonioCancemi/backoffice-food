import { Col, Container, Row } from "react-bootstrap";
import LoginForm from "../components/LoginForm";

const LonginPage = () => {
  return (
    <Container>
      <Row className="text-center">
        <h2>Login</h2>
      </Row>
      <Row className="justify-content-center ">
        <LoginForm />
      </Row>
    </Container>
  );
};
export default LonginPage;
