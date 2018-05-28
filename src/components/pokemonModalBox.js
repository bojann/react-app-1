import React, {Component} from 'react';
import {Modal,Button} from 'react-bootstrap/lib/';

const PokeModalBox = ({modalShow,handleHideModal}) => {
    return (
        <div>
            <Modal
                onHide={handleHideModal}
                show={modalShow}
                bsSize="large"
                aria-labelledby="contained-modal-title-lg" >
                <Modal.Header closeButton onClick={handleHideModal}>
                   <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleHideModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

// class PokeModalBox extends Component{
//     constructor(props) {
//         super(props);
//
//         this.state= {
//             modalShow: false
//         }
//
//         this.handleHideModal = this.handleHideModal.bind(this);
//     }
//
//     handleHideModal() {
//         this.setState((prevState,props) => {
//             return {
//                 modalShow: false
//             }
//         });
//     }
//
//     render(){
//         return (
//             <ModalBox
//                 modalShow={this.state.modalShow}
//                 handleHideModal={this.handleHideModal} />
//         )
//     }
// }

export default PokeModalBox;
