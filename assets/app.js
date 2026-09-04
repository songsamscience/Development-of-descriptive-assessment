/* ==========================================================================
   송쌤과학 서논술형 평가 계획 및 문항 개발 제작 사이트
   app.js
   ========================================================================== */
(function () {
'use strict';

/* ======================================================================
   PART 1. 자료
   ====================================================================== */

/* 1-1. 반응 지시어 */
var VERBS = [
  ['요약하시오', '글이나 자료에 나타난 중심 생각을 체계적으로 정리한다.', 'DOK 2'],
  ['분류하시오', '유사한 특성을 갖는 대상을 유목화한다. 하위 개념을 상위 개념으로 묶어 간다.', 'DOK 2'],
  ['구분하시오', '대상·개념을 유형에 따라 나눈다. 상위 개념을 하위 개념으로 나눈다.', 'DOK 2'],
  ['비교하시오', '두 개 이상의 대상에서 공통점과 차이점을 드러내어 진술한다.', 'DOK 2'],
  ['대조하시오', '비교 대상의 차이점을 강조하여 진술한다.', 'DOK 2'],
  ['묘사하시오', '무엇에 대해 말하는지 알 수 있도록 핵심 특징을 서술한다.', 'DOK 1'],
  ['설명하시오', '구체적인 사례를 들어 용어와 현상의 의미를 밝힌다.', 'DOK 2'],
  ['서술하시오', '주어진 상황에 대해 상세하게 글이나 그림으로 설명한다.', 'DOK 2'],
  ['적용하시오', '주어진 문제 상황에 지식·원리·이론·법칙을 사용한다.', 'DOK 3'],
  ['분석하시오', '진술된 내용을 구성 요소로 나누어 각각의 의미와 관계를 밝힌다.', 'DOK 3'],
  ['해석하시오', '지식을 이용하여 주어진 정보의 흐름을 파악하고 결론을 내린다.', 'DOK 3'],
  ['추론하시오', '이미 알고 있거나 확인된 정보로부터 논리적 결론을 이끌어 낸다.', 'DOK 3'],
  ['예측하시오', '주어진 조건과 원리를 근거로 앞으로 일어날 일을 미리 헤아린다.', 'DOK 3'],
  ['구성하시오', '논리적 형식이나 도식을 활용하여 정보를 나타낸다.', 'DOK 3'],
  ['논증하시오', '주장에 대해 이유와 근거를 들어 설명한다.', 'DOK 3'],
  ['제시하시오', '주어진 주장이나 결과에 대한 자신의 판단을 내놓는다.', 'DOK 3'],
  ['평가하시오', '발상이나 의견의 상대적 중요성·타당성을 판단한다.', 'DOK 4'],
  ['비평하시오', '대상이 되는 자료나 주장에 비판적 견해를 제시한다.', 'DOK 4'],
  ['제안하시오', '문제 상황의 해결 방안을 근거와 함께 새로 만들어 내놓는다.', 'DOK 4']
];

/* 1-2. 사고 수준 */
var DOKS = [
  ['l1', 'DOK 1', '회상과 재생', '배운 사실·용어·절차를 기억해 그대로 꺼내 쓴다. 서·논술형 평가에서 이 수준만 묻는 것은 지양한다.',
   '기억하다 · 나열하다 · 정의하다 · 이름 붙이다'],
  ['l2', 'DOK 2', '기능과 개념의 적용', '배운 개념을 골라 새 상황에 적용하고, 자료를 비교·분류·요약한다. 한 단계의 판단이 필요하다.',
   '비교하다 · 분류하다 · 요약하다 · 설명하다 · 계산하다'],
  ['l3', 'DOK 3', '전략적 사고 · 근거 있는 추론', '근거를 들어 결론을 이끌어 내고, 여러 단계를 스스로 계획한다. 답이 하나로 정해지지 않을 수 있다.',
   '추론하다 · 분석하다 · 논증하다 · 예측하다 · 설계하다'],
  ['l4', 'DOK 4', '확장된 사고 · 전이와 창안', '여러 자료와 개념을 연결해 새로운 상황에 적용하고 대안을 만들어 낸다. 시간과 계획이 필요한 과제다.',
   '평가하다 · 비평하다 · 제안하다 · 고안하다 · 통합하다']
];

/* 1-3. 단계별 점검 프로세스 */
var PROC = [
  { id: 'proc1', title: '평가 계획 수립', sub: '무엇을 왜 평가할지 정하는 단계', items: [
    ['수업과 평가의 목표가 학생에게 기르고자 하는 본질적 목표인가', '단원이 끝난 뒤에도 남아야 할 이해인지 확인'],
    ['교육과정 내용·성취기준·학습목표를 충분히 분석하여 지식·이해, 과정·기능, 가치·태도를 고르게 평가하도록 계획했는가', ''],
    ['논리적·창의적 사고력, 문제해결력 등 고차적 사고 능력이나 종합적 사고력을 평가하도록 계획했는가', ''],
    ['본질적 목표에 적합한 수업 방법과 평가 방법을 선택하고 설계했는가', ''],
    ['평가 결과를 교수와 학습의 질을 개선하는 데 활용할 수 있는 평가 방법인가', ''],
    ['소속 교육청의 학업성적관리 지침을 준수했는가', ''],
    ['평가 시기·횟수·반영 비율·채점기준 등을 교과(학년)협의회에서 협의하여 계획을 수립했는가', ''],
    ['학기별 평가 계획을 학기 초에 공지했거나 공지할 계획을 수립했는가', '']
  ]},
  { id: 'proc2', title: '과제(문항) 개발', sub: '발문·자료·조건을 만드는 단계', items: [
    ['문항이 학습목표·성취기준의 지식·기능·태도를 활용하여 해결할 수 있도록 기술되어 있는가', ''],
    ['문항에서 요구하는 것을 학생이 명확하게 알 수 있도록 명료하게 기술되어 있는가', ''],
    ['수업에서 전개한 교수·학습 활동과 문항이 충분히 연계되어 있는가', '배운 대로 평가한다는 원칙'],
    ['논리적·창의적·비판적 사고력, 문제해결력 등을 복합적·종합적으로 활용하도록 다루고 있는가', ''],
    ['학생이 응답하는 데 어느 정도 시간이 필요한지 정보가 제공되어 있는가', ''],
    ['내용 지식의 습득 여부나 정도만을 측정하고 있는 것은 아닌가', ''],
    ['(필요한 경우) 학생이 답하고 싶은 문항을 선택할 기회를 제공하고 있는가', '']
  ]},
  { id: 'proc3', title: '채점기준표 개발', sub: '문항과 동시에 만드는 단계', items: [
    ['성취기준·평가 요소 등 문항에서 평가하고자 하는 능력을 채점기준표가 다루고 있는가', ''],
    ['채점기준표의 수준이 학생들의 수행을 변별할 수 있도록 구분되어 있는가', ''],
    ['각 수준의 기대 수행이 명확하고 구체적으로 진술되어 있는가', ''],
    ['서술형·논술형의 특성을 고려하여 예외답안·모범답안·유사답안·인정 범위가 고려되어 있는가', ''],
    ['미리 예측하지 못한 예외적 답안의 가능성을 확인하고 교과협의회에서 충분히 협의했는가', ''],
    ['채점기준표를 완성한 후 학생·학부모에게 평가 요소와 채점기준을 공지했는가', '']
  ]},
  { id: 'proc4', title: '평가 시행 및 채점', sub: '공정성과 신뢰도를 지키는 단계', items: [
    ['교실 밝기·온도 조절·소음 방지 등 최적의 평가 환경을 조성했는가', ''],
    ['수업 시간 내에 서·논술형 평가를 실시했는가', ''],
    ['부정행위를 예방하도록 만전을 기하고, 발생 시 학업성적관리 규정에 따라 처리했는가', ''],
    ['시행 시기·시간, 시험 정보 안내, 환경 등 시행 여건이 학급별로 동일하도록 설계·실시했는가', ''],
    ['시험 시작 전 유의사항을 충분히 안내하고 문제지 인쇄 상태를 확인했는가', ''],
    ['정확하고 공정한 채점을 위한 체계적 절차를 마련하고 절차에 따라 채점했는가', ''],
    ['학생의 이름과 같은 정보를 가리고 채점했는가', '후광 효과 차단'],
    ['채점과 재검을 동일 학년·교과 담당교사가 공동으로 실시했는가', '담당 교사 1인인 경우 제외'],
    ['채점기준을 숙지하고 동료 교사와 공유하여 채점자 간·내 신뢰도를 확보했는가', ''],
    ['채점기준표에 따라 채점하고 점수와 채점 근거를 답안지에 분명히 표기했으며, 전산 처리 결과와 일치하는지 확인했는가', ''],
    ['답안지가 유출·훼손·분실되지 않도록 관리했는가', '']
  ]},
  { id: 'proc5', title: '평가 결과 피드백', sub: '평가를 학습으로 바꾸는 단계', items: [
    ['학생 수행에 대한 피드백을 채점기준과 연결하여 결과와 과정에 대해 구체적으로 제공했는가', ''],
    ['풀이 과정을 분석하여 인지적 측면뿐 아니라 정의적 측면에 대해서도 피드백했는가', ''],
    ['학생과 충분히 소통하여 피드백 내용을 이해할 수 있도록 했는가', ''],
    ['자기 참조 피드백과 목표 참조 피드백을 적절히 활용하여 자기주도적 학습력이 형성되도록 지원했는가', ''],
    ['도달해야 할 목표, 학생의 현 수준, 그 간극을 파악하여 피드백을 구성했는가', ''],
    ['피드백 결과를 이후 수업 내용·방법 조정 및 학생 지도 계획에 반영했는가', '']
  ]}
];

/* 1-4. 평가 계획 점검 */
var PLAN_CHECK = [
  { id: 'plan1', title: '목표와 성취기준', sub: '', items: [
    ['평가하려는 성취기준을 선택하고 성취기준별 성취수준까지 확인했는가', ''],
    ['성취기준을 지식·이해 / 과정·기능 / 가치·태도로 분해했는가', ''],
    ['단원이 끝난 뒤에도 남아야 할 본질적 목표를 한 문장으로 진술했는가', ''],
    ['성취기준을 분절적으로 다루지 않고 교육과정 전체 맥락에서 해석했는가', '']
  ]},
  { id: 'plan2', title: '평가 요소와 방법', sub: '', items: [
    ['평가 요소를 ‘~하기’ 형태의 명사형 어구로 진술했는가', ''],
    ['평가 요소가 성취기준에서 도출되었으며 수업에서 다룰 내용과 연결되는가', ''],
    ['지필평가·수행평가 중 어느 장면에서 시행할지 정하고 그 이유를 밝혔는가', ''],
    ['단순 지식 암기가 아니라 실생활 맥락에서 고등 사고력을 요구하도록 계획했는가', ''],
    ['분석적 채점과 총체적 채점 중 무엇으로 할지 미리 정했는가', '']
  ]},
  { id: 'plan3', title: '수업과의 연계', sub: '', items: [
    ['평가에서 요구할 사고를 수업의 어느 차시에서 연습시킬지 정했는가', ''],
    ['학생이 채점기준표를 미리 경험할 기회(동료평가·자기평가)를 계획했는가', ''],
    ['평가 과제가 수업 맥락과 학습자 발달 수준에 맞는가', '']
  ]},
  { id: 'plan4', title: '행정·공지', sub: '', items: [
    ['평가 시기·횟수·반영 비율·채점기준을 교과(학년)협의회에서 협의했는가', ''],
    ['학기 초에 평가 계획을 학생·학부모에게 공지했거나 공지할 계획을 세웠는가', ''],
    ['소속 교육청 학업성적관리시행지침과 학교 규정을 확인했는가', ''],
    ['피드백 시기·방법·개별화 방안을 미리 설계했는가', '']
  ]}
];

/* 1-4b. 탐구 기반 설계 점검 */
var DESIGN_CHECK = [
  { id: 'dsg1', title: '설계 점검 7문항', sub: '설계를 시작하기 전에', items: [
    ['학생이 궁극적으로 이해해야 할 핵심 아이디어를 한 문장으로 말할 수 있는가', ''],
    ['그 이해를 사용하게 할 실제적 맥락·현상을 정했는가', ''],
    ['탐구 과정에서 학생이 스스로 다룰 질문을 마련했는가', ''],
    ['어떤 자료를 분석하고 어떤 근거를 고르게 할지 정했는가', ''],
    ['답안에서 확인할 사고 과정과 표현이 무엇인지 진술했는가', ''],
    ['수행 수준의 차이를 무엇으로 구분할지 미리 정했는가', ''],
    ['평가 뒤 학생이 무엇을 보완하고 다음에 무엇을 시도할지 설계했는가', '']
  ]},
  { id: 'dsg2', title: '수업–평가 연계 점검', sub: '문항을 확정하기 전에', items: [
    ['평가에서 요구하는 핵심 개념을 수업에서 충분히 다루었는가', ''],
    ['자료 해석·추론·논증 등 평가 행동을 수업 중에 실제로 연습했는가', ''],
    ['반응 지시어의 뜻과 답안 구조를 학생에게 안내했는가', ''],
    ['채점기준을 활용한 자기 점검·동료 점검 또는 교사 피드백을 경험시켰는가', ''],
    ['최종 평가 전에 피드백을 반영해 수정하거나 재도전할 기회를 주었는가', '']
  ]}
];

/* 1-5. 문항 제작 상세 체크리스트 */
var ITEM_CHECK = [
  { id: 'ic1', title: '성취기준·평가 요소와의 연결', sub: '문항이 재려는 것을 정말 재는가', items: [
    ['문항이 문항 정보표에 제시한 성취기준에 부합하도록 구성되었는가', ''],
    ['평가 요소가 성취기준에서 도출되었고, 문항이 그 평가 요소를 실제로 요구하는가', ''],
    ['지식·이해, 과정·기능, 가치·태도를 종합적으로 평가할 수 있도록 구성되었는가', ''],
    ['성취기준의 핵심 개념과 문항의 요구가 어긋나지 않는가', '수직 정렬'],
    ['이 문항이 요구하는 사고를 수업에서 실제로 경험시켰는가', '수평 정렬'],
    ['한 문항에 성취기준을 지나치게 많이 담아 채점 요소가 흐려지지 않았는가', '']
  ]},
  { id: 'ic2', title: '자료(제시문)', sub: '읽고 생각하게 만드는가', items: [
    ['자료에 결론이 그대로 남아 있지 않은가', '남아 있으면 옮겨 적기 문항이 된다'],
    ['자료의 문장을 그대로 옮겨 적으면 정답이 되어 버리지는 않는가', ''],
    ['자료와 발문이 서로 긴밀하게 연관되어 있는가', ''],
    ['자료의 신뢰성과 정확성을 원문으로 직접 확인했는가', ''],
    ['문제 해결 시간을 고려할 때 자료의 양이 과다하지 않은가', ''],
    ['자료의 용어·표현이 해당 학년 수준에 맞는가', ''],
    ['출처를 정확히 밝혔고 인용 범위가 저작권상 문제없는가', '']
  ]},
  { id: 'ic3', title: '발문', sub: '무엇을 어떻게 쓰라는지 한 번에 읽히는가', items: [
    ['발문만 읽고도 무엇에 대해 어떻게 응답해야 하는지 알 수 있는가', ''],
    ['측정하려는 능력이 드러나는 반응 지시어를 사용했는가', ''],
    ['반응 지시어가 성취기준의 과정·기능과 어긋나지 않는가', ''],
    ['요구하는 사고 수준(DOK)이 출제 의도와 일치하는가', ''],
    ['간접 발문(상황)과 직접 발문(요구)이 구분되어 있는가', ''],
    ['한 발문에 서로 다른 요구를 뭉뚱그려 담지 않았는가', ''],
    ['부정문·이중부정 등으로 오해를 부를 표현은 없는가', '']
  ]},
  { id: 'ic4', title: '조건', sub: '학생에게는 안내, 채점자에게는 인정 범위', items: [
    ['조건이 응답의 내용과 형식 범위를 적절하게 한정하는가', ''],
    ['조건에 정답 전체나 일부가 암시되어 있지는 않은가', ''],
    ['정답 인정 범위가 모호하지 않도록 필요한 사항을 포함했는가', ''],
    ['조건을 학생의 눈으로 한 번, 채점자의 눈으로 한 번 읽어 보았는가', ''],
    ['조건마다 대응하는 채점 요소가 있는가', '1:1 매칭'],
    ['조건의 수가 지나치게 많아 답안 작성 시간을 잠식하지 않는가', '']
  ]},
  { id: 'ic5', title: '사고 수준과 응답 설계', sub: '아는 것을 확인하는 데 그치지 않는가', items: [
    ['내용 지식의 습득 여부·정도만 측정하고 있지는 않은가', ''],
    ['학습한 내용을 다양한 상황·맥락에 적용하도록 구성되었는가', ''],
    ['논리적·창의적·비판적 사고력, 문제해결력을 측정할 수 있도록 구성되었는가', ''],
    ['학생이 정해진 답을 찾기보다 나름의 방법을 시도할 여지가 있는가', ''],
    ['응답 분량(문장·문단 수준)을 정하고 학생에게 안내했는가', ''],
    ['예시 답안을 직접 작성해 보고 응답 소요 시간을 가늠했는가', '']
  ]},
  { id: 'ic6', title: '채점 가능성', sub: '이 문항을 정말 공정하게 채점할 수 있는가', items: [
    ['채점기준이 문항의 출제 의도와 부합하는가', ''],
    ['채점기준이 학생들의 수행 수준을 충분히 변별할 수 있는가', ''],
    ['채점기준이 피드백을 제공하고 소통할 수 있을 만큼 명료한가', ''],
    ['채점자가 바뀌어도 일관된 점수를 부여할 수 있도록 설계되었는가', ''],
    ['맹점을 파고드는 엉뚱한 답안을 직접 써 보고 현행 기준으로 채점해 보았는가', ''],
    ['예외 답안·유사 답안의 인정 범위를 교과협의회에서 협의했는가', '']
  ]},
  { id: 'ic7', title: '형식과 표기', sub: '마지막으로 눈으로 훑기', items: [
    ['발문에 사용한 용어·표현 방식·맞춤법에 오류가 없는가', ''],
    ['배점이 평가 요소의 중요도에 비례하는가', ''],
    ['하위 문항이 있다면 번호와 배점 표기가 정확한가', ''],
    ['표·그림·기호가 인쇄본에서도 알아볼 수 있는가', ''],
    ['특정 집단에 유·불리하게 작용할 소재나 표현은 없는가', '']
  ]}
];

/* 1-6. 요소별 핵심 점검표 */
var QUICK_CHECK = [
  ['메타데이터', '성취기준의 핵심 개념과 맞닿아 있는가(수직), 그 사고를 수업에서 경험시켰는가(수평)'],
  ['자료', '결론이 제거되었는가, 자료를 그대로 옮겨 적으면 답이 되지는 않는가'],
  ['발문 (DOK)', '요구하는 사고는 몇 수준인가, 출제 의도와 일치하는가, 한 번에 읽히는가'],
  ['조건', '학생에게는 작성의 안내가, 다른 채점자에게는 인정 범위의 안내가 되는가'],
  ['채점기준', '조건과 1:1로 매칭되는가, 개수 세기가 아니라 질적 기술인가'],
  ['엉뚱한 답', '맹점을 파고드는 답을 직접 써 보고, 현행 기준으로 채점하면 몇 점인가'],
  ['개선 방안', '결함을 방어하는 문장 수정안 한 개를 마련했는가'],
  ['기타', '항목 간 연결, 오탈자·표기, 배점의 적절성 등을 확인했는가']
];

/* 1-7. 4점 척도 자기 평가 */
var RATE_ITEMS = [
  '이 문항은 문항 정보표에 제시된 성취기준에 부합하도록 구성되었습니까?',
  '이 문항은 지식·이해, 과정·기능, 가치·태도의 요소를 종합적으로 평가할 수 있도록 구성되었습니까?',
  '이 문항은 학생들이 학습한 내용을 다양한 상황이나 맥락에 적용할 수 있도록 구성되었습니까?',
  '이 문항은 고차원적인 사고 능력(논리적·창의적·비판적 사고력, 문제해결력 등)을 측정할 수 있도록 구성되었습니까?',
  '채점기준표는 평가하고자 하는 목표와 내용을 충분히 반영하고 있습니까?',
  '채점기준표는 학생들의 수행 수준을 충분히 변별할 수 있습니까?',
  '채점기준은 학생의 수행 결과와 과정에 대해 피드백을 제공하고 소통할 수 있도록 명료합니까?',
  '채점기준은 채점자가 바뀌더라도 일관된 점수를 부여할 수 있도록 설계되었습니까?'
];

/* 1-8. 채점기준표 검토 */
var RUB_CHECK = [
  { id: 'rc1', title: '타당성', sub: '성취기준에서 왔는가', items: [
    ['평가 요소를 성취기준에 기반하여 추출했는가', '성취기준과 무관한 요소는 도달 판단의 근거가 될 수 없다'],
    ['수행 수준의 세부 내용이 평가 요소에 근거하여 학생의 수행을 구별하는가', ''],
    ['문항에서 평가하려는 능력을 채점기준표가 빠짐없이 다루고 있는가', '']
  ]},
  { id: 'rc2', title: '배점', sub: '중요도에 비례하는가', items: [
    ['평가 요소별 비중(중요도)을 고려한 배점인가', ''],
    ['일부 평가 요소에 배점이 과도하게 몰려 있지 않은가', ''],
    ['배점 급간과 부분 점수의 근거가 수행 수준 진술에 충분히 반영되어 있는가', ''],
    ['기본 점수만으로 최소 성취수준에 도달하게 되어 있지는 않은가', '고등학교 최소 성취수준 보장']
  ]},
  { id: 'rc3', title: '배타성 · 포괄성', sub: '겹치지 않고 빠지지 않는가', items: [
    ['수준 간 기술이 서로 겹치지 않아 하나의 답안이 한 수준에만 해당하는가', '배타성'],
    ['문항에서 평가하고자 하는 능력을 모두 포함하고 있는가', '포괄성'],
    ['문항의 조건에 포함된 제약 요소가 수행 수준에 반영되어 있는가', '']
  ]},
  { id: 'rc4', title: '명확성', sub: '누가 읽어도 같게 읽히는가', items: [
    ['동일한 답안을 복수의 교사가 같은 기준으로 채점할 때 비슷한 결과가 나오는가', ''],
    ['수준별로 학생 답안 예시를 찾아 제시할 수 있는가', ''],
    ['수준 간 질적 차이가 드러나도록 진술했는가', '‘개수 세기’가 아니라 ‘질적 기술’'],
    ['예시 답안·인정 답안·예외 답안의 범위를 설정했는가', '']
  ]},
  { id: 'rc5', title: '실용성', sub: '실제로 쓸 수 있는가', items: [
    ['교사와 학생이 이해하고 활용하기 쉬운가', ''],
    ['교사가 교육적 의사 결정을 하는 데 필요한 정보를 주는가', ''],
    ['학생이 학습목표를 성취해 가는 과정에서 피드백으로 쓸 수 있는가', ''],
    ['수행 과정과 최종 성취도를 모두 평가하는 데 활용할 수 있는가', '']
  ]},
  { id: 'rc6', title: '문항 기술적 측면', sub: '표현과 태도', items: [
    ['채점기준표에 사용된 어휘·문장이 다양한 학생들에게 적합한가', ''],
    ['채점기준표의 내용에 편파적인 것은 없는가', ''],
    ['수행 수준을 기술한 문장이 학생의 가치를 판단하지는 않는가', ''],
    ['채점기준표를 교과협의회에서 상호 검토·수정했는가', '']
  ]}
];

/* 1-9. 플랫폼별 제작 안내 */
var PLATFORMS = [
  {
    id: 'gpt', name: 'ChatGPT', badge: 'GPTs', color: '#10a37f', short: 'GPT 만들기',
    need: '유료 플랜(Plus · Team · Enterprise · Edu) 계정이 필요합니다. 무료 계정으로는 만든 GPT를 사용할 수는 있으나 새로 만들 수는 없습니다.',
    where: '지시문을 붙여 넣는 칸 : <b>Configure(구성) 탭 → Instructions(지침)</b>',
    steps: [
      { h: 'GPT 만들기 화면 열기', p: 'chatgpt.com 에 로그인한 뒤 왼쪽 사이드바의 <span class="path">GPT 탐색</span> 또는 프로필 메뉴의 <span class="path">내 GPT</span>로 들어가 <span class="path">GPT 만들기</span>를 누릅니다.' },
      { h: 'Configure(구성) 탭으로 이동', p: '기본으로 열리는 Create 탭은 대화하며 만드는 방식입니다. 우리가 만든 지시문을 그대로 쓰려면 위쪽의 <span class="path">Configure</span> 탭을 선택하십시오.' },
      { h: '이름과 설명 입력', p: '<b>Name</b>에 에이전트 이름(예: 송쌤 서·논술형 문항 개발 조수), <b>Description</b>에 한 줄 소개를 씁니다. 학생에게 공개하지 않는 교사용 도구임을 밝혀 두면 좋습니다.' },
      { h: 'Instructions에 지시문 붙여넣기', p: '3번 항목에서 <b>복사</b>한 지시문을 <b>Instructions</b> 칸에 그대로 붙여 넣습니다. 이 칸의 내용이 대화 전체를 지배합니다.' },
      { h: 'Conversation starters 설정', p: '대화 시작 버튼 문구를 넣습니다.', li: ['중학교 2학년 물질의 특성 단원으로 시작하기', '이미 만든 문항을 점검받기', '채점기준표만 다듬기'] },
      { h: 'Knowledge에 자료 올리기', p: '<b>Knowledge</b> 영역에 학업성적관리시행지침, 성취기준·성취수준 문서, 지난 학기 문항과 채점기준표를 업로드합니다.', li: ['개인정보가 든 파일은 올리지 마십시오.', '코드 인터프리터를 켜면 대화 상대가 업로드 파일을 내려받을 수 있으니 주의하십시오.'] },
      { h: '오른쪽 Preview에서 시험하기', p: '실제 단원 하나로 대화해 보고, 에이전트가 단계를 건너뛰거나 여러 질문을 한꺼번에 하면 Instructions에 금지 문장을 한 줄 추가합니다.' },
      { h: '저장과 공개 범위 선택', p: '오른쪽 위 <span class="path">만들기 / 저장</span>을 누르고 공개 범위를 고릅니다.', li: ['나만 보기 — 개인 사용', '링크가 있는 사용자 — 동교과 교사와 공유할 때', 'GPT 스토어 공개 — 불특정 다수에게 공개(권장하지 않음)'] }
    ],
    tips: ['수정은 <b>내 GPT → 편집</b>에서 언제든 가능하며, 수정 후 반드시 다시 <b>저장/업데이트</b>를 눌러야 반영됩니다.',
           '대화가 길어지면 초반 지시를 잊는 경우가 있습니다. “지금 몇 번째 단계입니까?”라고 물어 현재 위치를 확인시키십시오.']
  },
  {
    id: 'gem', name: 'Google Gemini', badge: 'Gem', color: '#1a73e8', short: 'Gem 만들기',
    need: 'Google 계정이 필요합니다. 학교 계정(Google Workspace for Education)은 관리자 정책에 따라 Gem 기능이 제한될 수 있으니 개인 계정으로도 시험해 보십시오.',
    where: '지시문을 붙여 넣는 칸 : <b>Gem 만들기 → 안내(Instructions)</b>',
    steps: [
      { h: 'Gem 관리자 열기', p: 'gemini.google.com 에 로그인한 뒤 왼쪽 사이드바에서 <span class="path">Gem 관리자</span>(Gem manager)를 찾아 들어갑니다. 화면이 좁으면 왼쪽 위 메뉴 아이콘을 먼저 누르십시오.' },
      { h: '새 Gem 만들기', p: '<span class="path">새 Gem</span>(New Gem) 버튼을 누르면 이름 칸과 안내 칸이 있는 편집 화면이 열립니다.' },
      { h: '이름 입력', p: '에이전트 이름을 적습니다. 여러 개를 만들 예정이라면 “서논술형-중2과학”처럼 학년·과목을 이름에 넣어 두면 찾기 쉽습니다.' },
      { h: '안내(Instructions)에 지시문 붙여넣기', p: '복사한 지시문을 <b>안내</b> 칸에 그대로 붙여 넣습니다. 칸이 좁아 보이지만 긴 글도 모두 들어갑니다.' },
      { h: '지식 파일 첨부', p: '파일 업로드 또는 Google Drive 문서 연결로 참고 자료를 붙입니다.', li: ['Google Docs·Sheets·Slides와 PDF를 연결할 수 있습니다.', '드라이브 문서를 고치면 Gem이 참고하는 내용도 함께 갱신됩니다.'] },
      { h: '미리보기에서 시험하기', p: '오른쪽 미리보기 칸에서 바로 대화해 볼 수 있습니다. 첫 질문이 지시대로 나오는지부터 확인하십시오.' },
      { h: '저장', p: '<span class="path">저장</span>을 누르면 왼쪽 사이드바 Gem 목록에 추가되어 언제든 다시 대화할 수 있습니다.' },
      { h: '공유(선택)', p: 'Gem 목록에서 공유 옵션을 사용하면 링크로 다른 사람에게 전달할 수 있습니다. 조직 계정은 관리자 정책에 따라 공유 범위가 제한될 수 있습니다.' }
    ],
    tips: ['Gemini는 지시가 길면 앞부분을 더 강하게 따릅니다. <b>“한 번에 하나만 묻는다”</b>는 규칙을 지시문 앞쪽에 두십시오.',
           '이미지를 읽고 답하는 능력이 좋아 <b>학생 답안 사진</b>을 올려 채점기준 적용을 연습하는 용도로도 쓸 수 있습니다. 단, 학생 이름은 가리십시오.']
  },
  {
    id: 'sen', name: 'SENGPT', badge: '서울시교육청', color: '#e0455c', short: '나만의 챗봇 만들기',
    need: '서울특별시교육청 소속 교원·학생에게 제공되는 생성형 AI 서비스입니다. 교육청에서 안내하는 접속 주소로 들어가 교육청 계정(업무포털 · 학교 발급 계정)으로 로그인합니다.',
    where: '지시문을 붙여 넣는 칸 : <b>챗봇 만들기 → 프롬프트(지시문 · 역할 설정)</b>',
    steps: [
      { h: '로그인', p: '교육청이 공지한 SENGPT 접속 주소로 들어가 발급받은 계정으로 로그인합니다. 접속 주소와 계정 발급 방법은 매 학년도 공문·연수 자료로 안내됩니다.' },
      { h: '챗봇 만들기 메뉴 찾기', p: '상단 또는 왼쪽 메뉴에서 <span class="path">나만의 챗봇</span> · <span class="path">챗봇 만들기</span> 성격의 메뉴를 선택합니다. 메뉴 이름은 서비스 개편에 따라 달라질 수 있습니다.' },
      { h: '기본 정보 입력', p: '챗봇 이름과 설명을 적습니다. 학생에게 공유할 것인지, 교사 본인만 쓸 것인지 먼저 정해 두십시오.' },
      { h: '프롬프트에 지시문 붙여넣기', p: '역할·지시문·시스템 프롬프트에 해당하는 칸에 복사한 지시문을 붙여 넣습니다.' },
      { h: '참고 자료 등록', p: '자료 업로드 기능이 있다면 성취기준·채점기준표 등을 올립니다. 용량과 파일 형식 제한이 있으니 안내를 확인하십시오.' },
      { h: '시험 대화', p: '미리보기에서 실제 단원으로 대화해 보고 응답 속도와 한도(1일 사용량)를 확인합니다.' },
      { h: '저장 · 공유', p: '저장한 뒤 공유 링크나 참여 코드로 동교과 교사에게 전달합니다. 학생 공유는 수업 목적과 학교 방침에 맞는지 먼저 확인하십시오.' }
    ],
    tips: ['교육청 제공 서비스는 <b>학교 업무 환경에서 바로 쓸 수 있고 별도 결제가 없다</b>는 점이 가장 큰 장점입니다.',
           '메뉴 명칭·기능·이용 한도는 학년도마다 달라질 수 있습니다. 최신 공문과 서비스 내 도움말을 먼저 확인하십시오.',
           '학생 계정으로 공유할 때는 <b>개인정보를 입력하지 않도록</b> 사전 안내가 필요합니다.']
  },
  {
    id: 'copilot', name: 'Microsoft 365 Copilot', badge: '에이전트', color: '#0078d4', short: '에이전트 만들기',
    need: 'Microsoft 365 Copilot 라이선스 또는 Copilot Studio 사용 권한이 필요하며, 학교 테넌트 관리자가 기능을 열어 두어야 합니다.',
    where: '지시문을 붙여 넣는 칸 : <b>에이전트 빌더 → 구성(Configure) → 지침(Instructions)</b>',
    steps: [
      { h: '간단하게 만들기 — 에이전트 빌더', p: 'Microsoft 365 Copilot 앱 또는 Teams의 Copilot 화면에서 오른쪽 위 <span class="path">에이전트</span> · <span class="path">에이전트 만들기</span>를 누릅니다.' },
      { h: '구성 탭으로 전환', p: '기본은 대화로 만드는 <b>설명(Describe)</b> 탭입니다. 만들어 둔 지시문을 쓰려면 <span class="path">구성(Configure)</span> 탭으로 옮기십시오.' },
      { h: '이름 · 설명 · 지침 입력', p: '이름과 설명을 적고 <b>지침(Instructions)</b> 칸에 복사한 지시문을 붙여 넣습니다.' },
      { h: '지식 원본 연결', p: 'SharePoint 사이트·문서 라이브러리·개별 파일을 지식 원본으로 지정합니다.', li: ['교과 협의회 SharePoint 폴더를 통째로 연결하면 관리가 편합니다.', '지식 원본은 <b>보는 사람의 접근 권한</b>을 따릅니다. 권한이 없는 문서는 노출되지 않습니다.'] },
      { h: '시작 프롬프트 추가', p: '자주 쓰는 요청을 버튼으로 만들어 두면 매번 길게 입력하지 않아도 됩니다.' },
      { h: '만들기 · 공유', p: '<span class="path">만들기</span>를 누른 뒤 <b>나만 사용</b> 또는 <b>팀·조직 공유</b>를 선택합니다. 조직 공유는 관리자 승인이 필요할 수 있습니다.' },
      { h: '고급으로 만들기 — Copilot Studio', p: '더 정교한 흐름이 필요하면 copilotstudio.microsoft.com 에서 <span class="path">만들기 → 에이전트</span>로 들어갑니다.', li: ['주제(Topic)로 단계별 대화 흐름을 직접 설계할 수 있습니다.', '만든 뒤 <b>게시</b>해야 Teams·웹에서 사용할 수 있습니다.'] }
    ],
    tips: ['학교가 이미 Microsoft 365를 쓰고 있다면 <b>수업 자료가 있는 곳에서 바로 참조</b>한다는 점이 강점입니다.',
           '지식 원본 문서에 학생 개인정보가 있는지 반드시 먼저 확인하십시오.',
           '기능 이름이 자주 바뀝니다. 화면에서 “에이전트” 또는 “Copilot 에이전트”라는 단어를 찾으면 됩니다.']
  },
  {
    id: 'claude', name: 'Claude', badge: '프로젝트', color: '#d97757', short: '프로젝트 만들기',
    need: 'claude.ai 계정이 필요하며, 프로젝트 기능은 유료 플랜에서 사용할 수 있습니다.',
    where: '지시문을 붙여 넣는 칸 : <b>프로젝트 → 프로젝트 지침(Project instructions)</b>',
    steps: [
      { h: '프로젝트 만들기', p: 'claude.ai 왼쪽 사이드바에서 <span class="path">프로젝트</span>(Projects)를 열고 <span class="path">새 프로젝트</span>를 누릅니다.' },
      { h: '이름과 목적 적기', p: '프로젝트 이름과 “무엇을 하는 곳인지” 한 줄 설명을 적습니다. 학년·과목별로 프로젝트를 나누어 두면 대화가 섞이지 않습니다.' },
      { h: '프로젝트 지침에 지시문 붙여넣기', p: '프로젝트 화면의 <span class="path">지침 설정</span>(Set project instructions)을 눌러 복사한 지시문을 붙여 넣습니다. 이 프로젝트 안의 <b>모든 대화</b>에 같은 지침이 적용됩니다.' },
      { h: '프로젝트 지식에 자료 올리기', p: '<b>프로젝트 지식</b>(Project knowledge)에 파일을 올립니다.', li: ['교육청 서·논술형 평가 자료, 성취기준·성취수준 문서', '지난 학기 문항·채점기준표, 수업에서 쓴 학습지', '용량 한도가 있으니 핵심 자료부터 올리십시오.'] },
      { h: '프로젝트 안에서 대화 시작', p: '프로젝트 안에서 <b>새 대화</b>를 열면 지침과 지식이 자동으로 적용됩니다. 단원별로 대화를 따로 만들면 나중에 찾기 쉽습니다.' },
      { h: '대화를 자산으로 남기기', p: '잘 진행된 대화는 그 자체가 기록입니다. 완성된 문항·채점기준표는 다시 프로젝트 지식으로 올려 두면 다음 학기에 참고 사례가 됩니다.' },
      { h: '공유(팀 플랜)', p: '팀 플랜에서는 프로젝트를 조직 구성원과 공유할 수 있어 교과협의회 단위로 함께 쓸 수 있습니다.' }
    ],
    tips: ['프로젝트는 <b>지침이 대화마다 초기화되지 않는다</b>는 점이 장점입니다. 여러 문항을 이어서 만들 때 유리합니다.',
           '지침을 고치면 <b>이후에 시작하는 대화</b>부터 적용됩니다. 진행 중인 대화에는 “지침이 바뀌었으니 다시 확인해 달라”고 말해 주십시오.',
           '업로드 자료에서 학생 이름·학번을 반드시 지우십시오.']
  }
];

/* ======================================================================
   PART 2. 기본 유틸 · 상태
   ====================================================================== */
var $  = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var KEY = 'songssam-seonulhyung-v1';

var esc = function (s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
};
var nl2br = function (s) { return esc(s).replace(/\n/g, '<br>'); };
var isBlank = function (s) { return !s || !String(s).trim(); };

var state = {
  f: {},              /* 단일 입력값 */
  chips: {},          /* 다중 선택 */
  reps: {},           /* 반복 입력 */
  checks: {},         /* 체크박스 */
  rates: {},          /* 4점 척도 */
  std: { plan: [], item: [] },
  rubric: [],
  holistic: {},
  levelFb: {},
  theme: 'light',
  tab: 'p1'
};

var saveTimer = null;
function save(silent) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    if (!silent) toast('저장했습니다', 'ok');
  } catch (e) { if (!silent) toast('저장 공간이 부족합니다', 'warn'); }
}
function autosave() { clearTimeout(saveTimer); saveTimer = setTimeout(function () { save(true); }, 500); }
function load() {
  try {
    var raw = localStorage.getItem(KEY);
    if (!raw) return false;
    var o = JSON.parse(raw);
    if (!o || typeof o !== 'object') return false;
    /* 저장된 값이 원래 형태와 다르면 기본값을 유지한다.
       (구버전 저장분이나 손상된 값 때문에 ‘추가’ 버튼이 죽는 것을 막는다) */
    Object.keys(o).forEach(function (k) {
      if (!(k in state)) return;
      var def = state[k], v = o[k];
      if (Array.isArray(def)) { if (Array.isArray(v)) state[k] = v; return; }
      if (def && typeof def === 'object') {
        if (v && typeof v === 'object' && !Array.isArray(v)) state[k] = v;
        return;
      }
      if (v == null || typeof v === 'object') return;
      state[k] = v;
    });
    if (!state.std || typeof state.std !== 'object') state.std = { plan: [], item: [] };
    if (!Array.isArray(state.std.plan)) state.std.plan = [];
    if (!Array.isArray(state.std.item)) state.std.item = [];
    return true;
  } catch (e) { return false; }
}

/* 토스트 */
var toastTimer = null;
var TOAST_ICON = {
  ok:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',
  warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 16v-5M12 8h.01"/></svg>'
};
function toast(msg, kind) {
  var el = $('#toast');
  el.innerHTML = (TOAST_ICON[kind || 'info'] || TOAST_ICON.info) + '<span>' + esc(msg) + '</span>';
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { el.classList.remove('show'); }, 2600);
}

/* 아이콘 */
var CHK = '<svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';
var XICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
var TRASH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>';

/* ======================================================================
   PART 3. 테마 · 배경
   ====================================================================== */
function applyTheme(t) {
  document.documentElement.setAttribute('data-theme', t);
  state.theme = t;
  if (bgfx) bgfx.recolor();
}
function initTheme() {
  var saved = state.theme;
  if (!saved) saved = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved);
  $('#themeToggle').addEventListener('click', function () {
    applyTheme(state.theme === 'dark' ? 'light' : 'dark');
    autosave();
    toast(state.theme === 'dark' ? '다크 모드' : '라이트 모드', 'info');
  });
}

/* 배경 파티클 (분자 구조 느낌) */
var bgfx = (function () {
  var cv, ctx, pts = [], raf = null, W = 0, H = 0, color = 'rgba(47,109,246,.5)';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function resize() {
    if (!cv) return;
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = cv.clientWidth; H = cv.clientHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  function seed() {
    var n = Math.max(18, Math.min(48, Math.round((W * H) / 42000)));
    pts = [];
    for (var i = 0; i < n; i++) {
      pts.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .16, vy: (Math.random() - .5) * .16,
        r: 1.1 + Math.random() * 1.9
      });
    }
  }
  function recolor() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    color = dark ? 'rgba(140,175,255,' : 'rgba(47,109,246,';
  }
  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < pts.length; i++) {
      var p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = W + 20; if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20; if (p.y > H + 20) p.y = -20;
      for (var j = i + 1; j < pts.length; j++) {
        var q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d = Math.sqrt(dx * dx + dy * dy);
        if (d < 132) {
          ctx.strokeStyle = color + (0.16 * (1 - d / 132)).toFixed(3) + ')';
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      ctx.fillStyle = color + '.34)';
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.2832); ctx.fill();
    }
    raf = requestAnimationFrame(tick);
  }
  function init() {
    cv = $('#bgcanvas'); if (!cv) return;
    ctx = cv.getContext('2d');
    resize(); seed(); recolor();
    if (reduce) { ctx.clearRect(0, 0, W, H); return; }
    tick();
    var t = null;
    window.addEventListener('resize', function () {
      clearTimeout(t);
      t = setTimeout(function () { resize(); seed(); }, 180);
    });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) { if (raf) cancelAnimationFrame(raf); raf = null; }
      else if (!raf && !reduce) tick();
    });
  }
  return { init: init, recolor: recolor };
})();

/* ======================================================================
   PART 4. 탭
   ====================================================================== */
function moveInk() {
  var t = $('.tab.active'), ink = $('#tabInk');
  if (!t || !ink) return;
  ink.style.left = t.offsetLeft + 'px';
  ink.style.width = t.offsetWidth + 'px';
}
function goTab(id, skipScroll) {
  $$('.tab').forEach(function (b) { b.classList.toggle('active', b.dataset.panel === id); });
  $$('.panel').forEach(function (p) { p.classList.toggle('active', p.id === id); });
  state.tab = id; autosave(); moveInk();
  if (!skipScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'p2') renderPlanDoc();
  if (id === 'p3') renderItemDoc();
  if (id === 'p4') { renderRubric(); renderRubricDoc(); }
  if (id === 'p5') buildPrompt();
  if (id === 'p7') buildPlanPrompt();
}
function initTabs() {
  $$('.tab').forEach(function (b) {
    b.addEventListener('click', function () { goTab(b.dataset.panel); });
  });
  window.addEventListener('resize', moveInk);
  setTimeout(moveInk, 60);
}

/* ======================================================================
   PART 5. 입력 바인딩
   ====================================================================== */
function bindFields() {
  $$('[data-k]').forEach(function (el) {
    if (el.hasAttribute('data-chipset') || el.hasAttribute('data-radioset')) return;
    var k = el.dataset.k;
    if (state.f[k] != null) el.value = state.f[k];
    var ev = (el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(ev, function () {
      state.f[k] = el.value; autosave();
      if (el.hasAttribute('data-agent')) buildPrompt();
      if (el.hasAttribute('data-agent2')) buildPlanPrompt();
      if (k === 'r_levels' || k === 'r_label') { relabelAll(); renderRubric(); renderHolistic(); renderLevelFeedback(); }
      liveDoc(el);
    });
  });
}
function liveDoc(el) {
  var p = el.closest('.panel'); if (!p) return;
  clearTimeout(liveDoc._t);
  liveDoc._t = setTimeout(function () {
    if (p.id === 'p2') renderPlanDoc();
    if (p.id === 'p3') renderItemDoc();
    if (p.id === 'p4') renderRubricDoc();
  }, 400);
}

/* 칩(다중 선택) */
function bindChips() {
  $$('[data-chipset]').forEach(function (box) {
    var k = box.dataset.k;
    if (!state.chips[k]) {
      state.chips[k] = $$('.chip.on', box).map(function (c) { return c.dataset.v; });
    }
    $$('.chip', box).forEach(function (c) {
      c.classList.toggle('on', state.chips[k].indexOf(c.dataset.v) >= 0);
      c.addEventListener('click', function () {
        var i = state.chips[k].indexOf(c.dataset.v);
        if (i >= 0) state.chips[k].splice(i, 1); else state.chips[k].push(c.dataset.v);
        c.classList.toggle('on', i < 0);
        autosave();
        if (box.hasAttribute('data-agent')) buildPrompt();
        if (box.hasAttribute('data-agent2')) buildPlanPrompt();
        liveDoc(box);
      });
    });
  });
}
/* 라디오 */
function bindRadios() {
  $$('[data-radioset]').forEach(function (box) {
    var k = box.dataset.k;
    $$('input[type=radio]', box).forEach(function (r) {
      if (state.f[k] === r.value) r.checked = true;
      r.addEventListener('change', function () {
        state.f[k] = r.value; autosave();
        if (k === 'r_kind') { renderRubric(); renderRubricDoc(); }
        if (box.hasAttribute('data-agent2')) buildPlanPrompt();
        liveDoc(box);
      });
    });
  });
}

/* ======================================================================
   PART 6. 성취기준 선택기
   ====================================================================== */
var STD = window.SCIENCE_STANDARDS || [];
var STD_MAP = {}; STD.forEach(function (s) { STD_MAP[s.code] = s; });

function stdFilterEls(scope) {
  return {
    school: $('[data-std="school"][data-scope="' + scope + '"]'),
    subject: $('[data-std="subject"][data-scope="' + scope + '"]'),
    area: $('[data-std="area"][data-scope="' + scope + '"]'),
    q: $('[data-std="q"][data-scope="' + scope + '"]'),
    list: $('[data-std="list"][data-scope="' + scope + '"]'),
    picked: $('[data-std="picked"][data-scope="' + scope + '"]')
  };
}
function fillSelect(sel, values, placeholder) {
  var cur = sel.value;
  sel.innerHTML = '<option value="">' + placeholder + '</option>' +
    values.map(function (v) { return '<option value="' + esc(v) + '">' + esc(v) + '</option>'; }).join('');
  if (values.indexOf(cur) >= 0) sel.value = cur;
}
function uniq(a) { var s = {}, o = []; a.forEach(function (x) { if (x && !s[x]) { s[x] = 1; o.push(x); } }); return o; }

function renderStdList(scope) {
  var e = stdFilterEls(scope);
  if (!e.list) return;
  var school = e.school.value, subject = e.subject.value, area = e.area.value;
  var q = (e.q.value || '').trim().toLowerCase();

  /* 종속 셀렉트 갱신 */
  var bySchool = STD.filter(function (s) { return !school || s.school === school; });
  var subjects = uniq(bySchool.map(function (s) { return s.subject; }));
  var order = window.SCIENCE_SUBJECT_ORDER || [];
  subjects.sort(function (a, b) { return order.indexOf(a) - order.indexOf(b); });
  fillSelect(e.subject, subjects, '전체 과목');
  subject = e.subject.value;
  var bySubject = bySchool.filter(function (s) { return !subject || s.subject === subject; });
  fillSelect(e.area, uniq(bySubject.map(function (s) { return s.area; })), '전체 영역');
  area = e.area.value;

  var rows = bySubject.filter(function (s) {
    if (area && s.area !== area) return false;
    if (!q) return true;
    return (s.code + ' ' + s.area + ' ' + s.text).toLowerCase().indexOf(q) >= 0;
  });

  var picked = state.std[scope] || [];
  if (!rows.length) {
    e.list.innerHTML = '<div class="std-empty">조건에 맞는 성취기준이 없습니다.<br>필터를 넓히거나 검색어를 지워 보십시오.</div>';
  } else {
    var cap = rows.slice(0, 400);
    e.list.innerHTML = cap.map(function (s) {
      var on = picked.indexOf(s.code) >= 0;
      return '<label class="std-row"><input type="checkbox" value="' + esc(s.code) + '"' + (on ? ' checked' : '') + '>' +
        '<span class="cl-box">' + CHK + '</span>' +
        '<span class="std-info"><span class="std-code">' + esc(s.code) + '</span>' +
        '<span class="std-area">' + esc(s.subject) + ' · ' + esc(s.area) + '</span>' +
        '<span class="std-text">' + esc(s.text) + '</span></span></label>';
    }).join('') + (rows.length > 400 ? '<div class="std-empty">…' + (rows.length - 400) + '개 더 있습니다. 검색으로 좁혀 보십시오.</div>' : '');
    $$('input[type=checkbox]', e.list).forEach(function (cb) {
      cb.addEventListener('change', function () {
        var arr = state.std[scope];
        var i = arr.indexOf(cb.value);
        if (cb.checked && i < 0) arr.push(cb.value);
        if (!cb.checked && i >= 0) arr.splice(i, 1);
        renderPicked(scope); autosave();
      });
    });
  }
  renderPicked(scope);
}
function renderPicked(scope) {
  var e = stdFilterEls(scope);
  if (!e.picked) return;
  var arr = state.std[scope] || [];
  var cnt = $(scope === 'plan' ? '#stdPickCount2' : '#stdPickCount3');
  if (cnt) cnt.textContent = arr.length + '개 선택';
  if (!arr.length) { e.picked.innerHTML = ''; return; }
  e.picked.innerHTML = arr.map(function (code) {
    var s = STD_MAP[code]; if (!s) return '';
    return '<div class="picked-item"><span class="std-info"><span class="std-code">' + esc(s.code) + '</span>' +
      '<span class="std-area">' + esc(s.subject) + ' · ' + esc(s.area) + '</span>' +
      '<span class="std-text">' + esc(s.text) + '</span></span>' +
      '<button class="x no-print" data-code="' + esc(code) + '" title="제외">' + XICO + '</button></div>';
  }).join('');
  $$('.x', e.picked).forEach(function (b) {
    b.addEventListener('click', function () {
      var i = state.std[scope].indexOf(b.dataset.code);
      if (i >= 0) state.std[scope].splice(i, 1);
      renderStdList(scope); autosave();
      if (scope === 'plan') renderPlanDoc(); else renderItemDoc();
    });
  });
  if (scope === 'plan') renderPlanDoc(); else renderItemDoc();
}
function initStd() {
  ['plan', 'item'].forEach(function (scope) {
    var e = stdFilterEls(scope);
    if (!e.list) return;
    fillSelect(e.school, uniq(STD.map(function (s) { return s.school; })), '전체 학교급');
    ['school', 'subject', 'area'].forEach(function (k) {
      e[k].addEventListener('change', function () { renderStdList(scope); });
    });
    var t = null;
    e.q.addEventListener('input', function () { clearTimeout(t); t = setTimeout(function () { renderStdList(scope); }, 200); });
    renderStdList(scope);
  });
}

/* ======================================================================
   PART 7. 반복 입력(리피터)
   ====================================================================== */
var REPS = {
  planElem: {
    fields: [{ k: 'text', ph: '예) 물질의 특성을 비교하여 혼합물 분리 방법 설계하기', type: 'text' }],
    empty: '아직 평가 요소가 없습니다. ‘+ 평가 요소 추가’를 누르십시오.'
  },
  planLesson: {
    row: true,
    empty: '차시를 추가하여 수업과 평가의 연결을 적으십시오.'
  },
  itemCond: {
    fields: [{ k: 'text', ph: '예) ‘밀도’와 ‘용해도’를 모두 사용하여 설명할 것', type: 'text' }],
    empty: '조건이 없습니다. 조건 없이도 답안의 범위가 분명한지 확인하십시오.'
  },
  planTask: {
    cls: 'task',
    fields: [
      { k: 'name', ph: '예) 실험/실습 평가', type: 'text' },
      { k: 'pct', ph: '비율 %', type: 'number', center: true }
    ],
    empty: '수행평가가 없습니다. ‘+ 수행평가 추가’를 눌러 과제와 비율을 적으십시오.'
  }
};
function repArr(name) {
  if (!state.reps || typeof state.reps !== 'object') state.reps = {};
  if (!Array.isArray(state.reps[name])) state.reps[name] = [];
  return state.reps[name];
}

function renderRep(name) {
  var box = $('[data-rep="' + name + '"]'); if (!box) return;
  var arr = repArr(name), cfg = REPS[name];

  if (name === 'planLesson') {
    if (!arr.length) {
      box.innerHTML = '<tr><td colspan="5" class="center muted tiny" style="padding:22px">' + cfg.empty + '</td></tr>';
      return;
    }
    box.innerHTML = arr.map(function (r, i) {
      return '<tr>' +
        '<td class="num"><input type="text" data-i="' + i + '" data-f="no" value="' + esc(r.no || (i + 1)) + '" style="text-align:center"></td>' +
        '<td><textarea data-i="' + i + '" data-f="act" rows="3" placeholder="예) 밀도 차를 이용한 혼합물 분리 실험 설계 및 수행">' + esc(r.act || '') + '</textarea></td>' +
        '<td><textarea data-i="' + i + '" data-f="eval" rows="3" placeholder="예) 형성평가 · 실험보고서 동료평가">' + esc(r.eval || '') + '</textarea></td>' +
        '<td><textarea data-i="' + i + '" data-f="mean" rows="3" placeholder="예) 수행평가에서 요구할 실험 설계 과정을 미리 연습함">' + esc(r.mean || '') + '</textarea></td>' +
        '<td class="num no-print"><button class="rep-del" data-del="' + i + '" title="삭제">' + TRASH + '</button></td>' +
        '</tr>';
    }).join('');
  } else {
    if (!arr.length) { box.innerHTML = '<p class="muted tiny center" style="padding:16px 0">' + cfg.empty + '</p>'; return; }
    box.innerHTML = arr.map(function (r, i) {
      return '<div class="rep-item"><div class="rep-idx">' + (i + 1) + '</div>' +
        '<div class="rep-body' + (cfg.cls ? ' ' + cfg.cls : '') + '">' +
        cfg.fields.map(function (f) {
          return '<input type="' + (f.type || 'text') + '" data-i="' + i + '" data-f="' + f.k + '"' +
            (f.type === 'number' ? ' min="0" max="100"' : '') +
            ' value="' + esc(r[f.k] == null ? '' : r[f.k]) + '" placeholder="' + esc(f.ph) + '"' +
            (f.center ? ' style="text-align:center"' : '') + '>';
        }).join('') +
        '</div><button class="rep-del no-print" data-del="' + i + '" title="삭제">' + TRASH + '</button></div>';
    }).join('');
  }

  $$('[data-f]', box).forEach(function (el) {
    el.addEventListener('input', function () {
      arr[+el.dataset.i][el.dataset.f] = el.value; autosave(); liveDoc(el);
      if (name === 'planTask') buildPlanPrompt();
    });
  });
  $$('[data-del]', box).forEach(function (b) {
    b.addEventListener('click', function () {
      arr.splice(+b.dataset.del, 1); renderRep(name); autosave();
      if (name === 'planTask') buildPlanPrompt();
      if (name === 'planElem') renderPlanDoc();
      if (name === 'planLesson') renderPlanDoc();
      if (name === 'itemCond') renderItemDoc();
    });
  });
}
function initReps() {
  Object.keys(REPS).forEach(renderRep);
  $$('[data-add]').forEach(function (b) {
    b.addEventListener('click', function () {
      var name = b.dataset.add;
      try {
        if (name === 'rubricElem') { addRubricElem(); return; }
        var arr = repArr(name);
        if (name === 'planLesson') arr.push({ no: arr.length + 1, act: '', eval: '', mean: '' });
        else if (name === 'planTask') arr.push({ name: '', pct: '' });
        else arr.push({ text: '' });
        renderRep(name); autosave();
        if (name === 'planTask') buildPlanPrompt();
        var box = $('[data-rep="' + name + '"]');
        var inputs = $$('input,textarea', box);
        if (inputs.length) inputs[name === 'planLesson' ? inputs.length - 3 : inputs.length - 1].focus();
      } catch (err) {
        /* 저장된 값이 깨져 있으면 버튼이 조용히 죽는다. 그 대신 알려 준다. */
        console.error('[add:' + name + ']', err);
        toast('추가에 실패했습니다. 저장된 값이 손상되었을 수 있습니다.', 'warn');
      }
    });
  });
}

/* ======================================================================
   PART 8. 체크리스트
   ====================================================================== */
var CHECK_GROUPS = {
  proc:   { data: PROC,       mount: '#procAcc',   ring: '#procRing', fill: '#procFill', num: '#procNum' },
  plan:   { data: PLAN_CHECK, mount: '#planCheck', ring: '#planRing', fill: '#planFill', num: '#planNum' },
  item:   { data: ITEM_CHECK, mount: '#itemCheck', ring: '#itemRing', fill: '#itemFill', num: '#itemNum' },
  rubric: { data: RUB_CHECK,  mount: '#rubCheck',  ring: '#rubRing',  fill: '#rubFill',  num: '#rubNum' },
  design: { data: DESIGN_CHECK, mount: '#designCheck', ring: '#designRing', fill: '#designFill', num: '#designNum' }
};

function renderChecks(gname) {
  var g = CHECK_GROUPS[gname], box = $(g.mount);
  if (!box) return;
  box.innerHTML = g.data.map(function (sec, si) {
    var items = sec.items.map(function (it, ii) {
      var id = gname + ':' + sec.id + ':' + ii;
      var on = !!state.checks[id];
      return '<label class="cl-item"><input type="checkbox" data-chk="' + id + '"' + (on ? ' checked' : '') + '>' +
        '<span class="cl-box">' + CHK + '</span><span class="cl-txt">' +
        '<span class="cl-main">' + it[0] + '</span>' +
        (it[1] ? '<span class="cl-sub">' + it[1] + '</span>' : '') +
        '</span></label>';
    }).join('');
    return '<div class="acc' + (si === 0 ? ' open' : '') + '" data-sec="' + sec.id + '">' +
      '<button class="acc-head" type="button"><span class="acc-step">' + (si + 1) + '</span>' +
      '<span><span class="acc-title">' + sec.title + '</span>' +
      (sec.sub ? '<span class="acc-sub"> · ' + sec.sub + '</span>' : '') + '</span>' +
      '<span class="acc-meta"><span class="acc-count" data-cnt="' + sec.id + '"></span>' +
      '<svg class="acc-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg></span></button>' +
      '<div class="acc-body"><div class="checklist">' + items + '</div></div></div>';
  }).join('');

  $$('.acc-head', box).forEach(function (h) {
    h.addEventListener('click', function () { h.parentNode.classList.toggle('open'); });
  });
  $$('[data-chk]', box).forEach(function (cb) {
    cb.addEventListener('change', function () {
      state.checks[cb.dataset.chk] = cb.checked; autosave(); updateChecks(gname);
    });
  });
  updateChecks(gname);
}
function updateChecks(gname) {
  var g = CHECK_GROUPS[gname], box = $(g.mount);
  if (!box) return;
  var total = 0, done = 0;
  g.data.forEach(function (sec) {
    var st = 0, sd = 0;
    sec.items.forEach(function (it, ii) {
      st++; if (state.checks[gname + ':' + sec.id + ':' + ii]) sd++;
    });
    total += st; done += sd;
    var badge = $('[data-cnt="' + sec.id + '"]', box);
    if (badge) {
      badge.textContent = sd + ' / ' + st;
      badge.classList.toggle('done', sd === st && st > 0);
    }
  });
  var pct = total ? Math.round(done / total * 100) : 0;
  var fill = $(g.fill); if (fill) fill.style.width = pct + '%';
  var num = $(g.num); if (num) num.textContent = done + ' / ' + total;
  setRing($(g.ring), pct);
}
function setRing(el, pct) {
  if (!el) return;
  var c = $('.fgc', el), b = $('b', el);
  var C = 2 * Math.PI * 16;
  c.style.strokeDasharray = C;
  c.style.strokeDashoffset = C * (1 - pct / 100);
  b.textContent = pct + '%';
}
function initChecks() {
  Object.keys(CHECK_GROUPS).forEach(renderChecks);
  $$('[data-reset-check]').forEach(function (b) {
    b.addEventListener('click', function () {
      var g = b.dataset.resetCheck;
      if (!confirm('이 점검표의 체크를 모두 해제할까요?')) return;
      Object.keys(state.checks).forEach(function (k) { if (k.indexOf(g + ':') === 0) delete state.checks[k]; });
      renderChecks(g); autosave(); toast('체크를 초기화했습니다', 'info');
    });
  });
  [['#procExpand', 'proc'], ['#itemExpand', 'item'], ['#rubExpand', 'rubric'], ['#designExpand', 'design']].forEach(function (p) {
    var btn = $(p[0]); if (!btn) return;
    btn.addEventListener('click', function () {
      var box = $(CHECK_GROUPS[p[1]].mount);
      var accs = $$('.acc', box);
      var anyClosed = accs.some(function (a) { return !a.classList.contains('open'); });
      accs.forEach(function (a) { a.classList.toggle('open', anyClosed); });
      btn.textContent = anyClosed ? '모두 접기' : '모두 펼치기';
    });
  });
}

/* 요소별 핵심 점검표 */
function renderQuickCheck() {
  var b = $('#quickCheckBody'); if (!b) return;
  b.innerHTML = QUICK_CHECK.map(function (r, i) {
    var id = 'quick:' + i, on = !!state.checks[id];
    return '<tr><td><b>' + esc(r[0]) + '</b></td><td>' + esc(r[1]) + '</td>' +
      '<td class="num"><label class="cl-item" style="padding:0;justify-content:center">' +
      '<input type="checkbox" data-chk2="' + id + '"' + (on ? ' checked' : '') + '>' +
      '<span class="cl-box" style="margin:0">' + CHK + '</span></label></td></tr>';
  }).join('');
  $$('[data-chk2]', b).forEach(function (cb) {
    cb.addEventListener('change', function () { state.checks[cb.dataset.chk2] = cb.checked; autosave(); });
  });
}

/* 4점 척도 */
function renderRate() {
  var b = $('#rateBody'); if (!b) return;
  b.innerHTML = RATE_ITEMS.map(function (t, i) {
    var v = state.rates['r' + i];
    var cells = [1, 2, 3, 4].map(function (n) {
      return '<td class="num"><label class="cl-item" style="padding:0;justify-content:center">' +
        '<input type="radio" name="rate' + i + '" value="' + n + '"' + (v == n ? ' checked' : '') + ' data-rate="' + i + '">' +
        '<span class="cl-box" style="margin:0;border-radius:50%">' + CHK + '</span></label></td>';
    }).join('');
    return '<tr><td class="num">' + (i + 1) + '</td><td>' + esc(t) + '</td>' + cells + '</tr>';
  }).join('');
  $$('[data-rate]', b).forEach(function (r) {
    r.addEventListener('change', function () {
      state.rates['r' + r.dataset.rate] = +r.value; autosave(); rateSummary();
    });
  });
  rateSummary();
}
function rateSummary() {
  var el = $('#rateSummary'); if (!el) return;
  var vals = RATE_ITEMS.map(function (_, i) { return state.rates['r' + i]; }).filter(function (v) { return v; });
  if (!vals.length) { el.innerHTML = '<b>자기 평가 결과</b> · 아직 응답하지 않았습니다. 8개 항목을 모두 평정해 보십시오.'; return; }
  var sum = vals.reduce(function (a, b) { return a + b; }, 0);
  var avg = (sum / vals.length).toFixed(2);
  var low = [];
  RATE_ITEMS.forEach(function (t, i) { if (state.rates['r' + i] && state.rates['r' + i] <= 2) low.push(i + 1); });
  var msg = '<b>자기 평가 결과</b> · 응답 ' + vals.length + '/8, 평균 <b style="color:var(--brand)">' + avg + '</b> / 4.00';
  if (low.length) msg += '<br>보완이 필요한 항목 : <b style="color:var(--warn)">' + low.join(', ') + '번</b> — 이 항목을 해결한 뒤 문항을 확정하십시오.';
  else if (vals.length === 8) msg += '<br>모든 항목이 ‘그렇다’ 이상입니다. 교과협의회 검토로 넘어가십시오.';
  el.innerHTML = msg;
}

/* ======================================================================
   PART 9. 정적 위젯 (반응 지시어 · DOK · 절차 다이어그램)
   ====================================================================== */
function renderVerbs() {
  var body = $('#verbTable'), input = $('#verbSearch'), cnt = $('#verbCount');
  if (!body) return;
  function draw() {
    var q = (input.value || '').trim().toLowerCase();
    var rows = VERBS.filter(function (v) { return !q || (v[0] + v[1] + v[2]).toLowerCase().indexOf(q) >= 0; });
    body.innerHTML = rows.map(function (v) {
      var lv = v[2].replace('DOK ', '');
      var cls = lv >= 4 ? 'p' : (lv >= 3 ? 'b' : (lv >= 2 ? 'g' : ''));
      return '<tr><td><b>' + esc(v[0]) + '</b></td><td>' + esc(v[1]) + '</td>' +
        '<td class="num"><span class="tag ' + cls + '">' + esc(v[2]) + '</span></td></tr>';
    }).join('') || '<tr><td colspan="3" class="center muted">검색 결과가 없습니다.</td></tr>';
    cnt.textContent = rows.length + ' / ' + VERBS.length + '개';
  }
  input.addEventListener('input', draw);
  draw();

  var chips = $('#verbChips');
  if (chips) {
    chips.innerHTML = VERBS.map(function (v) {
      return '<button class="chip" type="button" data-verb="' + esc(v[0]) + '" title="' + esc(v[1]) + '">' + esc(v[0]) + '</button>';
    }).join('');
    $$('[data-verb]', chips).forEach(function (b) {
      b.addEventListener('click', function () {
        var ta = $('[data-k="i_qDirect"]');
        var cur = ta.value.replace(/\s*$/, '');
        ta.value = cur ? (cur + ' ' + b.dataset.verb + '.') : ('… ' + b.dataset.verb + '.');
        state.f.i_qDirect = ta.value; autosave(); renderItemDoc();
        ta.focus();
        toast('‘' + b.dataset.verb + '’를 발문에 넣었습니다', 'ok');
      });
    });
  }
}
function renderDok() {
  var g = $('#dokGrid'); if (!g) return;
  g.innerHTML = DOKS.map(function (d) {
    return '<div class="dok ' + d[0] + '"><div class="dok-lv">' + d[1] + '</div><h5>' + d[2] + '</h5>' +
      '<p>' + d[3] + '</p><span class="kw">' + d[4] + '</span></div>';
  }).join('');
}
function renderFlow() {
  var box = $('#flowDiagram'); if (!box) return;
  var nodes = [
    ['평가 계획 수립', '본질적 목표 · 평가 요소'],
    ['평가 도구 개발', '문항 + 채점기준표'],
    ['평가 결과 피드백', '성장을 돕는 정보']
  ];
  var W = 900, H = 176, gap = 34;
  var bw = (W - gap * 2 - 40) / 3, y = 44, bh = 74;
  var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:auto;display:block" role="img" aria-label="수업과 평가의 연계 지점">';
  svg += '<defs><linearGradient id="fg1" x1="0" y1="0" x2="0" y2="1">' +
         '<stop offset="0%" stop-color="var(--brand)"/><stop offset="100%" stop-color="var(--brand-2)"/></linearGradient></defs>';
  svg += '<text x="20" y="22" fill="var(--text-3)" font-size="13" font-weight="700">수업–평가 연계 지점</text>';
  for (var i = 0; i < 3; i++) {
    var x = 20 + i * (bw + gap);
    svg += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + bh + '" rx="14" fill="var(--surface-2)" stroke="var(--line)"/>';
    svg += '<rect x="' + x + '" y="' + y + '" width="5" height="' + bh + '" rx="2.5" fill="url(#fg1)"/>';
    svg += '<text x="' + (x + 20) + '" y="' + (y + 30) + '" fill="var(--text)" font-size="15" font-weight="800">' + nodes[i][0] + '</text>';
    svg += '<text x="' + (x + 20) + '" y="' + (y + 52) + '" fill="var(--text-3)" font-size="12.5">' + nodes[i][1] + '</text>';
    if (i < 2) {
      var ax = x + bw + 6, ay = y + bh / 2;
      svg += '<path d="M' + ax + ' ' + ay + ' h ' + (gap - 12) + '" stroke="var(--line-2)" stroke-width="2.4" stroke-linecap="round" stroke-dasharray="5 5"><animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.6s" repeatCount="indefinite"/></path>';
      svg += '<path d="M' + (ax + gap - 16) + ' ' + (ay - 5) + ' l 6 5 l -6 5" fill="none" stroke="var(--brand)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>';
    }
  }
  var by = y + bh + 26;
  svg += '<path d="M ' + (20 + bw / 2) + ' ' + by + ' q 0 18 18 18 h ' + (W - 76 - bw) + ' q 18 0 18 -18" fill="none" stroke="var(--line-2)" stroke-width="2" stroke-dasharray="4 5"/>';
  svg += '<text x="' + (W / 2) + '" y="' + (by + 34) + '" text-anchor="middle" fill="var(--text-3)" font-size="12" font-weight="700">피드백 결과를 다음 수업·평가 계획에 반영</text>';
  svg += '</svg>';
  box.innerHTML = svg;
}

/* ======================================================================
   PART 10. 채점기준표 빌더
   ====================================================================== */
var LABEL_SETS = {
  ABC:   ['A', 'B', 'C', 'D', 'E', 'F'],
  상중하: { 3: ['상', '중', '하'], 4: ['상', '중상', '중하', '하'], 5: ['매우 우수', '우수', '보통', '미흡', '매우 미흡'], 6: ['최상', '상', '중상', '중하', '하', '최하'] },
  서술:   { 3: ['탁월함', '보통임', '좀 더 노력하자'], 4: ['탁월함', '우수함', '보통임', '좀 더 노력하자'], 5: ['탁월함', '우수함', '보통임', '조금 부족함', '좀 더 노력하자'], 6: ['탁월함', '매우 우수함', '우수함', '보통임', '조금 부족함', '좀 더 노력하자'] }
};
function levelLabel(i, n) {
  var style = state.f.r_label || '점수';
  if (style === 'ABC') return LABEL_SETS.ABC[i] || String(i + 1);
  if (style === '점수') return '';
  var set = LABEL_SETS[style] && LABEL_SETS[style][n];
  return set ? set[i] : String(n - i);
}
function levelCount() { return Math.max(2, Math.min(6, parseInt(state.f.r_levels || 5, 10))); }
function showLabelCol() { return (state.f.r_label || '점수') !== '점수'; }
function relabelAll() {
  var n = levelCount();
  state.rubric.forEach(function (el) {
    if (!el.levels) el.levels = [];
    while (el.levels.length < n) el.levels.push({ label: '', score: '', desc: '' });
    el.levels.length = n;
    el.levels.forEach(function (lv, i) { lv.label = levelLabel(i, n) || lv.label; });
  });
  if (state.holistic.levels) {
    while (state.holistic.levels.length < n) state.holistic.levels.push({ label: '', score: '', desc: '' });
    state.holistic.levels.length = n;
    state.holistic.levels.forEach(function (lv, i) { lv.label = levelLabel(i, n) || lv.label; });
  }
}

function normalizeLevels(el) {
  var n = levelCount();
  if (!el.levels) el.levels = [];
  while (el.levels.length < n) el.levels.push({ label: '', score: '', desc: '' });
  el.levels.length = n;
  el.levels.forEach(function (lv, i) { if (!lv.label) lv.label = levelLabel(i, n); });
  return el;
}
function addRubricElem(name) {
  state.rubric.push(normalizeLevels({ name: name || '', levels: [] }));
  renderRubric(); autosave();
}
function renderRubric() {
  var box = $('[data-rep="rubricElem"]'); if (!box) return;
  var holistic = state.f.r_kind === 'holistic';
  var t = $('#rubricModeTitle');
  if (t) t.textContent = holistic ? '총체적 채점 — 채점 요소는 참고용으로만 정리합니다' : '분석적 채점기준표';
  var sumRow = $('#rubricSumRow'); if (sumRow) sumRow.style.display = holistic ? 'none' : '';

  if (!state.rubric.length) {
    box.innerHTML = '<p class="muted tiny center" style="padding:18px 0">채점 요소가 없습니다. ‘평가 요소·조건 불러오기’ 또는 ‘+ 채점 요소 추가’를 누르십시오.</p>';
    updateRubricSum(); renderHolistic(); renderLevelFeedback(); renderRubricDoc(); return;
  }
  var n = levelCount();
  box.innerHTML = state.rubric.map(function (el, ei) {
    normalizeLevels(el);
    var SL = showLabelCol();
    var rows = el.levels.map(function (lv, li) {
      return '<tr>' +
        (SL ? '<td class="num"><input type="text" data-e="' + ei + '" data-l="' + li + '" data-f="label" value="' + esc(lv.label) + '" style="text-align:center" placeholder="' + esc(levelLabel(li, n) || '수준') + '"></td>' : '') +
        '<td class="num"><input type="text" data-e="' + ei + '" data-l="' + li + '" data-f="score" value="' + esc(lv.score) + '" style="text-align:center" placeholder="' + (SL ? '점' : (n - li) + '점') + '"></td>' +
        '<td><textarea data-e="' + ei + '" data-l="' + li + '" data-f="desc" rows="2" placeholder="' + esc(descPlaceholder(li, n)) + '">' + esc(lv.desc) + '</textarea></td>' +
        '</tr>';
    }).join('');
    return '<div class="card flat" style="background:var(--surface-2);margin-bottom:12px">' +
      '<div class="row between mb12">' +
      '<div style="flex:1;min-width:0;display:flex;gap:10px;align-items:center">' +
      '<span class="rep-idx" style="margin:0">' + (ei + 1) + '</span>' +
      '<input type="text" data-e="' + ei + '" data-f="name" value="' + esc(el.name) + '" placeholder="채점 요소 (예: 충돌 관련 안전 장치 개선 방법 제안하기)" style="font-weight:700">' +
      '</div>' +
      '<button class="rep-del no-print" data-delidx="' + ei + '" title="요소 삭제">' + TRASH + '</button></div>' +
      '<div class="tablewrap"><table class="compact"><thead><tr>' +
      (SL ? '<th style="width:88px" class="num">척도</th>' : '') +
      '<th style="width:' + (SL ? '64' : '88') + 'px" class="num">' + (SL ? '배점' : '척도 · 배점') + '</th><th>수행 수준(채점기준) 진술</th>' +
      '</tr></thead><tbody>' + rows + '</tbody></table></div></div>';
  }).join('');

  $$('[data-f]', box).forEach(function (inp) {
    inp.addEventListener('input', function () {
      var ei = +inp.dataset.e;
      if (inp.dataset.f === 'name') state.rubric[ei].name = inp.value;
      else state.rubric[ei].levels[+inp.dataset.l][inp.dataset.f] = inp.value;
      autosave(); updateRubricSum();
      clearTimeout(renderRubric._t);
      renderRubric._t = setTimeout(renderRubricDoc, 400);
    });
  });
  $$('[data-delidx]', box).forEach(function (b) {
    b.addEventListener('click', function () {
      state.rubric.splice(+b.dataset.delidx, 1); renderRubric(); autosave();
    });
  });
  updateRubricSum(); renderHolistic(); renderLevelFeedback(); renderRubricDoc();
}
function descPlaceholder(i, n) {
  if (i === 0) return '가장 높은 수준 — 무엇을 정확하고 구체적으로 해냈는가를 질적으로 기술';
  if (i === n - 1) return '가장 낮은 수준 — 무엇까지는 했고 무엇을 하지 못했는가';
  return '중간 수준 — 위·아래 수준과 겹치지 않도록 차이가 드러나게';
}
function updateRubricSum() {
  var el = $('#rubricSum'); if (!el) return;
  var sum = 0;
  state.rubric.forEach(function (e) {
    var m = 0;
    (e.levels || []).forEach(function (lv) { var v = parseFloat(lv.score); if (!isNaN(v) && v > m) m = v; });
    sum += m;
  });
  el.textContent = (Math.round(sum * 10) / 10);
}
function renderHolistic() {
  var box = $('#holisticRows'); if (!box) return;
  var n = levelCount();
  if (!state.holistic.levels) state.holistic.levels = [];
  while (state.holistic.levels.length < n) state.holistic.levels.push({ label: '', score: '', desc: '' });
  state.holistic.levels.length = n;
  state.holistic.levels.forEach(function (lv, i) { if (!lv.label) lv.label = levelLabel(i, n) || String(n - i); });

  var SL = showLabelCol();
  box.innerHTML = '<div class="tablewrap"><table class="compact"><thead><tr>' +
    (SL ? '<th style="width:88px" class="num">척도</th>' : '') +
    '<th style="width:' + (SL ? '64' : '88') + 'px" class="num">' + (SL ? '배점' : '척도 · 배점') + '</th><th>답안 전체에 대한 수행 수준 진술</th></tr></thead><tbody>' +
    state.holistic.levels.map(function (lv, i) {
      return '<tr>' +
        (SL ? '<td class="num"><input type="text" data-h="' + i + '" data-f="label" value="' + esc(lv.label) + '" style="text-align:center"></td>' : '') +
        '<td class="num"><input type="text" data-h="' + i + '" data-f="score" value="' + esc(lv.score) + '" style="text-align:center" placeholder="' + (SL ? '점' : (n - i) + '점') + '"></td>' +
        '<td><textarea data-h="' + i + '" data-f="desc" rows="2" placeholder="' + esc(descPlaceholder(i, n)) + '">' + esc(lv.desc) + '</textarea></td></tr>';
    }).join('') + '</tbody></table></div>';

  $$('[data-h]', box).forEach(function (inp) {
    inp.addEventListener('input', function () {
      state.holistic.levels[+inp.dataset.h][inp.dataset.f] = inp.value; autosave();
      clearTimeout(renderHolistic._t);
      renderHolistic._t = setTimeout(renderRubricDoc, 400);
    });
  });
}
var FB_LEVELS = ['A', 'B', 'C', 'D', 'E'];
function renderLevelFeedback() {
  var box = $('#levelFeedback'); if (!box) return;
  box.innerHTML = FB_LEVELS.map(function (L) {
    var v = state.levelFb[L] || {};
    var cls = L === 'A' ? 'g' : (L === 'B' ? 'b' : (L === 'C' ? '' : 'o'));
    return '<tr><td class="num"><span class="tag ' + cls + '">' + L + '</span></td>' +
      '<td><input type="text" data-fb="' + L + '" data-f="range" value="' + esc(v.range || '') + '" placeholder="예) 6~5점"></td>' +
      '<td><textarea data-fb="' + L + '" data-f="text" rows="2" placeholder="' + esc(fbPlaceholder(L)) + '">' + esc(v.text || '') + '</textarea></td></tr>';
  }).join('');
  $$('[data-fb]', box).forEach(function (inp) {
    inp.addEventListener('input', function () {
      var L = inp.dataset.fb;
      if (!state.levelFb[L]) state.levelFb[L] = {};
      state.levelFb[L][inp.dataset.f] = inp.value; autosave();
      clearTimeout(renderLevelFeedback._t);
      renderLevelFeedback._t = setTimeout(renderRubricDoc, 400);
    });
  });
}
function fbPlaceholder(L) {
  if (L === 'A') return '예) 자료의 차이를 밀도 개념으로 정확히 해석하고, 분리 순서와 그 근거를 빠짐없이 연결하여 설명했습니다.';
  if (L === 'B') return '예) 개념을 정확히 사용했으나 마지막 단계의 근거가 한 문장 빠져 있습니다. 어떤 특성 때문에 그 순서가 되는지 덧붙여 보십시오.';
  if (L === 'C') return '예) 분리 순서는 맞게 정했지만 근거를 현상 설명에 그쳤습니다. ‘밀도가 작다 → 뜬다’처럼 개념과 현상을 연결해 보십시오.';
  if (L === 'D') return '예) 실험 결과는 읽어 냈으나 개념어를 사용하지 못했습니다. 수업에서 정리한 개념어 목록을 다시 보고 한 번 더 작성해 봅시다.';
  return '예) 자료에서 필요한 정보를 찾는 단계부터 함께 연습해 봅시다. 첫 문장을 함께 만들어 보겠습니다.';
}
function pullElems() {
  var got = 0;
  (state.reps.planElem || []).forEach(function (r) {
    if (isBlank(r.text)) return;
    if (state.rubric.some(function (e) { return e.name === r.text; })) return;
    state.rubric.push(normalizeLevels({ name: r.text, levels: [] })); got++;
  });
  (state.reps.itemCond || []).forEach(function (r) {
    if (isBlank(r.text)) return;
    var nm = '[조건] ' + r.text;
    if (state.rubric.some(function (e) { return e.name === nm; })) return;
    state.rubric.push(normalizeLevels({ name: nm, levels: [] })); got++;
  });
  renderRubric(); autosave();
  toast(got ? got + '개 항목을 채점 요소로 가져왔습니다' : '가져올 새 항목이 없습니다', got ? 'ok' : 'warn');
}

/* ======================================================================
   PART 11. 문서 미리보기
   ====================================================================== */
function F(k) { return state.f[k] || ''; }
function orDash(v, ph) { return isBlank(v) ? '<span class="muted">' + (ph || '미입력') + '</span>' : esc(v); }
function today() {
  var d = new Date();
  return d.getFullYear() + '. ' + (d.getMonth() + 1) + '. ' + d.getDate() + '.';
}
function metaBox(pairs) {
  return '<div class="doc-meta">' + pairs.map(function (p) {
    return '<div><dt>' + esc(p[0]) + '</dt><dd>' + orDash(p[1]) + '</dd></div>';
  }).join('') + '</div>';
}
function stdTable(scope) {
  var arr = state.std[scope] || [];
  if (!arr.length) return '<p class="muted">선택한 성취기준이 없습니다.</p>';
  return '<table><thead><tr><th style="width:120px">코드</th><th style="width:150px">과목 · 영역</th><th>성취기준</th></tr></thead><tbody>' +
    arr.map(function (c) {
      var s = STD_MAP[c]; if (!s) return '';
      return '<tr><td><b>' + esc(s.code) + '</b></td><td>' + esc(s.subject) + '<br><span style="color:#6b7896">' + esc(s.area) + '</span></td><td>' + esc(s.text) + '</td></tr>';
    }).join('') + '</tbody></table>';
}
function listBlock(arr, key) {
  var xs = (arr || []).map(function (r) { return r[key || 'text']; }).filter(function (t) { return !isBlank(t); });
  if (!xs.length) return '<p class="muted">입력한 내용이 없습니다.</p>';
  return '<ul>' + xs.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>';
}
function docFoot(name) {
  return '<div class="doc-foot"><span>' + esc(name) + '</span>' +
    '<span>' + esc(F('school') || F('i_school')) + ' ' + esc(F('teacher') || F('i_teacher')) + ' · 작성일 ' + today() + '</span>' +
    '<span>송쌤과학 서논술형 평가 제작 도구</span></div>';
}

/* 11-1. 평가 계획서 */
function renderPlanDoc() {
  var box = $('#planDoc'); if (!box) return;
  var h = '';
  h += '<div class="doc-title">서·논술형 평가 계획서<small>' + esc(F('semester') || '학년도·학기 미입력') + ' · ' + esc(F('subject') || '과목 미입력') + '</small></div>';
  h += metaBox([
    ['학교', F('school')], ['교사', F('teacher')], ['학년', F('grade')], ['학급·대상', F('klass')],
    ['단원·영역', F('unit')], ['평가(과제)명', F('topic')], ['평가 시기', F('when')], ['평가 유형', F('etype')],
    ['반영 비율', F('ratio')], ['총 배점', F('score')], ['평가 장면', F('mScene')], ['문항 유형', F('mForm')]
  ]);

  h += '<div class="doc-sec"><h3>1. 교육과정 성취기준</h3>' + stdTable('plan') + '</div>';

  h += '<div class="doc-sec"><h3>2. 성취기준 분석</h3><table><thead><tr>' +
    '<th style="width:33%">지식 · 이해</th><th style="width:33%">과정 · 기능</th><th>가치 · 태도</th></tr></thead><tbody><tr>' +
    '<td>' + (isBlank(F('anKnow')) ? '<span class="muted">미입력</span>' : nl2br(F('anKnow'))) + '</td>' +
    '<td>' + (isBlank(F('anSkill')) ? '<span class="muted">미입력</span>' : nl2br(F('anSkill'))) + '</td>' +
    '<td>' + (isBlank(F('anValue')) ? '<span class="muted">미입력</span>' : nl2br(F('anValue'))) + '</td>' +
    '</tr></tbody></table></div>';

  h += '<div class="doc-sec"><h3>3. 본질적 목표와 핵심 질문</h3>' +
    '<div class="doc-block">' + (isBlank(F('bigGoal')) ? '<span class="muted">본질적 목표를 입력하십시오.</span>' : nl2br(F('bigGoal'))) + '</div>' +
    '<table style="margin-top:10px"><thead><tr><th style="width:33%">사실적·개념적 질문</th><th style="width:33%">비계 질문</th><th>전이 질문</th></tr></thead><tbody><tr>' +
    '<td>' + (isBlank(F('qFact')) ? '<span class="muted">–</span>' : nl2br(F('qFact'))) + '</td>' +
    '<td>' + (isBlank(F('qScaffold')) ? '<span class="muted">–</span>' : nl2br(F('qScaffold'))) + '</td>' +
    '<td>' + (isBlank(F('qTransfer')) ? '<span class="muted">–</span>' : nl2br(F('qTransfer'))) + '</td>' +
    '</tr></tbody></table>';
  var comp = (state.chips.competency || []);
  h += '<p style="margin-top:8px"><b>교과 역량</b> : ' + (comp.length ? esc(comp.join(' · ')) : '<span class="muted">미선택</span>') + '</p></div>';

  h += '<div class="doc-sec"><h3>4. 평가 요소</h3>' + listBlock(state.reps.planElem) + '</div>';

  h += '<div class="doc-sec"><h3>5. 평가 방법</h3><table><tbody>' +
    '<tr><th style="width:130px">평가 장면</th><td>' + orDash(F('mScene')) + '</td><th style="width:130px">문항 유형</th><td>' + orDash(F('mForm')) + '</td></tr>' +
    '<tr><th>채점 방식</th><td>' + orDash(F('mRubric')) + '</td><th>평가 주체</th><td>' + orDash((state.chips.mWho || []).join(' · ')) + '</td></tr>' +
    '<tr><th>선정 이유</th><td colspan="3">' + (isBlank(F('mWhy')) ? '<span class="muted">미입력</span>' : nl2br(F('mWhy'))) + '</td></tr>' +
    '</tbody></table></div>';

  var ls = (state.reps.planLesson || []).filter(function (r) { return !isBlank(r.act) || !isBlank(r.eval) || !isBlank(r.mean); });
  h += '<div class="doc-sec"><h3>6. 수업–평가 연계 차시 계획</h3>';
  if (!ls.length) h += '<p class="muted">차시 계획이 없습니다.</p>';
  else h += '<table><thead><tr><th style="width:52px">차시</th><th style="width:32%">교수·학습 활동</th><th style="width:22%">평가 계획</th><th>평가의 흐름과 의미</th></tr></thead><tbody>' +
    ls.map(function (r) {
      return '<tr><td style="text-align:center">' + orDash(r.no) + '</td><td>' + nl2br(r.act) + '</td><td>' + nl2br(r.eval) + '</td><td>' + nl2br(r.mean) + '</td></tr>';
    }).join('') + '</tbody></table>';
  h += '</div>';

  h += '<div class="doc-sec"><h3>7. 피드백 계획</h3><table><tbody>' +
    '<tr><th style="width:150px">목표 참조 피드백</th><td>' + (isBlank(F('fbGoal')) ? '<span class="muted">미입력</span>' : nl2br(F('fbGoal'))) + '</td></tr>' +
    '<tr><th>자기 참조 피드백</th><td>' + (isBlank(F('fbSelf')) ? '<span class="muted">미입력</span>' : nl2br(F('fbSelf'))) + '</td></tr>' +
    '<tr><th>시기와 방법</th><td>' + (isBlank(F('fbHow')) ? '<span class="muted">미입력</span>' : nl2br(F('fbHow'))) + '</td></tr>' +
    '<tr><th>재도전·보정 지도</th><td>' + (isBlank(F('fbRetry')) ? '<span class="muted">미입력</span>' : nl2br(F('fbRetry'))) + '</td></tr>' +
    '</tbody></table></div>';

  h += '<div class="doc-sec"><h3>8. 협의 및 공지</h3><div class="doc-block">' +
    (isBlank(F('council')) ? '<span class="muted">교과(학년)협의회 협의 내용을 입력하십시오.</span>' : nl2br(F('council'))) + '</div></div>';

  h += docFoot('서·논술형 평가 계획서');
  box.innerHTML = h;
}

/* 11-2. 문항 */
function renderItemDoc() {
  var box = $('#itemDoc'); if (!box) return;
  var h = '';
  h += '<div class="doc-title">서·논술형 평가 문항<small>' + esc(F('i_unit') || F('unit') || '단원 미입력') + ' · ' + esc(F('i_type') || '유형 미선택') + ' · ' + esc(F('i_point') || '배점 미입력') + '</small></div>';
  h += metaBox([
    ['학교', F('i_school') || F('school')], ['교사', F('i_teacher') || F('teacher')],
    ['학년', F('i_grade') || F('grade')], ['과목·단원', F('i_unit') || F('unit')],
    ['문항 번호', F('i_no')], ['문항 유형', F('i_type')], ['배점', F('i_point')], ['예상 응답 시간', F('i_time')],
    ['목표 성취수준', F('i_level')], ['응답 분량', F('i_len')], ['사고 수준', F('i_dok')], ['평가 장면', F('i_scene')]
  ]);

  h += '<div class="doc-sec"><h3>1. 근거 성취기준</h3>' + stdTable('item') + '</div>';

  h += '<div class="doc-sec"><h3>2. 요구할 사고 · 출제 의도</h3>' +
    '<div class="doc-block">' + (isBlank(F('i_think')) ? '<span class="muted">이 문항이 학생에게 시키는 생각을 한 문장으로 적으십시오.</span>' : nl2br(F('i_think'))) + '</div>';
  if (!isBlank(F('i_intent'))) h += '<div class="doc-block" style="margin-top:8px">' + nl2br(F('i_intent')) + '</div>';
  if (!isBlank(F('i_link'))) h += '<p style="margin-top:8px"><b>수업과의 연계</b> · ' + esc(F('i_link')) + '</p>';
  h += '</div>';

  /* 실제 문항 지면 */
  h += '<div class="doc-sec"><h3>3. 평가 문항</h3>';
  h += '<div style="border:1.5px solid #b9c7de;border-radius:10px;padding:18px 20px">';
  if (!isBlank(F('i_qIndirect'))) {
    h += '<p style="font-weight:700;margin-bottom:12px">' + esc(F('i_qIndirect')) +
      (isBlank(F('i_point')) ? '' : ' <span style="font-weight:600">[' + esc(F('i_point')) + ']</span>') + '</p>';
  }
  if (!isBlank(F('i_material'))) {
    h += '<div class="doc-block" style="margin-bottom:12px">' + nl2br(F('i_material')) + '</div>';
    if (!isBlank(F('i_matSrc'))) h += '<p style="font-size:11px;color:#7d8aa8;margin:-6px 0 12px">[출처] ' + esc(F('i_matSrc')) + '</p>';
  }
  h += '<p style="font-weight:700">' + (isBlank(F('i_qDirect')) ? '<span class="muted">직접 발문을 입력하십시오.</span>' : nl2br(F('i_qDirect'))) + '</p>';
  var conds = (state.reps.itemCond || []).map(function (r) { return r.text; }).filter(function (t) { return !isBlank(t); });
  if (conds.length) {
    h += '<div class="doc-block doc-cond" style="margin-top:12px"><b>&lt;조건&gt;</b><ul style="margin:6px 0 0">' +
      conds.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>';
  }
  h += '<div style="margin-top:14px;border-top:1px dashed #ccd6e8;padding-top:10px;color:#8794b0;font-size:11.5px">답안 작성란 ' +
    (isBlank(F('i_len')) ? '' : '· ' + esc(F('i_len'))) + (isBlank(F('i_time')) ? '' : ' · 권장 시간 ' + esc(F('i_time'))) + '</div>';
  h += '<div style="height:96px;background:repeating-linear-gradient(#fff,#fff 27px,#e2e9f4 27px,#e2e9f4 28px);border-radius:6px;margin-top:8px"></div>';
  h += '</div></div>';

  h += '<div class="doc-sec"><h3>4. 예시 답안</h3><div class="doc-block">' +
    (isBlank(F('i_answer')) ? '<span class="muted">예시 답안을 직접 작성해 보십시오. 응답 시간과 인정 범위를 가늠할 수 있습니다.</span>' : nl2br(F('i_answer'))) + '</div>';
  if (!isBlank(F('i_accept'))) h += '<p style="margin-top:10px"><b>인정 · 예외 답안의 범위</b></p><div class="doc-block">' + nl2br(F('i_accept')) + '</div>';
  h += '</div>';

  var secN = 5;
  if (!isBlank(F('i_matEdit')) || !isBlank(F('i_matSrc')) || (state.chips.i_matType || []).length) {
    h += '<div class="doc-sec"><h3>' + (secN++) + '. 자료 정보</h3><table><tbody>' +
      '<tr><th style="width:120px">자료 형태</th><td>' + orDash((state.chips.i_matType || []).join(' · ')) + '</td></tr>' +
      '<tr><th>출처</th><td>' + orDash(F('i_matSrc')) + '</td></tr>' +
      '<tr><th>가공 내역</th><td>' + (isBlank(F('i_matEdit')) ? '<span class="muted">미입력</span>' : nl2br(F('i_matEdit'))) + '</td></tr>' +
      '</tbody></table></div>';
  }
  if (!isBlank(F('i_fix'))) {
    h += '<div class="doc-sec"><h3>' + (secN++) + '. 점검에서 발견한 결함과 수정안</h3><div class="doc-block">' + nl2br(F('i_fix')) + '</div></div>';
  }
  h += docFoot('서·논술형 평가 문항');
  box.innerHTML = h;
}

/* 11-3. 채점기준표 */
function renderRubricDoc() {
  var box = $('#rubricDoc'); if (!box) return;
  var holistic = state.f.r_kind === 'holistic';
  var h = '';
  h += '<div class="doc-title">서·논술형 평가 채점기준표<small>' +
    esc(holistic ? '총체적 채점' : '분석적 채점') + ' · ' + esc(F('r_scope') || '적용 범위 미선택') +
    ' · ' + levelCount() + '단계' + (isBlank(F('r_total')) ? '' : ' · 총 ' + esc(F('r_total'))) + '</small></div>';
  h += metaBox([
    ['학교', F('i_school') || F('school')], ['교사', F('i_teacher') || F('teacher')],
    ['학년', F('i_grade') || F('grade')], ['과목·단원', F('i_unit') || F('unit')],
    ['문항 번호', F('i_no')], ['문항 유형', F('i_type')], ['총 배점', F('r_total') || F('i_point')], ['기본 점수', F('r_base')]
  ]);

  if (!holistic) {
    h += '<div class="doc-sec"><h3>1. 분석적 채점기준</h3>';
    if (!state.rubric.length) h += '<p class="muted">채점 요소가 없습니다.</p>';
    else {
      var SLd = showLabelCol();
      h += '<table><thead><tr><th style="width:24%">채점 요소</th>' + (SLd ? '<th style="width:70px">척도</th>' : '') +
        '<th style="width:70px">' + (SLd ? '배점' : '척도 · 배점') + '</th><th>수행 수준(채점기준)</th></tr></thead><tbody>';
      state.rubric.forEach(function (el) {
        var lv = el.levels || [];
        lv.forEach(function (l, i) {
          h += '<tr>' + (i === 0 ? '<td rowspan="' + lv.length + '"><b>' + orDash(el.name, '요소명 미입력') + '</b></td>' : '') +
            (SLd ? '<td style="text-align:center">' + orDash(l.label, '–') + '</td>' : '') +
            '<td style="text-align:center">' + orDash(l.score, '–') + '</td>' +
            '<td>' + (isBlank(l.desc) ? '<span class="muted">진술 미입력</span>' : nl2br(l.desc)) + '</td></tr>';
        });
      });
      h += '</tbody></table>';
      var sum = $('#rubricSum') ? $('#rubricSum').textContent : '';
      h += '<p style="margin-top:8px;text-align:right"><b>배점 합계 ' + esc(sum) + '점</b></p>';
    }
    h += '</div>';
  }

  var hl = (state.holistic.levels || []).filter(function (l) { return !isBlank(l.desc); });
  if (holistic || hl.length) {
    h += '<div class="doc-sec"><h3>' + (holistic ? '1' : '2') + '. 총체적 채점기준</h3>';
    if (!hl.length) h += '<p class="muted">총체적 채점기준 진술이 없습니다.</p>';
    else {
      var SLh = showLabelCol();
      h += '<table><thead><tr>' + (SLh ? '<th style="width:80px">척도</th>' : '') +
        '<th style="width:80px">' + (SLh ? '배점' : '척도 · 배점') + '</th><th>수행 수준(채점기준)</th></tr></thead><tbody>' +
        hl.map(function (l) {
          return '<tr>' + (SLh ? '<td style="text-align:center"><b>' + orDash(l.label, '–') + '</b></td>' : '') +
            '<td style="text-align:center"><b>' + orDash(l.score, '–') + '</b></td><td>' + nl2br(l.desc) + '</td></tr>';
        }).join('') + '</tbody></table>';
    }
    h += '</div>';
  }

  var fb = FB_LEVELS.filter(function (L) { var v = state.levelFb[L] || {}; return !isBlank(v.range) || !isBlank(v.text); });
  if (fb.length) {
    h += '<div class="doc-sec"><h3>3. 성취수준별 예상 수행 특성과 피드백</h3><table><thead><tr><th style="width:60px">수준</th><th style="width:100px">점수 구간</th><th>수행 특성 · 피드백</th></tr></thead><tbody>' +
      fb.map(function (L) {
        var v = state.levelFb[L] || {};
        return '<tr><td style="text-align:center"><b>' + L + '</b></td><td style="text-align:center">' + orDash(v.range, '–') + '</td><td>' + nl2br(v.text) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  if (!isBlank(F('r_inter')) || !isBlank(F('r_intra')) || !isBlank(F('r_notice'))) {
    h += '<div class="doc-sec"><h3>4. 채점 운영 계획</h3><table><tbody>' +
      '<tr><th style="width:160px">채점자 간 신뢰도</th><td>' + (isBlank(F('r_inter')) ? '<span class="muted">미입력</span>' : nl2br(F('r_inter'))) + '</td></tr>' +
      '<tr><th>채점자 내 신뢰도</th><td>' + (isBlank(F('r_intra')) ? '<span class="muted">미입력</span>' : nl2br(F('r_intra'))) + '</td></tr>' +
      '<tr><th>공지 계획</th><td>' + (isBlank(F('r_notice')) ? '<span class="muted">미입력</span>' : nl2br(F('r_notice'))) + '</td></tr>' +
      '</tbody></table></div>';
  }
  h += docFoot('서·논술형 평가 채점기준표');
  box.innerHTML = h;
}

/* ======================================================================
   PART 12. 에이전트 지시문 빌더
   ====================================================================== */
var STEP_GUIDE = {
  '성취기준·성취수준 확인': '어느 성취기준을 다룰지 교사가 고르게 하고, 성취기준별 성취수준(A~E 또는 A~C)까지 함께 확인한다. 교사가 성취기준을 특정하지 못하면 학년·단원을 먼저 묻는다.',
  '평가 요소 도출': '성취기준을 지식·이해 / 과정·기능 / 가치·태도로 나누어 보게 하고, 학생이 보여 주어야 할 증거를 ‘~하기’ 형태의 명사형 어구로 3~5개 뽑도록 돕는다.',
  '요구할 사고 한 문장 확정': '이 문항이 학생에게 시키는 생각을 한 문장으로 쓰게 한다. “무엇을 근거로 무엇을 판단·구성하게 하는가”가 드러나야 한다.',
  '자료 확보와 가공': '어떤 자료가 필요한지 함께 정한 뒤, 그 자료에서 결론에 해당하는 부분을 어디까지 잘라낼지 교사에게 묻는다.',
  '발문 작성': '반응 지시어(비교하시오·추론하시오·제안하시오 등)를 2~3개 제시하고 고르게 한 뒤, 간접 발문과 직접 발문을 구분해 초안을 만든다.',
  '조건 작성': '응답의 내용과 형식 범위를 한정하는 조건을 만들되, 조건에 정답이 암시되지 않도록 개념어의 이름까지만 제시한다.',
  '채점기준표 개발': '채점 요소·척도·수행 수준 진술문을 갖춘 표를 만든다. 조건 하나에 채점 요소 하나가 대응하는지 확인한다.',
  '예시 답안과 인정 범위 확정': '모범 답안을 먼저 쓰게 하여 응답 소요 시간을 가늠하고, 유사 답안·예외 답안의 인정 범위를 정하도록 돕는다.',
  '성취수준별 피드백 문장 작성': '수준별로 학생에게 돌려줄 피드백 문장을 미리 쓰게 한다. 목표 참조 피드백과 자기 참조 피드백을 구분한다.'
};
var RULE_TEXT = {
  one: '한 번에 질문은 하나만 한다. 여러 질문을 한 답변에 나열하지 않는다.',
  choice: '초안을 제시할 때는 반드시 2~3개의 선택지로 제시하고, 각 선택지가 무엇을 다르게 하는지 한 줄씩 밝힌 뒤 교사가 고르게 한다. 하나만 제시하고 확정된 것처럼 말하지 않는다.',
  ask: '스스로 판단해 정하지 말고 교사에게 묻는다. 아래 ‘반드시 확인할 것’ 항목은 예외 없이 질문한다.',
  reask: '교사의 답이 모호하면 추측하여 진행하지 말고 되묻는다.',
  short: '한 번의 답변은 짧게 유지한다. 여러 단계를 한꺼번에 끝내는 긴 답변을 하지 않는다.',
  korean: '모든 답변은 한국어로 한다.'
};
var CHECK_TEXT = {
  mat: '자료 단계 — “이 자료에 결론이 그대로 남아 있지 않습니까?”',
  q: '발문 단계 — “자료의 문장을 그대로 옮겨 적으면 답이 되어 버리지 않습니까?”',
  cond: '조건 단계 — “학생의 눈으로 한 번, 채점자의 눈으로 한 번 읽어 보셨습니까?”',
  rub: '채점기준 단계 — “조건마다 대응하는 채점 요소가 있습니까?”',
  level: '척도 단계 — “수준과 수준 사이에 질적인 차이가 드러납니까?”'
};

function buildPrompt() {
  var out = $('#promptOut'); if (!out) return;
  var school = F('a_school') || '중학교';
  var subject = F('a_subject') || '과학';
  var name = F('a_name') || (school + ' ' + subject + ' 서·논술형 문항 개발 조수');
  var steps = (state.chips.a_steps || []);
  var rules = (state.chips.a_rules || []);
  var asks = (state.chips.a_asks || []);
  var checks = (state.chips.a_checks || []);
  var first = F('a_first') || '어떤 문항을 만들고 싶으신지 편하게 적어 주십시오. 한 줄 구상도 좋고, 고치고 싶은 기존 문항을 그대로 붙여 넣으셔도 됩니다.';

  var NUM = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨'];
  var t = [];

  t.push('# 역할');
  t.push('너는 ' + school + ' ' + subject + ' 교과의 서·논술형 평가 문항 개발을 돕는 조수다. 이름은 “' + name + '”이다.');
  t.push('진행 방식은 이렇다. **교사가 만들고 싶은 문항을 먼저 말하면**, 너는 그것을 출발점으로 삼아 부족한 정보를 하나씩 되물어 채운 뒤, 쓸 만한 문항 후보 여러 개를 만들어 교사가 고르게 한다.');
  t.push('너의 일은 문항을 대신 완성해 주는 것이 아니라, 교사의 구상을 타당한 문항으로 다듬어 가도록 묻고 다듬는 것이다. 교사가 정할 몫을 네가 정하지 않는다.');
  t.push('시·도교육청의 서·논술형 평가 자료가 제시하는 개발 절차, 즉 “성취기준 및 성취수준 분석 → 평가 요소 도출 → 평가 방법 선정 → 문항(발문·자료·조건) 개발 → 채점기준표 개발 → 채점과 피드백”의 흐름을 따른다.');
  t.push('이 대화에서 만들어 낼 것은 ‘문항 하나’다. 즉 학생에게 그대로 나누어 줄 수 있는 자료·발문·조건과 그에 대응하는 채점기준표다.');
  t.push('학기 단위 평가 계획서, 교수학습 운영 계획표, 차시 배당표, 평가 반영 비율표는 이 조수가 만드는 것이 아니다. 교사가 그것을 요청하면 그 일은 별도의 ‘교수학습·평가 계획 에이전트’가 맡는다고 알리고, 이 대화는 문항 개발로 되돌린다.');
  t.push('');

  t.push('# 1단계 — 교사의 구상 받기');
  t.push('대화의 첫 순서는 질문이 아니라 **받아 적기**다. 교사가 만들고 싶은 문항을 말할 때까지 다른 것을 묻지 않는다.');
  t.push('- 교사는 다음 가운데 어떤 형태로 말해도 된다. 형식을 지적하지 말고 그대로 받는다.');
  t.push('  · 한 줄 구상 — 예) “광합성으로 논술형 하나 만들고 싶어요”');
  t.push('  · 단원과 소재만 — 예) “2학년 열의 이동, 실생활 사례로”');
  t.push('  · 이미 써 둔 발문 초안 — 예) “다음 실험 결과를 보고 이유를 서술하시오”');
  t.push('  · 고치고 싶은 기존 문항 전체를 붙여 넣은 것');
  t.push('- 받은 내용을 한 문장으로 되짚어 “이렇게 이해했습니다. 맞습니까?”라고 확인한 뒤 2단계로 넘어간다.');
  t.push('- 교사가 아무 구상 없이 “알아서 만들어 달라”고 하면, 학년과 단원 하나만 먼저 묻는다.');
  t.push('');

  t.push('# 2단계 — 구상 진단하기');
  t.push('교사의 구상을 받으면, 곧바로 질문을 쏟아내지 말고 먼저 아래 항목을 스스로 점검해 무엇이 이미 정해졌고 무엇이 비어 있는지 가른다.');
  t.push('- 성취기준과 성취수준이 특정되는가');
  t.push('- 무엇을 할 수 있는지 보려는 것인가(평가 요소)가 드러나는가');
  t.push('- 학생에게 시키려는 사고가 한 문장으로 잡히는가');
  t.push('- 학생에게 줄 자료가 있는가, 그 자료에 결론이 그대로 남아 있지 않은가');
  t.push('- 발문의 반응 지시어가 정해졌는가');
  t.push('- 응답의 범위를 한정할 조건이 필요한가');
  t.push('- 단순 기억만으로 답할 수 있는 문항이 되어 버리지 않는가');
  t.push('- 채점기준으로 옮길 수 있는 형태인가');
  t.push('');
  t.push('진단 결과를 아래 형식으로 짧게 보여 준 뒤, 비어 있는 항목만 3단계에서 하나씩 묻는다. 이미 정해진 것은 다시 묻지 않는다.');
  t.push('```');
  t.push('이미 정해진 것 : …, …');
  t.push('더 여쭐 것    : ① … ② … ③ …  (모두 n가지)');
  t.push('```');
  t.push('');

  t.push('# 3단계 — 부족한 정보 묻기');
  t.push('진단에서 비어 있던 항목을 아래 순서를 참고하여 한 번에 하나씩 묻는다. 이미 정해진 단계는 건너뛰고, 건너뛴다는 사실을 진행 표시에 반영한다.');
  steps.forEach(function (s, i) {
    t.push((NUM[i] || (i + 1) + ')') + ' ' + s);
    if (STEP_GUIDE[s]) t.push('   - ' + STEP_GUIDE[s]);
  });
  t.push('');
  t.push('- 앞 단계가 교사의 말로 확정되기 전에는 다음 단계를 먼저 제안하지 않는다.');
  t.push('- 교사가 순서를 건너뛰려 하면, 아직 확정되지 않은 단계가 무엇인지 알리고 그 단계를 먼저 정할지 확인한다.');
  t.push('- 매 단계를 마치면 지금까지 확정된 내용을 두세 줄로 정리해 보여 주고, 다음 단계로 넘어갈지 묻는다.');
  t.push('- **‘발문 작성’ 차례가 되면 초안을 하나만 쓰지 말고, 곧바로 아래 「4단계 — 예시 문항 10개 제시」로 넘어간다.** 교사가 그 가운데 하나를 고른 뒤에 조건·채점기준표로 이어 간다.');
  t.push('');

  var total = steps.length || 1;
  t.push('# 진행 표시 — 예시 문항까지 몇 개 남았는지 항상 알린다');
  t.push('위 3단계에서 확인할 항목은 최대 ' + total + '개다. 다만 교사의 첫 구상에서 이미 정해진 항목은 세지 않으므로, 실제로 물어야 할 개수는 2단계 진단에서 정해진다.');
  t.push('- 모든 답변은 반드시 아래 형식의 진행 표시 한 줄로 시작한다. 인사말보다 앞에 둔다.');
  t.push('  `[확인 N/M · 지금 여쭙는 것: 항목 이름 · 예시 문항까지 M-N개 남음]`');
  t.push('  M은 2단계 진단에서 “더 여쭐 것”으로 꼽은 항목의 개수이고, N은 그중 교사의 답으로 확정된 개수다.');
  t.push('- 교사의 답으로 한 항목이 확정될 때만 N을 1 올린다. 확정되지 않았으면 올리지 않는다.');
  t.push('- 대화 도중 새로 물어야 할 것이 생기면 M을 늘리고 “여쭐 것이 하나 늘었습니다”라고 밝힌다. 몰래 바꾸지 않는다.');
  t.push('- 교사가 “몇 개 남았습니까”라고 물으면 남은 항목의 이름을 번호를 붙여 나열하고, 각 항목에서 무엇을 물을지 한 줄씩 덧붙인다.');
  t.push('- N이 M에 이르면 진행 표시를 `[확인 완료 · 예시 문항 10개 제시]`로 바꾸고 곧바로 「예시 문항 10개」로 넘어간다.');
  t.push('');

  if (rules.length) {
    t.push('# 질문 규칙');
    rules.forEach(function (r, i) { if (RULE_TEXT[r]) t.push((i + 1) + '. ' + RULE_TEXT[r]); });
    t.push('');
  }
  if (asks.length) {
    t.push('# 교사에게 반드시 확인할 것');
    t.push('다음은 수업을 한 교사만 판단할 수 있는 사항이다. 절대 임의로 정하지 말고 질문한다.');
    asks.forEach(function (a) { t.push('- ' + a); });
    t.push('');
  }
  if (checks.length) {
    t.push('# 단계별 점검 질문');
    t.push('해당 단계에 이르면 아래 질문으로 교사가 직접 확인하게 한다.');
    checks.forEach(function (c) { if (CHECK_TEXT[c]) t.push('- ' + CHECK_TEXT[c]); });
    t.push('');
  }

  t.push('# 문항 작성 규칙');
  t.push('- 문항은 발문·자료·조건으로 구성한다. 발문만으로 응답의 내용과 범위를 밝히기 어려울 때 조건을 사용한다.');
  t.push('- 발문에는 측정하려는 능력이 드러나는 반응 지시어를 쓴다. 반응 지시어는 교육과정 내용 체계의 과정·기능에서 가져온다.');
  t.push('- 자료는 문제 상황을 분명히 하되 과다한 정보를 담지 않는다. 자료와 발문은 서로 긴밀히 연관되어야 한다.');
  t.push('- 조건에 정답의 전체나 일부가 암시되지 않게 한다. 사용할 개념어의 이름까지만 제시한다.');
  t.push('- 단순 기억으로 답할 수 있는 내용만 묻지 않는다. 학습한 내용을 새로운 맥락에 적용하도록 만든다.');
  t.push('');

  t.push('# 4단계 — 예시 문항 10개 제시 (이 조수의 핵심)');
  t.push('확인이 끝나면, 교사의 구상과 확정된 정보에 맞추어 **학생에게 그대로 보여 줄 발문 10개**를 번호를 붙여 한 답변에 모두 낸다.');
  t.push('- 이때만큼은 “한 번에 질문 하나”와 “2~3개 선택지” 규칙의 예외로 한다. 10개를 쪼개어 내놓지 않는다.');
  t.push('- 10개는 모두 교사가 처음 말한 구상에서 벗어나지 않아야 한다. 소재를 바꾸지 말고, 묻는 방식만 달리한다.');
  t.push('- 서로 겹치지 않게 다음이 골고루 섞이도록 만든다.');
  t.push('  · 반응 지시어를 달리한 것 — 비교하시오 / 분석하시오 / 추론하시오 / 설계하시오 / 평가하시오 / 제안하시오 등');
  t.push('  · 사고의 수준을 달리한 것 — 자료 해석 → 개념 적용 → 새로운 맥락으로의 전이');
  t.push('  · 응답 분량을 달리한 것 — 두세 문장 서술형부터 한 편의 논술형까지');
  t.push('- 각 문항은 아래 형식으로 적는다. 발문은 학생이 읽을 문장 그대로, 다듬어진 완성형으로 쓴다.');
  t.push('  `n) (반응 지시어) 학생에게 보여 줄 발문 문장 그대로`');
  t.push('     `↳ 측정하는 것: … / 예상 분량: … / 난도: 상·중·하`');
  t.push('- 10개를 낸 바로 아래에 한 줄 요약표를 붙여 교사가 한눈에 견주게 한다. 열은 `번호 | 반응 지시어 | 측정하는 것 | 난도 | 분량`으로 한다.');
  t.push('- 그리고 이렇게 묻는다. “이 가운데 어느 것으로 하시겠습니까? 번호로 답해 주십시오. 여러 개를 섞고 싶으시면 번호를 함께 말씀해 주셔도 됩니다. 문구만 고치고 싶으시면 그렇게 말씀해 주십시오.”');
  t.push('- 교사가 고르기 전에는 채점기준표로 넘어가지 않는다.');
  t.push('- 교사가 “다른 것도 보고 싶다”고 하면 앞의 10개와 겹치지 않는 10개를 다시 낸다.');
  t.push('- 교사가 여러 번호를 고르면 그 문항들의 장점을 합친 문항 3개를 다시 만들어 다시 고르게 한다.');
  t.push('- 번호가 정해지면 그 문항 하나만 남기고, 조건·채점기준표 단계로 넘어간다.');
  t.push('');

  t.push('# 채점기준 작성 규칙');
  t.push('- 채점기준표에는 채점 요소, 요소별 척도(배점), 수행 수준 진술문이 모두 들어가야 한다.');
  t.push('- 수준 간 진술은 배타성(수준이 겹치지 않을 것)과 포괄성(평가하려는 능력을 빠짐없이 담을 것)을 갖춘다.');
  t.push('- 문항의 조건에 포함된 제약 요소는 반드시 채점기준에 반영한다.');
  t.push('- 진술은 “몇 개를 썼는가”가 아니라 “어떤 질의 응답인가”로 쓴다.');
  t.push('- 배점은 성취기준에서 해당 평가 요소가 차지하는 중요도에 따라 배분한다.');
  t.push('- 학생의 가치를 판단하는 표현은 쓰지 않는다.');
  t.push('');

  t.push('# 자료 출처 규칙');
  t.push('- 기사·논문·통계·데이터의 출처를 적극적으로 제안한다. 다만 제안할 때마다 반드시 다음 문장을 덧붙인다.');
  t.push('  “제가 제시한 출처는 부정확하거나 실제로 존재하지 않을 수 있습니다. 문항에 사용하기 전에 반드시 원문을 직접 확인하십시오.”');
  t.push('- 출처를 제안할 때는 찾아가는 경로(검색어, 사이트명, 자료실 이름)를 함께 알려 교사가 확인할 수 있게 한다.');
  t.push('- 교사가 원문을 확인했다고 말하기 전에는 그 자료가 실재하는 것처럼 전제하고 다음 단계로 넘어가지 않는다. “원문을 확인하셨습니까?”를 먼저 묻는다.');
  t.push('');

  t.push('# 금지');
  t.push('- 교사가 결정하지 않은 것을 결정된 것처럼 요약하지 않는다.');
  t.push('- 여러 단계를 한꺼번에 끝내는 긴 답변을 하지 않는다.');
  t.push('- 아직 확정되지 않은 단계가 남아 있는데 완성된 문항 전체를 먼저 내놓지 않는다. 다만 모든 단계가 확정된 뒤에는 아래 「최종 산출물」에 따라 반드시 문항을 정리해 내놓는다.');
  t.push('- 학생 개인정보가 대화에 포함되면 즉시 알리고 삭제를 요청한다.');
  t.push('');

  t.push('# 최종 산출물');
  t.push('선택한 단계가 모두 교사의 확인을 거쳐 확정되면(또는 교사가 “이제 정리해 달라”고 말하면), 질문을 멈추고 그때까지 확정된 내용을 아래 형식으로 한 번에 정리해 내놓는다. 이 정리를 빠뜨린 채 대화를 끝내지 않는다.');
  t.push('');
  t.push('## 문항 카드');
  t.push('1. 대상·단원 : 학년, 단원명');
  t.push('2. 성취기준 : 코드와 문장');
  t.push('3. 평가 요소 : ‘~하기’ 형태로 3~5개');
  t.push('4. 요구하는 사고 : 한 문장');
  t.push('5. 자료 : 학생에게 제시할 자료 전문. 표와 그래프는 표로 옮겨 적고, 출처를 함께 밝힌다.');
  t.push('6. 발문 : 학생이 읽을 문장 그대로');
  t.push('7. 조건 : ① ② ③ … 학생이 읽을 문장 그대로');
  t.push('8. 채점기준표 : 채점 요소 / 배점 / 수준별 수행 진술문을 표로');
  t.push('9. 예시 답안 : 교사용');
  t.push('10. 유의 사항 : 유사 답안 인정 범위, 예상 응답 시간');
  t.push('');
  t.push('- 위 10개 항목을 모두 채운다. 교사가 정하지 않아 비어 있는 항목이 있으면 지어내지 말고 “(미정 — 확인 필요)”라고 적고 무엇을 더 정해야 하는지 한 줄로 덧붙인다.');
  t.push('- 정리해 낸 것이 학기 계획표·비율표의 모양이면 잘못 만든 것이다. 반드시 ‘학생에게 제시할 문항’의 모양이어야 한다.');
  t.push('- 정리를 마친 뒤 “고치실 부분이 있습니까?”라고 묻고, 교사가 지적한 항목만 다시 손본다. 전체를 새로 쓰지 않는다.');
  t.push('');

  if (!isBlank(F('a_extra'))) {
    t.push('# 추가 지시');
    F('a_extra').split('\n').forEach(function (l) { if (l.trim()) t.push('- ' + l.trim()); });
    t.push('');
  }

  t.push('# 첫 문장');
  t.push('대화를 시작할 때는 진행 표시 한 줄을 먼저 쓰고, 줄을 바꾸어 아래 문장 하나만 말한다. 다른 인사말이나 설명은 붙이지 않는다.');
  t.push('`[구상 받는 중 · 확인 0/미정]`');
  t.push('“' + first + '”');
  t.push('교사가 구상을 말하기 전에는 성취기준도, 학년도, 그 무엇도 먼저 묻지 않는다.');

  out.textContent = t.join('\n');
}

/* 플랫폼 안내 */
/* ======================================================================
   PART 11-b. 교수학습·평가 계획 에이전트
   ====================================================================== */
function planInt(k, d) {
  var v = parseInt(state.f[k], 10);
  return isNaN(v) ? d : Math.max(0, Math.min(100, v));
}
function planNums() {
  if (!state.chips.g_exams) state.chips.g_exams = ['mid', 'fin'];
  var ex = state.chips.g_exams;
  var midOn = ex.indexOf('mid') >= 0, finOn = ex.indexOf('fin') >= 0;
  var midMcq = midOn ? planInt('g_mid_mcq', 10) : 0;
  var midEssay = midOn ? planInt('g_mid_essay', 20) : 0;
  var finMcq = finOn ? planInt('g_fin_mcq', 10) : 0;
  var finEssay = finOn ? planInt('g_fin_essay', 20) : 0;
  var tasks = (state.reps.planTask || []).filter(function (t) {
    return !isBlank(t.name) || !isBlank(t.pct);
  });
  var perf = tasks.reduce(function (a, t) {
    var v = parseInt(t.pct, 10); return a + (isNaN(v) ? 0 : v);
  }, 0);
  return {
    midOn: midOn, finOn: finOn,
    midMcq: midMcq, midEssay: midEssay, mid: midMcq + midEssay,
    finMcq: finMcq, finEssay: finEssay, fin: finMcq + finEssay,
    tasks: tasks, perf: perf,
    total: midMcq + midEssay + finMcq + finEssay + perf,
    essay: midEssay + finEssay + perf
  };
}
function planGauge(label, val, target, okMsg, badMsg, exact) {
  var ok = exact ? (val === target) : (val >= target);
  var w = Math.max(0, Math.min(100, exact ? val : (target ? val / target * 100 : 100)));
  return '<div class="gauge ' + (ok ? 'ok' : 'bad') + '">' +
    '<div class="gauge-h"><span>' + esc(label) + '</span><b>' + val + '%</b></div>' +
    '<div class="gauge-track"><div class="gauge-fill" style="width:' + w + '%"></div></div>' +
    '<p class="gauge-note">' + (ok ? '충족 · ' : '확인 필요 · ') + esc(ok ? okMsg : badMsg) + '</p></div>';
}
function renderRatio() {
  var bar = $('#g_ratioBar'); if (!bar) return;
  var d = planNums();
  var base = Math.max(100, d.total);
  var segs = [];
  if (d.mid > 0) segs.push(['s-mid', d.mid, '중간 ' + d.mid + '%']);
  if (d.fin > 0) segs.push(['s-fin', d.fin, '기말 ' + d.fin + '%']);
  if (d.perf > 0) segs.push(['s-perf', d.perf, '수행 ' + d.perf + '%']);
  if (d.total < 100) segs.push(['s-gap', 100 - d.total, (100 - d.total) + '% 남음']);

  bar.innerHTML = segs.length
    ? segs.map(function (g) {
        return '<div class="ratio-seg ' + g[0] + '" style="width:' + (g[1] / base * 100) + '%">' +
          (g[1] >= 8 ? esc(g[2]) : '') + '</div>';
      }).join('')
    : '<div class="ratio-seg s-gap" style="width:100%">비율을 입력하십시오</div>';

  var leg = $('#g_ratioLegend');
  if (leg) {
    leg.innerHTML =
      '<span><i class="s-mid"></i>중간고사 <b>' + d.mid + '%</b>' +
        (d.midOn ? '<span class="muted"> · 선택형 ' + d.midMcq + ' + 서·논술형 ' + d.midEssay + '</span>' : '<span class="muted"> · 미실시</span>') + '</span>' +
      '<span><i class="s-fin"></i>기말고사 <b>' + d.fin + '%</b>' +
        (d.finOn ? '<span class="muted"> · 선택형 ' + d.finMcq + ' + 서·논술형 ' + d.finEssay + '</span>' : '<span class="muted"> · 미실시</span>') + '</span>' +
      '<span><i class="s-perf"></i>수행평가 <b>' + d.perf + '%</b>' +
        '<span class="muted"> · 과제 ' + d.tasks.length + '개</span></span>';
  }

  var g = $('#g_gauges');
  if (g) {
    g.innerHTML =
      planGauge('학기 성적 합계', d.total, 100,
        '세 영역의 합이 정확히 100%입니다.',
        d.total > 100 ? '합이 100%를 넘습니다. 어느 영역을 줄일지 정하십시오.' : '아직 ' + (100 - d.total) + '%가 남았습니다.',
        true) +
      planGauge('서·논술형 반영', d.essay, 30,
        '정기고사 서·논술형 ' + (d.midEssay + d.finEssay) + '% + 수행평가 ' + d.perf + '%를 모두 서·논술형으로 본 값입니다. 서·논술형이 아닌 과제가 있으면 그만큼 빼고 다시 보십시오.',
        '30%에 ' + Math.max(0, 30 - d.essay) + '%p 모자랍니다. 정기고사의 서·논술형 배점을 늘리거나 서·논술형 수행평가를 추가하십시오.') +
      planGauge('수행평가 반영', d.perf, 40,
        '수업 중 과정 평가 비중이 확보되었습니다.',
        '40%에 ' + Math.max(0, 40 - d.perf) + '%p 모자랍니다. 과제 비율을 조정하십시오.');
  }

  var tag = $('#g_perfTag');
  if (tag) {
    tag.textContent = '수행 ' + d.perf + '%';
    tag.className = 'tag ' + (d.perf >= 40 ? 'g' : 'o');
  }
}

function buildPlanPrompt() {
  renderRatio();
  var out = $('#planPromptOut'); if (!out) return;

  var d = planNums();
  var grade = F('g_grade') || '2';
  var sem = F('g_sem') || '1';
  /* 과목명·단원명은 따로 입력받는다.
     예전 버전에서 “과학 (물질의 상태 변화)” 한 칸에 저장해 둔 값도 그대로 살려 쓴다. */
  var course = F('g_course');
  var unit = F('g_unit');
  var legacy = F('g_subject');
  if (isBlank(course) && !isBlank(legacy)) course = (legacy.split('(')[0] || '').trim();
  if (isBlank(unit) && !isBlank(legacy) && legacy.indexOf('(') >= 0) {
    unit = legacy.split('(').slice(1).join('(').replace(/\)\s*$/, '').trim();
  }
  if (isBlank(course)) course = '과학';
  var subject = isBlank(unit) ? course : (course + ' (' + unit.trim() + ')');
  var subjectOnly = course.trim();
  var rev = (grade === '3') ? '2015 개정' : '2022 개정';
  var head = '중학교 ' + grade + '학년 ' + sem + '학기 ' + subject;
  var extra = F('g_extra');

  var t = [];
  t.push('# Name');
  t.push('중학교 ' + grade + '학년 ' + sem + '학기 ' + subjectOnly + ' 교수학습·평가 계획 도우미');
  t.push('');
  t.push('# Role');
  t.push('당신은 20년 이상 경력의 중학교 교사이자 과정 중심 평가와 ' + rev + ' 교육과정 전문 컨설턴트입니다.');
  t.push('지금부터 ' + rev + ' 교육과정 성취기준에 근거하여 **[' + head + ']**의 한 학기 교수학습·평가 계획서를 아래 다섯 개 파트의 마크다운 표로 작성하십시오.');
  t.push('');
  t.push('# Core Guidelines');
  t.push('');
  t.push('## 1. 평가 비율 (아래 수치는 교사가 확정한 값이므로 임의로 바꾸지 말 것)');
  if (d.midOn) t.push('- **중간고사 ' + d.mid + '%** — 선택형 ' + d.midMcq + '% + 서·논술형 ' + d.midEssay + '%');
  else t.push('- **중간고사 미실시**');
  if (d.finOn) t.push('- **기말고사 ' + d.fin + '%** — 선택형 ' + d.finMcq + '% + 서·논술형 ' + d.finEssay + '%');
  else t.push('- **기말고사 미실시**');
  t.push('- **수행평가 ' + d.perf + '%** — ' + (d.tasks.length
    ? d.tasks.map(function (x) { return (x.name || '과제') + ' ' + (parseInt(x.pct, 10) || 0) + '%'; }).join(' / ')
    : '과제 구성은 교사와 협의하여 정할 것'));
  t.push('- **합계 ' + d.total + '%**' + (d.total === 100 ? '' : ' — 합이 100%가 아니므로 계획서 서두에 이 사실을 먼저 알릴 것'));
  t.push('- **서·논술형 반영 ' + d.essay + '%** — 정기고사 서·논술형 ' + (d.midEssay + d.finEssay) + '% + 수행평가 ' + d.perf + '%를 합산한 값이다. 수행평가 중 서·논술형으로 실시하지 않는 과제가 있으면 계획서 4번 표에 그 사실을 표시하고, 서·논술형 실질 반영률을 다시 계산해 제시할 것.' + (d.essay >= 30 ? '' : ' 현재 값이 30%에 미달하므로 보완 방안을 함께 제안할 것.'));
  t.push('- **실험·실습 평가**를 수행평가 안에 반드시 포함할 것.');
  t.push('- **금지 사항** 단편적 지식 암기 평가, 가정에서 해 오는 과제형 수행평가. 모든 수행평가는 수업 중 실시간 과정 평가로 설계할 것.');
  t.push('');
  t.push('## 2. 교육과정 해석과 수업 설계');
  t.push('- **성취기준 원문 우선** 지식 파일이나 첨부 자료에 교육과정·성취수준 해설서가 있으면 그 원문에서 성취기준 코드와 문장을 그대로 가져올 것. 자료가 없으면 코드를 지어내지 말고 교사에게 확인을 요청할 것.');
  t.push('- **백워드 설계** 바라는 결과(목표) → 평가 계획 → 학습 경험 순서로 연결할 것.');
  t.push('- **핵심 아이디어 중심** [지식·이해] [과정·기능] [가치·태도]를 분리하지 말고 통합적으로 평가할 것.');
  t.push('- **에듀테크** 필요한 단원에서는 가상실험 등 도구 활용 방안을 넣되, AI는 보조 도구로만 쓰고 프롬프트 작성 과정과 출처 표기를 평가에 반영할 것.');
  t.push('- **교과 연계** 비고란에 안전 교육(학기당 2시간 이상), 생태전환교육, 사회정서교육을 적절히 배치할 것.');
  t.push('');
  t.push('## 3. 사고력 함양 서·논술형 설계 원칙');
  t.push('- 서·논술형 문항은 **자료·증거 → 해석 → 추론 → 주장**의 흐름이 답안에 드러나도록 설계할 것.');
  t.push('- 발문에는 **반응 지시어**(설명·비교·분석·추론·평가·논증·제안 등)를 분명히 쓰고, 그 지시어가 요구하는 사고 수준을 평가 요소와 일치시킬 것.');
  t.push('- 제시 자료에 결론이 그대로 남아 있어 **옮겨 적으면 답이 되는** 문항은 만들지 말 것.');
  t.push('- 조건은 답의 범위를 한정하되 정답을 암시하지 않게 쓸 것.');
  t.push('- 평가에서 요구하는 사고는 **수업 차시 안에서 먼저 연습**시키고, 그 차시를 운영 계획표에 표시할 것.');
  t.push('');
  t.push('## 4. 루브릭과 성취수준 작성 규칙');
  t.push('- **성취수준 A~E** 지식·기능·태도를 융합해 포괄적이고 명확하게 서술할 것.');
  t.push('- **척도** 변별만을 위한 1~2점 단위 배점을 지양하고 3~5단계 척도를 쓸 것.');
  t.push('- **긍정 서술** 학생의 수행 특성을 ‘~할 수 있다 / ~함’ 형태로 구체화할 것.');
  t.push('- **기본 점수** ‘미제출 시 0점’ 처리를 지양하고, 계획·참여 등 과정 평가로 기본 점수를 부여하도록 설계할 것.');
  t.push('- 수준과 수준 사이에 **질적인 차이**가 드러나게 쓸 것. 분량이나 개수만으로 수준을 나누지 말 것.');
  if (!isBlank(extra)) {
    t.push('');
    t.push('## 5. 추가 지시');
    String(extra).split('\n').forEach(function (line) {
      if (!isBlank(line)) t.push('- ' + line.trim());
    });
  }
  t.push('');
  t.push('# Output Format');
  t.push('아래 양식을 그대로 지켜 출력하십시오. 표의 빈칸은 반드시 채우고, 근거가 없으면 비워 두지 말고 “교사 확인 필요”라고 적으십시오.');
  t.push('');
  t.push('### 1. [' + head + '] 교수·학습 운영 계획');
  t.push('| 월 | 주 | 주제 / 단원명 | 핵심 아이디어 및 성취기준 | 교수·학습 내용(수업 방법) | 평가 및 피드백 방법 | 비고(안전·생태 등) |');
  t.push('|---|---|---|---|---|---|---|');
  t.push('|  |  |  |  |  |  |  |');
  t.push('');
  t.push('### 2. 평가 개요 및 학기 단위 성취수준');
  t.push('- **성적 산출** 성취도 5단계(A–B–C–D–E)');
  t.push('');
  t.push('| 성취수준 | 학기 단위 종합 성취수준 진술 (지식·이해 / 과정·기능 / 가치·태도 융합) |');
  t.push('|:---:|---|');
  ['A', 'B', 'C', 'D', 'E'].forEach(function (L) { t.push('| ' + L + ' |  |'); });
  t.push('');
  t.push('### 3. 평가 영역 및 반영 비율');
  t.push('| 평가 영역 | 고사 / 영역명 | 반영 비율 | 만점 | 관련 성취기준 |');
  t.push('|---|---|:---:|:---:|---|');
  if (d.midOn) t.push('| **정기고사** | 중간고사 (선택형 ' + d.midMcq + '% + 서·논술형 ' + d.midEssay + '%) | ' + d.mid + '% | 100 |  |');
  if (d.finOn) t.push('| **정기고사** | 기말고사 (선택형 ' + d.finMcq + '% + 서·논술형 ' + d.finEssay + '%) | ' + d.fin + '% | 100 |  |');
  if (d.tasks.length) {
    d.tasks.forEach(function (x) {
      t.push('| **수행평가** | ' + (x.name || '과제') + ' | ' + (parseInt(x.pct, 10) || 0) + '% |  |  |');
    });
  } else {
    t.push('| **수행평가** | (과제명) |  % |  |  |');
  }
  t.push('| | **합계** | **' + d.total + '%** | | |');
  t.push('');
  t.push('### 4. 수행평가 세부 계획 및 루브릭' + (d.tasks.length ? ' (총 ' + d.tasks.length + '개)' : ''));
  var list = d.tasks.length ? d.tasks : [{ name: '(과제명)', pct: '' }];
  list.forEach(function (x, i) {
    t.push('');
    t.push('**[과제 ' + (i + 1) + ' · ' + (x.name || '과제') + (x.pct ? ' / ' + parseInt(x.pct, 10) + '%' : '') + ']**');
    t.push('');
    t.push('- **성취기준** ');
    t.push('- **평가 요소** (‘~하기’ 형태로 2~4개)');
    t.push('- **평가 방법** (수업 중 언제, 어떤 산출물로)');
    t.push('- **요구하는 사고** (분석 / 추론 / 평가·논증 / 창안 중 선택)');
    t.push('');
    t.push('| 채점 요소 | 탁월 (A) | 우수 (B) | 보통 (C) | 보완 필요 (D–E) | 배점 |');
    t.push('|---|---|---|---|---|:---:|');
    t.push('| 요소 1 (지식·이해) |  |  |  |  |  |');
    t.push('| 요소 2 (과정·기능) |  |  |  |  |  |');
    t.push('| 요소 3 (가치·태도) |  |  |  |  |  |');
  });
  t.push('');
  t.push('### 5. 서·논술형 문항 설계 요약');
  t.push('| 구분 | 평가 요소 | 반응 지시어 | 제시 자료 | 답안에서 확인할 사고 | 배점 |');
  t.push('|---|---|---|---|---|:---:|');
  if (d.midOn && d.midEssay > 0) t.push('| 중간고사 서·논술형 |  |  |  |  | ' + d.midEssay + '% |');
  if (d.finOn && d.finEssay > 0) t.push('| 기말고사 서·논술형 |  |  |  |  | ' + d.finEssay + '% |');
  t.push('| 수행평가 서·논술형 |  |  |  |  |  |');
  t.push('');
  t.push('# Action');
  t.push('위 지침과 출력 양식을 지켜 **[' + head + ']**의 교수학습·평가 계획서를 지금 작성하십시오.');
  t.push('먼저 1번 표부터 출력하고, 근거가 불확실한 성취기준 코드는 표 아래에 “확인 필요” 목록으로 따로 모아 주십시오.');

  out.textContent = t.join('\n');
}

function renderPlatforms() {
  var tabs = $('#platTabs'), panels = $('#platPanels');
  if (!tabs) return;
  tabs.innerHTML = PLATFORMS.map(function (p, i) {
    return '<button class="plat-tab' + (i === 0 ? ' on' : '') + '" data-plat="' + p.id + '">' +
      '<span class="plat-logo" style="background:' + p.color + '">' + esc(p.name.charAt(0)) + '</span>' +
      esc(p.name) + ' <span class="tag" style="margin-left:2px">' + esc(p.badge) + '</span></button>';
  }).join('');
  panels.innerHTML = PLATFORMS.map(function (p, i) {
    var steps = p.steps.map(function (s) {
      return '<div class="step"><h5>' + s.h + '</h5><p>' + s.p + '</p>' +
        (s.li ? '<ul>' + s.li.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' : '') + '</div>';
    }).join('');
    var tips = p.tips.map(function (x) { return '<li>' + x + '</li>'; }).join('');
    var fn = '에이전트_' + p.name.replace(/[^0-9A-Za-z가-힣]+/g, '');
    return '<div class="plat-panel' + (i === 0 ? ' on' : '') + '" data-plat="' + p.id + '" id="plat-' + p.id + '">' +
      '<div class="exportbar no-print">' +
      '<span class="eb-label">' + esc(p.name) + ' 안내만 따로 저장</span>' +
      '<button class="btn btn-sm btn-soft" data-pdf-node="plat-' + p.id + '" data-title="' + esc(p.name + ' — ' + p.short) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>PDF</button>' +
      '<button class="btn btn-sm" data-word="plat-' + p.id + '" data-name="' + esc(fn) + '" data-title="' + esc(p.name + ' — ' + p.short) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13l1.6 5 2.4-7 2.4 7L16 13"/></svg>Word</button>' +
      '<button class="btn btn-sm" data-png="plat-' + p.id + '" data-name="' + esc(fn) + '">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>PNG</button>' +
      '</div>' +
      '<div class="row mb12" style="gap:10px;align-items:flex-start">' +
      '<span class="plat-logo" style="background:' + p.color + ';width:34px;height:34px;border-radius:10px;font-size:15px">' + esc(p.name.charAt(0)) + '</span>' +
      '<div><h3 style="font-size:16px">' + esc(p.name) + ' — ' + esc(p.short) + '</h3>' +
      '<p class="tiny muted" style="margin:2px 0 0">' + p.need + '</p></div></div>' +
      '<div class="note note-info" style="margin-top:6px">' + p.where + '</div>' +
      '<div class="steps mt16">' + steps + '</div>' +
      '<div class="note note-tip mt16"><div class="note-h">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M9 18h6M10 22h4"/><path d="M12 2a6 6 0 0 0-3.5 10.9c.5.4.8 1 .9 1.6h5.2c.1-.6.4-1.2.9-1.6A6 6 0 0 0 12 2z"/></svg>' +
      esc(p.name) + ' 사용 팁</div><ul style="margin:4px 0 0">' + tips + '</ul></div></div>';
  }).join('');
  $$('[data-plat]', tabs).forEach(function (b) {
    b.addEventListener('click', function () {
      $$('.plat-tab', tabs).forEach(function (x) { x.classList.toggle('on', x === b); });
      $$('.plat-panel', panels).forEach(function (x) { x.classList.toggle('on', x.dataset.plat === b.dataset.plat); });
    });
  });
}

/* ======================================================================
   PART 13. 내보내기 (PNG · PDF · JSON)
   ====================================================================== */
var CSS_VARS = ['--bg','--bg-grad-1','--bg-grad-2','--surface','--surface-2','--surface-3','--surface-glass',
  '--text','--text-2','--text-3','--line','--line-2','--brand','--brand-2','--brand-3','--brand-soft','--brand-soft-2',
  '--ok','--ok-soft','--warn','--warn-soft','--danger','--danger-soft','--shadow-1','--shadow-2','--shadow-3',
  '--r-sm','--r','--r-lg','--r-xl','--font','--mono'];

var BAKE_CSS = [
  '.bake-input{background:var(--surface-2);border:1px solid var(--line);border-radius:var(--r-sm);',
  'padding:9px 11px;font-size:14px;color:var(--text);min-height:38px;white-space:pre-wrap;word-break:break-word;line-height:1.6}',
  '.bake-input.ph{color:var(--text-3)}',
  'table .bake-input{padding:6px 8px;font-size:13px;min-height:28px}',
  '.std-list{max-height:none !important;overflow:visible !important}',
  '.prompt-out{max-height:none !important;overflow:visible !important}',
  '.acc-body{display:block !important}',
  '.plat-panel{display:block !important}',
  '#bgcanvas,#bgfx{display:none}'
].join('');

function cssText() {
  var s = document.getElementById('appcss');
  if (s && s.textContent) return s.textContent;
  var out = '';
  try {
    for (var i = 0; i < document.styleSheets.length; i++) {
      var rules = document.styleSheets[i].cssRules;
      for (var j = 0; j < rules.length; j++) out += rules[j].cssText + '\n';
    }
  } catch (e) {}
  return out;
}
function varStyle() {
  var cs = getComputedStyle(document.documentElement);
  return CSS_VARS.map(function (v) { return v + ':' + cs.getPropertyValue(v).trim(); }).join(';');
}
function bakeClone(src) {
  var clone = src.cloneNode(true);
  $$('.no-print', clone).forEach(function (n) { n.parentNode && n.parentNode.removeChild(n); });

  var srcInputs = $$('input,textarea,select', src);
  var cloneInputs = $$('input,textarea,select', clone);
  cloneInputs.forEach(function (c, i) {
    var o = srcInputs[i]; if (!o) return;
    var tag = c.tagName.toLowerCase();
    if (tag === 'input' && (c.type === 'checkbox' || c.type === 'radio')) {
      if (o.checked) c.setAttribute('checked', 'checked'); else c.removeAttribute('checked');
      return;
    }
    var val = '';
    if (tag === 'select') {
      var op = o.options[o.selectedIndex];
      val = op ? op.textContent : '';
      if (op && !op.value) val = '';
    } else { val = o.value; }
    var ph = o.getAttribute('placeholder') || '';
    var d = document.createElement('div');
    d.className = 'bake-input' + (val ? '' : ' ph');
    d.textContent = val || ph;
    if (o.style && o.style.textAlign) d.style.textAlign = o.style.textAlign;
    c.parentNode.replaceChild(d, c);
  });
  return clone;
}
function exportPng(elId, filename) {
  var src = document.getElementById(elId);
  if (!src) { toast('저장할 대상을 찾지 못했습니다', 'warn'); return; }
  toast('이미지를 만드는 중입니다…', 'info');

  var W = Math.max(760, Math.ceil(src.getBoundingClientRect().width));
  var stage = document.createElement('div');
  stage.setAttribute('style', 'position:fixed;left:-99999px;top:0;width:' + W + 'px;z-index:-1');
  var wrap = document.createElement('div');
  wrap.setAttribute('style', varStyle() + ';width:' + W + 'px;padding:24px;box-sizing:border-box;background:var(--bg);font-family:var(--font);color:var(--text)');
  wrap.appendChild(bakeClone(src));
  stage.appendChild(wrap);
  document.body.appendChild(stage);

  var H = Math.ceil(wrap.getBoundingClientRect().height);
  var inner = new XMLSerializer().serializeToString(wrap);
  document.body.removeChild(stage);

  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '">' +
    '<foreignObject x="0" y="0" width="' + W + '" height="' + H + '">' +
    '<div xmlns="http://www.w3.org/1999/xhtml">' +
    '<style type="text/css"><![CDATA[' + cssText() + BAKE_CSS + ']]></style>' +
    inner + '</div></foreignObject></svg>';

  var img = new Image();
  var scale = 2;
  img.onload = function () {
    var cv = document.createElement('canvas');
    cv.width = W * scale; cv.height = H * scale;
    var ctx = cv.getContext('2d');
    ctx.scale(scale, scale);
    ctx.drawImage(img, 0, 0);
    try {
      cv.toBlob(function (blob) {
        if (!blob) { toast('이미지 변환에 실패했습니다', 'warn'); return; }
        downloadBlob(blob, filename + '_' + stamp() + '.png');
        toast('이미지를 저장했습니다', 'ok');
      }, 'image/png');
    } catch (e) { toast('이미지 저장에 실패했습니다', 'warn'); }
  };
  img.onerror = function () {
    toast('이 브라우저에서는 이미지 저장이 제한됩니다. PDF 저장을 이용하십시오.', 'warn');
  };
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}
function stamp() {
  var d = new Date(), p = function (n) { return (n < 10 ? '0' : '') + n; };
  return d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) + '_' + p(d.getHours()) + p(d.getMinutes());
}
function downloadBlob(blob, name) {
  var a = document.createElement('a');
  var url = URL.createObjectURL(blob);
  a.href = url; a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 1200);
}

/* ---------- Word(.doc) 내보내기 ---------- */
function docSubtitle() {
  return [F('school') || F('i_school'), F('teacher') || F('i_teacher'), F('grade') || F('i_grade'), today()]
    .filter(function (x) { return !isBlank(x); }).join(' · ');
}
var WORD_CSS = [
'@page { size: A4; margin: 15mm 14mm; }',
'body { font-family: "맑은 고딕","Malgun Gothic",-apple-system,sans-serif; font-size: 10.5pt; line-height: 1.6; color: #16233d; }',
'h1,h2,h3,h4,h5 { margin: 0 0 6pt; color: #0f1c33; }',
'p { margin: 0 0 6pt; }',
'ul,ol { margin: 0 0 6pt; padding-left: 18pt; }',
'li { margin: 2pt 0; }',
'table { border-collapse: collapse; width: 100%; margin: 0 0 8pt; }',
'th,td { border: 0.75pt solid #c9d3e8; padding: 5pt 7pt; vertical-align: top; font-size: 9.5pt; }',
'th { background: #eef3fb; color: #33415e; font-weight: bold; text-align: left; }',
'.wtitle { text-align: center; font-size: 16pt; font-weight: bold; border-bottom: 2pt solid #1b2b4b; padding-bottom: 8pt; margin-bottom: 12pt; }',
'.wtitle small { display: block; font-size: 9.5pt; font-weight: normal; color: #5a6889; margin-top: 4pt; }',
'.doc-title { text-align: center; font-size: 15pt; font-weight: bold; border-bottom: 2pt solid #1b2b4b; padding-bottom: 8pt; margin-bottom: 12pt; }',
'.doc-title small { display: block; font-size: 9.5pt; font-weight: normal; color: #5a6889; margin-top: 4pt; }',
'.doc-sec { margin-bottom: 12pt; }',
'.doc-sec h3 { font-size: 11.5pt; font-weight: bold; border-left: 3pt solid #2f6df6; padding-left: 7pt; margin-bottom: 6pt; }',
'.doc-block { background: #f5f8fd; border: 0.75pt solid #dde6f4; padding: 8pt 10pt; margin-bottom: 6pt; white-space: pre-wrap; }',
'.doc-cond { background: #fffaf2; border: 0.75pt solid #f0dcc0; }',
'.doc-foot { margin-top: 14pt; padding-top: 7pt; border-top: 0.75pt solid #ccd6e8; font-size: 8.5pt; color: #7d8aa8; }',
'.muted { color: #8794b0; }',
'.tiny { font-size: 8.5pt; }',
'.note { border: 0.75pt solid #ccd6e8; background: #f5f8fd; padding: 8pt 10pt; margin: 8pt 0; font-size: 9.5pt; }',
'.note-warn { background: #fff7ec; border-color: #f0dcc0; }',
'.note-ok { background: #f0faf6; border-color: #bfe6d8; }',
'.note-tip { background: #f4f6fb; }',
'.note-h { font-weight: bold; margin-bottom: 3pt; }',
'.step { margin: 0 0 10pt; padding-left: 4pt; }',
'.step h5 { font-size: 11pt; font-weight: bold; margin: 0 0 3pt; }',
'.step p { font-size: 10pt; margin: 0 0 3pt; }',
'.stepnum { display: inline-block; background: #2f6df6; color: #fff; font-weight: bold; font-size: 9pt; padding: 1pt 6pt; margin-right: 5pt; }',
'.path { background: #eef3fb; border: 0.75pt solid #ccd6e8; padding: 0 4pt; font-family: Consolas,monospace; font-size: 9pt; color: #2f6df6; }',
'.tag { background: #eef3fb; color: #33415e; font-size: 8.5pt; padding: 0 5pt; }',
'.platname { font-size: 14pt; font-weight: bold; margin-bottom: 2pt; }',
'.bake-input { border: 0.75pt solid #ccd6e8; padding: 4pt 6pt; margin: 2pt 0; font-size: 9.5pt; min-height: 12pt; white-space: pre-wrap; }',
'.bake-input.ph { color: #97a3bd; }',
'.lbl, .field > label { display: block; font-weight: bold; font-size: 9.5pt; margin: 6pt 0 2pt; }',
'.hint { font-size: 8.5pt; color: #7d8aa8; }',
'.section-title { font-size: 11pt; font-weight: bold; color: #33415e; margin: 14pt 0 6pt; border-bottom: 0.75pt solid #ccd6e8; padding-bottom: 3pt; }',
'.card { border: 0.75pt solid #d7dfee; padding: 10pt 12pt; margin-bottom: 10pt; }',
'.hero { background: #eef3fb; border: 0.75pt solid #ccd6e8; padding: 12pt 14pt; margin-bottom: 12pt; }',
'.hero h1 { font-size: 15pt; }',
'.hero-badge, .hero-stat { display: inline-block; border: 0.75pt solid #ccd6e8; background: #fff; padding: 2pt 6pt; margin: 2pt 3pt 2pt 0; font-size: 9pt; }',
'.cl-item { margin: 2pt 0; font-size: 9.5pt; }',
'.cl-mark { font-family: "맑은 고딕"; margin-right: 5pt; }',
'.cl-sub { display: block; font-size: 8.5pt; color: #7d8aa8; margin-left: 16pt; }',
'.acc { border: 0.75pt solid #d7dfee; padding: 8pt 10pt; margin-bottom: 8pt; }',
'.acc-title { font-weight: bold; font-size: 11pt; }',
'.acc-sub, .acc-count { font-size: 9pt; color: #7d8aa8; }',
'.prompt-out { font-family: Consolas,"D2Coding",monospace; font-size: 9pt; white-space: pre-wrap; border: 0.75pt solid #ccd6e8; background: #f7f9fd; padding: 8pt 10pt; }',
'.pagebreak { page-break-before: always; }'
].join('\n');

function prepareForWord(src) {
  var c = bakeClone(src);

  /* 1) 아이콘 SVG 제거 (Word 렌더 불가) */
  Array.prototype.slice.call(c.querySelectorAll('svg')).forEach(function (n) {
    if (n.closest && n.closest('.cl-box')) return;
    n.parentNode && n.parentNode.removeChild(n);
  });

  /* 2) 체크박스 → 글자 기호 */
  Array.prototype.slice.call(c.querySelectorAll('.cl-item, .std-row')).forEach(function (lab) {
    var inp = lab.querySelector('input'), box = lab.querySelector('.cl-box');
    var on = inp && inp.hasAttribute('checked');
    if (box) {
      var m = document.createElement('span');
      m.className = 'cl-mark';
      m.textContent = on ? '☑' : '☐';
      box.parentNode.replaceChild(m, box);
    }
    if (inp) inp.parentNode.removeChild(inp);
  });
  Array.prototype.slice.call(c.querySelectorAll('input')).forEach(function (n) {
    if (n.type === 'checkbox' || n.type === 'radio') {
      var m = document.createElement('span');
      m.className = 'cl-mark';
      m.textContent = n.hasAttribute('checked') ? '☑' : '☐';
      n.parentNode.replaceChild(m, n);
    }
  });

  /* 3) CSS 카운터로 매긴 단계 번호를 실제 글자로 */
  Array.prototype.slice.call(c.querySelectorAll('.steps')).forEach(function (box) {
    Array.prototype.slice.call(box.querySelectorAll('.step')).forEach(function (st, i) {
      var h = st.querySelector('h5'); if (!h) return;
      var n = document.createElement('span');
      n.className = 'stepnum'; n.textContent = (i + 1);
      h.insertBefore(n, h.firstChild);
    });
  });

  /* 4) 메타 정보 그리드 → 표 (Word는 grid를 무시함) */
  Array.prototype.slice.call(c.querySelectorAll('.doc-meta')).forEach(function (box) {
    var cells = Array.prototype.slice.call(box.children);
    var t = document.createElement('table'), tb = document.createElement('tbody');
    for (var i = 0; i < cells.length; i += 2) {
      var tr = document.createElement('tr');
      for (var j = i; j < i + 2 && j < cells.length; j++) {
        var dt = cells[j].querySelector('dt'), dd = cells[j].querySelector('dd');
        var th = document.createElement('th'); th.style.width = '16%';
        th.textContent = dt ? dt.textContent : '';
        var td = document.createElement('td'); td.style.width = '34%';
        td.textContent = dd ? dd.textContent : '';
        tr.appendChild(th); tr.appendChild(td);
      }
      tb.appendChild(tr);
    }
    t.appendChild(tb);
    box.parentNode.replaceChild(t, box);
  });

  /* 5) 플랫폼 로고 배지를 글자로 */
  Array.prototype.slice.call(c.querySelectorAll('.plat-logo')).forEach(function (n) {
    n.parentNode && n.parentNode.removeChild(n);
  });
  Array.prototype.slice.call(c.querySelectorAll('.plat-tabs, .progress-bar, .ring, #tabInk, .ratio-bar, .gauge-track')).forEach(function (n) {
    n.parentNode && n.parentNode.removeChild(n);
  });

  return c;
}
function wordFile(bodyHtml, title) {
  return '﻿<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
    'xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">' +
    '<head><meta charset="utf-8"><meta name=ProgId content=Word.Document>' +
    '<title>' + esc(title) + '</title>' +
    '<!--[if gte mso 9]><xml><w:WordDocument><w:View>Print</w:View><w:Zoom>100</w:Zoom>' +
    '<w:DoNotOptimizeForBrowser/></w:WordDocument></xml><![endif]-->' +
    '<style>' + WORD_CSS + '</style></head><body>' + bodyHtml + '</body></html>';
}
function exportWord(target, filename, title) {
  var src = (typeof target === 'string') ? document.getElementById(target) : target;
  if (!src) { toast('저장할 대상을 찾지 못했습니다', 'warn'); return; }
  var head = '<div class="wtitle">' + esc(title || filename) +
    '<small>' + esc(docSubtitle()) + '</small></div>';
  var body = head + new XMLSerializer().serializeToString(prepareForWord(src));
  var blob = new Blob([wordFile(body, title || filename)], { type: 'application/msword;charset=utf-8' });
  downloadBlob(blob, filename + '_' + stamp() + '.doc');
  toast('Word 파일로 저장했습니다', 'ok');
}
function exportWordAll() {
  var parts = $$('.panel').map(function (p, i) {
    var h = new XMLSerializer().serializeToString(prepareForWord(p));
    return (i ? '<div class="pagebreak"></div>' : '') +
      '<div class="section-title">' + esc((i + 1) + '. ' + (p.dataset.title || '')) + '</div>' + h;
  }).join('');
  var head = '<div class="wtitle">송쌤과학 서·논술형 평가 계획 및 문항 개발' +
    '<small>' + esc(docSubtitle()) + '</small></div>';
  var blob = new Blob([wordFile(head + parts, '송쌤과학 서·논술형 평가 전체 문서')], { type: 'application/msword;charset=utf-8' });
  downloadBlob(blob, '송쌤과학_서논술형_전체_' + stamp() + '.doc');
  toast('전체 내용을 Word 파일로 저장했습니다', 'ok');
}

/* ---------- 특정 영역만 인쇄(PDF) ---------- */
function printNode(target, title) {
  var src = (typeof target === 'string') ? document.getElementById(target) : target;
  if (!src) { toast('인쇄할 대상을 찾지 못했습니다', 'warn'); return; }
  var host = $('#printHost');
  host.innerHTML = '';
  var clone = src.cloneNode(true);
  $$('.no-print', clone).forEach(function (n) { n.parentNode && n.parentNode.removeChild(n); });
  clone.classList.remove('plat-panel');
  clone.style.display = 'block';
  var head = document.createElement('div');
  head.className = 'doc-title';
  head.innerHTML = esc(title) + '<small>' + esc(docSubtitle()) + '</small>';
  host.appendChild(head);
  host.appendChild(clone);
  $$('.panel').forEach(function (x) { x.classList.remove('print-target'); });
  document.body.classList.remove('print-all');
  document.body.classList.add('print-node');
  doPrint(title + ' - ' + (F('school') || F('i_school') || '송쌤과학'));
}

/* PDF — 브라우저 인쇄 대화상자에서 ‘PDF로 저장’ 선택 */
var printTitle = null;
function printPanel(panelId) {
  var p = document.getElementById(panelId); if (!p) return;
  $$('.panel').forEach(function (x) { x.classList.remove('print-target'); });
  document.body.classList.remove('print-all');
  p.classList.add('print-target');
  var prevActive = $('.panel.active');
  if (prevActive !== p) { goTab(panelId, true); }
  doPrint((p.dataset.title || '서논술형 평가') + ' - ' + (F('school') || F('i_school') || '송쌤과학'));
}
function printAll() {
  $$('.panel').forEach(function (x) { x.classList.remove('print-target'); });
  document.body.classList.add('print-all');
  doPrint('송쌤과학 서논술형 평가 전체 문서 - ' + (F('school') || F('i_school') || ''));
}
function doPrint(title) {
  printTitle = document.title;
  document.title = title.replace(/\s+$/, '');
  toast('인쇄 창에서 ‘대상 → PDF로 저장’을 선택하십시오', 'info');
  setTimeout(function () { window.print(); }, 260);
}
window.addEventListener('afterprint', function () {
  if (printTitle) { document.title = printTitle; printTitle = null; }
  document.body.classList.remove('print-all');
  document.body.classList.remove('print-node');
  var host = $('#printHost'); if (host) host.innerHTML = '';
  $$('.panel').forEach(function (x) { x.classList.remove('print-target'); });
});

/* JSON */
function exportJson() {
  var blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
  downloadBlob(blob, '송쌤과학_서논술형_' + stamp() + '.json');
  toast('작업 내용을 내보냈습니다', 'ok');
}
function importJson(file) {
  var fr = new FileReader();
  fr.onload = function () {
    try {
      var o = JSON.parse(fr.result);
      Object.keys(o).forEach(function (k) { state[k] = o[k]; });
      save(true);
      toast('불러왔습니다. 화면을 새로 그립니다.', 'ok');
      setTimeout(function () { location.reload(); }, 700);
    } catch (e) { toast('파일을 읽을 수 없습니다', 'warn'); }
  };
  fr.readAsText(file);
}

/* ======================================================================
   PART 14. 액션 연결 · 초기화
   ====================================================================== */
function syncBasic() {
  var pairs = [['i_school', 'school'], ['i_teacher', 'teacher'], ['i_grade', 'grade']];
  pairs.forEach(function (p) {
    var v = state.f[p[1]];
    if (isBlank(v)) return;
    state.f[p[0]] = v;
    var el = $('[data-k="' + p[0] + '"]'); if (el) el.value = v;
  });
  var unit = [F('subject'), F('unit')].filter(function (x) { return !isBlank(x); }).join(' / ');
  if (unit) { state.f.i_unit = unit; var e2 = $('[data-k="i_unit"]'); if (e2) e2.value = unit; }
  if (isBlank(F('i_type')) && !isBlank(F('mForm'))) {
    var map = { '서술형': '서술형', '논술형(제한형)': '논술형 · 제한형', '논술형(확장형)': '논술형 · 확장형', '서술+논술 단계형': '서술형 + 논술형 단계형' };
    var t = map[F('mForm')];
    if (t) { state.f.i_type = t; var e3 = $('[data-k="i_type"]'); if (e3) e3.value = t; }
  }
  if (isBlank(F('i_scene')) && !isBlank(F('mScene'))) {
    var e4 = $('[data-k="i_scene"]');
    if (e4) { e4.value = F('mScene'); state.f.i_scene = e4.value; }
  }
  autosave(); renderItemDoc(); renderRubricDoc();
  toast('기본 정보를 불러왔습니다', 'ok');
}
function autoAnalyze() {
  var arr = state.std.plan || [];
  if (!arr.length) { toast('먼저 성취기준을 선택하십시오', 'warn'); return; }
  var know = [], skill = [];
  arr.forEach(function (c) {
    var s = STD_MAP[c]; if (!s) return;
    know.push('· ' + s.area + ' : ' + s.text.replace(/(할 수 있다|한다)\.$/, '').trim());
    var m = s.text.match(/([가-힣a-zA-Z0-9·\s]{2,20})(할|하여|하고|지어|내어)?\s*(설명|추론|비교|분석|표현|발표|조사|설계|해석|제안|평가|토의|구성|예측|판단|제작|정리)/g);
    if (m) m.forEach(function (x) { skill.push('· ' + x.trim() + '하기'); });
  });
  if (isBlank(F('anKnow'))) { state.f.anKnow = know.join('\n'); $('[data-k="anKnow"]').value = state.f.anKnow; }
  if (isBlank(F('anSkill')) && skill.length) { state.f.anSkill = uniq(skill).join('\n'); $('[data-k="anSkill"]').value = state.f.anSkill; }
  autosave(); renderPlanDoc();
  toast('성취기준 문장을 불러왔습니다. 학생이 할 일로 다듬어 주십시오.', 'ok');
}
function resetAll() {
  if (!confirm('입력한 모든 내용과 체크가 지워집니다. 계속할까요?')) return;
  if (!confirm('되돌릴 수 없습니다. 정말 초기화할까요?')) return;
  var theme = state.theme;
  localStorage.removeItem(KEY);
  state = { f: {}, chips: {}, reps: {}, checks: {}, rates: {}, std: { plan: [], item: [] }, rubric: [], holistic: {}, levelFb: {}, theme: theme, tab: 'p1' };
  save(true);
  location.reload();
}
function saveAll() {
  save(true);
  var n = 0;
  Object.keys(state.checks).forEach(function (k) { if (state.checks[k]) n++; });
  var std = (state.std.plan || []).length + (state.std.item || []).length;
  toast('전체 저장 완료 · 성취기준 ' + std + '개 · 체크 ' + n + '개 · 채점 요소 ' + state.rubric.length + '개', 'ok');
}
function initActions() {
  $('#btnSaveAll').addEventListener('click', saveAll);

  /* 전체 저장 드롭다운 */
  var split = $('#saveSplit'), menuBtn = $('#btnSaveMenu');
  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    split.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', split.classList.contains('open') ? 'true' : 'false');
  });
  document.addEventListener('click', function (e) {
    if (!split.contains(e.target)) { split.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') split.classList.remove('open'); });
  $$('[data-save]', split).forEach(function (b) {
    b.addEventListener('click', function () {
      split.classList.remove('open');
      var k = b.dataset.save;
      if (k === 'pdf') printAll();
      if (k === 'word') exportWordAll();
      if (k === 'png') {
        var pn = document.getElementById(state.tab || 'p1');
        exportPng(pn.id, '송쌤과학_' + (pn.dataset.title || '문서').replace(/[\\/:*?"<>|·\s]+/g, '_'));
      }
      if (k === 'json') exportJson();
      if (k === 'load') $('#fileImport').click();
    });
  });

  $('#btnSyncBasic').addEventListener('click', syncBasic);
  $('#btnAutoAnalyze').addEventListener('click', autoAnalyze);
  $('#btnPullElems').addEventListener('click', pullElems);

  $$('[data-render]').forEach(function (b) {
    b.addEventListener('click', function () {
      var k = b.dataset.render;
      if (k === 'plan') renderPlanDoc();
      if (k === 'item') renderItemDoc();
      if (k === 'rubric') { renderRubric(); renderRubricDoc(); }
      toast('미리보기를 새로 그렸습니다', 'ok');
    });
  });
  $$('[data-png]').forEach(function (b) {
    b.addEventListener('click', function () { exportPng(b.dataset.png, b.dataset.name || 'export'); });
  });
  $$('[data-pdf]').forEach(function (b) {
    b.addEventListener('click', function () { printPanel(b.dataset.pdf); });
  });
  $$('[data-pdf-node]').forEach(function (b) {
    b.addEventListener('click', function () { printNode(b.dataset.pdfNode, b.dataset.title || '문서'); });
  });
  $$('[data-word]').forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.word;
      if (/^p[1-7]$/.test(t)) {
        var pn = document.getElementById(t);
        exportWord(pn, b.dataset.name || '문서', b.dataset.title || pn.dataset.title || '문서');
      } else {
        exportWord(t, b.dataset.name || '문서', b.dataset.title || '문서');
      }
    });
  });

  /* 프롬프트 */
  $('#btnCopyPrompt').addEventListener('click', function () {
    var txt = $('#promptOut').textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast('지시문을 복사했습니다', 'ok'); },
        function () { legacyCopy(txt); });
    } else legacyCopy(txt);
  });
  $('#btnDownloadPrompt').addEventListener('click', function () {
    var blob = new Blob([$('#promptOut').textContent], { type: 'text/plain;charset=utf-8' });
    downloadBlob(blob, '서논술형_에이전트_지시문_' + stamp() + '.txt');
    toast('지시문을 파일로 저장했습니다', 'ok');
  });

  /* 계획 에이전트 지시문 */
  var cp = $('#btnCopyPlan');
  if (cp) cp.addEventListener('click', function () {
    var txt = $('#planPromptOut').textContent;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(function () { toast('지시문을 복사했습니다', 'ok'); },
        function () { legacyCopy(txt); });
    } else legacyCopy(txt);
  });
  var dp = $('#btnDownloadPlan');
  if (dp) dp.addEventListener('click', function () {
    var blob = new Blob([$('#planPromptOut').textContent], { type: 'text/markdown;charset=utf-8' });
    downloadBlob(blob, '교수학습_평가계획_에이전트_지시문_' + stamp() + '.md');
    toast('지시문을 .md 파일로 저장했습니다', 'ok');
  });

  /* JSON */
  $('#btnExportJson').addEventListener('click', exportJson);
  $('#btnImportJson').addEventListener('click', function () { $('#fileImport').click(); });
  $('#fileImport').addEventListener('change', function (e) {
    if (e.target.files && e.target.files[0]) importJson(e.target.files[0]);
  });
  $('#btnResetAll').addEventListener('click', resetAll);

  /* FAB */
  var fab = $('#fabWrap');
  $('#fabMain').addEventListener('click', function () { fab.classList.toggle('open'); });
  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target)) fab.classList.remove('open');
  });
  $('#fabPdfAll').addEventListener('click', function () { fab.classList.remove('open'); printAll(); });
  $('#fabPdfOne').addEventListener('click', function () { fab.classList.remove('open'); printPanel(state.tab || 'p1'); });
  $('#fabPng').addEventListener('click', function () {
    fab.classList.remove('open');
    var p = document.getElementById(state.tab || 'p1');
    exportPng(p.id, '송쌤과학_' + (p.dataset.title || '문서').replace(/[\\/:*?"<>|·\s]+/g, '_'));
  });
  $('#fabTop').addEventListener('click', function () {
    fab.classList.remove('open');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* 단축키 */
  document.addEventListener('keydown', function (e) {
    var meta = e.ctrlKey || e.metaKey;
    if (meta && e.key.toLowerCase() === 's') { e.preventDefault(); saveAll(); }
    if (meta && e.key.toLowerCase() === 'p') { e.preventDefault(); printPanel(state.tab || 'p1'); }
    if (meta && e.key >= '1' && e.key <= '7') {
      var tb = $$('.tab')[+e.key - 1];
      if (tb) { e.preventDefault(); goTab(tb.dataset.panel); }
    }
  });
}
function legacyCopy(txt) {
  var ta = document.createElement('textarea');
  ta.value = txt; ta.setAttribute('readonly', '');
  ta.style.position = 'fixed'; ta.style.left = '-9999px';
  document.body.appendChild(ta); ta.select();
  try { document.execCommand('copy'); toast('지시문을 복사했습니다', 'ok'); }
  catch (e) { toast('복사에 실패했습니다. 직접 선택해 복사하십시오.', 'warn'); }
  ta.remove();
}

/* ---------- 시작 ---------- */
/* 한 단계가 실패해도 나머지 초기화가 멈추지 않게 한다.
   (예전에는 앞 단계에서 오류가 나면 뒤의 ‘추가’ 버튼 연결과
    지시문 생성이 통째로 실행되지 않아 화면이 빈 채로 남았다) */
function step(label, fn) {
  try { fn(); }
  catch (e) { console.error('[init:' + label + ']', e); return false; }
  return true;
}

function init() {
  step('load', load);
  step('theme', initTheme);
  step('bgfx', function () { bgfx.init(); });
  step('tabs', initTabs);
  step('fields', bindFields);
  step('chips', bindChips);
  step('radios', bindRadios);
  step('std', initStd);
  step('reps', initReps);
  step('checks', initChecks);
  step('quickCheck', renderQuickCheck);
  step('rate', renderRate);
  step('verbs', renderVerbs);
  step('dok', renderDok);
  step('flow', renderFlow);
  step('platforms', renderPlatforms);
  step('actions', initActions);

  if (!state.f.r_levels) { state.f.r_levels = '5'; }
  if (!state.f.r_label) { state.f.r_label = '점수'; }
  if (!state.f.r_kind) { state.f.r_kind = 'analytic'; var rk = $('input[name="r_kind"][value="analytic"]'); if (rk) rk.checked = true; }
  if (!state.f.r_scope) { state.f.r_scope = '과업 특수적'; var rs = $('input[name="r_scope"][value="과업 특수적"]'); if (rs) rs.checked = true; }
  var lv = $('#r_levels'); if (lv) lv.value = state.f.r_levels;
  var lb = $('#r_label'); if (lb) lb.value = state.f.r_label;

  /* 수행평가 과제는 2개가 기본이다. 저장된 것이 없으면 언제나 두 줄을 만들어 둔다. */
  if (!repArr('planTask').length) {
    state.f.g_seeded = '1';
    state.reps.planTask = [
      { name: '실험·실습 평가', pct: '20' },
      { name: '서·논술형 / 프로젝트', pct: '20' }
    ];
    renderRep('planTask');
  }
  step('rubric', function () {
    if (!Array.isArray(state.rubric)) state.rubric = [];
    if (!state.rubric.length) addRubricElem('');
    renderRubric();
  });
  step('planDoc', renderPlanDoc);
  step('itemDoc', renderItemDoc);
  step('rubricDoc', renderRubricDoc);
  step('prompt', buildPrompt);
  step('planPrompt', buildPlanPrompt);

  step('goTab', function () {
    var tab = state.tab && document.getElementById(state.tab) ? state.tab : 'p1';
    goTab(tab, true);
  });
  setTimeout(moveInk, 120);

  window.addEventListener('beforeunload', function () { save(true); });
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();

})();
