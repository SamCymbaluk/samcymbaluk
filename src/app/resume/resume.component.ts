import {Component, OnInit} from '@angular/core';
import {
  Resume,
  ResumeLoaderService,
  ResumeSection,
  ResumeSectionEntry,
  ResumeSkill,
  ResumeSkillsSection
} from '../services/resume-loader.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resume: Resume;

  constructor(private resumeLoader: ResumeLoaderService) {
  }

  ngOnInit() {
    this.resumeLoader.getResume().then(resume => {
      this.resume = resume;
    });
  }

  onSkillClick(skill: ResumeSkill) {
    skill.hidden = !skill.hidden;
    if (skill.hidden === false) {
      this.resume.skills.hidden = false;
    }
  }

  onSkillsSectionClick(section: ResumeSkillsSection) {
    section.hidden = !section.hidden;
    for (const skill of section.languages) {
      skill.hidden = section.hidden;
    }
    for (const skill of section.frameworks) {
      skill.hidden = section.hidden;
    }
  }

  onSectionClick(section: ResumeSection) {
    section.hidden = !section.hidden;
    for (const element of section.elements) {
      element.hidden = section.hidden;
    }
  }

  onSectionEntryClick(section: ResumeSection, entry: ResumeSectionEntry) {
    entry.hidden = !entry.hidden;
    if (entry.hidden === false) {
      section.hidden = false;
    }
  }

  onPrintClick() {
    print();
  }
}


