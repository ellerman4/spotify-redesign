// Temporary method to wait for elements to be loaded by the DOM before modifying them
setTimeout(function(){
    const footer = document.querySelector('footer');

    if (footer) {
        // Append the navigation buttons to the now playing bottom bar
        // Then remove the entire navbar
        document.getElementsByClassName('RSg3qFREWrqWCuUvDpJR')[0].appendChild(document.getElementsByClassName('odcjv30UQnjaTv4sylc0')[0]); // 'odcjv30UQnjaTv4sylc0' == Profile Dropdown
        document.getElementsByClassName('Root__now-playing-bar')[0].appendChild(document.getElementsByClassName('RSg3qFREWrqWCuUvDpJR')[0]); // 'RSg3qFREWrqWCuUvDpJR' == List of nav buttons
        document.getElementsByTagName('nav')[0].remove();
        console.log('test');
    }
},5000);

// Create a style element
const style = document.createElement('style');

// Append CSS to style element
style.innerHTML = `
    .RSg3qFREWrqWCuUvDpJR {
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        align-items: center;
        background: rgba(0,0,0,.7);
        color: #fff;
        cursor: pointer;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        gap: 8px;
        height: 60px;
        justify-content: center;
        padding: 2px;
        position: relative;
        margin-inline: 10px;
        margin-bottom: 10px;
        border-radius: 13px;
    }
    
    .GD2gbRtcs5dOjMGAM_Y4 {
        border-radius: 13px;
        margin-bottom: 10px;
        margin-inline: 10px;

    }
    .Root__top-bar {
        justify-self: center;
        display: none;
    }
    .GD2gbRtcs5dOjMGAM_Y4 {
        flex-direction: row;
        place-content: center;
    }

    .WlJeGZh0DRN1R5IW84Yq.control-button {
        display: none;
    }

    .volume-bar.ExuDUBJ7bk8vT6INnm9F {
        display: none;
    }

    .volume-bar.ExuDUBJ7bk8vT6INnm9F {
        justify-content: flex-start !important;
    }

    .koyeY6AgGRPmyPITi7yO.qJOhHoRcFhHJpEQ2CwFT {
        top: 0px !important;
    }
    `;

// Append style element to head of the document
document.head.appendChild(style);

