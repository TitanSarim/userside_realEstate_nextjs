/**
 * It takes an array of images and returns a gallery of images
 * @returns The return value of the function is being returned.
 */
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Col, Row } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const ImageSection = ({property}) => {

  const images = property?.properties?.[0]?.media


  return (
    <Row className='image_section  zoom-gallery-multiple gx-3'>
      <Gallery>

        <Item original={images?.[0]?.imageUrl} thumbnail={images?.[0]?.imageUrl} width='1000' height='600'>
          {({ ref, open }) => (
            <Col sm='8'>
              <a ref={ref} onClick={open}>
                <img src={images?.[0]?.imageUrl} className='img-fluid bg-img' alt='' />
              </a>
            </Col>
          )}
        </Item>
        <Col sm='4'>
          <Row>
            {images?.slice(1).map((image, index) => (
              <Item key={index} original={image.imageUrl} width='1000' height='600'>
                {({ ref, open }) => (
                  <Col lg='12'>
                    <div className='img-property' ref={ref} onClick={open}>
                      <Img src={image.imageUrl} className='bg-img' />
                    </div>
                  </Col>
                )}
              </Item>
            ))}
          </Row>
        </Col>

      </Gallery>
    </Row>
  );
};

export default ImageSection;
