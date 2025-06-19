// 信息配置导出文件
// 集中导出config目录下的所有配置
export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = '刘博志'
export const headline = '一个喜欢安静和运动的人'
export const introduction =
  "我的本科在中国刑事警察学院，专业是侦查学。我喜欢玩，但不喜欢玩游戏，我喜欢桌游这种人与人面对面互动的游戏。\n我喜欢运动和音乐，也喜欢在电脑上瞎折腾着玩。好歌手有很多，我喜欢方大同和单依纯，好项目也很多，让技术小白的我通过docker可以省去很多麻烦体验到一些很好的项目。\n想交到一些志同道合的朋友相互学习鼓励。等待，我随时随地在等待~"
export const email = 'buwant10086@163.com'
export const githubUsername = 'buwant'

// about page
export const aboutMeHeadline = '你是谁以及为什么要关注你?'
export const aboutParagraphs = [
  "我是一名普通大学生，喜欢在电脑上搭建一些好玩的项目给生活添加点乐趣，这是属于我自己的网站，我将在这个网站上分享我自己的学习和生活。",
  'ai最近是我们绕不开的一个话题，大家可以使用我搭建的网站使用我自己的额度来辅助进行工作和学习，像gemini最新的模型我已经为大家准备好了，国内即可访问。',
  "虽然是自己的博客，但是当然是使用了大佬的模板进行加工制作，纯抄袭，大家看个乐呵，，，，",
]

// blog
export const blogHeadLine = "我一直在想什么。"
export const blogIntro =
  "我想写一些对于ai，web3，宏观经济和网络运营维护的一些思考"

// project type
export type ProjectItemType = {
  name: string
  description: string
  link: { href: string; label: string }
  tags: string[],
  icon?: string
}

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://v.douyin.com/jHx70mVvfrQ/ 3@7.com :0pm',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/1778053132',
  },
  {
    name: 'WeChat',
    icon: 'wechat',
    href: 'https://cdn.jsdelivr.net/gh/buwant888/ck/test/mmexport1750352222163.jpg'
  },
]

// https://simpleicons.org/
export const techIcons = [
  'spotify',
  'xiaomi',
  'googlegemini',
  'cloudflare',
  'bitcoin',
  'binance',
  'telegram',
  'bilibili',
  'github',
  'tiktok',
  'solana',
  'python',
  'docker',
  'instagram',
  'x',
  'claude',
  'discord',
  'wise',
  'alist',
  'bnbchain',
  'huggingface',
  'wechat',
]
