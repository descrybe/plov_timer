(() => {
    // timer logic
    let time = 0;

    chrome.runtime.onMessage.addListener((obj, sender, response) => {
        const { type, taskId } = obj;

        if (type === "NEW") {
            currentTask = taskId;
            console.log('new event');
        }
    });
})();