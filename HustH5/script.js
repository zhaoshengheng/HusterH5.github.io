const landmarks = [
  {
    id: 1, name: '南大门-毛主席像', group: '精神之门', mode: 'timegate', campus: '主校区', icon: '门', x: 16, y: 31,
    now: 'assets/landmarks/01_now.jpg', future: 'assets/landmarks/01_future.jpg',
    intro: '从这里进入喻园，也从这里看见一所大学的精神坐标。',
    moduleTitle: '拖动时间轴：从入园第一眼到未来校门',
    moduleText: '把校门处理成“时空入口”，适合高中生的憧憬、在读生的出发、校友的回望。',
    copies: {
      highschool: '穿过这扇门，你会把“想象中的大学”第一次变成可抵达的地点。',
      student: '每次路过这里，都是一次重新出发。今天的时空打卡，从最熟悉的入口开始。',
      alumni: '南大门像一枚旧书签，替你夹住了初入喻园的那一页。',
      public: '这里是认识华中科技大学的第一站，也是校园精神与城市记忆的交汇点。'
    }
  },
  {
    id: 2, name: '图书馆', group: '知识云端', mode: 'book', campus: '主校区', icon: '书', x: 32, y: 24,
    now: 'assets/landmarks/02_now.jpg', future: 'assets/landmarks/02_future.jpg',
    intro: '书页、光影与数据星河，在这里汇成校园的知识中心。',
    moduleTitle: '翻开一本未来书：知识从纸页延伸到云端',
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
    now: 'assets/landmarks/03_now.jpg', future: 'assets/landmarks/03_future.jpg',
    intro: '历史不是静止的展陈，而是通向未来的坐标轴。',
    moduleTitle: '滑动校史光带：从过去走向未来',
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
    now: 'assets/landmarks/04_now.jpg', future: 'assets/landmarks/04_future.jpg',
    intro: '青年人的想法、社团、热爱与偶遇，在这里持续发生。',
    moduleTitle: '切换校园四季：让热爱在这里发生',
    moduleText: '自然类地标加入季节按钮和轻量水纹/叶片，让页面不再只有同一种图片比较。',
    copies: {
      highschool: '未来的大学不只有课堂，也有社团、朋友、热爱与更自由的自己。',
      student: '青年园像一块校园缓冲区：在忙碌之外，给热爱留出位置。',
      alumni: '你是否还记得某次路过、某场活动、某个突然变熟的朋友？',
      public: '这里呈现的是年轻大学生活力，也是校园公共空间的开放气质。'
    }
  },
  {
    id: 5, name: '百景园', group: '喻园四季', mode: 'nature', campus: '主校区', icon: '景', x: 76, y: 39,
    now: 'assets/landmarks/05_now.jpg', future: 'assets/landmarks/05_future.jpg',
    intro: '一园百景，收藏校园里最柔软的自然光。',
    moduleTitle: '点选四季：让未来生态花园生长',
    moduleText: '通过季节小组件，突出生态校园与未来低碳校园，而不是简单套科技蓝。',
    copies: {
      highschool: '大学生活也可以很松弛：在绿意里，给未来一点慢慢生长的时间。',
      student: '当课表太满，百景园会用风、树影和小路提醒你：先呼吸一下。',
      alumni: '有些地方不是为了赶路，而是为了让记忆慢下来。',
      public: '百景园体现了校园生态空间与人文景观的融合。'
    }
  },
  {
    id: 6, name: '西十二教学楼', group: '课堂与实验场', mode: 'classroom', campus: '主校区', icon: '课', x: 27, y: 54,
    now: 'assets/landmarks/06_now.jpg', future: 'assets/landmarks/06_future.jpg',
    intro: '课堂、考试、自习与讨论，在楼体的灯光里不断切换。',
    moduleTitle: '点亮教室：把早八、讨论和灵感都放进楼里',
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
    now: 'assets/landmarks/07_now.jpg', future: 'assets/landmarks/07_future.jpg',
    intro: '水面、亭影与晚风，把喻园的诗意留在此刻。',
    moduleTitle: '轻触水纹：让亭影从现在扩散到未来',
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
    now: 'assets/landmarks/08_now.jpg', future: 'assets/landmarks/08_future.jpg',
    intro: '知识在这里进入实验、协作与真实问题。',
    moduleTitle: '点亮实验格：让问题变成可验证的答案',
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
    now: 'assets/landmarks/09_now.jpg', future: 'assets/landmarks/09_future.jpg',
    intro: '科学精神不是遥远的公式，而是敢于发问的校园气质。',
    moduleTitle: '点亮星点：让公式变成探索坐标',
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
    now: 'assets/landmarks/10_now.jpg', future: 'assets/landmarks/10_future.jpg',
    intro: '医学精神在此凝望，也在一代代同济人手中延续。',
    moduleTitle: '触发生命脉冲：技术背后始终有人',
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
    now: 'assets/landmarks/11_now.jpg', future: 'assets/landmarks/11_future.jpg',
    intro: '长廊连接的不只是空间，也连接着医学、人文与日常步履。',
    moduleTitle: '切换光影：长廊把赶路变成记忆',
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
    now: 'assets/landmarks/12_now.jpg', future: 'assets/landmarks/12_future.jpg',
    intro: '医学知识在这里沉淀，也在未来生命科学中重新生长。',
    moduleTitle: '翻开医学知识云库：理解生命，守护生命',
    moduleText: '同济图书馆与主校区图书馆共用书页逻辑，但内容强调医学知识和长期主义。',
    copies: {
      highschool: '你未来读过的每一页，都可能与理解生命、守护生命有关。',
      student: '这里的安静，是给专业、耐心和长期主义的一种保护。',
      alumni: '书架之间的日子，后来都变成了专业底气的一部分。',
      public: '同济校区图书馆展现医学教育、知识积累与人文学习空间的结合。'
    }
  }
];

const identities = {
  highschool: {
    label: '高中生', type: '录取通知式入口', className: 'highschool',
    title: '未来有我探索路线', desc: '用地标提前预习一所大学的学习、生活与理想。',
    endingTitle: '未来 HUSTer 探索者', routeType: '预习线',
    visual: 'assets/generated/identity/highschool.jpg',
    accent: '#d8a85b', soft: '#fff4d4',
    lensTitle: '未来有我',
    lensCopy: '把每个地标看成一次预演：未来的华科里，可以出现你的身影。',
    taskLead: '收集未来入学线索',
    completeToast: '未来邀请已点亮，前往下一站',
    endingText: '你已提前收到一张来自未来喻园的邀请函。愿你把好奇心带进大学，把选择变成更宽阔的未来。'
  },
  student: {
    label: '在读生', type: '校园卡式入口', className: 'student',
    title: '今日喻园任务路线', desc: '在熟悉的路线上重新发现校园，把日常打卡成记忆。',
    endingTitle: '喻园今日打卡人', routeType: '日常线',
    visual: 'assets/generated/identity/student.jpg',
    accent: '#0b4ea2', soft: '#eaf3ff',
    lensTitle: '日常升级',
    lensCopy: '把熟悉的路、课、灯光和偶遇重新编排成一条今日任务线。',
    taskLead: '完成今日校园任务',
    completeToast: '今日坐标已打卡，前往下一站',
    endingText: '你把熟悉的地标重新点亮了一遍。原来日常不是重复，而是属于在读生的校园时间。'
  },
  alumni: {
    label: '已毕业校友', type: '旧相册式入口', className: 'alumni',
    title: '校友记忆回溯路线', desc: '把地标当作旧相册，从现在翻回曾经，也翻向未来。',
    endingTitle: '喻园时间收藏者', routeType: '回忆线',
    visual: 'assets/generated/identity/alumni.jpg',
    accent: '#b98252', soft: '#f7e7d2',
    lensTitle: '重回母校',
    lensCopy: '从旧相册里回到熟悉的路口，再把回忆交给未来继续生长。',
    taskLead: '修复一段校园记忆',
    completeToast: '回忆已修复，前往下一站',
    endingText: '你带走的不是一张普通地图，而是一段被校园保存很久的时间。'
  },
  public: {
    label: '社会大众', type: '导览票式入口', className: 'public',
    title: '开放校园导览路线', desc: '用一条轻量路线了解地标、校园文化与未来大学想象。',
    endingTitle: '未来校园漫游者', routeType: '导览线',
    visual: 'assets/generated/identity/public.jpg',
    accent: '#5a8f69', soft: '#e8f3df',
    lensTitle: '开放导览',
    lensCopy: '像城市访客一样观察校园：空间、知识、公共文化如何连接未来。',
    taskLead: '完成开放校园观察',
    completeToast: '导览观察已记录，前往下一站',
    endingText: '你完成了一次面向未来的校园导览，也看见了一所大学如何连接城市、知识与人。'
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

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

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
    <button class="role-card ${item.className} ${identityChosen && key === currentIdentity ? 'active' : ''}" data-identity="${key}" data-anim data-from="${index % 2 === 0 ? 'left' : 'right'}" style="--delay:${180 + index * 160}ms">
      <span>${item.type}</span>
      <h3>${item.label}</h3>
      <p>${item.lensTitle}｜${item.desc}</p>
    </button>
  `).join('');
}

function updateIdentityPreview() {
  const item = identities[currentIdentity];
  $('#routeTitle').textContent = item.title;
  $('#routeDesc').textContent = `${item.lensTitle}｜${item.lensCopy}`;
  $('#ticketIdentity').textContent = item.label;
  $('#endingTitle').textContent = item.endingTitle;
  $('#endingText').textContent = item.endingText;
  $('#statRoute').textContent = item.routeType;
  $('#statCount').textContent = `${unlocked.size}/12`;
  $('#collectionDesc').textContent = `当前身份：${item.label}｜已点亮 ${unlocked.size}/12 个地标。`;
  const confirm = $('#identityConfirm');
  if (confirm) confirm.disabled = !identityChosen;
  applyIdentityTheme();
}

function applyIdentityTheme() {
  const stage = $('#stage');
  stage.classList.remove('theme-highschool','theme-student','theme-alumni','theme-public');
  stage.classList.add(`theme-${currentIdentity}`);
  const item = identities[currentIdentity];
  stage.style.setProperty('--identity-visual', `url("${item.visual}")`);
  stage.style.setProperty('--identity-accent', item.accent);
  stage.style.setProperty('--identity-soft', item.soft);
  stage.dataset.identity = currentIdentity;
}

function campusPinY(item) {
  if (item.campus === '同济校区') return Math.max(18, Math.min(86, (item.y - 75) * 5 + 48));
  return Math.max(16, Math.min(84, item.y + 4));
}

function campusMapKey(campus) {
  return campus === '主校区' ? 'main' : 'tongji';
}

function renderRoute() {
  const accordion = $('#campusAccordion');
  const campuses = ['主校区', '同济校区'];
  accordion.innerHTML = campuses.map(campus => {
    const list = landmarks.filter(item => item.campus === campus);
    const isOpen = openCampus === campus;
    const selectedInCampus = landmarks[landmarkIndex].campus === campus;
    const campusShort = campus === '主校区' ? 'MAIN' : 'TJ';
    const desc = campus === '主校区' ? '点击地图标记探索九处地标' : '点击地图标记探索三处医学人文地标';
    const pins = list.map(item => {
      const idx = landmarks.findIndex(l => l.id === item.id);
      return `<button class="map-pin ${idx === landmarkIndex ? 'active' : ''} ${unlocked.has(item.id) ? 'unlocked' : ''}" data-index="${idx}" style="left:${item.x}%;top:${campusPinY(item)}%" aria-label="${item.name}"><span>${item.icon}</span></button>`;
    }).join('');
    const activeItem = list.find(item => landmarks[landmarkIndex].id === item.id) || list[0];
    return `
      <article class="campus-card ${isOpen ? 'open' : ''} ${selectedInCampus ? 'selected' : ''}" data-campus="${campus}">
        <button class="campus-head" data-campus-toggle="${campus}" aria-expanded="${isOpen}">
          <span class="campus-mark">${campusShort}</span>
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
              <div class="map-note-tag">地图导览</div>
              <strong>${selectedInCampus ? activeItem.name : '点击地图中的标记选择地标'}</strong>
              <span>${selectedInCampus ? activeItem.group : '不再使用下方数字组件，直接通过标记点进入更清晰。'}</span>
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
  $('#routeCard').innerHTML = `
    <span>${identities[currentIdentity].routeType} / ${String(item.id).padStart(2, '0')} / ${item.campus} / ${item.group}</span>
    <h3>${item.name}</h3>
    <p>${item.intro} ${identities[currentIdentity].taskLead}。</p>
    <button class="small-btn" id="enterLandmark">进入这个任务</button>
  `;
  $('#enterLandmark').addEventListener('click', () => {
    updateLandmark();
    goTo(3);
  });
  $$('.map-pin').forEach((pin) => pin.classList.toggle('active', Number(pin.dataset.index) === landmarkIndex));
}

function selectLandmark(index, jump = false) {
  landmarkIndex = Number(index);
  openCampus = landmarks[landmarkIndex].campus;
  renderRoute();
  updateLandmarkMetaOnly();
  if (jump) {
    updateLandmark();
    goTo(3);
  }
}

function updateLandmarkMetaOnly() {
  updateRouteCard();
}

function updateImage(img, placeholder, src) {
  img.onload = () => {
    img.style.display = 'block';
    placeholder.style.display = 'none';
  };
  img.onerror = () => {
    img.style.display = 'none';
    placeholder.style.display = 'flex';
  };
  img.style.display = 'none';
  placeholder.style.display = 'flex';
  img.src = src;
}

function updateLandmark() {
  const item = landmarks[landmarkIndex];
  const identity = identities[currentIdentity];
  openCampus = item.campus;
  const detailPage = $('#detailPage');
  const keepState = pageIndex === 3;
  detailPage.className = `page detail detail-${item.mode}${keepState ? ' active page-ready' : ''}`;
  $('#landmarkGroup').textContent = `${item.campus}｜${item.group}`;
  $('#landmarkName').textContent = `${String(item.id).padStart(2, '0')} ${item.name}`;
  $('#landmarkIntro').textContent = item.intro;
  $('#identityCopy').textContent = `${identity.lensTitle}｜${item.copies[currentIdentity]} ${identity.lensCopy}`;
  $('#nowFileName').textContent = `${String(item.id).padStart(2, '0')}_now.jpg`;
  $('#futureFileName').textContent = `${String(item.id).padStart(2, '0')}_future.jpg`;
  const bgPath = `assets/generated/landmark_bg/${String(item.id).padStart(2, '0')}.png`;
  detailPage.style.setProperty('--landmark-bg', `url("${bgPath}")`);
  updateImage($('#nowImage'), $('#nowPlaceholder'), item.now);
  updateImage($('#futureImage'), $('#futurePlaceholder'), item.future);
  renderInteraction(item);
  resetLandmarkTask(item);
  renderRoute();
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
  const map = {
    timegate: 2,
    book: 2,
    nature: 2,
    classroom: 5,
    science: 4,
    medicine: 1
  };
  return map[item.mode] || 2;
}

function resetLandmarkTask(item) {
  clearTimeout(autoAdvanceTimer);
  taskState = {
    id: item.id,
    done: 0,
    required: taskRequirement(item),
    completed: unlocked.has(item.id)
  };
  $('#detailPage').classList.toggle('task-complete', taskState.completed);
  $('#sceneOverlay').innerHTML = '';
  const futureLayer = $('#futureLayer');
  futureLayer.style.transition = 'none';
  setCompare(taskState.completed ? 0 : 100);
  void futureLayer.offsetWidth;
  futureLayer.style.transition = '';
  updateTaskStatus(taskState.completed ? '这个坐标已经点亮，可从地图继续选择地标。' : `${identities[currentIdentity].taskLead}，未来图景会在任务完成后展开。`);
}

function updateTaskStatus(message) {
  const identity = identities[currentIdentity];
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
    hint.textContent = taskState.completed
      ? '未来图景已解锁，正在保存这处喻园坐标'
      : `${message} 默认保留现在图，完成任务后自动显现未来。`;
  }
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
  autoAdvanceTimer = setTimeout(goNextLandmarkFromTask, 1450);
}

function goNextLandmarkFromTask() {
  if (pageIndex !== 3) return;
  if (landmarkIndex >= landmarks.length - 1) {
    goTo(4);
    return;
  }
  landmarkIndex += 1;
  updateLandmark();
  showToast(`下一站：${landmarks[landmarkIndex].name}`);
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
  const start = x => {
    draggingCompare = true;
    setCompareFromClientX(x);
    document.body.classList.add('dragging-compare');
  };
  const move = x => { if (draggingCompare) setCompareFromClientX(x); };
  const end = () => {
    if (!draggingCompare) return;
    draggingCompare = false;
    document.body.classList.remove('dragging-compare');
  };
  box.addEventListener('pointerdown', e => { start(e.clientX); box.setPointerCapture?.(e.pointerId); });
  box.addEventListener('pointermove', e => move(e.clientX));
  box.addEventListener('pointerup', end);
  box.addEventListener('pointercancel', end);
  box.addEventListener('mouseleave', end);
}

function renderInteraction(item) {
  const module = $('#interactionModule');
  const identity = identities[currentIdentity];
  if (item.mode === 'timegate') {
    module.innerHTML = `
      <div class="interaction-card timegate-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="timegate-cards task-grid">
          <button class="timegate-card task-step" data-message="记忆线索已收集：旧照片正在和此刻对齐。"><b>记忆</b><small>收集旧照片与初见线索</small></button>
          <button class="timegate-card task-step" data-message="此刻坐标已确认：真实校园成为未来入口。"><b>此刻</b><small>确认现在的校园坐标</small></button>
          <button class="timegate-card task-step" data-message="未来入口已打开：智慧导览与精神坐标开始叠加。"><b>未来</b><small>打开属于你的未来入口</small></button>
        </div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：至少点亮两张时空卡，未来图景会自动展开。</p>
      </div>
    `;
    bindTaskSteps();
  } else if (item.mode === 'book') {
    module.innerHTML = `
      <div class="interaction-card book-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="book-stack" id="bookStack">
          <button class="book-page task-step" data-message="纸页已翻开：知识从安静处开始沉淀。"><b>纸页</b><br>翻开真实学习的一页</button>
          <button class="book-page task-step" data-message="云端索引已连接：AI 把检索变成对话。"><b>云端</b><br>连接未来知识云库</button>
          <button class="book-page task-step" data-message="长期主义已记录：未来学习仍需要专注。"><b>长期主义</b><br>保存一条学习信念</button>
        </div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：翻开两页，图书馆会从现在进入未来。</p>
      </div>
    `;
    bindTaskSteps((btn) => {
      btn.animate([{ transform: 'rotateY(0deg)' }, { transform: 'rotateY(-14deg)' }, { transform: 'rotateY(0deg)' }], { duration: 420, easing: 'ease-out' });
    });
  } else if (item.mode === 'nature') {
    const seasons = ['春', '夏', '秋', '冬'];
    module.innerHTML = `
      <div class="interaction-card nature-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="season-wheel">
          ${seasons.map(s => `<button class="season-btn task-step ${s === currentSeason ? 'active' : ''}" data-season="${s}" data-message="${s}季光影已收集：校园自然正在生长。">${s}</button>`).join('')}
        </div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：收集两种季节光影，让未来生态校园显现。</p>
      </div>
    `;
    bindTaskSteps((btn) => {
      currentSeason = btn.dataset.season;
      $$('.season-btn').forEach(b => b.classList.toggle('active', b === btn));
      popSeasonDots();
    });
  } else if (item.mode === 'classroom') {
    module.innerHTML = `
      <div class="interaction-card classroom-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="window-grid" id="windowGrid">${Array.from({ length: 32 }, (_, i) => `<button class="window-dot ${i % 7 === 0 || i === 18 ? 'on locked' : ''}" aria-label="教室灯光"></button>`).join('')}</div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：点亮 5 个教室/实验格，把日常学习推向未来协作空间。</p>
      </div>
    `;
    $$('.window-dot').forEach(dot => dot.addEventListener('click', () => {
      if (dot.classList.contains('locked') || dot.classList.contains('on')) return;
      dot.classList.toggle('on');
      const nextCount = Math.min(taskState.required, taskState.done + 1);
      registerTaskStep(`已新增点亮 ${nextCount}/${taskState.required} 个教室/实验格：每一格都代表一次讨论、实验或灵感。`);
    }));
  } else if (item.mode === 'medicine') {
    module.innerHTML = `
      <div class="interaction-card medicine-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="pulse-strip" id="pulseStrip"></div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：触发生命脉冲，未来医学图景会自动展开。</p>
      </div>
    `;
    $('#pulseStrip').addEventListener('click', () => {
      registerTaskStep('仁心、严谨、责任、生命温度，是医学未来最重要的底色。');
    });
  } else {
    module.innerHTML = `
      <div class="interaction-card science-module">
        <div class="module-head"><h3>${item.moduleTitle}</h3><span>${identity.lensTitle}</span></div>
        <div class="constellation" id="constellation">${starHtml('science')}</div>
        <p class="module-copy" id="moduleCopy">${identity.taskLead}：点亮 4 颗星点，把公式变成探索坐标。</p>
      </div>
    `;
    bindStars('科学精神不是一条直线，而是不断被点亮的好奇心。');
  }
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
    <button class="stamp ${unlocked.has(item.id) ? 'unlocked' : ''}" data-index="${idx}" style="--rot:${idx % 2 ? 1.3 : -1.2}deg">
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

function updatePageTransform() {
  const pagesWrap = $('#pages');
  if (!pagesWrap) return;
  pagesWrap.style.transform = 'none';
}

function goTo(index) {
  let target = Math.max(0, Math.min(pages.length - 1, index));
  if (pageIndex === 1 && target > 1 && !identityChosen) {
    showToast('请先选择你的"入园方式"');
    return;
  }
  pageIndex = target;
  updatePageTransform();
  $('#pageNow').textContent = String(pageIndex + 1).padStart(2, '0');
  $('#pageTotal').textContent = String(pages.length).padStart(2, '0');
  pages.forEach((page, idx) => {
    page.classList.toggle('active', idx === pageIndex);
    page.classList.remove('page-ready');
  });
  if (pages[pageIndex].dataset.page === 'collection') renderStamps();
  if (pages[pageIndex].dataset.page === 'ending') updateIdentityPreview();
  requestAnimationFrame(() => requestAnimationFrame(() => pages[pageIndex].classList.add('page-ready')));
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

  renderIdentities();
  renderRoute();
  renderStamps();
  updateLandmark();
  updateIdentityPreview();
  goTo(0);
}

function makePoster() {
  const canvas = $('#posterCanvas');
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const id = identities[currentIdentity];
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, '#0c2f68');
  grad.addColorStop(.52, '#0b4ea2');
  grad.addColorStop(1, '#e8d5a8');
  ctx.fillStyle = grad;
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

  roundRect(ctx, 56, 74, 528, 780, 42, true, false, 'rgba(255,248,232,.92)');
  ctx.fillStyle = '#0b4ea2';
  ctx.font = '900 24px sans-serif';
  ctx.fillText('HUST TIME PASS', 86, 134);
  ctx.fillStyle = 'rgba(22,48,76,.52)';
  ctx.font = '20px sans-serif';
  ctx.fillText(`身份：${id.label}`, 86, 174);

  ctx.fillStyle = '#16304c';
  ctx.font = '900 56px sans-serif';
  wrapText(ctx, id.endingTitle, 86, 280, 470, 66);

  ctx.fillStyle = 'rgba(22,48,76,.68)';
  ctx.font = '28px sans-serif';
  wrapText(ctx, id.endingText, 86, 452, 470, 42);

  roundRect(ctx, 86, 650, 205, 110, 24, true, false, 'rgba(11,78,162,.10)');
  roundRect(ctx, 320, 650, 205, 110, 24, true, false, 'rgba(11,78,162,.10)');
  ctx.fillStyle = '#0b4ea2';
  ctx.font = '900 34px sans-serif';
  ctx.fillText(`${unlocked.size}/12`, 116, 706);
  ctx.fillText(id.routeType, 350, 706);
  ctx.fillStyle = 'rgba(22,48,76,.58)';
  ctx.font = '22px sans-serif';
  ctx.fillText('点亮地标', 116, 742);
  ctx.fillText('路线类型', 350, 742);

  ctx.fillStyle = 'rgba(255,255,255,.86)';
  ctx.font = '24px sans-serif';
  ctx.fillText('时空喻园：现在，遇见未来', 70, 920);
  ctx.fillStyle = 'rgba(255,255,255,.62)';
  ctx.font = '18px sans-serif';
  ctx.fillText('AI 生成内容已标注｜真实照片请使用团队拍摄或授权图片', 70, 956);
  canvas.style.display = 'block';
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
  $('#identityDesk').addEventListener('click', e => {
    const card = e.target.closest('.role-card');
    if (!card) return;
    currentIdentity = card.dataset.identity;
    identityChosen = true;
    $$('#identityDesk .role-card').forEach(node => node.classList.toggle('active', node === card));
    updateIdentityPreview();
    updateLandmark();
    setTimeout(() => goTo(2), 160);
  });
  const identityConfirm = $('#identityConfirm');
  if (identityConfirm) {
    identityConfirm.addEventListener('click', () => {
      if (!identityChosen) return;
      goTo(2);
    });
  }

  $('#campusAccordion').addEventListener('click', e => {
    const target = e.target.closest('.map-pin, .landmark-chip');
    if (target) {
      selectLandmark(target.dataset.index, true);
      return;
    }
    const toggle = e.target.closest('[data-campus-toggle]');
    if (!toggle) return;
    const campus = toggle.dataset.campusToggle;
    openCampus = openCampus === campus ? '' : campus;
    renderRoute();
  });

  $$('[data-next]').forEach(btn => btn.addEventListener('click', () => goTo(pageIndex + 1)));
  $('#prevPage').addEventListener('click', () => goTo(pageIndex - 1));
  $('#nextPage').addEventListener('click', () => goTo(pageIndex + 1));
  $('#goHome').addEventListener('click', () => goTo(0));
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
  $('#makePoster').addEventListener('click', makePoster);
  $('#restart').addEventListener('click', resetExperience);

  let touchStartY = 0;
  let touchStartX = 0;
  let wheelLock = false;
  $('#stage').addEventListener('touchstart', e => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  $('#stage').addEventListener('touchend', e => {
    if (draggingCompare) return;
    const dy = e.changedTouches[0].clientY - touchStartY;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dy) > 80 && Math.abs(dy) > Math.abs(dx) * 1.3) {
      const direction = dy < 0 ? 1 : -1;
      if (direction === -1 || (direction === 1 && !(pageIndex === 1 && !identityChosen))) {
        if (e.target.closest('input, .campus-accordion, .stamp-wall, .interaction-module, .identity-desk, #imageLayers')) return;
      }
      goTo(pageIndex + direction);
    }
  }, { passive: true });
  $('#stage').addEventListener('wheel', e => {
    if (wheelLock) return;
    const direction = e.deltaY > 0 ? 1 : -1;
    if (direction === -1 || (direction === 1 && !(pageIndex === 1 && !identityChosen))) {
      if (e.target.closest('.campus-accordion, .stamp-wall, .interaction-module, .identity-desk, #imageLayers')) return;
    }
    if (Math.abs(e.deltaY) < 24) return;
    wheelLock = true;
    goTo(pageIndex + direction);
    setTimeout(() => { wheelLock = false; }, 760);
  }, { passive: true });
}


function updateStageScale() {
  const baseWidth = 640;
  const baseHeight = 1030;
  const widthScale = window.innerWidth / baseWidth;
  const heightScale = window.innerHeight / baseHeight;
  const isTallPhone = window.innerWidth <= 720 && window.innerHeight / window.innerWidth > baseHeight / baseWidth;
  const scale = isTallPhone ? widthScale : Math.min(widthScale, heightScale);
  const stageHeight = isTallPhone ? Math.max(baseHeight, window.innerHeight / widthScale) : baseHeight;
  document.documentElement.style.setProperty('--stage-scale', scale.toFixed(4));
  document.documentElement.style.setProperty('--stage-h', `${stageHeight.toFixed(2)}px`);
  updatePageTransform();
}

function bindButtonRipple() {
  $('#stage').addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (!btn || btn.disabled) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'btn-ripple';
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 620);
  });
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
  goTo(0);
}

init();
