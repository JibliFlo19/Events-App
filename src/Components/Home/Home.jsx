import {
  HomeImgBackground,
  HomeContainer,
  HomeTitle,
  HomeSlogan,
} from "./Home.style";

import { CardContainer } from "./HomeCard.style";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeCard from "./HomeCard";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

export const category = [
  { title: "Party" },
  { title: "Concerts" },
  { title: "Teatre" },
  { title: "Street Food" },
  { title: "Sports" },
];

function Home() {
  return (
    <>
      <HomeContainer>
        <HomeImgBackground src="https://www.eventsindustryforum.co.uk/images/articles/about_the_eif.jpg" />
        <HomeTitle>Events</HomeTitle>
        <HomeSlogan>Salut! Bine ati venit la Events-App</HomeSlogan>
      </HomeContainer>
      <CardContainer>
        <Carousel>
          {category.map((cat) => (
            <Carousel.Item key={cat.title}>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption>
                <h3>{cat.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
              <HomeCard {...cat} />
            </Carousel.Item>
          ))}
        </Carousel>
      </CardContainer>
    </>
  );
}
export default Home;
