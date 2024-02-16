import React, { useEffect, useState } from "react";
import Product_Card from "../Product_Card.jsx";
import PaginationScrlBtn from "./PaginationScrlBtn.jsx";
import axios from "axios";


const Pagination = ({posts,length}) => {


  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/api/v1/products/")
  //     .then((response) => {
  //       setPosts(response.data.products);
  //       setLength(response.data.products.length);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //       console.log(error);
  //     });
  // }, []);

  const [showPerPage, setShowPerPage] = useState(6);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <div>
      <div className="product_pagination">
        {posts.slice(pagination.start, pagination.end).map((product) => (
          <Product_Card key={product._id} item={product} />
        ))}
      </div>

      {length > 6 && (
        <PaginationScrlBtn
          showPerPage={showPerPage}
          onPaginationChange={onPaginationChange}
          total={length}
        />
      )}
    </div>
  );
};

export default Pagination;
