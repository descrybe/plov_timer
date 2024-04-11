// service workers and tabs
chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if (tab.url && tab.url.includes('jr.avito.ru')) {
        const queryParameters = tab.url.split('?')[1];
        const urlParameters = new URLSearchParams(queryParameters);

        chrome.tabs.sendMessage(tabId, {
            type: 'NEW',
            taskId: urlParameters.get('v'),
        });
    }
});