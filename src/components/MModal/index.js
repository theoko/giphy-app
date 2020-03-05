import React from "react";
import Modal from 'react-modal';
import Feed from "../Feed";
import {
    mmodalContentStyles,
    customModalStyles,
    mmodalContentDarkStyles,
    customModalDarkStyles
} from "../../helpers/modal";

const MModal = (props) => {
    let headerSection;
    let header;
    let closeBtn;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function afterOpenMModal() {
        if (props.darkModeState) {
            mmodalContentDarkStyles(headerSection, header, closeBtn)
        } else {
            mmodalContentStyles(headerSection, header, closeBtn);
        }
    }

    function closeMModal() {
        props.updateState(false);
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenMModal}
                onRequestClose={closeMModal}
                contentLabel="MModal"
                ariaHideApp={false}
                style={props.darkModeState ? customModalDarkStyles : customModalStyles}
            >

                <div ref={_headerSection => (headerSection = _headerSection)}>
                    <h2 ref={_header => (header = _header)}>MARVEL GIFs</h2>
                    <button ref={_closeBtn => closeBtn = _closeBtn} onClick={closeMModal}>X</button>
                </div>

                <Feed darkModeState={props.darkModeState} gifs={props.gifs} />
            </Modal>
        </div>
    );
};

export default MModal;