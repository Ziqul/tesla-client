var env = {};
fetch('/env')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        env = data;
    });

var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],

    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
];

var bodyTextareaQuill = new Quill('.body #textarea', {
    modules: { toolbar: toolbarOptions },
    theme: 'snow'
});

function sendData() {
    var uploadButton =
        document.querySelector('.button.block > button');
    uploadButton.disabled = true;

    var articleData = {};

    articleData.title =
        document.querySelector('.title.block textarea').value;
    articleData.participants =
        document.querySelector('.participants.block textarea').value;
    articleData.abstract =
        document.querySelector('.abstract.block textarea').value;
    articleData.keywords =
        document.querySelector('.keywords.block textarea').value;
    articleData.body =
        JSON.stringify(bodyTextareaQuill.getContents());

    fetch(env.API_URL + '/article', {
        method: 'POST',
        body: articleData
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        window.location.href = '/saved/page.html?ai=' + data.id;
    });
}
