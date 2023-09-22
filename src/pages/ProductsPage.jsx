import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productsFetch";
import ProductsItem from "../components/ProductItem";
import ProductModalForm from "../components/ProductModalForm";
import { fetchCategory } from "../redux/actions/CategoryFetch";

const ProductsPage = () => {
  // fetch data
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user.auth);
  const { loading, error, content } = useSelector((state) => state.product);
  const { loadingC, errorC, category } = useSelector(
    (state) => state.menuCategory
  );

  useEffect(() => {
    dispatch(fetchProducts(accessToken));
    dispatch(fetchCategory(accessToken));
    setFilteredItems(content);
  }, []);

  // filtri
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); // Aggiunto filtro per il prezzo
  const handleResetFilter = () => {
    setCategoryFilter("");
    setPriceFilter("");
    setSearchQuery("");
  };

  useEffect(() => {
    // Filtra gli oggetti in base al nome, categoria e prezzo
    const filtered = content?.filter((item) => {
      const nameMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        !searchQuery;
      console.log(item.category.category, categoryFilter);
      const categoryMatch =
        item.category.category === categoryFilter || !categoryFilter;
      const priceMatch =
        item.price >= Number.parseInt(priceFilter) || !priceFilter;
      return nameMatch && categoryMatch && priceMatch;
    });

    setFilteredItems(filtered);
  }, [content, searchQuery, categoryFilter, priceFilter]);

  return (
    <>
      <Row className="justify-content-center ">
        <Col className="col-10">
          <h3>Products</h3>
        </Col>
      </Row>
      {/* start filter Row */}
      <Row className="justify-content-center mb-2 ">
        <Col className="col-10">
          <Form as={Row} className="">
            <Col className="col-2">
              <Form.Group controlId="searchQuery">
                <Form.Label>Search Name:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Form.Group controlId="categoryFilter">
                <Form.Label>Filter by Category:</Form.Label>
                <Form.Control
                  as="select"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <option value="">All Categories</option>

                  {category?.map((item) => (
                    <option value={item.category} key={item.id}>
                      {item.category}
                    </option>
                  ))}

                  {/* Aggiungi le opzioni per le tue categorie qui */}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="col-2">
              <Form.Group controlId="priceFilter">
                <Form.Label>Filter by Price:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter price"
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col className="d-flex align-items-end justify-content-between">
              <Button
                onClick={handleResetFilter}
                variant="trasparent"
                className="logout"
              >
                Reset
              </Button>
              <ProductModalForm />
            </Col>
          </Form>
        </Col>
      </Row>
      {/* end filter Row | start list Row */}
      <Row className="justify-content-center list-container mb-5">
        <Col className="col-10">
          <ListGroup>
            <FirstLine />
            {loading ? <ListGroupItem>{error}</ListGroupItem> : ""}
            {error ? (
              <ListGroupItem>
                <div class="spinner-border" role="status">
                  <span>Loading...</span>
                </div>
              </ListGroupItem>
            ) : (
              ""
            )}
            {filteredItems?.map((item, i) => (
              <ProductsItem item={item} key={i} />
            ))}
            {filteredItems?.map((item, i) => (
              <ProductsItem item={item} key={i} />
            ))}
          </ListGroup>
        </Col>
      </Row>
      {/* end list Row */}
    </>
  );
};
export default ProductsPage;
const FirstLine = () => {
  return (
    <ListGroupItem className="first-line ">
      <Row className="py-1">
        <Col className="col-1 border-end d-flex align-items-center justify-content-center ">
          ID
        </Col>
        <Col className="col-1 border-end d-flex align-items-center justify-content-center">
          NAME
        </Col>
        <Col className="col-2 border-end d-flex align-items-center justify-content-center">
          CATEGORY
        </Col>
        <Col className="col-1 border-end d-flex align-items-center justify-content-center">
          PRRICE
        </Col>
        <Col className="col-4 border-end d-flex align-items-center justify-content-center">
          DESCRIPTION
        </Col>
        <Col className="col-2 col-image text-center">IMAGE</Col>
        <Col className=" d-flex align-items-center justify-content-center"></Col>
      </Row>
    </ListGroupItem>
  );
};
