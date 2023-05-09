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
    ThumbnailArrowContainer,
    ThumbnailPrev,
    ThumbnailNext,
    SliderContainer,
    ProductWrapper
} from "../style";

const ProductCarousel = ({images}) => {
    const [slideNumber, setSlideNumber] = useState(0);
    const [sliderPos, setSliderPos] = useState(0);
    
    const moveSlider = (index) => {
        setSliderPos(index)
        let slider = document.getElementById('ProductSlider');
        let sliderContainer = document.getElementById('SliderCont');

        let offset = parseFloat(getComputedStyle(sliderContainer).width);
        let maxWidth = (offset * 0.25 * images.length) + ((images.length - 1) * 0.01 * offset) - parseFloat(getComputedStyle(sliderContainer).width);
        slider.style.right = Math.min(index * offset * 0.26, maxWidth) + "px";
        slider.style.left = -Math.min(index * offset * 0.26, maxWidth) + "px";
    }

    const prevSlide = () => {
        let index = slideNumber === 0 ? images.length - 1 : slideNumber - 1;
        setSlideNumber(index);
        moveSlider(index);
    };

    const nextSlide = () => {
        let index = slideNumber === images.length - 1 ? 0 : slideNumber + 1;
        setSlideNumber(index)
        moveSlider(index);
    };

    const prevSlider = () => {
        let index = sliderPos < 3 ? 
            sliderPos === 0 ? images.length - 3 : 0
            : sliderPos - 3;
        moveSlider(index);
    };

    const nextSlider = () => {
        let index = sliderPos > images.length - 4 ? 0 : sliderPos + 3;
        moveSlider(index);
    }

    

    return (
        <ProductCarouselWrapper>
            <ProductWrapper>
                <ProductCarouselPrev onClick={prevSlide} />
                <ProductCarouselNext onClick={nextSlide} />
                <ProductCarouselImageContainer>
                    <ProductCarouselImage src={images[slideNumber].image} />
                </ProductCarouselImageContainer>
            </ProductWrapper>
            <SliderContainer>
            <ThumbnailArrowContainer>
                <ThumbnailPrev onClick={ () => prevSlider()}/>
            </ThumbnailArrowContainer>
            <ThumbnailContainer id="SliderCont">
                <ThumbnailSliderContainer id="ProductSlider">
                    {images.map((product, index) => (
                        <ThumbnailImage src={product.image} alt={index} onClick={ () => {
                            setSlideNumber(index);
                            moveSlider(index);
                        }}/>
                    ))}
                </ThumbnailSliderContainer>
            </ThumbnailContainer>
            <ThumbnailArrowContainer>
                <ThumbnailNext onClick={ () => nextSlider()}/>
            </ThumbnailArrowContainer>
            </SliderContainer>
        </ProductCarouselWrapper>
    );
}

export default ProductCarousel;