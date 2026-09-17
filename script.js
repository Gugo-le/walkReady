/* =========================================================
   WALKREADY
   Main JavaScript
========================================================= */


/* =========================================================
   COURSE DATABASE
========================================================= */

const courses = [
  {
    id: 46,
    name: "평택 46코스",
    distance: 14.0,
    officialHours: 4.5,
    level: "보통",
    region: "평택",
    checkpoints: ["반송고", "편의점", "산책로 휴식지"]
  },
  {
    id: 47,
    name: "화성 47코스",
    distance: 18.4,
    officialHours: 5.5,
    level: "쉬움",
    region: "화성",
    checkpoints: ["휴게소", "자전거 길", "물 공급 지점"]
  },
  {
    id: 48,
    name: "화성 48코스",
    distance: 16.6,
    officialHours: 6.0,
    level: "쉬움",
    region: "화성",
    checkpoints: ["학소대교", "예쁜 경관 포인트", "화장실"]
  },
  {
    id: 49,
    name: "안산 49코스",
    distance: 19.0,
    officialHours: 6.5,
    level: "어려움",
    region: "안산",
    checkpoints: ["산책로 입구", "중간 휴식대", "고지대 구간"]
  },
  {
    id: 50,
    name: "안산 50코스",
    distance: 15.4,
    officialHours: 5.0,
    level: "보통",
    region: "안산",
    checkpoints: ["휴게소", "바다 전망대", "터미널"]
  },
  {
    id: 51,
    name: "안산 51코스",
    distance: 15.4,
    officialHours: 5.0,
    level: "보통",
    region: "안산",
    checkpoints: ["편의점", "시작 지점", "정차 가능 구간"]
  },
  {
    id: 52,
    name: "시흥 52코스",
    distance: 16.0,
    officialHours: 5.0,
    level: "매우쉬움",
    region: "시흥",
    checkpoints: ["배곧 역", "수변 산책로", "휴식 공간"]
  },
  {
    id: 53,
    name: "시흥 53코스",
    distance: 15.5,
    officialHours: 4.5,
    level: "매우쉬움",
    region: "시흥",
    checkpoints: ["하천변", "물가 휴식 구역", "종점 경치 포인트"]
  },
  {
    id: 54,
    name: "시흥 54코스",
    distance: 20.4,
    officialHours: 6.0,
    level: "보통",
    region: "시흥",
    checkpoints: ["예배당", "추천 경로 지점", "종점 편의시설"]
  }
];


/* =========================================================
   DEFAULT TRIP PLAN
========================================================= */

const defaultTripPlan = [
  {
    day: 1,
    date: "",
    distance: 23,
    courses: "평택 46코스 → 화성 47코스 일부",
    detail: "46코스를 완주하고 47코스 일부 구간까지 진행",
    lodging: "제부도 씨사이드 숙소",
    lodgingCost: 55825
  },

  {
    day: 2,
    date: "",
    distance: 25,
    courses: "화성 47코스 종료 → 화성 48코스 종료",
    detail: "47코스 남은 구간 + 48코스 완주",
    lodging: "대부도 힐하우스",
    lodgingCost: 48423
  },

  {
    day: 3,
    date: "",
    distance: 34,
    courses: "안산 49코스 → 안산 50코스 종료",
    detail: "49코스와 50코스를 이어서 진행",
    lodging: "대부도 호텔 오라",
    lodgingCost: null
  },

  {
    day: 4,
    date: "",
    distance: 31,
    courses: "안산 51코스 → 시흥 52코스",
    detail: "51코스와 52코스를 진행하고 여행 종료",
    lodging: "배곧 24시 만당",
    lodgingCost: 11000
  }
];


/* =========================================================
   CHECKLIST DATABASE
========================================================= */

const checklistData = {

  walking: [
    {
      id: "shoes",
      name: "트레킹화 / 러닝화"
    },
    {
      id: "socks",
      name: "양말 5~6켤레"
    },
    {
      id: "backpack",
      name: "20~30L 배낭"
    },
    {
      id: "rain",
      name: "우비 / 판초"
    },
    {
      id: "hat",
      name: "모자"
    },
    {
      id: "sunglasses",
      name: "선글라스"
    },
    {
      id: "towel",
      name: "스포츠 타월"
    },
    {
      id: "walking-poles",
      name: "스틱 / 보조 장비"
    },
    {
      id: "zip-bag",
      name: "지퍼백 / 방수팩"
    },
    {
      id: "headlamp",
      name: "보조 랜턴"
    }
  ],

  clothes: [
    {
      id: "tshirt",
      name: "반팔 6~7장"
    },
    {
      id: "shorts",
      name: "반바지 3~4장"
    },
    {
      id: "underwear",
      name: "속옷 5장"
    },
    {
      id: "sleep",
      name: "잠옷"
    },
    {
      id: "long-sleeve",
      name: "얇은 긴팔"
    },
    {
      id: "windbreaker",
      name: "바람막이"
    }
  ],

  electronics: [
    {
      id: "phone",
      name: "휴대폰"
    },
    {
      id: "powerbank",
      name: "보조배터리 20,000mAh"
    },
    {
      id: "cable",
      name: "충전 케이블"
    },
    {
      id: "charger",
      name: "충전기"
    },
    {
      id: "earbuds",
      name: "이어폰"
    },
    {
      id: "watch",
      name: "GPS / 스마트워치"
    }
  ],

  firstAid: [
    {
      id: "blister",
      name: "물집 패치 10~15개"
    },
    {
      id: "tape",
      name: "스포츠 테이프"
    },
    {
      id: "vaseline",
      name: "바세린 / 풋크림"
    },
    {
      id: "sunscreen",
      name: "선크림"
    },
    {
      id: "wet-wipes",
      name: "물티슈"
    },
    {
      id: "tissue",
      name: "휴지"
    },
    {
      id: "medicine",
      name: "개인 상비약"
    },
    {
      id: "bandage",
      name: "밴드"
    }
  ],

  food: [
    {
      id: "water",
      name: "물 1.5~2L"
    },
    {
      id: "electrolyte",
      name: "전해질 / 이온음료"
    },
    {
      id: "energy-bar",
      name: "에너지바"
    },
    {
      id: "jelly",
      name: "젤리 / 간식"
    },
    {
      id: "banana",
      name: "바나나"
    },
    {
      id: "nuts",
      name: "견과류"
    },
    {
      id: "gel",
      name: "에너지젤"
    }
  ]
};


/* =========================================================
   STORAGE
========================================================= */

const STORAGE_KEY = "walkready_v3";


const defaultState = {
  selectedCourses: [46, 47, 48, 49, 50, 51, 52],

  completedCourses: [],

  speed: 3.5,

  tripPlan: defaultTripPlan,

  checklist: {},

  customItems: [],

  transportStart:
    "반송고 → 평택 46코스 시작점\n대중교통 이동 예정",

  transportEnd:
    "시흥 52코스 종료 → 귀가\n오이도역 / 배곧 방향 이동",

  weight: {
    bag: 2.2,
    water: 2.0,
    gear: 1.6,
    food: 0.8,
    other: 0.4
  },

  hydration: {
    hours: 8,
    temperature: 20
  },

  walkSession: {
    active: false,
    elapsedSeconds: 0,
    totalSteps: 0,
    totalDistance: 0,
    startedAt: null
  },

  walkHistory: []
};


let state = loadState();


/* =========================================================
   STORAGE FUNCTIONS
========================================================= */

function deepClone(object) {
  return JSON.parse(JSON.stringify(object));
}


function loadState() {
  try {

    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      return deepClone(defaultState);
    }

    const parsed = JSON.parse(saved);

    return {
      ...deepClone(defaultState),
      ...parsed,

      weight: {
        ...deepClone(defaultState.weight),
        ...(parsed.weight || {})
      },

      hydration: {
        ...deepClone(defaultState.hydration),
        ...(parsed.hydration || {})
      },

      walkSession: {
        ...deepClone(defaultState.walkSession),
        ...(parsed.walkSession || {})
      },

      walkHistory: Array.isArray(parsed.walkHistory)
        ? parsed.walkHistory
        : [],

      completedCourses: Array.isArray(parsed.completedCourses)
        ? parsed.completedCourses
        : [],

      tripPlan:
        Array.isArray(parsed.tripPlan)
          ? parsed.tripPlan
          : deepClone(defaultState.tripPlan),

      checklist:
        parsed.checklist || {},

      customItems:
        Array.isArray(parsed.customItems)
          ? parsed.customItems
          : []
    };

  } catch (error) {

    console.error("저장 데이터 불러오기 실패:", error);

    return deepClone(defaultState);
  }
}


function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}


/* =========================================================
   HELPERS
========================================================= */

function formatNumber(number, digits = 1) {
  return Number(number).toFixed(digits);
}


function formatWon(number) {

  if (
    number === null ||
    number === undefined ||
    Number.isNaN(Number(number))
  ) {
    return "미정";
  }

  return (
    "₩" +
    Number(number).toLocaleString("ko-KR")
  );
}


function minutesToText(minutes) {

  const totalMinutes = Math.round(minutes);

  const hours = Math.floor(totalMinutes / 60);

  const mins = totalMinutes % 60;

  if (hours === 0) {
    return `${mins}분`;
  }

  if (mins === 0) {
    return `${hours}시간`;
  }

  return `${hours}시간 ${mins}분`;
}


function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   COURSE CALCULATIONS
========================================================= */

function getSelectedCourseObjects() {

  return courses.filter(course =>
    state.selectedCourses.includes(course.id)
  );
}


function getSelectedDistance() {

  return getSelectedCourseObjects()
    .reduce(
      (sum, course) => sum + course.distance,
      0
    );
}


function getCompletedCourseDistance() {
  return courses
    .filter(course => state.completedCourses.includes(course.id))
    .reduce((sum, course) => sum + Number(course.distance || 0), 0);
}


function getEstimatedMinutes() {

  const distance = getSelectedDistance();

  if (!state.speed || state.speed <= 0) {
    return 0;
  }

  return (distance / state.speed) * 60;
}


/* =========================================================
   COURSE RENDER
========================================================= */

function getCourseSummary(course) {
  const summaries = {
    "쉬움": "시작이 가볍고 유지가 편한 구간이라 초반 체력 분배가 좋습니다. 편안한 속도로 걷다가 일정에 여유를 두면 적합해요.",
    "보통": "비교적 균형 잡힌 구간으로, 장거리 일정에서 가장 무난한 난이도입니다. 속도와 휴식 시간을 적절히 조절하면 좋습니다.",
    "어려움": "경사가 있거나 체력 소모가 큰 구간이 섞여 있어 조금 더 집중해서 걷는 편이 좋아요. 틈새 휴식과 수분 보충을 계획해두면 훨씬 안정적입니다.",
    "매우쉬움": "짧고 가벼운 구간으로, 체력을 보존하기 좋은 구간입니다. 마지막 구간이나 보조 일정에 넣으면 부담을 줄일 수 있어요.",
    "매우 어려움": "장거리 일정에서 체력 관리가 가장 중요한 구간입니다. 중간중간 쉬는 시간을 계획하고, 무리하지 않는 속도가 좋습니다."
  };

  return summaries[course.level] || "장거리 걷기에서는 속도와 휴식 타이밍을 조절하는 것이 가장 중요해요.";
}


function openCourseModal(courseId) {
  const course = courses.find(item => item.id === courseId);
  const modal = document.getElementById("courseModal");

  if (!course || !modal) return;

  document.getElementById("courseModalTitle").textContent = course.name;
  document.getElementById("courseModalRegion").textContent = course.region;
  document.getElementById("courseModalDistance").textContent = `${course.distance} km`;
  document.getElementById("courseModalLevel").textContent = course.level;
  document.getElementById("courseModalTime").textContent = `${course.officialHours}시간`;
  document.getElementById("courseModalSummary").textContent = getCourseSummary(course);

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}


function closeCourseModal() {
  const modal = document.getElementById("courseModal");

  if (!modal) return;

  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}


function renderCourses() {

  const container =
    document.getElementById("courseGrid");

  if (!container) return;

  container.innerHTML = "";

  courses.forEach(course => {

    const selected =
      state.selectedCourses.includes(course.id);

    const completed =
      state.completedCourses.includes(course.id);

    const card =
      document.createElement("article");

    card.className =
      `course-card ${selected ? "selected" : ""} ${completed ? "completed" : ""}`;

    card.dataset.courseId = course.id;

    const levelLabel = completed ? "완주" : escapeHTML(course.level);
    const actionArea = selected && !completed
      ? `<button class="course-finish-button" type="button" data-finish-id="${course.id}">종료</button>`
      : `<span class="course-level">${levelLabel}</span>`;

    card.innerHTML = `
      <div class="course-top">

        <span class="course-number">
          COURSE ${course.id}
        </span>

        <span class="course-check">
          ${completed ? "완주" : selected ? "시작" : ""}
        </span>

      </div>

      <h3>${escapeHTML(course.name)}</h3>

      <p>
        ${escapeHTML(course.region)}
        · 공식 ${course.officialHours}시간
      </p>

      <div class="course-bottom">

        <strong class="course-distance">
          ${course.distance} km
        </strong>

        ${actionArea}

      </div>
    `;

    card.addEventListener("click", event => {
      if (event.target && event.target.closest(".course-finish-button")) {
        return;
      }

      if (!selected) {
        toggleCourse(course.id);
      }
    });

    const finishButton = card.querySelector(".course-finish-button");

    if (finishButton) {
      finishButton.addEventListener("click", event => {
        event.stopPropagation();
        finishCourse(Number(finishButton.dataset.finishId));
      });
    }

    container.appendChild(card);
  });

  updateCourseSummary();
  renderCompletedCourseList();
}


function finishCourse(id) {
  if (!state.selectedCourses.includes(id)) {
    toggleCourse(id);
    return;
  }

  const existingIndex = state.completedCourses.indexOf(id);

  if (existingIndex >= 0) {
    return;
  }

  const course = courses.find(item => item.id === id);
  if (!course) return;

  const elapsedSeconds = state.walkSession?.elapsedSeconds || 0;
  const minutesTaken = Math.max(
    1,
    Math.round(elapsedSeconds / 60 || course.officialHours * 60)
  );

  state.completedCourses.push(id);
  state.walkHistory.push({
    date: new Date().toLocaleString("ko-KR", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    }),
    distance: Number(course.distance).toFixed(1),
    duration: minutesToText(minutesTaken),
    label: `${course.name} 완주`
  });

  saveState();
  renderCourses();
  updateAllStats();
  renderWalkHistory();
}


function toggleCourse(id) {

  if (state.selectedCourses.includes(id)) {

    state.selectedCourses =
      state.selectedCourses.filter(
        courseId => courseId !== id
      );

    state.completedCourses =
      state.completedCourses.filter(
        courseId => courseId !== id
      );

  } else {

    state.selectedCourses.push(id);

    state.selectedCourses.sort(
      (a, b) => a - b
    );
  }

  saveState();

  renderCourses();
  updateAllStats();
}


function updateCourseSummary() {

  const distance =
    getSelectedDistance();

  const estimated =
    getEstimatedMinutes();

  const count =
    state.selectedCourses.length;

  const total =
    courses.length;

  const percent =
    total === 0
      ? 0
      : Math.round((count / total) * 100);

  const selectedDistance =
    document.getElementById("selectedDistance");

  const selectedTime =
    document.getElementById("selectedTime");

  const selectedCount =
    document.getElementById("selectedCourseCount");


  if (selectedDistance) {
    selectedDistance.textContent =
      `${formatNumber(distance)} km`;
  }

  if (selectedTime) {
    selectedTime.textContent =
      minutesToText(estimated);
  }

  if (selectedCount) {
    selectedCount.textContent =
      `${count}개`;
  }
}


/* =========================================================
   SPEED
========================================================= */

function updateSpeed() {

  const input =
    document.getElementById("speedInput");

  if (!input) return;

  state.speed =
    Number(input.value);

  const value =
    document.getElementById("speedValue");

  if (value) {
    value.textContent =
      formatNumber(state.speed);
  }

  saveState();

  updateCourseSummary();
  updateAllStats();
}


function initSpeed() {

  const input =
    document.getElementById("speedInput");

  if (!input) return;

  input.value = state.speed;

  input.addEventListener(
    "input",
    updateSpeed
  );

  updateSpeed();
}


/* =========================================================
   HERO / STATS
========================================================= */

function formatTimer(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const hours = String(Math.floor(safeSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((safeSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}


function updateWalkSessionDisplay() {
  const badge = document.getElementById("walkStatusBadge");
  const badgeText = document.getElementById("walkStatusText");
  const sessionDistance = document.getElementById("sessionDistance");
  const sessionTimer = document.getElementById("sessionTimer");
  const walkButton = document.getElementById("toggleWalkButton");

  if (badge) {
    badge.classList.toggle("walking", state.walkSession.active);
  }

  if (badgeText) {
    badgeText.textContent = state.walkSession.active ? "WALKING" : "READY";
  }

  const totalVisibleDistance =
    Number(state.walkSession.totalDistance) + getCompletedCourseDistance();

  if (sessionDistance) {
    sessionDistance.textContent = Number(totalVisibleDistance).toFixed(1);
  }

  if (sessionTimer) {
    sessionTimer.textContent = formatTimer(state.walkSession.elapsedSeconds);
  }

  if (walkButton) {
    walkButton.textContent = state.walkSession.active ? "여행 중지" : "여행 시작";
  }
}


function renderWalkHistory() {
  const container = document.getElementById("walkHistoryList");

  if (!container) return;

  if (!state.walkHistory.length) {
    container.innerHTML = '<div class="session-log-empty">여행을 시작하면 기록이 여기에 쌓여요.</div>';
    return;
  }

  const history = [...state.walkHistory].reverse();

  container.innerHTML = history.map(entry => `
    <div class="session-log-item">
      <strong>${escapeHTML(entry.date)}</strong>
      <div class="session-log-metric">
        <span>${entry.distance} km</span>
      </div>
      <div class="session-log-metric">
        <span>${entry.duration}</span>
        <span>${entry.label}</span>
      </div>
    </div>
  `).join("");
}


function renderCompletedCourseList() {
  const container = document.getElementById("completedCourseList");

  if (!container) return;

  const completed = courses.filter(course =>
    state.completedCourses.includes(course.id)
  );

  if (!completed.length) {
    container.innerHTML = '<li class="completed-course-empty">아직 완주한 코스가 없어요.</li>';
    return;
  }

  container.innerHTML = completed.map(course => `
    <li class="completed-course-item">
      <span>${escapeHTML(course.name)}</span>
      <strong>${course.distance} km</strong>
    </li>
  `).join("");
}


function tickWalkSession() {
  if (!state.walkSession.active) return;

  state.walkSession.elapsedSeconds += 1;
  state.walkSession.totalDistance = Number(
    (state.walkSession.totalDistance + (state.speed / 3600) * 1.4).toFixed(2)
  );

  updateWalkSessionDisplay();
  saveState();
}


function toggleWalkSession() {
  const session = state.walkSession;

  if (!session.active) {
    session.active = true;
    session.startedAt = Date.now();
    session.elapsedSeconds = Number(session.elapsedSeconds || 0);
  } else {
    const endedRecord = {
      date: new Date().toLocaleString("ko-KR", {
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      distance: Number(session.totalDistance).toFixed(1),
      duration: formatTimer(session.elapsedSeconds),
      label: "도보 여행 종료"
    };

    state.walkHistory.push(endedRecord);
    state.walkSession = {
      active: false,
      elapsedSeconds: 0,
      totalSteps: 0,
      totalDistance: 0,
      startedAt: null
    };
  }

  saveState();
  updateWalkSessionDisplay();
  renderWalkHistory();
}


function initWalkSession() {
  const button = document.getElementById("toggleWalkButton");

  if (button) {
    button.addEventListener("click", toggleWalkSession);
  }

  updateWalkSessionDisplay();

  window.setInterval(() => {
    if (state.walkSession.active) {
      tickWalkSession();
    }
  }, 1000);
}


function updateAllStats() {

  const distance =
    getSelectedDistance();

  const minutes =
    getEstimatedMinutes();

  const count =
    state.selectedCourses.length;


  const heroDistance =
    document.getElementById("heroDistance");

  const heroCourseCount =
    document.getElementById("heroCourseCount");

  const heroDayCount =
    document.getElementById("heroDayCount");

  const heroSpeed =
    document.getElementById("heroSpeed");

  const heroCompletedCourses =
    document.getElementById("heroCompletedCourses");

  const heroCompletedDistance =
    document.getElementById("heroCompletedDistance");


  if (heroDistance) {
    heroDistance.textContent =
      formatNumber(distance + getCompletedCourseDistance());
  }

  if (heroCourseCount) {
    heroCourseCount.textContent =
      count;
  }

  if (heroDayCount) {
    heroDayCount.textContent =
      state.tripPlan.length;
  }

  if (heroSpeed) {
    heroSpeed.textContent =
      formatNumber(state.speed);
  }

  if (heroCompletedCourses) {
    heroCompletedCourses.textContent =
      `${state.completedCourses.length}개`;
  }

  if (heroCompletedDistance) {
    heroCompletedDistance.textContent =
      `${formatNumber(getCompletedCourseDistance())} km`;
  }


  const statDistance =
    document.getElementById("statDistance");

  const statWalkingTime =
    document.getElementById("statWalkingTime");

  const statDays =
    document.getElementById("statDays");


  if (statDistance) {
    statDistance.textContent =
      `${formatNumber(distance)} km`;
  }

  if (statWalkingTime) {
    statWalkingTime.textContent =
      minutesToText(minutes);
  }

  if (statDays) {
    statDays.textContent =
      `${state.tripPlan.length}일`;
  }

  renderCompletedCourseList();
  updateChecklistProgress();
}


/* =========================================================
   TRIP ITINERARY
========================================================= */

function renderItinerary() {

  const container =
    document.getElementById("itinerary");

  if (!container) return;

  container.innerHTML = "";

  state.tripPlan.forEach((day, index) => {

    const card =
      document.createElement("article");

    card.className = "day-card";

    const lodgingCostValue =
      day.lodgingCost === null ||
      day.lodgingCost === undefined
        ? ""
        : day.lodgingCost;

    const dateText =
      day.date
        ? day.date
        : `DAY ${day.day}`;

    card.innerHTML = `

      <div class="day-number">
        D${day.day}
      </div>

      <div class="day-main">

        <span class="day-date">
          ${escapeHTML(dateText)}
        </span>

        <h3>
          ${escapeHTML(day.courses)}
        </h3>

        <p>
          ${escapeHTML(day.detail)}
        </p>

        <div class="day-tags">
          <span class="day-tag">
            ${day.distance} km
          </span>

          <span class="day-tag">
            ${Math.round(day.distance / state.speed * 10) / 10}h+
          </span>

          <span class="day-tag">
            DAY ${day.day}
          </span>
        </div>

      </div>

      <div class="day-side">

        <div class="day-distance">

          <strong>
            ${day.distance} km
          </strong>

          <span>
            사용자 일정 기준
          </span>

        </div>

        <div class="lodging-box">

          <label>
            OVERNIGHT
          </label>

          <input
            class="lodging-name"
            type="text"
            value="${escapeHTML(day.lodging || "")}"
            data-index="${index}"
            data-field="lodging"
            placeholder="숙소명"
          >

          <input
            class="lodging-cost"
            type="number"
            value="${lodgingCostValue}"
            data-index="${index}"
            data-field="lodgingCost"
            placeholder="숙박비"
            min="0"
            step="1"
          >

        </div>

      </div>
    `;

    container.appendChild(card);
  });


  bindItineraryInputs();

  updateLodgingSummary();
}


function bindItineraryInputs() {

  const inputs =
    document.querySelectorAll(
      ".lodging-name, .lodging-cost"
    );

  inputs.forEach(input => {

    input.addEventListener(
      "change",
      handleItineraryInput
    );

  });
}


function handleItineraryInput(event) {

  const input =
    event.target;

  const index =
    Number(input.dataset.index);

  const field =
    input.dataset.field;


  if (!state.tripPlan[index]) return;


  if (field === "lodging") {

    state.tripPlan[index].lodging =
      input.value;

  } else if (field === "lodgingCost") {

    if (input.value === "") {

      state.tripPlan[index].lodgingCost =
        null;

    } else {

      state.tripPlan[index].lodgingCost =
        Number(input.value);

    }
  }


  saveState();

  updateLodgingSummary();
}


function updateLodgingSummary() {

  const total =
    state.tripPlan.reduce(
      (sum, day) => {

        if (
          day.lodgingCost === null ||
          day.lodgingCost === undefined
        ) {
          return sum;
        }

        return sum + Number(day.lodgingCost);
      },
      0
    );


  const element =
    document.getElementById("knownLodgingCost");

  if (element) {
    element.textContent =
      formatWon(total);
  }
}


/* =========================================================
   TRANSPORT NOTES
========================================================= */

function initTransport() {

  const start =
    document.getElementById("transportStart");

  const end =
    document.getElementById("transportEnd");


  if (start) {

    start.value =
      state.transportStart;

    start.addEventListener(
      "input",
      () => {

        state.transportStart =
          start.value;

        saveState();

      }
    );
  }


  if (end) {

    end.value =
      state.transportEnd;

    end.addEventListener(
      "input",
      () => {

        state.transportEnd =
          end.value;

        saveState();

      }
    );
  }
}


/* =========================================================
   CHECKLIST
========================================================= */

function getAllChecklistItems() {

  const all = [];

  Object.entries(checklistData)
    .forEach(([category, items]) => {

      items.forEach(item => {

        all.push({
          ...item,
          category
        });

      });

    });


  state.customItems.forEach(item => {

    all.push({
      ...item,
      category: "custom"
    });

  });


  return all;
}


function renderChecklistCategory(
  category,
  elementId,
  countElementId
) {

  const container =
    document.getElementById(elementId);

  if (!container) return;


  const items =
    checklistData[category] || [];


  container.innerHTML = "";


  items.forEach(item => {

    const checked =
      Boolean(state.checklist[item.id]);


    const label =
      document.createElement("label");

    label.className =
      `check-item ${checked ? "checked" : ""}`;


    label.innerHTML = `

      <input
        type="checkbox"
        ${checked ? "checked" : ""}
        data-check-id="${escapeHTML(item.id)}"
      >

      <span class="check-box">
        ${checked ? "✓" : ""}
      </span>

      <span class="check-name">
        ${escapeHTML(item.name)}
      </span>

    `;


    const checkbox =
      label.querySelector("input");


    checkbox.addEventListener(
      "change",
      () => {

        state.checklist[item.id] =
          checkbox.checked;

        saveState();

        renderChecklist();

      }
    );


    container.appendChild(label);

  });


  updateCategoryCount(
    category,
    items,
    countElementId
  );
}


function updateCategoryCount(
  category,
  items,
  countElementId
) {

  const element =
    document.getElementById(
      countElementId
    );

  if (!element) return;


  const checked =
    items.filter(item =>
      state.checklist[item.id]
    ).length;


  element.textContent =
    `${checked} / ${items.length}`;
}


function renderCustomItems() {

  const categoryContainer =
    document.getElementById("foodItems");

  if (!categoryContainer) return;


  const oldCustom =
    categoryContainer.querySelectorAll(
      ".custom-check-item"
    );


  oldCustom.forEach(item =>
    item.remove()
  );


  state.customItems.forEach(item => {

    const checked =
      Boolean(state.checklist[item.id]);


    const label =
      document.createElement("label");

    label.className =
      `check-item custom-check-item ${checked ? "checked" : ""}`;


    label.innerHTML = `

      <input
        type="checkbox"
        ${checked ? "checked" : ""}
      >

      <span class="check-box">
        ${checked ? "✓" : ""}
      </span>

      <span class="check-name">
        ${escapeHTML(item.name)}
      </span>

    `;


    const checkbox =
      label.querySelector("input");


    checkbox.addEventListener(
      "change",
      () => {

        state.checklist[item.id] =
          checkbox.checked;

        saveState();

        renderChecklist();

      }
    );


    categoryContainer.appendChild(label);

  });
}


function renderChecklist() {

  renderChecklistCategory(
    "walking",
    "walkingItems",
    "categoryCountWalking"
  );

  renderChecklistCategory(
    "clothes",
    "clothesItems",
    "categoryCountClothes"
  );

  renderChecklistCategory(
    "electronics",
    "electronicsItems",
    "categoryCountElectronics"
  );

  renderChecklistCategory(
    "firstAid",
    "firstAidItems",
    "categoryCountFirstAid"
  );

  renderChecklistCategory(
    "food",
    "foodItems",
    "categoryCountFood"
  );

  renderCustomItems();

  updateChecklistProgress();
}


function updateChecklistProgress() {

  const all =
    getAllChecklistItems();


  const total =
    all.length;


  const completed =
    all.filter(item =>
      state.checklist[item.id]
    ).length;


  const percent =
    total === 0
      ? 0
      : Math.round(
          (completed / total) * 100
        );


  const progressText =
    document.getElementById(
      "checkProgressText"
    );

  const progressBar =
    document.getElementById(
      "checkProgressBar"
    );

  const statChecklist =
    document.getElementById(
      "statChecklist"
    );


  if (progressText) {
    progressText.textContent =
      `${percent}%`;
  }

  if (progressBar) {
    progressBar.style.width =
      `${percent}%`;
  }

  if (statChecklist) {
    statChecklist.textContent =
      `${percent}%`;
  }
}


function addCustomItem() {

  const input =
    document.getElementById(
      "customItemInput"
    );

  if (!input) return;


  const name =
    input.value.trim();


  if (!name) return;


  const id =
    `custom-${Date.now()}`;


  state.customItems.push({
    id,
    name
  });


  state.checklist[id] =
    false;


  input.value = "";


  saveState();

  renderChecklist();
}


function initChecklist() {

  const button =
    document.getElementById(
      "addCustomItem"
    );

  const input =
    document.getElementById(
      "customItemInput"
    );


  if (button) {

    button.addEventListener(
      "click",
      addCustomItem
    );

  }


  if (input) {

    input.addEventListener(
      "keydown",
      event => {

        if (event.key === "Enter") {
          addCustomItem();
        }

      }
    );

  }


  renderChecklist();
}


/* =========================================================
   BACKPACK WEIGHT
========================================================= */

const weightFields = [
  "bagWeight",
  "waterWeight",
  "gearWeight",
  "foodWeight",
  "otherWeight"
];


function updateWeight() {

  const bag =
    Number(
      document.getElementById("bagWeight").value
    );

  const water =
    Number(
      document.getElementById("waterWeight").value
    );

  const gear =
    Number(
      document.getElementById("gearWeight").value
    );

  const food =
    Number(
      document.getElementById("foodWeight").value
    );

  const other =
    Number(
      document.getElementById("otherWeight").value
    );


  state.weight = {
    bag,
    water,
    gear,
    food,
    other
  };


  const total =
    bag +
    water +
    gear +
    food +
    other;


  const totalWeight =
    document.getElementById(
      "totalWeight"
    );

  const weightMeter =
    document.getElementById(
      "weightMeter"
    );

  const weightStatus =
    document.getElementById(
      "weightStatus"
    );


  if (totalWeight) {

    totalWeight.textContent =
      formatNumber(total);

  }


  if (weightMeter) {

    const percent =
      Math.min(
        100,
        (total / 10) * 100
      );

    weightMeter.style.width =
      `${percent}%`;

  }


  if (weightStatus) {

    if (total <= 6) {

      weightStatus.textContent =
        "적정 범위";

    } else if (total <= 8) {

      weightStatus.textContent =
        "조금 무거움";

    } else {

      weightStatus.textContent =
        "무게 줄이기 권장";

    }

  }


  saveState();
}


function initWeight() {

  const mapping = {
    bagWeight: "bag",
    waterWeight: "water",
    gearWeight: "gear",
    foodWeight: "food",
    otherWeight: "other"
  };


  Object.entries(mapping)
    .forEach(([elementId, key]) => {

      const input =
        document.getElementById(
          elementId
        );

      if (!input) return;


      input.value =
        state.weight[key];


      input.addEventListener(
        "input",
        updateWeight
      );

    });


  updateWeight();
}


/* =========================================================
   HYDRATION
========================================================= */

function updateHydration() {

  const hours =
    Number(
      document.getElementById(
        "walkingHours"
      ).value
    );

  const temperature =
    Number(
      document.getElementById(
        "temperatureInput"
      ).value
    );


  state.hydration = {
    hours,
    temperature
  };


  /*
    매우 단순한 추정 공식.

    기본:
    0.3L / 걷기시간

    더운 날:
    온도에 따라 추가

    최소 1.5L
    최대 4.0L
  */

  let water =
    hours * 0.3;


  if (temperature >= 25) {
    water += 0.5;
  }

  if (temperature >= 30) {
    water += 0.7;
  }


  water =
    Math.max(
      1.5,
      Math.min(
        4.0,
        water
      )
    );


  const element =
    document.getElementById(
      "waterRecommendation"
    );


  if (element) {
    element.textContent =
      formatNumber(water);
  }


  saveState();
}


function initHydration() {

  const hours =
    document.getElementById(
      "walkingHours"
    );

  const temp =
    document.getElementById(
      "temperatureInput"
    );


  if (!hours || !temp) return;


  hours.value =
    state.hydration.hours;

  temp.value =
    state.hydration.temperature;


  hours.addEventListener(
    "input",
    updateHydration
  );

  temp.addEventListener(
    "input",
    updateHydration
  );


  updateHydration();
}


/* =========================================================
   WEATHER
========================================================= */


/*
  대표 좌표.

  실제 경기둘레길 전 구간을 하나의 좌표로
  표현하는 것은 정확하지 않기 때문에
  화성/안산권 대표 위치를 사용한다.
*/

const weatherLocation = {
  latitude: 37.16,
  longitude: 126.84,
  name: "화성 · 경기"
};


function weatherCodeToText(code) {

  const map = {

    0: "맑음",

    1: "대체로 맑음",
    2: "부분적으로 흐림",
    3: "흐림",

    45: "안개",
    48: "안개",

    51: "약한 이슬비",
    53: "이슬비",
    55: "강한 이슬비",

    61: "약한 비",
    63: "비",
    65: "강한 비",

    71: "약한 눈",
    73: "눈",
    75: "강한 눈",

    80: "소나기",
    81: "소나기",
    82: "강한 소나기",

    95: "뇌우",
    96: "우박 동반 뇌우",
    99: "강한 뇌우"

  };


  return (
    map[code] ||
    "날씨 정보"
  );
}


function getWeatherRecommendation(temp, precipitation, wind) {

  if (temp >= 30) {
    return {
      title: "폭염 대비가 우선이에요",
      text: "모자, 얇은 긴팔, 충분한 물을 준비하고, 한 시간마다 물 섭취를 점검해보세요. 더운 날에는 여유를 두고 걷는 게 안전합니다."
    };
  }

  if (temp <= 5) {
    return {
      title: "추운 날은 체온 관리가 중요해요",
      text: "바람막이, 얇은 방한 레이어, 장갑을 챙기고 발의 체온 유지에 신경 쓰세요. 찬 바람이 심하면 걷기 속도를 조절하는 게 좋아요."
    };
  }

  if (precipitation >= 2 || wind >= 20) {
    return {
      title: "비·바람 대비가 필요해요",
      text: "우비, 방수팩, 신발 방수 처리, 실내 보관용 장비를 준비하세요. 바람이 강하면 배낭 고정 상태를 점검하고, 얇은 바람막이를 꼭 챙기는 게 좋아요."
    };
  }

  if (temp >= 24) {
    return {
      title: "따뜻한 날은 가볍게",
      text: "모자와 선크림, 충분한 수분을 챙기면 좋습니다. 얇은 옷과 가벼운 배낭으로 체온 상승을 막아주는 편이 편해요."
    };
  }

  if (temp <= 15) {
    return {
      title: "서늘한 날엔 복장 레이어가 핵심",
      text: "가벼운 긴팔, 바람막이, 얇은 겉옷을 준비하면 기온 변화에 대응하기 좋습니다. 체온이 떨어지기 전에 용의주도하게 보완하세요."
    };
  }

  return {
    title: "산뜻한 걷기 날씨예요",
    text: "기본 준비물과 함께 수분, 간식, 모자를 챙기면 가장 무난합니다. 걷기 전 배낭 무게만 한번 더 확인해보세요."
  };
}


function updateWeatherRecommendation(temp, precipitation, wind) {

  const recommendation =
    getWeatherRecommendation(
      Number(temp),
      Number(precipitation),
      Number(wind)
    );

  const titleElement =
    document.getElementById("weatherTipTitle");

  const textElement =
    document.getElementById("weatherTipText");

  if (titleElement) {
    titleElement.textContent =
      recommendation.title;
  }

  if (textElement) {
    textElement.textContent =
      recommendation.text;
  }
}


async function loadWeather() {

  const tempElement =
    document.getElementById(
      "weatherTemperature"
    );

  const descriptionElement =
    document.getElementById(
      "weatherDescription"
    );

  const feelsElement =
    document.getElementById(
      "weatherFeels"
    );

  const rainElement =
    document.getElementById(
      "weatherRain"
    );

  const windElement =
    document.getElementById(
      "weatherWind"
    );

  const locationElement =
    document.getElementById(
      "weatherLocation"
    );


  if (locationElement) {
    locationElement.textContent =
      weatherLocation.name;
  }


  if (descriptionElement) {
    descriptionElement.textContent =
      "날씨 정보를 불러오는 중...";
  }


  const url =
    "https://api.open-meteo.com/v1/forecast" +
    `?latitude=${weatherLocation.latitude}` +
    `&longitude=${weatherLocation.longitude}` +
    "&current=temperature_2m," +
    "apparent_temperature," +
    "precipitation," +
    "weather_code," +
    "wind_speed_10m";


  try {

    const response =
      await fetch(url);


    if (!response.ok) {
      throw new Error(
        "Weather API error"
      );
    }


    const data =
      await response.json();


    const current =
      data.current;


    if (tempElement) {

      tempElement.textContent =
        `${Math.round(current.temperature_2m)}°`;

    }


    if (descriptionElement) {

      descriptionElement.textContent =
        weatherCodeToText(
          current.weather_code
        );

    }

    updateWeatherRecommendation(
      current.temperature_2m,
      current.precipitation,
      current.wind_speed_10m
    );


    if (feelsElement) {

      feelsElement.textContent =
        `${Math.round(current.apparent_temperature)}°`;

    }


    if (rainElement) {

      rainElement.textContent =
        `${Number(current.precipitation).toFixed(1)} mm`;

    }


    if (windElement) {

      windElement.textContent =
        `${Math.round(current.wind_speed_10m)} km/h`;

    }

  } catch (error) {

    console.error(error);


    if (descriptionElement) {

      descriptionElement.textContent =
        "날씨 정보를 불러오지 못했습니다.";

    }

    if (tempElement) {
      tempElement.textContent =
        "--°";
    }

    if (feelsElement) {
      feelsElement.textContent =
        "--°";
    }

    if (rainElement) {
      rainElement.textContent =
        "-- mm";
    }

    if (windElement) {
      windElement.textContent =
        "-- km/h";
    }

    updateWeatherRecommendation(
      20,
      0,
      8
    );
  }
}


function initWeather() {

  const button =
    document.getElementById(
      "loadWeather"
    );


  if (button) {

    button.addEventListener(
      "click",
      loadWeather
    );

  }


  loadWeather();
}


/* =========================================================
   COURSE BUTTONS
========================================================= */

function initCourseButtons() {

  const all =
    document.getElementById(
      "selectAllCourses"
    );

  const clear =
    document.getElementById(
      "clearCourses"
    );


  if (all) {

    all.addEventListener(
      "click",
      () => {

        state.selectedCourses =
          courses.map(course =>
            course.id
          );

        saveState();

        renderCourses();

        updateAllStats();

      }
    );

  }


  if (clear) {

    clear.addEventListener(
      "click",
      () => {

        state.selectedCourses = [];

        saveState();

        renderCourses();

        updateAllStats();

      }
    );

  }
}


/* =========================================================
   RESET PLAN
========================================================= */

function resetPlan() {

  const confirmed =
    window.confirm(
      "기본 WALKREADY 일정으로 복구할까요?\n\n현재 수정한 일정과 숙소 정보가 기본값으로 돌아갑니다."
    );


  if (!confirmed) return;


  state.tripPlan =
    deepClone(
      defaultTripPlan
    );


  state.selectedCourses =
    [46, 47, 48, 49, 50, 51, 52];


  state.speed =
    3.5;


  saveState();


  renderItinerary();
  renderCourses();

  const speedInput =
    document.getElementById(
      "speedInput"
    );

  if (speedInput) {
    speedInput.value =
      state.speed;
  }

  updateSpeed();
  updateAllStats();
}


function initResetButton() {

  const button =
    document.getElementById(
      "resetPlanButton"
    );


  if (button) {

    button.addEventListener(
      "click",
      resetPlan
    );

  }
}


/* =========================================================
   MOBILE NAV
========================================================= */

function initMobileNav() {

  const button =
    document.getElementById(
      "navMenuButton"
    );

  const nav =
    document.getElementById(
      "mobileNav"
    );


  if (!button || !nav) return;


  button.addEventListener(
    "click",
    () => {

      nav.classList.toggle(
        "open"
      );

    }
  );


  nav.querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => {

          nav.classList.remove(
            "open"
          );

        }
      );

    });
}


/* =========================================================
   CLEAR STORAGE
========================================================= */

function initClearStorage() {

  const button =
    document.getElementById(
      "clearStorageButton"
    );


  if (!button) return;


  button.addEventListener(
    "click",
    () => {

      const confirmed =
        window.confirm(
          "WALKREADY에 저장된 모든 데이터를 초기화할까요?"
        );


      if (!confirmed) return;


      localStorage.removeItem(
        STORAGE_KEY
      );


      state =
        deepClone(
          defaultState
        );


      location.reload();

    }
  );
}


/* =========================================================
   SHARE / EXPORT
========================================================= */

function showStatusMessage(message) {

  const statusElement =
    document.getElementById(
      "shareStatus"
    );

  if (!statusElement) return;

  statusElement.textContent = message;
  statusElement.classList.add("visible");

  window.clearTimeout(showStatusMessage.timeoutId);

  showStatusMessage.timeoutId =
    window.setTimeout(() => {
      statusElement.classList.remove("visible");
      statusElement.textContent = "";
    }, 1800);
}


function getTripSummaryText() {

  const selectedCourseNames =
    state.selectedCourses
      .map(courseId =>
        courses.find(course => course.id === courseId)?.name
      )
      .filter(Boolean);

  const totalDistance =
    getSelectedDistance();

  const totalMinutes =
    getEstimatedMinutes();

  const checklistItems =
    getAllChecklistItems();

  const completedChecklist =
    checklistItems.filter(item =>
      state.checklist[item.id]
    ).length;

  const totalWeight =
    Object.values(state.weight)
      .reduce(
        (sum, value) => sum + Number(value || 0),
        0
      );

  const waterText =
    document.getElementById("waterRecommendation")?.textContent || "2.3";

  return [
    "[WALKREADY 여행 계획]",
    `- 코스: ${selectedCourseNames.join(", ") || "선택된 코스 없음"}`,
    `- 총 거리: ${formatNumber(totalDistance)} km`,
    `- 예상 소요: ${minutesToText(totalMinutes)}`,
    `- 준비물: ${completedChecklist} / ${checklistItems.length} 완료`,
    `- 배낭 무게: ${formatNumber(totalWeight)} kg`,
    `- 권장 수분: ${waterText} L`,
    "",
    "- 숙소 정보:",
    ...state.tripPlan.map(day =>
      `  Day ${day.day}: ${day.lodging || "숙소 미입력"} / ${day.distance}km`
    )
  ].join("\n");
}


async function shareTripPlan() {

  const planText =
    getTripSummaryText();

  const shareData = {
    title: "WALKREADY 여행 계획",
    text: planText,
    url: window.location.href
  };

  try {

    if (navigator.share) {
      await navigator.share(shareData);
      showStatusMessage("공유 완료");
      return;
    }

    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(planText);
      showStatusMessage("복사 완료");
      return;
    }

    const fallback =
      document.createElement("textarea");

    fallback.value = planText;
    fallback.setAttribute("readonly", "true");
    fallback.style.position = "fixed";
    fallback.style.top = "-9999px";
    document.body.appendChild(fallback);
    fallback.select();
    document.execCommand("copy");
    document.body.removeChild(fallback);
    showStatusMessage("복사 완료");

  } catch (error) {

    if (error && error.name === "AbortError") {
      return;
    }

    console.error("공유 실패:", error);
    showStatusMessage("공유 실패");
  }
}


function initShareButton() {

  const button =
    document.getElementById(
      "sharePlanButton"
    );

  if (!button) return;

  button.addEventListener(
    "click",
    shareTripPlan
  );
}


/* =========================================================
   PWA INSTALL
========================================================= */

let deferredInstallPrompt = null;


function initPwaSupport() {

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("./sw.js")
      .catch(error => {
        console.error("Service Worker 등록 실패:", error);
      });
  }

  const installButton =
    document.getElementById(
      "installAppButton"
    );

  if (!installButton) return;

  const showInstallButton = () => {
    installButton.hidden = false;
    installButton.style.display = "inline-flex";
  };

  const hideInstallButton = () => {
    installButton.hidden = true;
    installButton.style.display = "none";
  };

  installButton.addEventListener(
    "click",
    async () => {
      if (!deferredInstallPrompt) {
        showStatusMessage("브라우저에서 설치를 지원하지 않아요");
        return;
      }

      deferredInstallPrompt.prompt();

      const choice = await deferredInstallPrompt.userChoice;

      if (choice.outcome === "accepted") {
        showStatusMessage("앱 설치 완료");
      }

      deferredInstallPrompt = null;
      hideInstallButton();
    }
  );

  window.addEventListener(
    "beforeinstallprompt",
    event => {
      event.preventDefault();
      deferredInstallPrompt = event;
      showInstallButton();
    }
  );

  window.addEventListener(
    "appinstalled",
    () => {
      hideInstallButton();
      showStatusMessage("앱이 설치되었어요");
    }
  );
}


/* =========================================================
   INIT
========================================================= */

function init() {
  initChecklist();
}


/* =========================================================
   START
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  init
);