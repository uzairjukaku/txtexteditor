function saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e) {
            console.log(e.data);
        });
}

function loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>Test</strong>'));
}