const landmarks = [
  {
    id: 1, name: '南大门—毛主席像', group: '精神之门', mode: 'timegate', campus: '主校区', icon: '门', x: 16, y: 31,
    now: '图片/1南大门1.jpg', future: 'assets/landmarks/01_future.jpg',
    intro: '从这里进入喻园，也从这里看见一所大学的精神坐标。',
    moduleTitle: '刷入园卡：开启未来校门',
    moduleText: '把校门处理成“时空入口”，适合高中生的憧憬、在读生的出发、校友的回望。',
    copies: {
      highschool: '穿过这扇门，你会把“想象中的大学”第一次变成可抵达的地点。',
      student: '每次路过这里，都是一次重新出发。今天的时空打卡，从最熟悉的入口开始。',
      alumni: '南大门像一枚旧书签，替你夹住了初入喻园的那一页。',
      public: '这里是认识华中科技大学的第一站，也是校园精神与城市记忆的交汇点。'
    }
  },
  {
    id: 2, name: '主校区图书馆', group: '知识云端', mode: 'book', campus: '主校区', icon: '书', x: 32, y: 24,
    now: '图片/2图书馆1.jpg', future: 'assets/landmarks/02_future.jpg',
    intro: '书页、光影与数据星河，在这里汇成校园的知识中心。',
    moduleTitle: '翻开未来书：连接纸页与云端',
    moduleText: '点击书页可随机切换知识关键词，弱化模板化科技风，让交互更像真实阅读。',
    copies: {
      highschool: '这里像一座未来知识塔：专业、理想与好奇心，都从翻开第一页开始。',
      student: '图书馆记录过赶 deadline 的夜晚，也记录过突然想明白的瞬间。',
      alumni: '那些坐过的位置、借过的书、赶过的论文，也许都被时间悄悄装订成册。',
      public: '图书馆是高校文化最集中的窗口，也是理解一所大学学习氛围的重要入口。'
    }
  },
  {
    id: 3, name: '校史馆', group: '精神之门', mode: 'timegate', campus: '主校区', icon: '史', x: 48, y: 32,
    now: '图片/3校史馆2.jpg', future: 'assets/landmarks/03_future.jpg',
    intro: '历史不是静止的展陈，而是通向未来的坐标轴。',
    moduleTitle: '校史答题：从过去走向未来',
    moduleText: '用时间轴而不是普通卡片承载校史馆，让“现在—未来”主题更自然。',
    copies: {
      highschool: '未来不是凭空出现的，它长在一代代 HUSTer 的脚步里。',
      student: '每个普通今天都可能成为未来校史，校史馆会提醒你这一点。',
      alumni: '你曾经走过的路，也属于这条校史长河的一部分。',
      public: '校史馆浓缩了一所大学的发展脉络，展示教育、科技与时代的同频共振。'
    }
  },
  {
    id: 4, name: '青年园', group: '青春能量场', mode: 'nature', campus: '主校区', icon: '青', x: 62, y: 29,
    now: '图片/4青年园1.jpg', future: 'assets/landmarks/04_future.jpg',
    intro: '青年人的想法、社团、热爱与偶遇，在这里持续发生。',
    moduleTitle: '拖动能量：让热爱在这里发生',
    moduleText: '自然类地标加入季节按钮和轻量水纹/叶片，让页面不再只有同一种图片比较。',
    copies: {
      highschool: '未来的大学不只有课堂，也有社团、朋友、热爱与更自由的自己。',
      student: '青年园像一块校园缓冲区：在忙碌之外，给热爱留出位置。',
      alumni: '你是否还记得某次路过、某场活动、某个突然变熟的朋友？',
      public: '这里呈现的是年轻大学生活力，也是校园公共空间的开放气质。'
    }
  },
  {
    id: 5, name: '百景园（食堂）', group: '今日能量补给站', mode: 'canteen', campus: '主校区', icon: '饭', x: 76, y: 39,
    now: '图片/5.百景园1.jpg', future: 'assets/landmarks/05_future.jpg',
    intro: '校园生活最终会落到一餐饭里，百景园把理想、日常和味道连在一起。',
    moduleTitle: '选择菜单：补充喻园能量',
    moduleText: '把百景园定位为食堂体验点，用菜品、饭卡和能量条承接真实大学生活。',
    copies: {
      highschool: '这是你想象中的“未来大学第一顿饭”：新鲜、真实，也带着一点入学前的期待。',
      student: '今天吃什么，是每个 HUSTer 都绕不开的真实校园问题。',
      alumni: '记忆里最具体的母校味道，往往藏在一张旧饭卡和一份常点菜单里。',
      public: '食堂是理解大学日常生活的公共窗口，也让导览从建筑回到真实的人。'
    }
  },
  {
    id: 6, name: '西十二教学楼', group: '课堂与实验场', mode: 'classroom', campus: '主校区', icon: '课', x: 27, y: 54,
    now: '图片/6.西十二教学楼.jpg', future: 'assets/landmarks/06_future.jpg',
    intro: '课堂、考试、自习与讨论，在楼体的灯光里不断切换。',
    moduleTitle: '点亮教室：唤醒课堂灵感',
    moduleText: '教学楼使用“点亮窗格”的交互，更贴近楼体和课堂场景。',
    copies: {
      highschool: '未来的课堂不只是听讲，而是把问题、实验和想象放在同一张桌面上。',
      student: '西十二懂你的早八，也懂你考前临时抱佛脚的认真。',
      alumni: '那些年你赶过的课、占过的座、写过的卷子，都在这里留下微光。',
      public: '教学楼是大学育人功能最直接的空间，也连接着知识传播与人才培养。'
    }
  },
  {
    id: 7, name: '醉晚亭', group: '喻园四季', mode: 'nature', campus: '主校区', icon: '亭', x: 44, y: 58,
    now: '图片/7.醉晚亭 3.jpg', future: 'assets/landmarks/07_future.jpg',
    intro: '水面、亭影与晚风，把喻园的诗意留在此刻。',
    moduleTitle: '轻触水纹：让亭影扩散',
    moduleText: '醉晚亭适合做水纹、晚风和诗句，不建议套同一种硬科技组件。',
    copies: {
      highschool: '如果你想象大学的浪漫，不妨先从一座亭子和一片水光开始。',
      student: '醉晚亭适合发呆，也适合在压力很大的时候，短暂地把自己还给校园。',
      alumni: '你或许已经忘了某天的晚风，但醉晚亭还记得。',
      public: '醉晚亭是华科大校园景观中富有诗意的文化地标。'
    }
  },
  {
    id: 8, name: '东九教学楼', group: '课堂与实验场', mode: 'classroom', campus: '主校区', icon: '研', x: 61, y: 57,
    now: '图片/8.东九教学楼1.jpg', future: 'assets/landmarks/08_future.jpg',
    intro: '知识在这里进入实验、协作与真实问题。',
    moduleTitle: '点亮实验格：让问题变成答案',
    moduleText: '将东九处理成实验/协作空间，交互重点是点亮、协作和问题解决。',
    copies: {
      highschool: '未来的你也许会在这里第一次把“我想知道”变成“我能证明”。',
      student: '东九不只是一栋楼，它也是小组作业、实验报告和灵感碰撞的集合。',
      alumni: '你曾在这里学会的，不只是知识，还有面对复杂问题的方法。',
      public: '东九教学楼代表着高校教学、科研与跨学科培养的空间形态。'
    }
  },
  {
    id: 9, name: '爱因斯坦广场', group: '科学之光', mode: 'science', campus: '主校区', icon: '科', x: 78, y: 63,
    now: '图片/9.爱因斯坦广场1.jpg', future: 'assets/landmarks/09_future.jpg',
    intro: '科学精神不是遥远的公式，而是敢于发问的校园气质。',
    moduleTitle: '点亮星点：生成探索坐标',
    moduleText: '科学地标使用星点/公式动效，体现求是创新，避免只做静态介绍。',
    copies: {
      highschool: '在这里，你可以把好奇心看作未来最重要的入学装备。',
      student: '当问题变难，也许正说明你离真正的探索更近了一点。',
      alumni: '多年以后，你或许还会记得：在喻园，认真发问是一种共同语言。',
      public: '广场以科学精神为核心，展现校园对创新与求真的重视。'
    }
  },
  {
    id: 10, name: '裘法祖像', group: '医学之光', mode: 'medicine', campus: '同济校区', icon: '医', x: 26, y: 79,
    now: '图片/10.裘法祖像1.jpg', future: 'assets/landmarks/10_future.jpg',
    intro: '医学精神在此凝望，也在一代代同济人手中延续。',
    moduleTitle: '触发生命脉冲：理解医学温度',
    moduleText: '医学地标不宜过度赛博化，重点是仁心、严谨和生命温度。',
    copies: {
      highschool: '如果你向往医学，这里会告诉你：未来的技术背后，始终站着人的温度。',
      student: '医学之路很长，但每一步都与责任、耐心和生命相连。',
      alumni: '同济记忆里，总有一束光属于仁心、严谨与传承。',
      public: '裘法祖像承载着医学教育与人文精神的共同记忆。'
    }
  },
  {
    id: 11, name: '碧珠长廊', group: '医学人文长廊', mode: 'nature', campus: '同济校区', icon: '廊', x: 49, y: 75,
    now: '图片/11.碧珠长廊3.jpg', future: 'assets/landmarks/11_future.jpg',
    intro: '长廊连接的不只是空间，也连接着医学、人文与日常步履。',
    moduleTitle: '滑动导览线：记录长廊光影',
    moduleText: '长廊以光影和步行感为核心，让交互更温和、更有人文气质。',
    copies: {
      highschool: '未来的校园也许很智能，但真正让人停留的，依然是这种可以慢慢走过的地方。',
      student: '长廊让赶路变得没有那么急，也让校园日常多了一点温柔。',
      alumni: '长廊里的脚步声，会在回忆里被拉得很长。',
      public: '碧珠长廊体现了同济校区独特的空间气质与医学人文氛围。'
    }
  },
  {
    id: 12, name: '同济校区图书馆', group: '医学知识云库', mode: 'book', campus: '同济校区', icon: '济', x: 70, y: 81,
    now: '图片/12.同济图书馆1.jpg', future: 'assets/landmarks/12_future.jpg',
    intro: '医学知识在这里沉淀，也在未来生命科学中重新生长。',
    moduleTitle: '翻开医学书：连接生命知识',
    moduleText: '同济图书馆与主校区图书馆共用书页逻辑，但内容强调医学知识和长期主义。',
    copies: {
      highschool: '你未来读过的每一页，都可能与理解生命、守护生命有关。',
      student: '这里的安静，是给专业、耐心和长期主义的一种保护。',
      alumni: '书架之间的日子，后来都变成了专业底气的一部分。',
      public: '同济校区图书馆展现医学教育、知识积累与人文学习空间的结合。'
    }
  },
  {
    id: 13, name: '同济医学院大门', group: '医学门户', mode: 'medicine', campus: '同济校区', icon: '门', x: 13, y: 78,
    now: '图片/13.同济医学院大门.jpg', future: 'assets/landmarks/13_future.jpg',
    intro: '从这道门进入同济校区，也进入华科医学人文与生命科学的支线。',
    moduleTitle: '医学支线：理解医学精神',
    moduleText: '同济医学院大门作为社会大众路线的转场节点，连接主校区导览与医学人文空间。',
    copies: {
      highschool: '如果未来的你向往医学，这扇门会把理想引向更具体的责任。',
      student: '从主校区到同济校区，华科的学习日常也有更宽的专业坐标。',
      alumni: '母校的未来不只在主校区生长，也在同济医学精神中继续延伸。',
      public: '这里是开放导览进入同济校区的第一站，展示华科医学教育的入口形象。'
    }
  },
  {
    id: 14, name: '水塔', group: '同济记忆坐标', mode: 'timegate', campus: '同济校区', icon: '塔', x: 42, y: 82,
    now: '图片/14.水塔.jpg', future: 'assets/landmarks/14_future.jpg',
    intro: '水塔像同济校区的时间标尺，把老建筑、树影与医学记忆一起留在校园天际线里。',
    moduleTitle: '拨动水塔刻度：点亮同济记忆',
    moduleText: '水塔作为同济校区自由探索地标，适合承载时间感、空间识别和医学人文记忆。',
    copies: {
      highschool: '未来第一次走进同济校区时，水塔会像一个安静的方向标，提醒你校园也有时间的高度。',
      student: '它不一定总在日程里，却会在赶路时突然出现，成为同济校区最熟悉的坐标之一。',
      alumni: '多年以后再看见水塔，很多同济校区的路、树影和旧日片段都会跟着回来。',
      public: '水塔是同济校区具有识别度的校园景观，也让开放导览多了一处可被记住的历史坐标。'
    }
  }
];

const identities = {
  highschool: {
    label: '高中生', type: '录取通知式入口', className: 'highschool',
    title: '未来 HUSTer 预见路线', desc: '第一次走进华科，看见未来的自己。',
    endingTitle: '未来 HUSTer 预见者', routeType: '预见线',
    route: [1, 3, 2, 6, 5, 4, 9],
    routeSummary: '南大门—毛主席像 → 校史馆 → 主校区图书馆 → 西十二教学楼 → 百景园（食堂） → 青年园 → 爱因斯坦广场',
    visual: 'assets/generated/identity/highschool.jpg',
    bg: 'assets/generated/背景-高中生.png',
    bgm: 'assets/audio/highschool.mp3',
    accent: '#0A73FD', soft: '#e6f2ff',
    lensTitle: '看见未来的自己',
    lensCopy: '把南大门、校史、图书馆、课堂和第一顿饭连成一次提前入学体验。',
    taskLead: '收集未来入园线索',
    completeToast: '未来邀请已点亮，可停留查看',
    endingText: `你还没有真正踏入大学，却已经在这条路线里，看见了未来的自己。未来的华科，不只是一个遥远的目标，也可能是某一天你真实生活的地方。当你真正来到这里时，今天屏幕里的光、路和被点亮的地标，或许都会变成你脚下走过的日常。愿你带着现在的期待，走向属于自己的喻园时光。`
  },
  student: {
    label: '在读生', type: '校园卡式入口', className: 'student',
    title: '今日 HUSTer 成长路线', desc: '熟悉的校园日常，正在升级为未来。',
    endingTitle: '今日 HUSTer 成长者', routeType: '成长线',
    route: [8, 6, 2, 5, 4, 7, 9],
    routeSummary: '东九教学楼 → 西十二教学楼 → 主校区图书馆 → 百景园（食堂） → 青年园 → 醉晚亭 → 爱因斯坦广场',
    visual: 'assets/generated/identity/student.jpg',
    bg: 'assets/generated/背景-在读生.png',
    bgm: 'assets/audio/student.mp3',
    accent: '#0b4ea2', soft: '#eaf3ff',
    lensTitle: '正在发生的日常',
    lensCopy: '从上课、赶课、自习、吃饭和片刻休息里，看见校园与自己一起成长。',
    taskLead: '完成今日校园任务',
    completeToast: '今日坐标已打卡，可停留查看',
    endingText: `未来的华科并不只存在于远方，它其实藏在你今天经过的路里。藏在赶去上课的清晨，藏在图书馆亮起的灯光里，藏在百景园的一餐饭里，也藏在你偶尔停下脚步、吹过青年园和醉晚亭的风里。你每天经历的校园日常，看似普通，却正在一点点组成属于你的大学记忆。`
  },
  alumni: {
    label: '已毕业校友', type: '旧相册式入口', className: 'alumni',
    title: '重返喻园记忆路线', desc: '从校门回来，在熟悉地点重遇青春。',
    endingTitle: '喻园记忆重逢者', routeType: '返校线',
    route: [1, 3, 2, 5, 7, 4, 9],
    routeSummary: '南大门—毛主席像 → 校史馆 → 主校区图书馆 → 百景园（食堂） → 醉晚亭 → 青年园 → 爱因斯坦广场',
    visual: 'assets/generated/identity/alumni.jpg',
    bg: 'assets/generated/背景-校友.png',
    bgm: 'assets/audio/alumni.mp3',
    accent: '#c4965a', soft: '#f7ebdc',
    lensTitle: '重回母校',
    lensCopy: '从南大门重新入园，在图书馆、食堂、亭边和青年园里找回旧日味道。',
    taskLead: '唤起一段校园记忆',
    completeToast: '回忆已唤起，可停留查看',
    endingText: `多年以后再次回到华科，很多地方也许已经变了。路旁的树长得更高，熟悉的建筑换了新的光影，可当你重新站在南大门前，走近图书馆、食堂、青年园和醉晚亭时，某些记忆又会忽然变得清晰。华科不是停在过去的记忆，而是一座一直向前生长的校园。它在未来继续改变，也在未来继续等你回来。`
  },
  public: {
    label: '社会大众', type: '导览票式入口', className: 'public',
    title: '开放华科导览路线', desc: '从主校区到同济校区，理解一所大学的公共形象。',
    endingTitle: '开放华科导览者', routeType: '开放线',
    route: [1, 3, 2, 9, 13, 10, 12, 11],
    routeSummary: '南大门—毛主席像 → 校史馆 → 主校区图书馆 → 爱因斯坦广场 → 同济医学院大门 → 裘法祖像 → 同济校区图书馆 → 碧珠长廊',
    visual: 'assets/generated/identity/public.jpg',
    bg: 'assets/generated/背景-社会大众.png',
    bgm: 'assets/audio/public.mp3',
    accent: '#5a8f69', soft: '#e8f3df',
    lensTitle: '开放导览',
    lensCopy: '从入口形象、历史积淀、知识中心、科学精神走向医学人文支线。',
    taskLead: '完成开放校园观察',
    completeToast: '导览观察已记录，可停留查看',
    endingText: `沿着这条路线，你看到的不只是一所大学的建筑。你看到的是一座校园如何承载历史、知识、科学与医学精神，也看到它如何向城市、向社会、向未来持续打开。华科不只是学生和校友心中的校园，也是一处可以被公众理解、被城市看见、被未来继续书写的大学空间。`
  }
};

const pages = [...document.querySelectorAll('.page')];
let pageIndex = 0;
let currentIdentity = 'highschool';
let identityChosen = false;
let landmarkIndex = 0;
let openCampus = '主校区';
let currentSeason = '春';
let draggingCompare = false;
const unlocked = new Set();
let taskState = { id: 0, done: 0, required: 1, completed: false };
let autoAdvanceTimer = null;
let posterRenderToken = 0;
let posterDataUrl = '';
let guideDrag = null;

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function totalLandmarkCount() {
  return landmarks.length;
}

function getRouteIds(identityKey = currentIdentity) {
  return identities[identityKey]?.route || landmarks.map(item => item.id);
}

function routeOrderFor(item, identityKey = currentIdentity) {
  return getRouteIds(identityKey).indexOf(item.id) + 1;
}

function isIdentityRouteLandmark(item, identityKey = currentIdentity) {
  return routeOrderFor(item, identityKey) > 0;
}

function getRouteIndexes(identityKey = currentIdentity) {
  return getRouteIds(identityKey)
    .map(id => landmarks.findIndex(item => item.id === id))
    .filter(index => index >= 0);
}

function firstRouteIndexForIdentity(identityKey = currentIdentity) {
  return getRouteIndexes(identityKey)[0] ?? 0;
}

function nextRouteIndexAfterCurrent() {
  const routeIndexes = getRouteIndexes();
  const currentRoutePosition = routeIndexes.indexOf(landmarkIndex);
  if (currentRoutePosition < 0) return null;
  return routeIndexes[currentRoutePosition + 1] ?? null;
}

function prevRouteIndexBeforeCurrent() {
  const routeIndexes = getRouteIndexes();
  const currentRoutePosition = routeIndexes.indexOf(landmarkIndex);
  if (currentRoutePosition < 0) return null;
  return routeIndexes[currentRoutePosition - 1] ?? null;
}

function routeProgressLabel(item = landmarks[landmarkIndex]) {
  const order = routeOrderFor(item);
  return order > 0
    ? `${identities[currentIdentity].routeType}第 ${order}/${getRouteIds().length} 站`
    : '自由探索 / 彩蛋地标';
}

function landmarkStem(item) {
  return String(item.id).padStart(2, '0');
}

function getNowSrc(item) {
  return item.nowByIdentity?.[currentIdentity] || item.now || `assets/landmarks/${landmarkStem(item)}_now.jpg`;
}

function getFutureSrc(item) {
  if (item.futureByIdentity?.[currentIdentity]) return item.futureByIdentity[currentIdentity];
  // v43: 新未来图目录结构 assets/landmarks/未来图片/{folder}/{n}{身份名}.png
  // 文件夹按地标名称匹配（11-14 的文件夹编号与地标 id 不一致，按名称对应）
  const futureFolders = {
    1: '1南大门-毛主席像', 2: '2图书馆', 3: '3校史馆', 4: '4青年园',
    5: '5百景园', 6: '6西十二教学楼', 7: '7醉晚亭', 8: '8东九教学楼',
    9: '9爱因斯坦广场', 10: '10裘法祖像',
    11: '12碧珠长廊', 12: '11图书馆',
    13: '14同济医学院大门', 14: '13水塔'
  };
  const folder = futureFolders[item.id];
  if (folder) {
    const numMap = { highschool: '1', student: '2', alumni: '3', public: '4' };
    const nameMap = { highschool: '高中生', student: '在校生', alumni: '毕业校友', public: '社会大众' };
    // 两个特殊文件名：南大门校友=已毕业校友，青年园公众=社会人士
    const overrides = { 1: { alumni: '已毕业校友' }, 4: { public: '社会人士' } };
    const name = overrides[item.id]?.[currentIdentity] || nameMap[currentIdentity];
    const num = numMap[currentIdentity];
    return `assets/landmarks/未来图片/${folder}/${num}${name}.png`;
  }
  return `assets/landmarks/${landmarkStem(item)}_future_${currentIdentity}.jpg`;
}

function getFutureFileName(item) {
  return getFutureSrc(item).split('/').pop();
}

function detailFlowFor(item) {
  return 'image-first';
}

function applyDetailFlow(item) {
  const layout = $('#detailLayout');
  const module = $('#interactionModule');
  const nav = document.querySelector('.detail-nav');
  if (!layout || !module) return;
  if (detailFlowFor(item) === 'task-first') {
    layout.parentNode.insertBefore(module, layout);
  } else if (nav) {
    nav.parentNode.insertBefore(module, nav);
  }
}

function guidePoseFor(pageName, item = landmarks[landmarkIndex]) {
  if (pageName === 'identity') return 'climb';
  if (pageName === 'route') return 'point';
  if (pageName === 'detail') {
    if (taskState.completed) return 'wave';
    if (item.mode === 'book' || item.id === 3) return 'read';
    if (item.id === 5 || item.id === 1 || item.id === 13 || item.id === 14) return 'point';
  }
  if (pageName === 'collection') return 'read';
  return 'wave';
}

function guideMessageFor(pageName, item = landmarks[landmarkIndex]) {
  const identity = identities[currentIdentity];
  if (pageName === 'cover') return '从 1037 号森林出发，准备进入喻园时空路线。';
  if (pageName === 'identity') return '拖住我可以挪位置。选一张入园卡，我带你走专属路线。';
  if (pageName === 'route') {
    return `${identity.label}路线已高亮。点一下地标，我先把说明和照片给你看。`;
  }
  if (pageName === 'collection') return `已点亮 ${unlocked.size}/${totalLandmarkCount()} 个坐标，路线章和自由探索章都会保留。`;
  if (pageName === 'ending') return '海报生成后可以直接保存图片。';
  if (pageName === 'info') return 'AI 生成说明和作品简介在这里统一查看。';
  if (pageName !== 'detail') return '';

  const byIdentity = {
    highschool: {
      1: '先刷未来入园卡，想象第一次走进华科。',
      3: '答对校史小题，未来 HUSTer 的时间线就亮了。',
      5: '选一份未来大学第一顿饭，把期待落到日常里。',
      9: '点亮好奇心星点，给未来宣言攒能量。'
    },
    student: {
      8: '今天的课程状态由你选择，日常也会长出未来感。',
      6: '点亮课堂窗格，早八和灵感都会被记录。',
      5: '先补充今日能量，再继续赶往下一站。',
      7: '点一圈水纹，把片刻休息留给自己。'
    },
    alumni: {
      1: '刷一张校友卡，从南大门重新回到喻园。',
      3: '答对校史小题，把个人记忆接回学校的时间线。',
      2: '翻开旧日书页，看看那些自习夜晚还亮不亮。',
      5: '旧饭卡、常点菜单、同窗一桌，这一站用味道重返母校。',
      7: '点开亭边水纹，让晚风把那段青春带回来。',
      4: '拖动青年园能量条，把旧日活动和朋友重新唤醒。',
      9: '点亮科学星点，母校仍在未来继续发问。'
    },
    public: {
      13: '这里进入同济医学人文支线，后半程会更有医学温度。',
      14: '水塔是同济校区的时间坐标，适合作为开放导览里的彩蛋地标。',
      10: '点击生命脉冲，理解医学精神里的责任与温度。',
      11: '沿着导览线走完长廊，就完成开放校园观察。'
    }
  };
  if (taskState.completed) {
    const nextIndex = nextRouteIndexAfterCurrent();
    return nextIndex === null ? '这一站已完成，可以去集章册收尾。' : `这一站已完成，下一站是 ${landmarks[nextIndex].name}。`;
  }
  return byIdentity[currentIdentity]?.[item.id] || `${item.name} 的任务不只是点点看，完成后再切到身份专属未来图。`;
}

function updateGuideBubble() {
  const bubble = $('#guideBubble');
  const bear = $('#guideBear');
  const img = $('#guideImage');
  if (!bubble || !bear) return;
  const pageName = pages[pageIndex]?.dataset.page || 'cover';
  const item = landmarks[landmarkIndex] || landmarks[0];
  const pose = guidePoseFor(pageName, item);
  if (img) img.src = `./assets/generated/guide-xinwuxiong-${pose}.png`;
  bear.dataset.pose = pose;
  bubble.textContent = guideMessageFor(pageName, item);
  bear.classList.toggle('guide-hidden', pageName === 'cover');
}

function resetGuideDrag() {
  const bear = $('#guideBear');
  if (!bear) return;
  bear.style.setProperty('--guide-drag-x', '0px');
  bear.style.setProperty('--guide-drag-y', '0px');
  guideDrag = null;
  bear.classList.remove('dragging');
}

function initLoading() {
  let progress = 0;
  const names = landmarks.map(item => item.name);
  const timer = setInterval(() => {
    progress += 9 + Math.random() * 12;
    const idx = Math.min(names.length - 1, Math.floor((progress / 100) * names.length));
    $('#loaderSub').textContent = `读取：${names[idx]}`;
    $('#loaderBar').style.width = `${Math.min(progress, 100)}%`;
    if (progress >= 100) {
      clearInterval(timer);
      setTimeout(() => $('#loading').classList.add('hide'), 320);
    }
  }, 150);
}

function renderIdentities() {
  const wrap = $('#identityDesk');
  wrap.innerHTML = Object.entries(identities).map(([key, item], index) => `
    <button class="role-card ${item.className} ${identityChosen && key === currentIdentity ? 'active' : ''}" data-identity="${key}" data-anim data-from="${index % 2 === 0 ? 'left' : 'right'}" style="--delay:${110 + index * 90}ms">
      <span>${item.type}</span>
      <h3>${item.label}</h3>
      <p>${item.lensTitle}｜${item.desc}</p>
    </button>
  `).join('');
}

function updateIdentityPreview() {
  const item = identities[currentIdentity];
  $('#routeTitle').textContent = item.title;
  $('#routeDesc').textContent = `${item.lensTitle}｜${item.lensCopy}｜身份路线 ${item.route.length} 站，其余地标保留为自由探索。`;
  $('#ticketIdentity').textContent = item.label;
  $('#endingTitle').textContent = item.endingTitle;
  $('#endingText').textContent = item.endingText;
  $('#statRoute').textContent = item.routeType;
  $('#statCount').textContent = `${unlocked.size}/${totalLandmarkCount()}`;
  $('#collectionDesc').textContent = `当前身份：${item.label}｜已点亮 ${unlocked.size}/${totalLandmarkCount()} 个地标。身份路线 ${item.route.length} 站，其余坐标作为自由探索或彩蛋地标保留。`;
  const confirm = $('#identityConfirm');
  if (confirm) confirm.disabled = !identityChosen;
  applyIdentityTheme();
  updateGuideBubble();
}

function applyIdentityTheme() {
  const stage = $('#stage');
  stage.classList.remove('theme-highschool','theme-student','theme-alumni','theme-public');
  stage.classList.add(`theme-${currentIdentity}`);
  const item = identities[currentIdentity];
  stage.style.setProperty('--identity-visual', `url("${item.visual}")`);
  stage.style.setProperty('--identity-accent', item.accent);
  stage.style.setProperty('--identity-soft', item.soft);
  stage.style.setProperty('--identity-bg', `url("${item.bg}")`);
  stage.dataset.identity = currentIdentity;
  document.body.dataset.identity = currentIdentity;
  document.body.style.setProperty('--identity-visual', `url("${item.visual}")`);
  document.body.style.setProperty('--identity-accent', item.accent);
  document.body.style.setProperty('--identity-soft', item.soft);
  document.body.style.setProperty('--identity-bg', `url("${item.bg}")`);
  updateBgmSource();
}

function updateBgmSource() {
  const audio = $('#bgmAudio');
  const toggle = $('#musicToggle');
  if (!audio || !toggle) return;
  // 通用 BGM：所有身份共用一首《Forest Hymn 森林之歌》
  const src = 'assets/audio/Forest Hymn 森林之歌.mp3';
  toggle.hidden = false;
  if (audio.src && decodeURIComponent(audio.src).endsWith(src)) return; // 已加载则不重复
  audio.src = src;        // 直接同步设置，file:// 和 http:// 均可
  audio.load();
}

function campusPinY(item) {
  if (item.campus === '同济校区') return Math.max(18, Math.min(78, (item.y - 75) * 4.2 + 46));
  return Math.max(16, Math.min(74, item.y + 1));
}

function campusMapKey(campus) {
  return campus === '主校区' ? 'main' : 'tongji';
}

function renderRoute() {
  const accordion = $('#campusAccordion');
  const campuses = ['主校区', '同济校区'];
  const routeIds = getRouteIds();
  accordion.innerHTML = campuses.map(campus => {
    const list = landmarks.filter(item => item.campus === campus);
    const isOpen = openCampus === campus;
    const selectedInCampus = landmarks[landmarkIndex].campus === campus;
    const campusShort = campus === '主校区' ? '' : '';
    const campusEmblem = campus === '主校区' ? './图片/华中科技大学校徽.png' : './图片/同济医学院院徽.png';
    const routeCount = list.filter(item => routeIds.includes(item.id)).length;
    const desc = `身份路线 ${routeCount} 站 · 自由探索 ${list.length - routeCount} 处`;
    const pins = list.map(item => {
      const idx = landmarks.findIndex(l => l.id === item.id);
      const order = routeOrderFor(item);
      const routeClass = order > 0 ? 'route-member' : 'free-explore';
      return `<button class="map-pin ${routeClass} ${idx === landmarkIndex ? 'active' : ''} ${unlocked.has(item.id) ? 'unlocked' : ''}" data-index="${idx}" data-order="${order || '彩'}" style="left:${item.x}%;top:${campusPinY(item)}%" aria-label="${item.name}"><span>${item.icon}</span></button>`;
    }).join('');
    const activeItem = list.find(item => landmarks[landmarkIndex].id === item.id) || list[0];
    const activeLabel = selectedInCampus ? routeProgressLabel(activeItem) : '地图导览';
    return `
      <article class="campus-card ${isOpen ? 'open' : ''} ${selectedInCampus ? 'selected' : ''}" data-campus="${campus}">
        <button class="campus-head" data-campus-toggle="${campus}" aria-expanded="${isOpen}">
          <span class="campus-mark">${campusShort}<img class="campus-emblem" src="${campusEmblem}" alt="" /></span>
          <span class="campus-meta"><span>${list.length} 个坐标 · ${selectedInCampus ? '当前路线' : '点击展开'}</span><strong>${campus}</strong><small>${desc}</small></span>
          <i class="campus-toggle">⌄</i>
        </button>
        <div class="campus-body">
          <div class="campus-body-inner">
            <div class="campus-map" data-map="${campusMapKey(campus)}">
              <div class="campus-route-line"></div>
              ${pins}
            </div>
            <div class="map-note">
              <div class="map-note-tag">${activeLabel}</div>
              <strong>${selectedInCampus ? activeItem.name : '点击地图中的标记选择地标'}</strong>
              <span>${selectedInCampus ? `${activeItem.group}｜${isIdentityRouteLandmark(activeItem) ? identities[currentIdentity].taskLead : '自由探索坐标，完成后同样会进入集章册。'}` : '高亮点为当前身份路线，浅色点为自由探索或彩蛋地标。'}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
  updateRouteCard();
}

function updateRouteCard() {
  const item = landmarks[landmarkIndex];
  const inRoute = isIdentityRouteLandmark(item);
  const routeText = routeProgressLabel(item);
  $('#routeCard').innerHTML = `
    <div class="route-preview-media">
      <img id="routePreviewImage" alt="${item.name}现在图片预览" />
      <div class="route-preview-placeholder" id="routePreviewPlaceholder">
        <strong>NOW</strong>
        <small>${landmarkStem(item)}_now.jpg</small>
      </div>
    </div>
    <div class="route-preview-copy">
      <span>${routeText} / ${landmarkStem(item)} / ${item.campus} / ${item.group}</span>
      <h3>${item.name}</h3>
      <p>${item.intro} ${inRoute ? `${identities[currentIdentity].taskLead}。` : '这是地图中保留的自由探索坐标，可作为彩蛋地标点亮。'}</p>
      <button class="route-enter-btn" id="enterLandmark"><b>进入地标探索</b><i>→</i></button>
    </div>
  `;
  $('#enterLandmark').addEventListener('click', () => {
    updateLandmark();
    goTo(3);
  });
  updateImage($('#routePreviewImage'), $('#routePreviewPlaceholder'), getNowSrc(item));
  const previewImg = $('#routePreviewImage');
  if (previewImg) {
    previewImg.style.cursor = 'zoom-in';
    previewImg.addEventListener('click', () => {
      const src = previewImg.src;
      if (src) {
        openImageViewer(false, src, `${item.name} · 实景原图`);
      }
    });
  }
  refreshRouteSelection();
  updateGuideBubble();
}

function refreshRouteSelection() {
  const item = landmarks[landmarkIndex];
  $$('.map-pin, .landmark-chip').forEach((node) => {
    node.classList.toggle('active', Number(node.dataset.index) === landmarkIndex);
  });
  $$('.campus-card').forEach((card) => {
    const selected = card.dataset.campus === item.campus;
    card.classList.toggle('selected', selected);
    const note = card.querySelector('.map-note');
    const tag = card.querySelector('.map-note-tag');
    if (!note || !tag) return;
    if (selected) {
      tag.textContent = routeProgressLabel(item);
      const strong = note.querySelector('strong');
      const span = note.querySelector('span');
      if (strong) strong.textContent = item.name;
      if (span) {
        span.textContent = `${item.group}｜${isIdentityRouteLandmark(item) ? identities[currentIdentity].taskLead : '自由探索坐标，完成后同样会进入集章册。'}`;
      }
    } else {
      tag.textContent = '地图导览';
      const strong = note.querySelector('strong');
      const span = note.querySelector('span');
      if (strong) strong.textContent = '点击地图中的标记选择地标';
      if (span) span.textContent = '高亮点为当前身份路线，浅色点为自由探索或彩蛋地标。';
    }
  });
}

function selectLandmark(index, jump = false) {
  const nextIndex = Number(index);
  if (!Number.isFinite(nextIndex) || !landmarks[nextIndex]) return;
  const nextCampus = landmarks[nextIndex].campus;
  const needsRender = openCampus !== nextCampus;
  landmarkIndex = nextIndex;
  openCampus = nextCampus;
  if (needsRender) {
    renderRoute();
  } else {
    updateRouteCard();
  }
  refreshRouteSelection();
  if (jump) {
    updateLandmark();
    goTo(3);
  }
}

function updateLandmarkMetaOnly() {
  updateRouteCard();
}

function updateImage(img, placeholder, src) {
  const showPlaceholder = () => {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  };
  const showImage = () => {
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
  img.onload = () => {
    showImage();
  };
  img.onerror = () => {
    showPlaceholder();
  };
  showPlaceholder();
  if (!src) return;
  const safeSrc = encodeURI(src);
  if (location.protocol === 'file:') {
    img.src = safeSrc;
    return;
  }
  const token = Symbol(safeSrc);
  img._loadToken = token;
  fetch(safeSrc, { method: 'HEAD' })
    .then(response => {
      if (img._loadToken !== token) return;
      if (response.ok) {
        img.src = safeSrc;
      } else {
        img.removeAttribute('src');
        showPlaceholder();
      }
    })
    .catch(() => {
      if (img._loadToken !== token) return;
      img.removeAttribute('src');
      showPlaceholder();
    });
}

function updateLandmark() {
  const item = landmarks[landmarkIndex];
  const identity = identities[currentIdentity];
  openCampus = item.campus;
  const detailPage = $('#detailPage');
  const keepState = pageIndex === 3;
  detailPage.className = `page detail detail-${item.mode} detail-flow-${detailFlowFor(item)}${keepState ? ' active page-ready' : ''}`;
  detailPage.classList.toggle('landmark-changing', keepState);
  applyDetailFlow(item);
  $('#landmarkGroup').textContent = `${item.campus}｜${item.group}`;
  $('#landmarkName').textContent = `${String(item.id).padStart(2, '0')} ${item.name}`;
  $('#landmarkIntro').textContent = item.intro;
  $('#identityCopy').textContent = `${routeProgressLabel(item)}｜${identity.lensTitle}｜${item.copies[currentIdentity]} ${identity.lensCopy}`;
  $('#nowFileName').textContent = `${landmarkStem(item)}_now.jpg`;
  $('#futureFileName').textContent = getFutureFileName(item);
  const bgPath = `assets/generated/landmark_bg/${landmarkStem(item)}.png`;
  detailPage.style.setProperty('--landmark-bg', `url("${bgPath}")`);
  updateImage($('#nowImage'), $('#nowPlaceholder'), getNowSrc(item));
  updateImage($('#futureImage'), $('#futurePlaceholder'), getFutureSrc(item));
  resetLandmarkTask(item);
  renderInteraction(item);
  renderAmbientScene(item);
  renderRoute();
  if (keepState) {
    window.clearTimeout(detailPage._landmarkTimer);
    detailPage._landmarkTimer = window.setTimeout(() => {
      detailPage.classList.remove('landmark-changing');
    }, 520);
  }
}

function setCompare(value) {
  const pct = Math.max(0, Math.min(100, Number(value)));
  $('#futureLayer').style.clipPath = `inset(0 0 0 ${pct}%)`;
  $('#compareHandle').style.left = `${pct}%`;
  $('#compareRange').value = pct;
}

function setCompareFromClientX(clientX) {
  const rect = $('#imageLayers').getBoundingClientRect();
  const pct = ((clientX - rect.left) / rect.width) * 100;
  setCompare(Math.max(0, Math.min(100, pct)));
}

function taskRequirement(item) {
  if (item.id === 1) return 1;
  const byLandmark = {
    1: 1,
    2: 2,
    3: 1,
    4: 1,
    5: 2,
    6: 4,
    7: 1,
    8: 3,
    9: 3,
    10: 1,
    11: 1,
    12: 2,
    13: 1,
    14: 1
  };
  return byLandmark[item.id] || 2;
}

function resetLandmarkTask(item) {
  clearTimeout(autoAdvanceTimer);
  const completed = unlocked.has(item.id);
  const required = taskRequirement(item);
  taskState = {
    id: item.id,
    done: completed ? required : 0,
    required,
    completed
  };
  $('#detailPage').classList.toggle('task-complete', taskState.completed);
  $('#sceneOverlay').innerHTML = '';
  const futureLayer = $('#futureLayer');
  futureLayer.style.transition = 'none';
  setCompare(taskState.completed ? 0 : 100);
  void futureLayer.offsetWidth;
  futureLayer.style.transition = '';
  updateTaskStatus(taskState.completed ? '这个坐标已经点亮，可停留查看未来图景，也可以手动继续。' : `${identities[currentIdentity].taskLead}，未来图景会在任务完成后展开。`);
}

function renderAmbientScene(item) {
  const overlay = $('#sceneOverlay');
  if (!overlay || item.mode !== 'nature') return;
  const seed = item.id * 17 + pageIndex * 31;
  const rand = (index, offset = 0) => {
    const value = Math.sin(seed + index * 12.9898 + offset * 78.233) * 43758.5453;
    return value - Math.floor(value);
  };
  for (let i = 0; i < 8; i++) {
    const wave = document.createElement('span');
    wave.className = 'ambient-wave';
    wave.style.setProperty('--x', `${12 + rand(i, 1) * 76}%`);
    wave.style.setProperty('--y', `${18 + rand(i, 2) * 64}%`);
    wave.style.setProperty('--size', `${58 + rand(i, 3) * 112}px`);
    wave.style.setProperty('--delay', `${(rand(i, 4) * 1.8).toFixed(2)}s`);
    wave.style.setProperty('--dur', `${(2.9 + rand(i, 5) * 2.6).toFixed(2)}s`);
    overlay.appendChild(wave);
  }
}

function updateTaskStatus(message) {
  const identity = identities[currentIdentity];
  const item = landmarks[landmarkIndex];
  const status = $('#taskStatus');
  if (status) {
    status.innerHTML = `
      <span>任务 ${taskState.done}/${taskState.required}</span>
      <strong>${taskState.completed ? '未来图景已展开' : identity.taskLead}</strong>
      <small>${message}</small>
    `;
  }
  const hint = $('#imageHintLine');
  if (hint) {
    hint.textContent = '';
  }
  const nextBtn = $('#taskNextBtn');
  if (nextBtn) {
    nextBtn.hidden = !taskState.completed;
    if (taskState.completed) {
      const nextIndex = nextRouteIndexAfterCurrent();
      if (!isIdentityRouteLandmark(item)) {
        nextBtn.textContent = '返回路线图';
      } else if (nextIndex === null) {
        nextBtn.textContent = '查看集章册';
      } else {
        nextBtn.textContent = `前往下一站：${landmarks[nextIndex].name}`;
      }
    }
  }
  const stampBtn = $('#taskStampBtn');
  if (stampBtn) {
    stampBtn.hidden = !taskState.completed;
  }
  updateGuideBubble();
}

function taskProgressRatio() {
  return taskState.required ? taskState.done / taskState.required : 1;
}

function registerTaskStep(message) {
  if (taskState.completed) return;
  taskState.done = Math.min(taskState.required, taskState.done + 1);
  const pct = Math.max(18, 100 - taskProgressRatio() * 74);
  setCompare(pct);
  launchTaskEffect();
  updateTaskStatus(message);
  if (taskState.done >= taskState.required) completeLandmarkTask();
}

function completeLandmarkTask() {
  if (taskState.completed) return;
  const item = landmarks[landmarkIndex];
  taskState.completed = true;
  unlocked.add(item.id);
  $('#detailPage').classList.add('task-complete');
  setCompare(0);
  launchTaskEffect(true);
  renderRoute();
  renderStamps();
  updateIdentityPreview();
  updateTaskStatus(`${identities[currentIdentity].completeToast}。`);
  showToast(identities[currentIdentity].completeToast);
}

function goNextLandmarkFromTask() {
  if (pageIndex !== 3) return;
  if (!isIdentityRouteLandmark(landmarks[landmarkIndex])) {
    goTo(2);
    return;
  }
  const nextIndex = nextRouteIndexAfterCurrent();
  if (nextIndex === null) {
    goTo(4);
    return;
  }
  landmarkIndex = nextIndex;
  updateLandmark();
  showToast(`下一站：${landmarks[landmarkIndex].name}`);
}

function goAdjacentLandmarkBySwipe(direction) {
  if (pageIndex !== 3) return false;
  if (!taskState.completed) {
    showToast('完成本站任务后，再上下滑动切换站点。');
    updateTaskStatus('先完成当前地标任务，未来图景展开后即可上下切换站点。');
    return true;
  }
  if (!isIdentityRouteLandmark(landmarks[landmarkIndex])) {
    landmarkIndex = (landmarkIndex + direction + landmarks.length) % landmarks.length;
    updateLandmark();
    showToast(`自由探索：${landmarks[landmarkIndex].name}`);
    return true;
  }
  const targetIndex = direction > 0 ? nextRouteIndexAfterCurrent() : prevRouteIndexBeforeCurrent();
  if (targetIndex === null) {
    goTo(direction > 0 ? 4 : 2);
    return true;
  }
  landmarkIndex = targetIndex;
  updateLandmark();
  showToast(`${direction > 0 ? '下一站' : '上一站'}：${landmarks[landmarkIndex].name}`);
  return true;
}

function launchTaskEffect(strong = false) {
  const overlay = $('#sceneOverlay');
  const count = strong ? 16 : 7;
  for (let i = 0; i < count; i++) {
    const dot = document.createElement('span');
    dot.className = strong ? 'task-spark strong' : 'task-spark';
    dot.style.left = `${16 + Math.random() * 68}%`;
    dot.style.top = `${18 + Math.random() * 58}%`;
    dot.style.setProperty('--dx', `${-24 + Math.random() * 48}px`);
    dot.style.setProperty('--dy', `${-48 - Math.random() * 44}px`);
    overlay.appendChild(dot);
    setTimeout(() => dot.remove(), 900);
  }
}

function bindCompareDrag() {
  const box = $('#imageLayers');
  let downX = 0, downY = 0, moved = false;
  let clickShowsFuture = false;
  let pointerActive = false;
  const MOVE_THRESHOLD = 8;
  // 手柄热区：手柄中心 ±40px 的竖向条带视为"拖动手柄"
  const HANDLE_HIT_WIDTH = 40;

  box.addEventListener('pointerdown', e => {
    downX = e.clientX;
    downY = e.clientY;
    moved = false;
    pointerActive = true;
    const rect = box.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    // 注意：value="0" 时 parseFloat 得到 0（falsy），不能用 || 100 兜底，
    // 否则手柄在最左侧时会被误判为 100%（最右侧），导致无法从左往右拖回。
    const rawVal = parseFloat($('#compareRange').value);
    const handlePct = isNaN(rawVal) ? 100 : rawVal;
    const handleX = (handlePct / 100) * rect.width;
    // 判断按下点是否在手柄热区内
    const onHandle = Math.abs(clickX - handleX) <= HANDLE_HIT_WIDTH;
    clickShowsFuture = clickX > handleX;

    if (onHandle) {
      // 按在手柄上 → 立即激活拖动，零延迟
      box.setPointerCapture?.(e.pointerId);
      draggingCompare = true;
      document.body.classList.add('dragging-compare');
      setCompareFromClientX(e.clientX);
    }
    // 按在图片区域 → 不 setPointerCapture，等 pointerup 时若未移动则查看图片
  });

  box.addEventListener('pointermove', e => {
    if (!pointerActive) return;
    if (Math.abs(e.clientX - downX) > MOVE_THRESHOLD || Math.abs(e.clientY - downY) > MOVE_THRESHOLD) {
      moved = true;
    }
    if (draggingCompare) {
      setCompareFromClientX(e.clientX);
    }
  });

  const endDrag = (allowClick) => {
    if (!pointerActive && !draggingCompare) return;
    const wasDragging = draggingCompare;
    draggingCompare = false;
    pointerActive = false;
    document.body.classList.remove('dragging-compare');
    // 非拖动 + 未移动 → 查看图片
    if (allowClick && !wasDragging && !moved) {
      openImageViewer(clickShowsFuture);
    }
  };
  box.addEventListener('pointerup', e => {
    try { box.releasePointerCapture?.(e.pointerId); } catch (_) {}
    endDrag(true);
  });
  box.addEventListener('pointercancel', () => endDrag(false));
  // 注意：不绑定 mouseleave —— 手机端 pointer 行为下它会误触发，
  // 导致 endDrag(false) 抢在 pointerup 之前执行，点击查看图片失效。
}

function openImageViewer(showFuture = false, directSrc = null, directLabel = null) {
  const viewer = $('#imageViewer');
  const viewerImg = $('#imageViewerImg');
  if (!viewer || !viewerImg) return;
  let src = '';
  let kind = 'now';
  let labelText = '现在 · 实景原图';
  if (directSrc) {
    src = directSrc;
    kind = directLabel && directLabel.includes('未来') ? 'future' : 'now';
    labelText = directLabel || '现在 · 实景原图';
  } else {
    if (showFuture && !taskState.completed) {
      showFuture = false;
    }
    const targetImg = showFuture ? $('#futureImage') : $('#nowImage');
    const label = showFuture ? '未来图' : '原图';
    if (!targetImg.src || targetImg.style.display === 'none') {
      showToast(`${label}暂未加载`);
      return;
    }
    src = targetImg.src;
    kind = showFuture ? 'future' : 'now';
    labelText = showFuture ? '未来 · AI 生成' : '现在 · 实景原图';
  }
  viewerImg.src = src;
  viewerImg.dataset.kind = kind;
  const labelEl = $('#imageViewerLabel');
  if (labelEl) {
    labelEl.textContent = labelText;
  }
  viewer.classList.add('show');
}

function closeImageViewer() {
  const viewer = $('#imageViewer');
  if (!viewer) return;
  viewer.classList.remove('show');
  const viewerImg = $('#imageViewerImg');
  if (viewerImg) viewerImg.removeAttribute('src');
}

function renderInteraction(item) {
  const module = $('#interactionModule');
  const identity = identities[currentIdentity];
  if (item.id === 1) return renderGateTask(module, item, identity);
  if (item.mode === 'book') return renderLibraryTask(module, item, identity);
  if (item.id === 3) return renderHistoryQuiz(module, item, identity);
  if (item.id === 5) return renderCanteenTask(module, item, identity);
  if (item.id === 4) return renderYouthTask(module, item, identity);
  if (item.id === 7) return renderPavilionTask(module, item, identity);
  if (item.id === 6) return renderClassroomTask(module, item, identity, '点亮未来课堂窗格', 30);
  if (item.id === 8) return renderDongjiuTask(module, item, identity);
  if (item.id === 9) return renderScienceTask(module, item, identity);
  if (item.id === 11) return renderCorridorTask(module, item, identity);
  if (item.id === 14) return renderWaterTowerTask(module, item, identity);
  if (item.mode === 'medicine') return renderMedicineTask(module, item, identity);
  return renderLibraryTask(module, item, identity);
}

function moduleShell(item, identity, className, body, copy) {
  return `
    <div class="interaction-card ${className}">
      <div class="module-head"><h3>${avoidWidowText(item.moduleTitle)}</h3><span>${identity.lensTitle}</span></div>
      ${body}
      <p class="module-copy" id="moduleCopy">${copy}</p>
    </div>
  `;
}

function avoidWidowText(text) {
  const keep = 6;
  if (!text || text.length <= keep + 2) return text;
  return `${text.slice(0, -keep)}<span class="widow-keep">${text.slice(-keep)}</span>`;
}

function renderGateTask(module, item, identity) {
  const cardLabel = currentIdentity === 'highschool' ? '未来 HUSTer 卡' : currentIdentity === 'student' ? '校园卡' : currentIdentity === 'alumni' ? '校友卡' : '开放导览卡';
  module.innerHTML = moduleShell(item, identity, 'gate-module', `
    <div class="gate-swipe">
      <div class="gate-reader"><span></span><b>SCAN</b></div>
      <button class="gate-pass task-step pass-${currentIdentity}" data-message="${cardLabel}已刷入，校门未来图景正在展开。">
        <span class="gate-card-art" aria-hidden="true"></span>
        <span class="gate-pass-copy">
          <small>${cardLabel}</small><strong>${identities[currentIdentity].label}</strong><i>刷卡入园</i>
        </span>
      </button>
    </div>
  `, `${identity.taskLead}：点击或轻触入园卡完成刷卡。`);
  bindTaskSteps((btn) => btn.classList.add('swiped'));
}

function renderHistoryQuiz(module, item, identity) {
  module.innerHTML = moduleShell(item, identity, 'quiz-module', `
    <div class="quiz-card">
      <strong>华中科技大学成立于哪一年？</strong>
      <div class="quiz-options">
        <button class="quiz-option" data-correct="true">2000年</button>
        <button class="quiz-option">2001年</button>
        <button class="quiz-option">1999年</button>
      </div>
    </div>
  `, '选择正确答案，点亮校史馆时间坐标。');
  $$('.quiz-option').forEach(btn => btn.addEventListener('click', () => {
    if (taskState.completed || btn.classList.contains('done')) return;
    if (btn.dataset.correct === 'true') {
      btn.classList.add('done', 'correct');
      $('#moduleCopy').textContent = '回答正确：2000 年，华科新的校史坐标已点亮。';
      registerTaskStep('回答正确：2000 年，华科新的校史坐标已点亮。');
    } else {
      btn.classList.add('wrong');
      $('#moduleCopy').textContent = '还差一点，再看一次校史时间线。';
      btn.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 260 });
    }
  }));
}

function renderLibraryTask(module, item, identity) {
  const options = currentIdentity === 'student'
    ? [['自习', '今日自习模式已选择'], ['检索', '数字检索已接入'], ['讨论', '小组讨论坐标已记录'], ['阅读', '阅读状态已保存']]
    : currentIdentity === 'alumni'
      ? [['旧日书页', '旧日书页已翻开'], ['自习座位', '曾经的自习座位已找到'], ['借阅回声', '借阅回声已被唤起'], ['夜读灯光', '那盏夜读灯光已点亮']]
    : currentIdentity === 'public'
      ? [['知识中心', '知识中心已点亮'], ['数字服务', '数字阅读服务已记录'], ['安静力量', '学习空间观察已完成'], ['开放书架', '开放书架观察已记录']]
      : [['未来书', '第一本大学书已翻开'], ['专业词条', '专业词条已收藏'], ['夜读灯光', '夜读灯光已点亮'], ['云端书签', '云端书签已保存']];
  module.innerHTML = moduleShell(item, identity, 'book-module', `
    <div class="book-flip-task">
      <div class="book-spine" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="book-pages">
        ${options.map(([title, msg], index) => `
          <button class="book-page task-step flip-page" style="--page:${index}" data-message="${msg}。">
            <span>PAGE ${String(index + 1).padStart(2, '0')}</span>
            <b>${title}</b>
            <small>${msg}</small>
          </button>
        `).join('')}
      </div>
    </div>
  `, `${identity.taskLead}：轻触书页翻开 ${taskState.required} 页，图书馆会切换到身份专属未来图。`);
  bindTaskSteps((btn) => {
    btn.classList.add('flipped');
    btn.animate([
      { transform: 'rotateY(0deg) translateY(0)' },
      { transform: 'rotateY(-54deg) translateY(-4px)' },
      { transform: 'rotateY(-16deg) translateY(0)' }
    ], { duration: 620, easing: 'cubic-bezier(.22,1,.36,1)' });
  });
}

function renderCanteenTask(module, item, identity) {
  const canteenOptions = currentIdentity === 'highschool'
    ? [['未来菜单', '选择未来大学第一顿饭'], ['生活关键词', '生成我的大学生活关键词'], ['同桌邀请', '想象第一次食堂聊天']]
    : currentIdentity === 'student'
      ? [['今日能量', '补充赶课续航'], ['治愈套餐', '记录今天吃什么'], ['状态条', '生成今日校园状态']]
      : currentIdentity === 'alumni'
        ? [['旧饭卡', '刷开记忆里的食堂入口'], ['常点菜单', '那年常点的一餐已浮现'], ['同窗一桌', '同窗一桌的返校味道已收藏']]
      : [['食堂窗口', '观察大学日常生活'], ['公共餐桌', '理解校园公共空间'], ['导览记录', '保存真实烟火气']];
  module.innerHTML = moduleShell(item, identity, 'canteen-module', `
    <div class="canteen-tray task-grid">
      ${canteenOptions.map(([title, text]) => `<button class="meal-card task-step" data-message="${text}：百景园的能量正在补充。"><b>${title}</b><small>${text}</small></button>`).join('')}
    </div>
  `, `${identity.taskLead}：点两份“菜单”，让未来校园生活显现。`);
  bindTaskSteps((btn) => {
    btn.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-8px) rotate(-2deg)' }, { transform: 'translateY(0)' }], { duration: 420, easing: 'ease-out' });
  });
}

function renderYouthTask(module, item, identity) {
  const words = currentIdentity === 'highschool'
    ? ['社团', '朋友', '热爱', '自由']
    : currentIdentity === 'student'
      ? ['松弛', '运动', '灵感', '同行']
      : currentIdentity === 'alumni'
        ? ['旧活动', '老朋友', '操场风', '再相逢']
      : ['开放', '活力', '公共空间', '青年气质'];
  const startValue = taskState.completed ? 100 : 18;
  module.innerHTML = moduleShell(item, identity, 'keyword-module', `
    <div class="energy-task">
      <div class="energy-words">${words.map(word => `<span>${word}</span>`).join('')}</div>
      <label class="energy-slider">
        <b>校园生活能量</b>
        <input id="youthEnergyRange" type="range" min="0" max="100" value="${startValue}" aria-label="拖动生成校园生活能量值" />
      </label>
    </div>
  `, `${identity.taskLead}：拖动能量条到 72%，生成校园生活能量值。`);
  bindRangeTask('#youthEnergyRange', 72, '校园生活能量值已生成：日常、热爱与未来正在汇合。');
}

function renderPavilionTask(module, item, identity) {
  const rippleText = currentIdentity === 'alumni'
    ? '旧日水纹展开：亭边回忆被保存。'
    : '水纹展开：亭边片刻被保存。';
  const label = currentIdentity === 'alumni' ? '旧日水纹' : '轻触水纹';
  module.innerHTML = moduleShell(item, identity, 'pavilion-module', `
    <button class="ripple-board ripple-surface" id="pavilionRipple" aria-label="轻触醉晚亭水面">
      <span class="water-sheen"></span>
      <span class="water-ring water-ring-a"></span>
      <span class="water-label water-label-a">${label}</span>
    </button>
  `, `${identity.taskLead}：轻触水面，水纹会在点击位置展开。`);
  const surface = $('#pavilionRipple');
  surface.addEventListener('click', e => {
    if (taskState.completed) return;
    const step = Number(surface.dataset.step || 0);
    if (step >= 1) return;
    const rect = surface.getBoundingClientRect();
    surface.querySelectorAll('.water-tap').forEach(node => node.remove());
    const wave = document.createElement('span');
    wave.className = 'water-tap';
    wave.style.left = `${e.clientX - rect.left}px`;
    wave.style.top = `${e.clientY - rect.top}px`;
    surface.appendChild(wave);
    setTimeout(() => wave.remove(), 1200);
    surface.dataset.step = String(step + 1);
    surface.classList.add(`wave-${step + 1}`);
    $('#moduleCopy').textContent = rippleText;
    registerTaskStep(rippleText);
    if (taskState.completed) surface.classList.add('complete');
  });
}

function renderClassroomTask(module, item, identity, title, count = 32) {
  module.innerHTML = moduleShell(item, identity, 'classroom-module', `
    <div class="window-grid" id="windowGrid">${Array.from({ length: count }, (_, i) => `<button class="window-dot ${i % 8 === 0 || i === 13 ? 'on locked' : ''}" aria-label="教室灯光"></button>`).join('')}</div>
  `, `${identity.taskLead}：${title}，完成 ${taskState.required} 格即可进入未来课堂。`);
  $$('.window-dot').forEach(dot => dot.addEventListener('click', () => {
    if (dot.classList.contains('locked') || dot.classList.contains('on')) return;
    dot.classList.add('on', 'done');
    const nextCount = Math.min(taskState.required, taskState.done + 1);
    registerTaskStep(`已点亮 ${nextCount}/${taskState.required} 个课堂窗格。`);
  }));
}

function renderDongjiuTask(module, item, identity) {
  module.innerHTML = moduleShell(item, identity, 'lab-module', `
    <div class="lab-steps">
      ${['课程状态', '实验记录', '协作讨论'].map(text => `<button class="lab-step task-step" data-message="${text}已记录：问题正在变成答案。"><b>${text}</b><small>点亮</small></button>`).join('')}
    </div>
  `, `${identity.taskLead}：选择今天的学习/实验状态。`);
  bindTaskSteps();
}

function renderScienceTask(module, item, identity) {
  module.innerHTML = moduleShell(item, identity, 'science-module', `
    <div class="constellation science-constellation" id="constellation">
      <div class="science-orbits" aria-hidden="true"><i></i><i></i><i></i></div>
      ${starHtml('science')}
    </div>
  `, `${identity.taskLead}：点亮 3 颗创新星点，把好奇心连成探索坐标。`);
  bindStars('创新星点已点亮：好奇心正在变成探索坐标。');
}

function renderMedicineTask(module, item, identity) {
  module.innerHTML = moduleShell(item, identity, 'medicine-module', `
    <button class="pulse-strip ecg-panel" id="pulseStrip" aria-label="触发生命脉冲">
      <span class="heart-beat" aria-hidden="true">♥</span>
      <svg class="ecg-wave" viewBox="0 0 320 92" aria-hidden="true">
        <polyline points="0,52 42,52 58,30 76,70 96,52 132,52 148,16 170,78 192,52 236,52 252,38 268,62 286,52 320,52"></polyline>
      </svg>
      <span class="pulse-copy">触发生命脉冲</span>
    </button>
  `, `${identity.taskLead}：触发生命脉冲，进入医学人文支线。`);
  $('#pulseStrip').addEventListener('click', () => {
    registerTaskStep('仁心、严谨、责任、生命温度，是医学未来最重要的底色。');
  });
}

function renderCorridorTask(module, item, identity) {
  const startValue = taskState.completed ? 100 : 0;
  module.innerHTML = moduleShell(item, identity, 'corridor-module', `
    <div class="guide-line-task corridor-board">
      <div class="corridor-steps" aria-hidden="true">
        <span data-label="起点"></span>
        <span data-label="长廊"></span>
        <span data-label="终点"></span>
      </div>
      <label class="corridor-slider-label">
        <b>拖动导览光点</b>
        <input id="corridorRange" class="route-range corridor-range" type="range" min="0" max="100" value="${startValue}" aria-label="滑动完成碧珠长廊导览线" />
      </label>
      <div class="corridor-hint">沿着树影移动光点，到终点后记录医学人文路线。</div>
    </div>
  `, `${identity.taskLead}：把导览线滑到终点，完成开放校园路线。`);
  bindRangeTask('#corridorRange', 86, '导览线已走到终点：医学人文空间被完整记录。');
}

function renderDigitalLibraryTask(module, item, identity) {
  module.innerHTML = moduleShell(item, identity, 'digital-library-module', `
    <div class="book-flip-task medical-book-task">
      <div class="book-spine" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="book-pages">
        ${['医学检索', '电子阅览', '智慧借阅', '生命文献'].map((text, index) => `
          <button class="book-page task-step flip-page" style="--page:${index}" data-message="${text}已接入：同济医学知识云库正在点亮。">
            <span>MED ${String(index + 1).padStart(2, '0')}</span>
            <b>${text}</b>
            <small>翻开接入</small>
          </button>
        `).join('')}
      </div>
    </div>
  `, `${identity.taskLead}：翻开 ${taskState.required} 页医学知识服务。`);
  bindTaskSteps((btn) => {
    btn.classList.add('flipped');
    btn.animate([
      { transform: 'rotateY(0deg) translateY(0)' },
      { transform: 'rotateY(-54deg) translateY(-4px)' },
      { transform: 'rotateY(-16deg) translateY(0)' }
    ], { duration: 620, easing: 'cubic-bezier(.22,1,.36,1)' });
  });
}

function renderWaterTowerTask(module, item, identity) {
  const startValue = taskState.completed ? 100 : 0;
  module.innerHTML = moduleShell(item, identity, 'tower-module', `
    <div class="tower-task">
      <div class="tower-dial" id="towerDial"><span></span><b>水塔</b></div>
      <label>
        <small>旋转时间刻度</small>
        <input id="towerRange" type="range" min="0" max="100" value="${startValue}" aria-label="旋转水塔时间刻度" />
      </label>
    </div>
  `, `${identity.taskLead}：把水塔时间刻度推到亮起，解锁同济校区彩蛋坐标。`);
  const range = $('#towerRange');
  const dial = $('#towerDial');
  const updateDial = () => {
    const value = Number(range.value);
    dial.style.setProperty('--tower-rotate', `${value * 2.7 - 135}deg`);
  };
  range.addEventListener('input', updateDial);
  updateDial();
  bindRangeTask('#towerRange', 90, '水塔时间刻度已校准：同济记忆坐标被点亮。');
}

function renderAlumniMemoryTask(module, item, identity) {
  const hasVisual = item.id === 5 || item.id === 7;
  const texts = item.id === 5
    ? [['meal', '旧饭卡', '旧饭卡已刷开'], ['menu', '常点菜单', '那年常点的一餐已浮现'], ['table', '同窗一桌', '返校味道已收藏']]
    : item.id === 7
      ? [['ripple', '水纹', '亭边水纹已扩散'], ['wind', '晚风', '那阵晚风已回来'], ['pause', '停留', '青春片段已保存']]
      : [['first', '初见', '第一段返校记忆已唤起'], ['road', '旧路', '第二段校园记忆已唤起'], ['reunion', '重逢', '第三段母校记忆已唤起']];
  module.innerHTML = moduleShell(item, identity, 'memory-module', `
    <div class="memory-strip">
      ${texts.map(([kind, title, msg]) => `
        <button class="memory-chip ${hasVisual ? 'memory-with-visual' : 'memory-text-only'} memory-${kind} task-step" data-message="${msg}。">
          ${hasVisual ? '<span class="memory-visual" aria-hidden="true"></span>' : ''}
          <b>${title}</b><small>点击收藏</small>
        </button>
      `).join('')}
    </div>
  `, `${identity.taskLead}：校友路线需点亮 3 段记忆后，未来母校图景才会展开。`);
  bindTaskSteps();
}

function bindTaskSteps(extraAction) {
  $$('.task-step').forEach(btn => btn.addEventListener('click', () => {
    if (btn.classList.contains('done')) return;
    btn.classList.add('done');
    extraAction?.(btn);
    $('#moduleCopy').textContent = btn.dataset.message;
    registerTaskStep(btn.dataset.message);
  }));
}

function bindRangeTask(selector, threshold, message) {
  const input = $(selector);
  if (!input) return;
  const sync = () => {
    const value = Number(input.value);
    const progress = `${Math.max(0, Math.min(100, value))}%`;
    input.style.setProperty('--range-progress', progress);
    input.closest('.guide-line-task, .energy-task, .tower-task')?.style.setProperty('--range-progress', progress);
    if (value >= threshold && !input.dataset.done) {
      input.dataset.done = 'true';
      input.classList.add('done');
      input.disabled = true;
      $('#moduleCopy').textContent = message;
      registerTaskStep(message);
    }
  };
  input.addEventListener('input', sync);
  sync();
}

function starHtml(type) {
  const points = type === 'medicine'
    ? [[8,42],[22,25],[36,42],[50,22],[64,44],[78,30],[90,48]]
    : [[8,26],[18,52],[32,20],[48,38],[61,16],[76,48],[90,24]];
  return points.map((p, i) => `<button class="star ${i < 2 ? 'on' : ''}" style="left:${p[0]}%;top:${p[1]}%" aria-label="星点"></button>`).join('');
}

function bindStars(text) {
  $$('.star').forEach(star => star.addEventListener('click', () => {
    if (star.classList.contains('done')) return;
    star.classList.add('on', 'done');
    $('#moduleCopy').textContent = text;
    registerTaskStep(text);
  }));
}

function popSeasonDots() {
  const overlay = $('#sceneOverlay');
  for (let i = 0; i < 7; i++) {
    const dot = document.createElement('span');
    dot.style.cssText = `position:absolute;left:${20 + Math.random() * 60}%;top:${20 + Math.random() * 55}%;width:${8 + Math.random() * 12}px;height:${8 + Math.random() * 12}px;border-radius:50%;background:rgba(255,255,255,.72);box-shadow:0 0 16px rgba(255,255,255,.55);animation:seasonPop .9s ease forwards;`;
    overlay.appendChild(dot);
    setTimeout(() => dot.remove(), 920);
  }
}

function renderStamps() {
  $('#stampWall').innerHTML = landmarks.map((item, idx) => `
    <button class="stamp ${unlocked.has(item.id) ? 'unlocked' : ''} ${isIdentityRouteLandmark(item) ? 'route-member' : 'free-explore'}" data-index="${idx}" data-order="${routeOrderFor(item) || '彩'}" style="--rot:${idx % 2 ? 1.3 : -1.2}deg">
      <div class="stamp-icon">${unlocked.has(item.id) ? '✓' : item.icon}</div>
      <strong>${item.name}</strong>
    </button>
  `).join('');
  updateIdentityPreview();
}

function showToast(msg) {
  let t = document.querySelector('.page-toast');
  if (!t) {
    t = document.createElement('div');
    t.className = 'page-toast';
    document.getElementById('stage').appendChild(t);
  }
  t.textContent = msg;
  t.classList.remove('show');
  void t.offsetWidth;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2200);
}

function getStageHeight() {
  const value = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--stage-h'));
  return Number.isFinite(value) && value > 0 ? value : 1030;
}

function resetStageScroll() {
  const stage = $('#stage');
  const pagesWrap = $('#pages');
  if (stage && stage.scrollTop !== 0) stage.scrollTop = 0;
  if (pagesWrap && pagesWrap.scrollTop !== 0) pagesWrap.scrollTop = 0;
}

function activePageCanScroll(direction) {
  const page = pages[pageIndex];
  if (!page) return false;
  const scrollablePages = new Set(['route', 'detail', 'collection', 'ending']);
  if (!scrollablePages.has(page.dataset.page)) return false;
  const maxScroll = page.scrollHeight - page.clientHeight;
  if (maxScroll <= 6) return false;
  return direction > 0 ? page.scrollTop < maxScroll - 6 : page.scrollTop > 6;
}

function updatePageTransform() {
  const pagesWrap = $('#pages');
  if (!pagesWrap) return;
  resetStageScroll();
  pages.forEach(page => { page.scrollTop = 0; });
  pagesWrap.style.transform = 'none';
  pagesWrap.style.top = '0px';
  requestAnimationFrame(resetStageScroll);
}

function goTo(index) {
  let target = Math.max(0, Math.min(pages.length - 1, index));
  if (pageIndex === 1 && target > 1 && !identityChosen) {
    showToast('请先选择你的"入园方式"');
    return;
  }
  pageIndex = target;
  updatePageTransform();
  const pageName = pages[pageIndex].dataset.page;
  resetGuideDrag();
  $('#stage').dataset.page = pageName;
  document.body.dataset.h5Page = pageName;
  $('#pageNow').textContent = String(pageIndex + 1).padStart(2, '0');
  $('#pageTotal').textContent = String(pages.length).padStart(2, '0');
  pages.forEach((page, idx) => {
    page.classList.toggle('active', idx === pageIndex);
    page.classList.remove('page-ready');
  });
  if (pages[pageIndex].dataset.page === 'collection') renderStamps();
  if (pages[pageIndex].dataset.page === 'ending') {
    updateIdentityPreview();
    $('.ending')?.classList.remove('poster-ready');
    requestAnimationFrame(() => makePoster(false));
  }
  updateGuideBubble();
  requestAnimationFrame(() => requestAnimationFrame(() => {
    resetStageScroll();
    pages[pageIndex].classList.add('page-ready');
  }));
}

function resetExperience() {
  currentIdentity = 'highschool';
  identityChosen = false;
  landmarkIndex = 0;
  openCampus = '主校区';
  currentSeason = '春';
  unlocked.clear();

  const canvas = $('#posterCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';
  }
  posterDataUrl = '';
  const posterImage = $('#posterImage');
  if (posterImage) {
    posterImage.hidden = true;
    posterImage.removeAttribute('src');
  }
  $('.ending')?.classList.remove('poster-ready');
  const download = $('#downloadPoster');
  if (download) {
    download.hidden = true;
    download.removeAttribute('href');
  }

  renderIdentities();
  renderRoute();
  renderStamps();
  updateLandmark();
  updateIdentityPreview();
  goTo(0);
}

function loadCanvasImage(src) {
  return new Promise(resolve => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => {
      // fallback: 尝试绝对路径
      const absImg = new Image();
      absImg.crossOrigin = 'anonymous';
      absImg.onload = () => resolve(absImg);
      absImg.onerror = () => { console.warn('[poster] 图片加载失败:', src); resolve(null); };
      const base = location.href.substring(0, location.href.lastIndexOf('/') + 1);
      absImg.src = base + src;
    };
    img.src = src;
  });
}

function drawCoverImage(ctx, img, x, y, width, height) {
  const imageRatio = img.width / img.height;
  const targetRatio = width / height;
  let sx = 0;
  let sy = 0;
  let sw = img.width;
  let sh = img.height;
  if (imageRatio > targetRatio) {
    sw = img.height * targetRatio;
    sx = (img.width - sw) / 2;
  } else {
    sh = img.width / targetRatio;
    sy = (img.height - sh) / 2;
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, width, height);
}

function wrapTextLimited(ctx, text, x, y, maxWidth, lineHeight, maxLines = Infinity) {
  let line = '';
  let lines = 0;
  for (let i = 0; i < text.length; i++) {
    const test = line + text[i];
    const isLastLine = lines === maxLines - 1;
    if (ctx.measureText(test).width > maxWidth && i > 0) {
      if (isLastLine) {
        ctx.fillText(`${line.slice(0, Math.max(0, line.length - 1))}…`, x, y);
        return y + lineHeight;
      }
      ctx.fillText(line, x, y);
      line = text[i];
      y += lineHeight;
      lines += 1;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
  return y + lineHeight;
}

async function makePoster(showMessage = true) {
  const token = ++posterRenderToken;
  const canvas = $('#posterCanvas');
  const exportScale = 2;
  const designW = 640;
  const designH = 1030;
  if (canvas.width !== designW * exportScale || canvas.height !== designH * exportScale) {
    canvas.width = designW * exportScale;
    canvas.height = designH * exportScale;
  }
  const ctx = canvas.getContext('2d');
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.setTransform(exportScale, 0, 0, exportScale, 0, 0);
  const w = designW;
  const h = designH;
  const id = identities[currentIdentity];
  const bg = await loadCanvasImage('assets/generated/identity-entry-bg.jpg');
  if (token !== posterRenderToken) return;
  if (bg) {
    drawCoverImage(ctx, bg, 0, 0, w, h);
  } else {
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#0c2f68');
    grad.addColorStop(.52, '#0b4ea2');
    grad.addColorStop(1, '#e8d5a8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  ctx.fillStyle = 'rgba(5, 19, 33, .46)';
  ctx.fillRect(0, 0, w, h);

  ctx.globalAlpha = .18;
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 110; i++) {
    const x = (i * 83) % w;
    const y = (i * 127) % h;
    ctx.beginPath();
    ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalAlpha = 1;

  roundRect(ctx, 44, 64, 552, 844, 36, true, false, 'rgba(255,248,232,.94)');
  roundRect(ctx, 76, 100, 188, 42, 21, true, false, id.accent);
  ctx.fillStyle = '#ffffff';
  ctx.font = '900 18px "Microsoft YaHei", sans-serif';
  ctx.fillText(id.label, 104, 128);

  // 二维码：右上角空白区域（整体在白色卡片右边界内，含投影不溢出）
  const qrImg = await loadCanvasImage('assets/generated/二维码.jpg');
  if (qrImg && token === posterRenderToken) {
    const qrSize = 100;            // 二维码图片尺寸（缩小避免溢出）
    const qrPad = 8;               // 二维码图片相对白底的内边距
    const cardRight = 44 + 552;    // 白色卡片右边界 = 596
    const gapRight = 18;           // 白底框距卡片右边的留白
    const qrBoxW = qrSize + qrPad * 2; // 116 白底框宽
    const qrBoxX = cardRight - gapRight - qrBoxW; // 白底框左上 x = 462
    const qrX = qrBoxX + qrPad;    // 二维码图片 x = 470
    const qrY = 100;
    const qrR = 10;
    // 白底圆角矩形 + 投影
    ctx.save();
    ctx.shadowColor = 'rgba(0,0,0,.14)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 3;
    roundRect(ctx, qrBoxX, qrY - qrPad, qrBoxW, qrBoxW, qrR, true, false, '#fff');
    ctx.restore();
    // 二维码图片
    ctx.drawImage(qrImg, qrX, qrY, qrSize, qrSize);
    // 扫码提示文字
    ctx.fillStyle = 'rgba(22,48,76,.52)';
    ctx.font = '11px "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('扫码体验', qrBoxX + qrBoxW / 2, qrY + qrSize + qrPad + 18);
    ctx.textAlign = 'left';
  }

  const posterTitleGradient = ctx.createLinearGradient(86, 0, 520, 0);
  posterTitleGradient.addColorStop(0, '#0b4ea2');
  posterTitleGradient.addColorStop(.64, id.accent);
  posterTitleGradient.addColorStop(1, '#29c5d8');
  ctx.fillStyle = posterTitleGradient;
  ctx.font = '900 24px "Microsoft YaHei", sans-serif';
  ctx.fillText('HUST TIME PASS', 86, 178);
  ctx.fillStyle = 'rgba(22,48,76,.52)';
  ctx.font = '19px "Microsoft YaHei", sans-serif';
  ctx.fillText('时空喻园：现在，遇见未来', 86, 212);

  const endingTitleGradient = ctx.createLinearGradient(86, 0, 556, 0);
  endingTitleGradient.addColorStop(0, '#16304c');
  endingTitleGradient.addColorStop(.58, '#0b4ea2');
  endingTitleGradient.addColorStop(1, id.accent);
  ctx.fillStyle = endingTitleGradient;
  ctx.font = '900 46px "STKaiti", "KaiTi", "Microsoft YaHei", serif';
  let cursorY = wrapTextLimited(ctx, id.endingTitle, 86, 292, 470, 56, 2) + 34;

  ctx.fillStyle = 'rgba(22,48,76,.68)';
  ctx.font = '20px "Microsoft YaHei", sans-serif';
  cursorY = wrapTextLimited(ctx, id.endingText, 86, cursorY, 470, 30, 9);

  const routeY = Math.min(640, Math.max(570, cursorY + 18));
  roundRect(ctx, 78, routeY, 484, 144, 22, true, false, 'rgba(11,78,162,.08)');
  ctx.fillStyle = id.accent;
  ctx.font = '900 20px "Microsoft YaHei", sans-serif';
  ctx.fillText('身份路线', 104, routeY + 36);
  ctx.fillStyle = 'rgba(22,48,76,.68)';
  ctx.font = '14px "Microsoft YaHei", sans-serif';
  wrapTextLimited(ctx, id.routeSummary, 104, routeY + 64, 430, 21, 4);

  const statsY = routeY + 164;
  roundRect(ctx, 86, statsY, 205, 100, 24, true, false, 'rgba(11,78,162,.10)');
  roundRect(ctx, 320, statsY, 205, 100, 24, true, false, 'rgba(11,78,162,.10)');
  ctx.fillStyle = '#0b4ea2';
  ctx.font = '900 34px "Microsoft YaHei", sans-serif';
  ctx.fillText(`${unlocked.size}/${totalLandmarkCount()}`, 116, statsY + 54);
  ctx.fillText(id.routeType, 350, statsY + 54);
  ctx.fillStyle = 'rgba(22,48,76,.58)';
  ctx.font = '22px "Microsoft YaHei", sans-serif';
  ctx.fillText('点亮地标', 116, statsY + 88);
  ctx.fillText('路线类型', 350, statsY + 88);

  ctx.fillStyle = 'rgba(255,255,255,.86)';
  ctx.font = '24px "Microsoft YaHei", sans-serif';
  ctx.fillText('时空喻园：现在，遇见未来', 70, 934);
  ctx.fillStyle = 'rgba(255,255,255,.62)';
  ctx.font = '18px "Microsoft YaHei", sans-serif';
  ctx.fillText('AI 生成内容已标注｜真实照片请使用团队拍摄或授权图片', 70, 968);
  posterDataUrl = canvas.toDataURL('image/png');
  canvas.style.display = 'none';
  const posterImage = $('#posterImage');
  if (posterImage) {
    posterImage.src = posterDataUrl;
    posterImage.hidden = false;
  }
  $('.ending')?.classList.add('poster-ready');
  const download = $('#downloadPoster');
  if (download) {
    download.href = posterDataUrl;
    download.hidden = false;
  }
  if (showMessage) showToast('分享海报已生成，可点击保存按钮下载');
}

function dataUrlToBlob(dataUrl) {
  const [meta, data] = dataUrl.split(',');
  const mime = meta.match(/data:(.*?);/)?.[1] || 'image/png';
  const binary = atob(data);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

async function handlePosterSave(event) {
  if (!posterDataUrl) return;
  const isMobileWebView = /MicroMessenger|QQ\/|AlipayClient|DingTalk|Weibo|Android|iPhone|iPad/i.test(navigator.userAgent);
  try {
    const file = new File([dataUrlToBlob(posterDataUrl)], '时空喻园身份海报.png', { type: 'image/png' });
    if (navigator.canShare?.({ files: [file] }) && navigator.share) {
      event.preventDefault();
      await navigator.share({ files: [file], title: '时空喻园身份海报' });
      return;
    }
  } catch {
    // Fall through to the image view/download path.
  }
  if (isMobileWebView) {
    event.preventDefault();
    const posterImage = $('#posterImage');
    if (posterImage) {
      posterImage.hidden = false;
      posterImage.classList.add('save-preview');
      posterImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('已在当前页显示海报，长按图片保存');
    }
  }
}

function roundRect(ctx, x, y, width, height, radius, fill, stroke, fillStyle) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  if (fill) {
    ctx.fillStyle = fillStyle || ctx.fillStyle;
    ctx.fill();
  }
  if (stroke) ctx.stroke();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  let line = '';
  for (let i = 0; i < text.length; i++) {
    const test = line + text[i];
    if (ctx.measureText(test).width > maxWidth && i > 0) {
      ctx.fillText(line, x, y);
      line = text[i];
      y += lineHeight;
    } else {
      line = test;
    }
  }
  ctx.fillText(line, x, y);
}

function bindEvents() {
  const keepStageFixed = () => resetStageScroll();
  $('#stage').addEventListener('scroll', keepStageFixed, { passive: true });
  $('#pages').addEventListener('scroll', keepStageFixed, { passive: true });
  window.addEventListener('pageshow', keepStageFixed);
  window.addEventListener('load', keepStageFixed);

  $('#identityDesk').addEventListener('click', e => {
    const card = e.target.closest('.role-card');
    if (!card) return;
    currentIdentity = card.dataset.identity;
    identityChosen = true;
    landmarkIndex = firstRouteIndexForIdentity();
    openCampus = landmarks[landmarkIndex].campus;
    $$('#identityDesk .role-card').forEach(node => node.classList.toggle('active', node === card));
    updateIdentityPreview();
    updateLandmark();
    setTimeout(() => goTo(2), 160);
  });
  const identityConfirm = $('#identityConfirm');
  if (identityConfirm) {
    identityConfirm.addEventListener('click', () => {
      if (!identityChosen) return;
      landmarkIndex = firstRouteIndexForIdentity();
      openCampus = landmarks[landmarkIndex].campus;
      updateLandmark();
      goTo(2);
    });
  }

  $('#campusAccordion').addEventListener('click', e => {
    const target = e.target.closest('.map-pin, .landmark-chip');
    if (target) {
      selectLandmark(target.dataset.index, false);
      return;
    }
    const toggle = e.target.closest('[data-campus-toggle]');
    if (!toggle) return;
    const campus = toggle.dataset.campusToggle;
    openCampus = openCampus === campus ? '' : campus;
    if (openCampus) {
      const firstInCampus = landmarks.findIndex(item => item.campus === openCampus);
      if (firstInCampus >= 0 && landmarks[landmarkIndex].campus !== openCampus) {
        landmarkIndex = firstInCampus;
      }
    }
    renderRoute();
  });

  $$('[data-next]').forEach(btn => btn.addEventListener('click', () => goTo(pageIndex + 1)));
  $('#prevPage').addEventListener('click', () => goTo(pageIndex - 1));
  $('#nextPage').addEventListener('click', () => goTo(pageIndex + 1));
  $('#goHome').addEventListener('click', () => goTo(0));
  $('#musicToggle').addEventListener('click', async () => {
    const audio = $('#bgmAudio');
    const toggle = $('#musicToggle');
    const label = toggle.querySelector('.music-label');
    if (!audio || !audio.src) return;
    if (audio.paused) {
      try {
        await audio.play();
        toggle.classList.add('playing');
        if (label) label.textContent = 'PAUSE';
      } catch {
        showToast('轻触后即可播放背景音乐');
      }
    } else {
      audio.pause();
      toggle.classList.remove('playing');
      if (label) label.textContent = 'BGM';
    }
  });

  // 浏览器自动播放策略：首次用户交互时尝试自动播放 BGM
  let bgmAutoPlayTried = false;
  const tryAutoPlayBgm = async () => {
    if (bgmAutoPlayTried) return;
    bgmAutoPlayTried = true;
    const audio = $('#bgmAudio');
    const toggle = $('#musicToggle');
    const label = toggle?.querySelector('.music-label');
    if (!audio || !audio.src || !audio.paused) return;
    try {
      await audio.play();
      toggle.classList.add('playing');
      if (label) label.textContent = 'PAUSE';
    } catch {
      // 自动播放被拦截，保留按钮供用户手动点击
    }
  };
  ['pointerdown', 'keydown', 'touchstart'].forEach(evt => {
    document.addEventListener(evt, tryAutoPlayBgm, { once: true, passive: true });
  });
  $('#backRoute').addEventListener('click', () => goTo(2));
  $('#compareRange').addEventListener('input', e => {
    setCompare(e.target.value);
  });
  $('#prevLandmark').addEventListener('click', () => {
    landmarkIndex = (landmarkIndex - 1 + landmarks.length) % landmarks.length;
    updateLandmark();
  });
  $('#nextLandmark').addEventListener('click', () => {
    landmarkIndex = (landmarkIndex + 1) % landmarks.length;
    updateLandmark();
  });
  $('#randomLandmark').addEventListener('click', () => {
    landmarkIndex = Math.floor(Math.random() * landmarks.length);
    updateLandmark();
  });
  $('#taskNextBtn').addEventListener('click', goNextLandmarkFromTask);
  $('#taskStampBtn').addEventListener('click', () => goTo(4));
  $('#imageViewer').addEventListener('click', closeImageViewer);
  $('#unlockAll').addEventListener('click', () => {
    landmarks.forEach(item => unlocked.add(item.id));
    renderStamps();
    renderRoute();
    updateIdentityPreview();
  });
  $('#stampWall').addEventListener('click', e => {
    const stamp = e.target.closest('.stamp');
    if (!stamp) return;
    landmarkIndex = Number(stamp.dataset.index);
    updateLandmark();
    goTo(3);
  });
  $('#makePoster')?.addEventListener('click', () => { makePoster(); });
  $('#downloadPoster').addEventListener('click', handlePosterSave);
  $('#endingRestart')?.addEventListener('click', resetExperience);
  $('#restart').addEventListener('click', resetExperience);

  let touchStartY = 0;
  let touchStartX = 0;
  let wheelLock = false;
  $('#stage').addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  $('#stage').addEventListener('touchend', e => {
    if (e.target.closest('#guideBear')) return;
    if (draggingCompare) return;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx) * 1.3) {
      const direction = dy < 0 ? 1 : -1;
      if (activePageCanScroll(direction)) return;
      if (pageIndex === 3 && !e.target.closest('input, .interaction-module, #imageLayers')) {
        goAdjacentLandmarkBySwipe(direction);
        return;
      }
      if (direction === -1 || (direction === 1 && !(pageIndex === 1 && !identityChosen))) {
        if (e.target.closest('input, .campus-accordion, .stamp-wall, .interaction-module, .identity-desk, #imageLayers')) return;
      }
      goTo(pageIndex + direction);
    }
  }, { passive: true });
  $('#stage').addEventListener('wheel', e => {
    if (wheelLock) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    if (activePageCanScroll(direction)) return;
    if (direction === -1 || (direction === 1 && !(pageIndex === 1 && !identityChosen))) {
      if (e.target.closest('.campus-accordion, .stamp-wall, .interaction-module, .identity-desk, #imageLayers')) return;
    }
    if (Math.abs(e.deltaY) < 24) return;
    wheelLock = true;
    if (pageIndex === 3 && !e.target.closest('.interaction-module, #imageLayers')) {
      goAdjacentLandmarkBySwipe(direction);
    } else {
      goTo(pageIndex + direction);
    }
    setTimeout(() => { wheelLock = false; }, 760);
  }, { passive: true });
}


function updateStageScale() {
  const baseWidth = 640;
  const baseHeight = 1030;
  const widthScale = window.innerWidth / baseWidth;
  const heightScale = window.innerHeight / baseHeight;
  const scale = Math.min(widthScale, heightScale);
  const stageHeight = widthScale <= heightScale
    ? Math.max(baseHeight, window.innerHeight / scale)
    : baseHeight;
  const stageExtra = Math.max(0, stageHeight - baseHeight);
  document.documentElement.style.setProperty('--stage-scale', scale.toFixed(4));
  document.documentElement.style.setProperty('--stage-h', `${stageHeight.toFixed(2)}px`);
  document.documentElement.style.setProperty('--stage-extra', `${stageExtra.toFixed(2)}px`);
  updatePageTransform();
}

function bindButtonRipple() {
  $('#stage').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.disabled) return;
    if (btn.classList.contains('map-pin') || btn.classList.contains('landmark-chip')) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 620);
  });
}

function bindGuideDrag() {
  const bear = $('#guideBear');
  const stage = $('#stage');
  if (!bear || !stage) return;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const readPx = name => parseFloat(bear.style.getPropertyValue(name)) || 0;
  const endDrag = () => {
    if (!guideDrag) return;
    guideDrag = null;
    bear.classList.remove('dragging');
  };
  bear.addEventListener('pointerdown', e => {
    const pageName = pages[pageIndex]?.dataset.page || '';
    if (!['identity', 'route', 'detail', 'collection'].includes(pageName)) return;
    guideDrag = {
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      baseX: readPx('--guide-drag-x'),
      baseY: readPx('--guide-drag-y')
    };
    bear.classList.add('dragging');
    bear.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  });
  bear.addEventListener('pointermove', e => {
    if (!guideDrag || guideDrag.pointerId !== e.pointerId) return;
    const dx = e.clientX - guideDrag.startX;
    const dy = e.clientY - guideDrag.startY;
    bear.style.setProperty('--guide-drag-x', `${clamp(guideDrag.baseX + dx, -360, 220)}px`);
    bear.style.setProperty('--guide-drag-y', `${clamp(guideDrag.baseY + dy, -430, 360)}px`);
  });
  bear.addEventListener('pointerup', endDrag);
  bear.addEventListener('pointercancel', endDrag);
  window.addEventListener('blur', endDrag);
}

function injectKeyframes() {
  const style = document.createElement('style');
  style.innerHTML = '@keyframes seasonPop{from{opacity:1;transform:translateY(0) scale(.8)}to{opacity:0;transform:translateY(-42px) scale(1.6)}}';
  document.head.appendChild(style);
}

function init() {
  updateStageScale();
  window.addEventListener('resize', updateStageScale);
  injectKeyframes();
  initLoading();
  renderIdentities();
  renderRoute();
  renderStamps();
  updateIdentityPreview();
  applyIdentityTheme();
  updateLandmark();
  bindEvents();
  bindCompareDrag();
  bindButtonRipple();
  bindGuideDrag();
  updateBgmSource();      // 通用 BGM 从封面页就加载
  goTo(0);
}

init();
