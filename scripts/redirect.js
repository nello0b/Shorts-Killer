const limit = 60;
const delay = 1000;
let interval = 1;

let numberOfTests = 0;

let refreshIntervalId;


let check = function () {
    let currentURL = window.location.href;
    if (currentURL.includes("/shorts/")) {
        window.location.href = currentURL.replace("/shorts/", "/watch?v=");
    }
    if (numberOfTests >= limit) {
        numberOfTests = 0;
        clearInterval(refreshIntervalId);
        refreshIntervalId = setInterval(check, delay * (interval++));
    }
};

refreshIntervalId = setInterval(check, delay * interval); // Check every 1000 milliseconds (1 second)


