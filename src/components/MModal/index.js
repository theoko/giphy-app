import React from "react";
import Modal from 'react-modal';
import Feed from "../Feed";
import {mmodalContentStyles, mmodalStyles} from "../../helpers/modal";

const MModal = (props) => {
    let headerSection;
    let header;
    let closeBtn;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openMModal() {
        setIsOpen(true);
    }

    function afterOpenMModal() {
        mmodalContentStyles(headerSection, header, closeBtn);
    }

    function closeMModal() {
        props.updateState(false);
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                wrapClassname="mmodal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenMModal}
                onRequestClose={closeMModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                style={mmodalStyles}
            >

                <div ref={_headerSection => (headerSection = _headerSection)}>
                    <h2 ref={_header => (header = _header)}>Marvel GIFs</h2>
                    <button ref={_closeBtn => closeBtn = _closeBtn} onClick={closeMModal}>X</button>
                </div>

                <Feed gifs={props.gifs} />
            </Modal>
        </div>
    );
};

export default MModal;