import { Component } from '@angular/core';
// declare const saveDocument: any;
// declare const loadDocument: any;
declare const TXTextControl: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'texteditor';
 

  onClickSave() {
      this.saveDocument();
  }

  onClickLoad() {
      this.loadDocument();
  }



   saveDocument() {
    TXTextControl.saveDocument(TXTextControl.StreamType.HTMLFormat,
        function (e:any) {
            console.log(e.data);
        });
        saveDocument();
}

 loadDocument() {
    TXTextControl.loadDocument(TXTextControl.StreamType.HTMLFormat,
        btoa('<strong>this is the test for angular 17 with Tx Text editor</strong>'));
}
}


function saveDocument() {
  // save document
  TXTextControl.saveDocument(TXTextControl.StreamType.AdobePDF, function (e:any) {
    // create temporary link element
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:application/octet-stream;base64,' + e.data
    );
    element.setAttribute('download', 'results.pdf');

    element.style.display = 'none';
    document.body.appendChild(element);

    // simulate click
    element.click();

    // remove the link
    document.body.removeChild(element);
  });
}