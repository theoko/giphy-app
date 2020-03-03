import React from "react";
import Modal from "react-modal";
import {mmodalContentStyles, mmodalStyles} from "../../helpers/modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faShareSquare, faCode} from "@fortawesome/free-solid-svg-icons";
import Copy from "../ItemUtils/Copy";

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

        copyLinkText.style.paddingLeft = '10px';
        mediaText.style.paddingLeft = '10px';
        embedText.style.paddingLeft = '10px';

        copyLinkText.style.fontFamily = 'Marvel';
        mediaText.style.fontFamily = 'Marvel';
        embedText.style.fontFamily = 'Marvel';

        copyLinkText.style.fontSize = '32px';
        mediaText.style.fontSize = '32px';
        embedText.style.fontSize = '32px';

        copyLinkSection.style.marginTop = '15px';
        mediaSection.style.marginTop = '15px';
        embedSection.style.marginTop = '15px';

        copyLinkSection.style.color = '#ffffff';
        copyLinkSection.style.backgroundColor = '#2A75B3';
        copyLinkSection.style.padding = '5px 10px 5px 5px';
        copyLinkSection.style.cursor = 'pointer';

        mediaSection.style.color = '#ffffff';
        mediaSection.style.backgroundColor = '#F3D403';
        mediaSection.style.padding = '5px 10px 5px 5px';
        mediaSection.style.cursor = 'pointer';

        embedSection.style.color = '#ffffff';
        embedSection.style.backgroundColor = '#7BC154';
        embedSection.style.padding = '5px 10px 5px 5px';
        embedSection.style.cursor = 'pointer';
    }

    function closeMModal() {
        setIsOpen(false);
    }

    function onCopyLinkClick() {
        // image.gif.url
        closeMModal();
    }

    function onMediaClick() {
        //
    }

    function onEmbedClick() {
        // image.gif.embed
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

                    <div className="item-details-content" ref={_contentSection => (contentSection = _contentSection)}>
                        <div ref={_contentImage => (contentImage = _contentImage)}>
                            <img className="img-item-details" src={image.gif.images.original.url} alt={image.gif.url} />
                        </div>
                        <div className="item-details-content-links" ref={_contentLinks => (contentLinks = _contentLinks)}>
                            <div ref={_copyLinkSection => (copyLinkSection = _copyLinkSection)} onClick={onCopyLinkClick}>
                                <FontAwesomeIcon icon={faLink} style={{fontSize: '32px'}} />
                                <span ref={_copyLinkText => (copyLinkText = _copyLinkText)}>Copy Link</span>
                            </div>
                            <div ref={_mediaSection => (mediaSection = _mediaSection)} onClick={onMediaClick}>
                                <FontAwesomeIcon icon={faShareSquare} style={{fontSize: '32px'}} />
                                <span ref={_mediaText => (mediaText = _mediaText)}>Media</span>
                            </div>
                            <div ref={_embedSection => (embedSection = _embedSection)} onClick={onEmbedClick}>
                                <FontAwesomeIcon icon={faCode} style={{fontSize: '32px'}} />
                                <span ref={_embedText => (embedText = _embedText)}>Embed</span>
                            </div>
                        </div>
                    </div>

                    <Copy />
                </Modal>
            ) : null }

        </div>
      );
};

export default Item;