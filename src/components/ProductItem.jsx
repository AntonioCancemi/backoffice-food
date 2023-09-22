import { Button, Col, Image, ListGroupItem, Row } from "react-bootstrap";
import ImageZoomModal from "./ImageZoomModal";
import ProductModalForm from "./ProductModalForm";
const ProductsItem = ({ item }) => {
  return (
    <>
      <ListGroupItem>
        <Row className="py-1">
          <Col className="col-1 border-end d-flex align-items-center justify-content-center ">
            <span className="product-id">ID: {item.id}</span>
          </Col>
          <Col className="col-1 border-end d-flex align-items-center justify-content-center">
            <span className="product-name"> {item.name}</span> <br />
          </Col>
          <Col className="col-2 border-end d-flex align-items-center justify-content-center">
            <span>{item.category.category}</span>
          </Col>
          <Col className="col-1 border-end d-flex align-items-center justify-content-center">
            <span className="product-price">
              {item.price.toString().slice(0, 5) + " €"}
            </span>
          </Col>
          <Col className="col-4 border-end d-flex align-items-center justify-content-center">
            <span>
              {item.description + item.description + item.description}
            </span>
          </Col>
          <Col className="col-2 col-image text-center">
            <ImageZoomModal
              image={
                "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2022/09/Panino-con-cotoletta.jpg"
              }
            />
          </Col>
          <Col className="col-auto d-flex align-items-center justify-content-center">
            <ProductModalForm key={item?.id} item={item} />
          </Col>
        </Row>
      </ListGroupItem>
    </>
  );
};
export default ProductsItem;
