'use strict';

const xhr = new XMLHttpRequest();

let http = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo+11+moon+landing&api-key=';
let key = 'fHL7tAeSA1ucA7eCfeFNSg9C289fPSYF';

xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === '200'){
            let response = JSON.parse(xhr.responseText);
            console.log(response)
        }
    } else {
        console.log('something is fishy')
    }
}

xhr.open('GET', `${http}${key}`, true);
xhr.send();