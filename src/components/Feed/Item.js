import React from "react";
import Modal from "react-modal";
import {
    mmodalContentStyles,
    customModalStyles,
    mmodalContentDarkStyles,
    customModalDarkStyles
} from "../../helpers/modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLink, faShareSquare, faCode} from "@fortawesome/free-solid-svg-icons";
import Copy from "../ItemUtils/Copy";
import {CopyToClipboard} from "react-copy-to-clipboard";

const Item = (image) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    let headerSection;
    let header;
    let closeBtn;

    let contentSection;
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
        if (image.darkModeState) {
            mmodalContentDarkStyles(headerSection, header, closeBtn);
        } else {
            mmodalContentStyles(headerSection, header, closeBtn);
        }

        contentSection.style.display = 'flex';
        if (image.darkModeState) {
            contentSection.style.backgroundColor = '#121212';
        }

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
        copyLinkSection.style.backgroundColor = image.darkModeState ? '#1f1f1f' : '#2A75B3';
        copyLinkSection.style.padding = '5px 10px 5px 5px';
        copyLinkSection.style.cursor = 'pointer';

        mediaSection.style.color = '#ffffff';
        mediaSection.style.backgroundColor = image.darkModeState ? '#1f1f1f' : '#F3D403';
        mediaSection.style.padding = '5px 10px 5px 5px';
        mediaSection.style.cursor = 'pointer';

        embedSection.style.color = '#ffffff';
        embedSection.style.backgroundColor = image.darkModeState ? '#1f1f1f' : '#7BC154';
        embedSection.style.padding = '5px 10px 5px 5px';
        embedSection.style.cursor = 'pointer';
    }

    function closeMModal() {
        setIsOpen(false);
    }

    function onCopyLinkClick() {
        closeMModal();
    }

    function onMediaClick() {
        closeMModal();
    }

    function onEmbedClick() {
        closeMModal();
    }

    let embedContentToCopy = `<iframe src="https://giphy.com/embed/${image.gif.id}" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="${image.gif.url}">via GIPHY</a></p>`;

    return (
        <div>
            <div className={image.darkModeState ? "gif-item-dark" : "gif-item"} onClick={showGifDetails}>
                <img src={image.gif.images.downsized.url} alt={image.gif.images.downsized.url} />
            </div>
            { modalIsOpen ? (
                <Modal
                    wrapClassname="mmodal"
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenMModal}
                    onRequestClose={closeMModal}
                    contentLabel="GIF Item Modal"
                    ariaHideApp={false}
                    style={image.darkModeState ? customModalDarkStyles : customModalStyles}
                >

                    <div ref={_headerSection => (headerSection = _headerSection)}>
                        <h2 ref={_header => (header = _header)}>{image.gif.title}</h2>
                        <button ref={_closeBtn => closeBtn = _closeBtn} onClick={closeMModal}>X</button>
                    </div>

                    <div className="item-details-content" ref={_contentSection => (contentSection = _contentSection)}>
                        <div>
                            <img className="img-item-details" src={image.gif.images.original.url} alt={image.gif.url} />
                        </div>
                        <div className="item-details-content-links" ref={_contentLinks => (contentLinks = _contentLinks)}>
                            <CopyToClipboard text={image.gif.url}>
                                <div ref={_copyLinkSection => (copyLinkSection = _copyLinkSection)} onClick={onCopyLinkClick}>
                                    <FontAwesomeIcon icon={faLink} style={{fontSize: '32px'}} />
                                    <span ref={_copyLinkText => (copyLinkText = _copyLinkText)}>Copy Link</span>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text={image.gif.images.original.url}>
                                <div ref={_mediaSection => (mediaSection = _mediaSection)} onClick={onMediaClick}>
                                    <FontAwesomeIcon icon={faShareSquare} style={{fontSize: '32px'}} />
                                    <span ref={_mediaText => (mediaText = _mediaText)}>Media</span>
                                </div>
                            </CopyToClipboard>
                            <CopyToClipboard text={embedContentToCopy}>
                                <div ref={_embedSection => (embedSection = _embedSection)} onClick={onEmbedClick}>
                                    <FontAwesomeIcon icon={faCode} style={{fontSize: '32px'}} />
                                    <span ref={_embedText => (embedText = _embedText)}>Embed</span>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>

                    <Copy />
                </Modal>
            ) : null }

        </div>
      );
};

export default Item;