import React from "react";
import {mmodalContentStyles, customFilterModalStyles} from "../../helpers/modal";
import Modal from "react-modal";

const FilterModal = (props) => {
    let headerSection;
    let header;
    let closeBtn;
    let contentSection;
    const [modalIsOpen, setIsOpen] = React.useState(true);

    function afterOpenMModal() {
        mmodalContentStyles(headerSection, header, closeBtn);

        contentSection.style.fontFamily = 'Marvel';
        contentSection.style.fontWeight = 'bold';
        contentSection.style.padding = '30px';
    }

    function closeMModal() {
        props.updateFilterState(false);
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                wrapClassname="mmodal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenMModal}
                onRequestClose={closeMModal}
                contentLabel="Filter Modal"
                ariaHideApp={false}
                style={customFilterModalStyles}
            >

                <div ref={_headerSection => (headerSection = _headerSection)}>
                    <h2 ref={_header => (header = _header)}>Filters</h2>
                    <button ref={_closeBtn => closeBtn = _closeBtn} onClick={closeMModal}>X</button>
                </div>

                <div ref={_contentSection => (contentSection = _contentSection)}>
                    <h3>Number of GIFs to show</h3>
                    <input />
                    <h3>Rating</h3>
                    <select id="rating">
                        <option value="G">G</option>
                        <option value="PG">PG</option>
                        <option value="PG-13">PG-13</option>
                        <option value="R">R</option>
                    </select>
                    <h3>Language</h3>
                    <select id="lang">
                        <option value="en" selected="">en</option>
                        <option value="es">es</option>
                        <option value="pt">pt</option>
                        <option value="id">id</option>
                        <option value="fr">fr</option>
                        <option value="ar">ar</option>
                        <option value="tr">tr</option>
                        <option value="th">th</option>
                        <option value="vi">vi</option>
                        <option value="de">de</option>
                        <option value="it">it</option>
                        <option value="ja">ja</option>
                        <option value="zh-CN">zh-CN</option>
                        <option value="zh-TW">zh-TW</option>
                        <option value="ru">ru</option>
                        <option value="ko">ko</option>
                        <option value="pl">pl</option>
                        <option value="nl">nl</option>
                        <option value="ro">ro</option>
                        <option value="hu">hu</option>
                        <option value="sv">sv</option>
                        <option value="cs">cs</option>
                        <option value="hi">hi</option>
                        <option value="bn">bn</option>
                        <option value="da">da</option>
                        <option value="fa">fa</option>
                        <option value="tl">tl</option>
                        <option value="fi">fi</option>
                        <option value="iw">iw</option>
                        <option value="ms">ms</option>
                        <option value="no">no</option>
                        <option value="uk">uk</option>
                    </select>
                </div>

            </Modal>
        </div>
    );
};

export default FilterModal;