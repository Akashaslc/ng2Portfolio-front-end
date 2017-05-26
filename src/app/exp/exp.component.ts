import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent implements OnInit {
  works = [{
            company: 'New World Presents',
            position: 'Creative Designer',
            website: 'http://newworldpresents.com/',
            startDate: '2013-04-13',
            endDate: 'Present',
            summary: 'New World Presents is a event and production platform aimed on bringing transformational events \
                    and festivals closer to the Utah area. As Creative Designer, I keep the aesthetic to our City Festivals \
                    inline with our vision and integrate interactive elements with in our city events. \
                    My responsibilities range from managing and organizing other artists at our festivals \
                    to designing and building interactive art installations.',
            highlights: [
              'Co-founded Company that hosts 600-800 person events.',
              'Established and curated a vibrant community with ~2000 people involved.',
              'Design and setup projection mapping content for 19 Main Stages.'
            ]
          },
          {
            company: 'Lunar Transit',
            position: 'Developer',
            website: 'http://lunartransit.com',
            startDate: '2015-04',
            endDate: 'Present',
            summary: 'Lunar Transit is New World Presents Flagship festival bringing the vibe of \
                      transformational festivals to Utah. Through this platform we aim to inspire and \
                      bring success to the multitude of great artists we have here in the area.',
            highlights: [
              'Co-founded festival that hosts 400-600 attendees.',
              'Developed website to showcase festival and manage logistics.',
              'Created art installations inpsired by the ~1000 person community.'
            ]
          },
          {
            company: 'Apple Inc.',
            position: 'Operations Specialist',
            website: 'https://apple.com',
            startDate: '2011-07-26',
            endDate: 'Present',
            summary: 'As an Operations Specialist, we managed inventory. Anytime a customer wanted a product, \
                      we brought it out to them and congratulated them on their purchase! We also made sure \
                      that we met our metrics by keeping accuracy high and shrink low.',
            highlights: [
              'Gained Developement using Lomingers Competencies',
              'Trained in MacOS Software, hardware.',
              'Trained in MacOS iOS Software'
            ]
          }
        ]
  constructor() { }

  ngOnInit() {
  }

}
