import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthData } from "../redux/actions/authAction";

const LoginForm = () => {
  const navigate = useNavigate();
  const { auth, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "salcan96",
    password: "sadaufawf",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAuthData(formData));
    navigate("/homepage");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Card className="login-card">
      <Card.Body className="">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Enter Username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />
          </Form.Group>
          <Row className="mx-5 px-5">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Submit"}
            </Button>
          </Row>

          {error && (
            <p className="text-danger mt-3">
              {error.includes(500) ? "Wrong password or username" : error}
            </p>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
