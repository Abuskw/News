// This function receives data FROM Niotron
window.onDataReceived = function(newsJson) {
    const articles = JSON.parse(newsJson);
    displayNews(articles);
};

function displayNews(articles) {
    const hero = document.getElementById('hero-section');
    const side = document.getElementById('crypto-list');
    
    // Clear
    hero.innerHTML = '';
    side.innerHTML = '';

    // Hero Article
    const top = articles[0];
    hero.innerHTML = `
        <div class="card" onclick="sendToApp('${top.url}')">
            <img src="${top.urlToImage}" class="main-img">
            <div style="padding:15px;">
                <h2 style="margin:0;">${top.title}</h2>
                <div class="meta">${top.source.name}</div>
            </div>
        </div>`;

    // Sidebar Articles
    articles.slice(1, 6).forEach(item => {
        side.innerHTML += `
            <div class="card side-card" onclick="sendToApp('${item.url}')">
                <img src="${item.urlToImage}">
                <div>
                    <div style="font-weight:bold; font-size:0.9rem;">${item.title}</div>
                    <div class="meta">${item.source.name}</div>
                </div>
            </div>`;
    });
}

function sendToApp(url) {
    if (window.AppInventor) {
        window.AppInventor.setWebViewString(url);
    }
}
