import { Component, OnInit } from '@angular/core';
import {Resume, ResumeLoaderService} from '../services/resume-loader.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeLoader: ResumeLoaderService) { }

  ngOnInit() {
    this.resumeLoader.getResume().then(resume => {
      this.resume = resume;
    });
  }

  onPrintClick() {
    print();
  }

}
