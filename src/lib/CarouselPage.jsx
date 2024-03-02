import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/style.css';

const CarouselPage = () => {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="carouselImage"
                    src="https://1847884116.rsc.cdn77.org/tamil/home/andrea1982021m.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselImage"
                    src="https://w0.peakpx.com/wallpaper/884/97/HD-wallpaper-andrea-jeremiah-pretty-female-model-tamil-actress-woman-singer-girl-beauty-face-indian-gorgeous.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="carouselImage"
                    src="https://wallpapercave.com/wp/wp6585692.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    );
}

export default CarouselPage;