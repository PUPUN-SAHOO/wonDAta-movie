import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import CardMoviesComponents from '../../Components/CardMovies';

import PaginationComponent from "../../Components/pagination/paginationn";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageNo] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;

  const GetDataTreading = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${pageno}`
      );
      setContent(data.results);
      setPaginationno(data.total_pages);
      console.log("data", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
useEffect(()=>{
  GetDataTreading()
},[])

  const handleClick=(Number)=>{
    setPageNo(Number)
  }


  useEffect(() => {
    GetDataTreading();
  }, [pageno]);

  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending</h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>
          {
            content && content.length > 0 && content.map((item) => (
              <CardMoviesComponents key={item.id} data={item} 
                mediaType={"tv"}
              />
            ))
          }
          {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
        </Row>
      </Container>
    </main>
  );
};

export default HomeContainer;
