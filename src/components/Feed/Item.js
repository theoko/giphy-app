import React from "react";
import Modal from "react-modal";
import {mmodalContentStyles, mmodalStyles} from "../../helpers/modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faShareSquare, faCode} from "@fortawesome/free-solid-svg-icons";

const Item = (image) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let headerSection;
    let header;
    let closeBtn;

    let contentSection;
    let contentImage;
    let contentLinks;

    let copyLinkSection;
    let mediaSection;
    let embedSection;

    let copyLinkText;
    let mediaText;
    let embedText;
    function showGifDetails() {
        console.log(`showing details for: ${image.gif.url}`);
        setIsOpen(true);
    }

    function afterOpenMModal() {
        mmodalContentStyles(headerSection, header, closeBtn);

        contentSection.style.display = 'flex';

        contentLinks.style.marginLeft = '75px';
        contentLinks.style.marginTop = '30px';
        contentLinks.style.padding = '10px';

        copyLinkText.style.paddingLeft = '5px';
        mediaText.style.paddingLeft = '5px';
        embedText.style.paddingLeft = '5px';
        copyLinkText.fontFamily = 'Marvel';
        mediaText.fontFamily = 'Marvel';
        embedText.fontFamily = 'Marvel';

        copyLinkSection.style.paddingTop = '15px';
        mediaSection.style.paddingTop = '15px';
        embedSection.style.paddingTop = '15px';
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
                    wrapClassname="mmodal"
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

                    <div ref={_contentSection => (contentSection = _contentSection)}>
                        <div ref={_contentImage => (contentImage = _contentImage)}>
                            <img src={image.gif.images.original.url} alt={image.gif.url} />
                        </div>
                        <div ref={_contentLinks => (contentLinks = _contentLinks)}>
                            <div ref={_copyLinkSection => (copyLinkSection = _copyLinkSection)}>
                                <FontAwesomeIcon icon={faLink} />
                                <span ref={_copyLinkText => (copyLinkText = _copyLinkText)}>Copy Link</span>
                            </div>
                            <div ref={_mediaSection => (mediaSection = _mediaSection)}>
                                <FontAwesomeIcon icon={faShareSquare} />
                                <span ref={_mediaText => (mediaText = _mediaText)}>Media</span>
                            </div>
                            <div ref={_embedSection => (embedSection = _embedSection)}>
                                <FontAwesomeIcon icon={faCode} />
                                <span ref={_embedText => (embedText = _embedText)}>Embed</span>
                            </div>
                        </div>
                    </div>


                </Modal>
            ) : null }

        </div>
      );
};

export default Item;