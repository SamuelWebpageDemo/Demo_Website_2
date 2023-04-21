import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MapPopUp = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button variant="secondary" size="md-lg sm-sm" onClick={() => setModalShow(true)}>{props.buttonWord}</Button>
      <Modal
        show = {modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={props.pic} alt={props.heading}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>{props.closeButton}</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MapPopUp
