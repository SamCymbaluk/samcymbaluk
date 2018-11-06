import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResumeLoaderService {

  constructor(private httpClient: HttpClient) { }

  getResume(): Promise<Resume> {
    return this.httpClient.get('./assets/resume.json').toPromise()
      .then((res: Resume) => res);
  }
}

export interface Resume {
  name: string;
  color: string;
  contact_info: {
    name: string,
    icon: string,
    text: string,
    url: string
  }[];
  languages: string[];
  frameworks: string[];
  work_experience: ResumeSection[];
  community_involvement: ResumeSection[];
  personal_projects: ResumeSection[];
  awards: ResumeSection[];
  education: ResumeSection[];
}

export interface ResumeSection {
  name: string;
  bullet_points: string[];
  extra_info: {
    text: string,
    icon: string,
    url?: string
  }[];
}
