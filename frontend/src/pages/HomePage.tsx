import { Col, Row } from "react-bootstrap";
import MessageBox from "../components/MessageBosx.tsx";
import LoadingBox from "../components/LoadingBox.tsx";
import { getError } from "../utils.ts";
import { ApiError } from "../types/ApiError.ts";
import ProductItem from "../components/ProductItem.tsx";
import { Helmet } from "react-helmet-async";
import { useGetProductsQuery } from "../hooks/productHooks.ts";


export default function HomePage() {
 
  const { data: products, isLoading, error } = useGetProductsQuery()

  return isLoading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="danger">{getError(error as ApiError)}</MessageBox>
  ) : (
    <Row>
      <Helmet>
        <title>TS Amazona</title>
      </Helmet>
      {products!.map((product) => (
        
          <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
            <ProductItem product={product}></ProductItem>
          </Col>
  
      ))}
    </Row>
  );
}
