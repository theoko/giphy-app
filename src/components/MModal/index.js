import React from "react";
import Modal from 'react-modal';
import Feed from "../Feed";

const MModal = (props) => {
    let headerSection;
    let header;
    let closeBtn;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openMModal() {
        setIsOpen(true);
    }

    function afterOpenMModal() {
        // references are now sync'd and can be accessed.
        headerSection.style.display = 'flex';
        headerSection.style.justifyContent = 'space-between';

        header.style.color = '#EC1D24';
        header.style.fontFamily = 'Marvel';
        header.style.fontSize = '30px';

        closeBtn.style.borderRadius = '50%';
        closeBtn.style.padding = '25px';
        closeBtn.style.fontSize = '20px';
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
                contentLabel="Example Modal"
                ariaHideApp={false}
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