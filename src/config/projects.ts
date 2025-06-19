// Types


export type ActivityItemType = {
  name: string
  description: string
  link?: string
}

import { ProjectItemType } from './infoConfig'

// Research & Projects
export const projectHeadLine = "目前觉得好用的一些开源项目"
export const projectIntro = "以下是一些在github上的开源项目，国内访问会很卡，需科学上网或者使用国内的镜像，建议在自己的服务器上部署。"

export const projects: Array<ProjectItemType> = [
  {
    name: 'CloudSaver',
    description: '网盘资源搜索与转存工具。',
    link: { href: 'github.com/jiangrui1994/CloudSaver', label: 'GitHub' },
    tags: ['Vue 3', 'Express'],
    icon: 'magicbox.png'
  },
  {
    name: 'one api',
    description: 'LLM API 管理 & 分发系统',
    link: { href: 'github.com/songquanpeng/one-api', label: 'GitHub' },
    tags: ['JavaScript', 'Go'],
    icon: 'aibesttools.png'
  },
  {
    name: 'rustdesk',
    description: '远程桌面软件，开箱即用，无需任何配置。',
    link: { href: 'github.com/rustdesk/rustdesk?tab=readme-zh', label: 'GitHub' },
    tags: ['rust', 'docker'],
    icon: 'flux1.png'
  },
  {
    name: 'gemini balance',
    description: '实现gemini的国内中转和轮询',
    link: { href: 'github.com/snailyp/gemini-balance/blob/main/README_ZH.md', label: 'GitHub' },
    tags: ['Python'],
    icon: 'devtoolset.png'
  },
]

// Hobbies & Volunteer
export const activitiesHeadLine = "好用的一些网站"
export const activitiesIntro = "这里是我经常会使用的一些网站，有些是我自己搭建的，有些是引用大佬的，大家可以随意使用"

export const activities: Array<ActivityItemType> = [
  {
    name: 'Claude',
    description:
      '一个可以使用Claude sonnet4的网站，写短文能力很强，排版也好看',
    link: 'https://claude.kelaodealice.icu/',
  },
  {
    name: 'Crawl4AI',
    description:
      '一个免费爬取指定网页内容的网站，无需任何部署，直接可生成mark down格式并支持一键下载',
    link: 'https://crawl4ai.streamlit.app/',
  },
  {
    name: 'CloudSaver',
    description:
      '自己使用云服务器搭建的网盘资源搜索工具，想用的来问我用户名密码。',
    link: 'http://35.212.254.42:8008/',
  },
]
