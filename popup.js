
let button = document.getElementById('repo_button');

button.onclick = function(element) {

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {

        if(tabs.length > 0 && tabs[0].hasOwnProperty("url")){
            let newUrl = "https://github.com/FongYoong/remove_scihub_lady"
            chrome.tabs.update(tabs.id, {url: newUrl});
        }
    });
};