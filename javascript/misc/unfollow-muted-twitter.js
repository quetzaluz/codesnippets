lastDocumentScrollHeight = 0
let interval = setInterval(function () {
    if (lastDocumentScrollHeight === document.body.scrollHeight) {
        loadingCount++
    } else {
        loadingCount = 0
    }
    if (loadingCount === 12) {
        clearInterval(interval)
    }
    window.scrollTo(0, document.body.scrollHeight);
    lastDocumentScrollHeight = document.body.scrollHeight;
}, 300)

elements = $('.GridTimeline-items .Grid-cell')

for (var i = 0; i < elements.length; i++) {
    if (elements[i].querySelector('.muting') && elements[i].querySelector('.following') && elements[i].querySelector('.FollowStatus') == null) {
        elements[i].querySelector('.follow-button').click()
    }
}
