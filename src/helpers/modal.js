export function mmodalContentStyles(headerSection, header, closeBtn) {
    headerSection.style.display = 'flex';
    headerSection.style.justifyContent = 'space-between';
    headerSection.style.backgroundColor = '#EC1D24';

    header.style.color = '#EC1D24';
    header.style.fontFamily = 'Marvel';
    header.style.fontSize = '32px';
    header.style.color = '#FFFFFF';
    header.style.paddingLeft = '10px';

    closeBtn.style.padding = '32px';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.backgroundColor = '#EC1D24';
    closeBtn.style.color = '#FFFFFF';
    closeBtn.style.fontFamily = 'Marvel';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.border = '0px';
}

export const customModalStyles = {
  content: {
      padding: '0px',
      top: '10px',
      bottom: '10px',
      left: '10px',
      right: '10px',
      backgroundImage: 'url("/assets/img/marvel-pattern.png")'
  }
};

export const customFilterModalStyles = {
  content: {
      padding: '0px',
      top: '0px',
      bottom: '0px',
      left: '0px',
      right: '0px',
      backgroundImage: 'url("/assets/img/marvel-pattern.png")'
  }
};