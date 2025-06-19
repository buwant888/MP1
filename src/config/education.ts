
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: '中国刑事警察学院',
      major: '侦查学',
      logo: 'college',
      start: '2022',
      end: '2026'
    },
    {
      school: '临潼中学',
      major: '高中',
      logo: 'college',
      start: '2019',
      end: '2021'
    }
  ]