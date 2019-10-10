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
  skills: ResumeSkillsSection;
  work_experience: ResumeSection;
  community_involvement: ResumeSection;
  personal_projects: ResumeSection;
  awards: ResumeSection;
  education: ResumeSection;
}

export interface ResumeSection {
  name: string;
  elements: ResumeSectionEntry[];
  hidden: boolean;
}

export interface ResumeSkillsSection {
  name: string;
  languages: ResumeSkill[];
  frameworks: ResumeSkill[];
  hidden: boolean;
}

export interface ResumeSectionEntry {
  name: string;
  title?: string;
  bullet_points: string[];
  extra_info: {
    text: string,
    icon: string,
    url?: string
  }[];
  hidden: boolean;
}

export interface ResumeSkill {
  name: string;
  hidden: boolean;
}
