import { FileService } from './../../services/fservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topText = 'This is top text';
  bottomText = 'This is bottom text';
  colorName = 'black';

  imageNameList = ['atful', 'sad', 'smart', 'happy', 'confused'];

  constructor(private fileService: FileService) { }
  ngOnInit() { }

  onChange(selected): Promise<void> {
    return this.fileService.getImage(selected)
      .then(data => {
        const reader = new FileReader();
        reader.readAsDataURL(data);

        reader.onload = () => {
          document.getElementsByClassName('img-responsive')[0].setAttribute('src', reader.result as string);
        };
      }, err => {
            console.log('file download error ' + JSON.stringify(err));
        }
    );
  }
}
