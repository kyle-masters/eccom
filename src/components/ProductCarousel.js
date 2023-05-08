import React, { useState } from "react";
import { 
    ProductCarouselWrapper,
    ProductCarouselPrev,
    ProductCarouselNext,
    ProductCarouselImageContainer,
    ProductCarouselImage,
    ThumbnailContainer,
    ThumbnailSliderContainer,
    ThumbnailImage,
    ThumbnailPrev,
    ThumbnailNext,
    SliderContainer
} from "../style";

const ProductCarousel = ({images}) => {
    const [slideNumber, setSlideNumber] = useState(0);

    
    const setSliderPos = ({index}) => {
        let slider = document.getElementById('ProductSlider');
        let sliderContainer = document.getElementById('SliderCont');

        let offset = parseFloat(getComputedStyle(sliderContainer).width);
        slider.style.right = (index * offset * 0.26) + "px";
        slider.style.left = (-index * offset * 0.26) + "px";
        console.log(index, offset * 0.26, index * offset * 0.26);
    }

    const prevSlide = () => {
        let index = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
        setSlideNumber(index)
        console.log(index);
        setSliderPos({index});
    };

    const nextSlide = () => {
        let index = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
        setSlideNumber(index)
        console.log(index);
        setSliderPos({index});
    };

    

    return (
        <ProductCarouselWrapper>
            <ProductCarouselPrev onClick={prevSlide} />
            <ProductCarouselNext onClick={nextSlide} />
            <ProductCarouselImageContainer>
                <ProductCarouselImage src={images[slideNumber].image} />
            </ProductCarouselImageContainer>
            <SliderContainer>
            <ThumbnailPrev />
                <ThumbnailContainer id="SliderCont">
                    <ThumbnailSliderContainer id="ProductSlider">
                        {images.map((product, index) => (
                            <ThumbnailImage src={product.image} alt={index} onClick={ () => {
                                setSlideNumber(index);
                                console.log(index);
                                setSliderPos({index});
                            }}/>
                        ))}
                    </ThumbnailSliderContainer>
                </ThumbnailContainer>
            <ThumbnailNext />
            </SliderContainer>
        </ProductCarouselWrapper>
    );
}

export default ProductCarousel;