import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {
    FaCaretLeft,
    FaCaretRight,
    FaChevronCircleLeft,
    FaChevronCircleRight
} from 'react-icons/fa'

export const ProductCard = styled.div`
    padding: 1%;
    margin: 1%;
    background: #616161;
    width: calc(84% / 4);
    aspect-ratio: 2/3;

    @media (max-width: 600px) {
        width: calc(88% / 3);
    }

    @media (max-width: 400px) {
        width: calc(92% / 2);
    }
`

export const CardImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
`

export const CardTitle = styled(Link)`
    font-size: 1em;
    color: black;
    font-weight: bold;
    text-decoration: none;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 800px) {
        font-size: 0.9em;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    @media (max-width: 400px) {
        font-size: 0.7em;
    }
`

export const CardPrice = styled.p`
    1em;

    @media (max-width: 800px) {
        font-size: 0.9em;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    @media (max-width: 400px) {
        font-size: 0.7em;
    }
`

export const ProductListWrap = styled.div`
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: auto;
    align-items: center;
    justify-content: left;
    max-width: 1100px;
    margin: 0% auto;
    padding: 1%;
`

export const PageNumWrapper = styled.ul`
    display: flex;
    list-style-type: none;
`

export const PageLeft = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
`

export const PageLeftArrow = styled(FaCaretLeft)`
    &:disabled {
        pointer-events: none;
        display: hidden;
    }
`

export const PageRight = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
`

export const PageRightArrow = styled(FaCaretRight)`
    &:disabled {
        pointer-events: none;
        display: hidden;
    }
`

export const PageDots = styled.li`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
        background-color: transparent;
        cursor: default;
      }
`

export const PageNumItem = styled.li`
    {selected?: boolean}
    font-weight: ${({ selected }) => (selected ? 'bold' : 'none')};

    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: rgba(0, 0, 0, 0.87);
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        cursor: pointer;
      }
`

export const ProductCarouselWrapper = styled.div`
    width: 600px;
    max-width: 100%;
    position: relative;
`

export const ProductCarouselPrev = styled(FaChevronCircleLeft)`
    position: absolute;
    left: 0;
    top: calc(50% - .5em);
    font-size: 2em;
`

export const ProductCarouselNext = styled(FaChevronCircleRight)`
    position: absolute;
    right: 0;
    top: calc(50% - .5em);
    font-size: 2em;
`

export const ProductCarouselImageContainer = styled.div`
    width: 100%;
`

export const ProductCarouselImage = styled.img`
    object-fit: crop;
    width: 100%;
    user-select: none;
`

export const ThumbnailContainer = styled.div`
    width: 100%;
    // display: flex;
    position: relative;
    align-items: center;
    overflow-x: hidden;
`

export const ThumbnailSliderContainer = styled.div`
    display: flex;
    position: absolute;
    gap: 1%;
    flex-wrap: nowrap;
    justify-content: start;
    align-items: start;
    left: 0;
    right: 0;
    transition: 0.4s
    
`

export const ThumbnailImage = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
    min-width: 25%;
    max-width: 25%;
    user-select: none;
    
`

export const ThumbnailArrowContainer = styled.div`
    width: 5%;
    position: relative;
`

export const ThumbnailPrev = styled(FaChevronCircleLeft)`
    width: 100%;
    position: absolute;
    top: 40%;
`

export const ThumbnailNext = styled(FaChevronCircleRight)`
    width: 100%;
    position: absolute;
    top: 40%;
`

export const SliderContainer = styled.div`
    width: 100%;
    display: flex;
    aspect-ratio: 5;
`

export const ProductWrapper = styled.div`
    position: relative;
`