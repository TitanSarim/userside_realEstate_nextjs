/**
 * It's a function that returns a div with a button that opens a modal with a video in it
 * @returns A React component that renders a modal with a video.
 */
import React, { useState } from "react";
import { Button, Modal, ModalBody } from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const VideoDeskBox = ({property}) => {


  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const data = property?.properties?.[0]

  const embeddedCode = data?.video_url

  const regex = /src="(.*?)"/;
  const match = embeddedCode?.match(regex);

  let url = null
  if (match && match.length >= 2) {
    url = match[1];
  } else {
    console.log('Unable to extract YouTube video URL');
  }

  return (
    <div className='desc-box' id='video'>
      <div className='page-section ratio_40'>
        <h4 className='content-title'>video</h4>
        <div className='play-bg-image'>
          <div>
            <Img src='/assets/images/property/codioful-formerly-gradienta-QWutu2BRpOs-unsplash.jpg' className='bg-img' />
          </div>
          <div className='icon-video'>
            <a>
              <i className='fas fa-play' onClick={() => setModal(true)}></i>
            </a>
          </div>
        </div>
      </div>
      <Modal className='video-modal' centered size='lg' isOpen={modal} toggle={toggle} modalTransition={{ timeout: 100 }}>
        <ModalBody className='m-0 p-0'>
          <Button onClick={toggle} type='button' className='btn-close' aria-label='Close'>
            <span aria-hidden='true'>×</span>
          </Button>
          <iframe src={url} allowFullScreen></iframe>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default VideoDeskBox;
