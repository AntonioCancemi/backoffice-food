import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BsPencilSquare } from "react-icons/bs";
import { BiMessageSquareAdd } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

function ProductModalForm({ item }) {
  // modal control
  const { loadingC, errorC, category } = useSelector(
    (state) => state.menuCategory
  );
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // from control
  const [content, setContent] = useState({
    id: "",
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    category: { id: "", category: "" },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "category") {
      setContent({ ...content, category: { category: value } });
    } else {
      setContent({ ...content, [name]: value });
    }
    console.log(content);
  };

  //  data fetching
  useEffect(() => {
    // set headers request
    if (item) {
      setContent(item);
    }
  }, [item]);
  return (
    <>
      <Button variant="trasparent" className="logout" onClick={handleShow}>
        {!item ? (
          <>
            Add new
            <BiMessageSquareAdd className="fs-2" />
          </>
        ) : (
          <BsPencilSquare className="fs-2" />
        )}
      </Button>

      <Modal centered show={show} size="lg" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Product From {item ? "ID [" + content?.id + "]" : ""}
          </Modal.Title>
        </Modal.Header>
        {content.id != "" || !item ? (
          <>
            <Modal.Body>
              <Form as={Row} className="justify-content-center">
                <Form.Group as={Col} className="col-4 mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="enter a Name"
                    value={content.name}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} className="col-3 mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    name="price"
                    placeholder="enter a price"
                    value={content.price}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} className=" col-7 mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="description"
                    placeholder="enter description"
                    value={content.description}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} className="col-7 mb-3">
                  <Form.Label>Image URL</Form.Label>
                  <Form.Control
                    type="text"
                    name="imageUrl"
                    placeholder="enter Image URL"
                    value={content.imageUrl}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group as={Col} className="col-7">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    as="select"
                    name="category"
                    value={content.category.category}
                    onChange={handleInputChange}
                  >
                    <option value="">{content.category.category}</option>
                    {category
                      ?.filter(
                        (item) => item.category != content.category.category
                      )
                      .map((item) => (
                        <option value={item.category} key={item.id}>
                          {item.category}
                        </option>
                      ))}

                    {/* Aggiungi le opzioni per le tue categorie qui */}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>{" "}
          </>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
}

export default ProductModalForm;
