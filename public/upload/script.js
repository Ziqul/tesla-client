var toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],

    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],

    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'indent': '-1'}, { 'indent': '+1' }],

    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
];

var bodyTextareaQuill = new Quill('.body #textarea', {
    modules: { toolbar: toolbarOptions },
    theme: 'snow'
});
