import React from "react";
import Modal from "react-modal";
import {mmodalContentStyles, mmodalStyles} from "../../helpers/modal";

const Item = (image) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let headerSection;
    let header;
    let closeBtn;
    function showGifDetails() {
        console.log(`showing details for: ${image.gif.url}`);
        setIsOpen(true);
    }

    function afterOpenMModal() {
        mmodalContentStyles(headerSection, header, closeBtn);
    }

    function closeMModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <div className="gif-item" onClick={showGifDetails}>
                <img src={image.gif.images.downsized.url} alt={image.gif.images.downsized.url} />
            </div>
            { modalIsOpen ? (
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenMModal}
                    onRequestClose={closeMModal}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                    style={mmodalStyles}
                >

                    <div ref={_headerSection => (headerSection = _headerSection)}>
                        <h2 ref={_header => (header = _header)}>{image.gif.title}</h2>
                        <button ref={_closeBtn => closeBtn = _closeBtn} onClick={closeMModal}>X</button>
                    </div>

                </Modal>
            ) : null }

        </div>
      );
};

export default Item;