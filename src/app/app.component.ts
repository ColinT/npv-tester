import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'npv-tester';

  public pdfNo: number;
  public pdfSrc = '../assets/test.pdf';

  click(): void {
    this.pdfNo++;
  }

}
