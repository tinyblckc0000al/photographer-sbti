// 摄影师人格测试配置文件

// 8种摄影师人格类型
const photographerTypes = [
  {
    id: 'minimalist',
    name: '极简主义摄影师',
    description: '追求简洁、纯粹的形式感，善于发现日常中的秩序之美。',
    keywords: ['简洁', '秩序', '负空间', '几何'],
    traits: ['内敛', '理性', '专注']
  },
  {
    id: 'documentary',
    name: '纪实摄影师',
    description: '用镜头记录真实，捕捉生活中的瞬间与故事。',
    keywords: ['真实', '故事', '人文', '瞬间'],
    traits: ['敏锐', '耐心', '人文关怀']
  },
  {
    id: 'portrait',
    name: '人像摄影师',
    description: '擅长捕捉人物的情绪与灵魂，挖掘内心世界。',
    keywords: ['情绪', '情感', '人脸', '眼神'],
    traits: ['共情', '细腻', '沟通']
  },
  {
    id: 'landscape',
    name: '风光摄影师',
    description: '追逐光影与自然，用镜头诠释大自然的壮美。',
    keywords: ['自然', '壮美', '光影', '地形'],
    traits: ['坚韧', '耐心', '浪漫']
  },
  {
    id: 'street',
    name: '街头摄影师',
    description: '在城市中寻找瞬间，用快门捕捉城市的脉动。',
    keywords: ['城市', '街头', '瞬间', '日常'],
    traits: ['敏捷', '观察', '幽默']
  },
  {
    id: 'fashion',
    name: '时尚摄影师',
    description: '引领潮流，创造视觉冲击力的时尚大片。',
    keywords: ['潮流', '风格', '美感', '创新'],
    traits: ['大胆', '前卫', '审美']
  },
  {
    id: 'fine-art',
    name: '艺术摄影师',
    description: '将摄影视为艺术创作，表达个人审美与理念。',
    keywords: ['艺术', '创意', '概念', '表达'],
    traits: ['独立', '深刻', '哲思']
  },
  {
    id: 'wildlife',
    name: '野生动物摄影师',
    description: '在野外等待时机，捕捉动物最自然的状态。',
    keywords: ['野生动物', '自然', '行为', '生态'],
    traits: ['耐心', '勇敢', '环保']
  }
];

// 10道测试题
const questions = [
  {
    id: 1,
    question: '你更喜欢在什么时间段拍摄？',
    options: [
      { text: '清晨或黄昏的柔光', score: { landscape: 2, minimalist: 1 } },
      { text: '正午的强烈光线', score: { street: 1, fashion: 1 } },
      { text: '不确定，看情况', score: { documentary: 1, portrait: 1 } },
      { text: '夜晚的灯火', score: { fineArt: 2, street: 1 } }
    ]
  },
  {
    id: 2,
    question: '你外出拍照通常会带多少设备？',
    options: [
      { text: '越少越好，一个机身+一支镜头', score: { minimalist: 2, street: 1 } },
      { text: '专业背包，齐全的镜头群', score: { landscape: 2, wildlife: 2 } },
      { text: '只带必要的，几件轻便装备', score: { documentary: 1, portrait: 1 } },
      { text: '看拍摄主题，灵活调整', score: { fashion: 1, fineArt: 1 } }
    ]
  },
  {
    id: 3,
    question: '什么样的场景会让你想按快门？',
    options: [
      { text: '整齐的几何图案或极简场景', score: { minimalist: 3 } },
      { text: '有趣的街头瞬间或人物', score: { street: 3 } },
      { text: '壮丽的自然风光', score: { landscape: 3 } },
      { text: '人物的情绪瞬间', score: { portrait: 2, documentary: 1 } }
    ]
  },
  {
    id: 4,
    question: '你更在意照片的哪个方面？',
    options: [
      { text: '构图与形式感', score: { minimalist: 2, fashion: 1 } },
      { text: '故事性与纪实性', score: { documentary: 3 } },
      { text: '情感表达与氛围', score: { portrait: 2, fineArt: 1 } },
      { text: '技术与画质的完美', score: { landscape: 1, wildlife: 1 } }
    ]
  },
  {
    id: 5,
    question: '你最喜欢后期处理哪种风格？',
    options: [
      { text: '黑白或低饱和度', score: { minimalist: 2, documentary: 1 } },
      { text: '高对比、戏剧性', score: { fineArt: 2, fashion: 1 } },
      { text: '自然还原色彩', score: { landscape: 2, wildlife: 2 } },
      { text: '清新、柔和的色调', score: { portrait: 2, street: 1 } }
    ]
  },
  {
    id: 6,
    question: '你拍摄时通常的状态是？',
    options: [
      { text: '静静等待时机', score: { landscape: 2, wildlife: 2 } },
      { text: '主动寻找并快速捕捉', score: { street: 2, documentary: 1 } },
      { text: '与被摄者交流互动', score: { portrait: 3 } },
      { text: '边走边看，寻找灵感', score: { fashion: 1, fineArt: 1 } }
    ]
  },
  {
    id: 7,
    question: '你会被什么类型的作品吸引？',
    options: [
      { text: '杉本博司的静穆与时间感', score: { minimalist: 2, fineArt: 1 } },
      { text: '布列松的决定性瞬间', score: { street: 2, documentary: 1 } },
      { text: '亚当斯的壮丽风光', score: { landscape: 3 } },
      { text: '荒木经惟的情色与情感', score: { portrait: 1, fineArt: 2 } }
    ]
  },
  {
    id: 8,
    question: '你更倾向于个人创作还是商业合作？',
    options: [
      { text: '个人艺术创作', score: { fineArt: 2, minimalist: 1 } },
      { text: '商业时尚大片', score: { fashion: 3 } },
      { text: '纪实报道项目', score: { documentary: 3 } },
      { text: '都能接受，灵活多变', score: { portrait: 1, street: 1 } }
    ]
  },
  {
    id: 9,
    question: '你拍照的主要目的是什么？',
    options: [
      { text: '记录真实，留住历史', score: { documentary: 2 } },
      { text: '表达自我，创作艺术', score: { fineArt: 2, portrait: 1 } },
      { text: '捕捉美，分享美好', score: { fashion: 1, landscape: 1 } },
      { text: '纯粹的热爱，享受过程', score: { street: 1, wildlife: 1 } }
    ]
  },
  {
    id: 10,
    question: '如果要去一个陌生地方拍照，你会？',
    options: [
      { text: '提前做大量调研，规划路线', score: { landscape: 2, wildlife: 2 } },
      { text: '随意漫步，偶遇惊喜', score: { street: 2, documentary: 1 } },
      { text: '带上模特，准备主题拍摄', score: { portrait: 2, fashion: 1 } },
      { text: '先观察环境，寻找灵感', score: { minimalist: 1, fineArt: 1 } }
    ]
  }
];

module.exports = {
  photographerTypes,
  questions
};