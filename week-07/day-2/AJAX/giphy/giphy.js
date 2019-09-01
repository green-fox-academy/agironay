'use strict';

//key: AXFtpJ0LlGvBsSBEmhSzU0IRFhVn8D9F

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            console.log(response);
            for (let i = 0; i < response.data.length; i++) {
                let img = document.createElement("img");
                img.src = response.data[i].images.original_still.url;
                img.onclick = () => {
                    img.src = response.data[i].images.original.url;
                }
                document.body.appendChild(img);
            }
        }
        else {
            console.log('Something went wrong');
        }
    }


}

xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?api_key=6JVGuv1RRLtFyGiD0Tz2TUdIcO09ccm5&q=beer&limit=15&offset=0&rating=G&lang=en', true); // Also try http://444.hu/feed
xhr.send(null);