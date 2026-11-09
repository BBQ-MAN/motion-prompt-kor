<!-- tools/build.mjs가 meta.json에서 만든 파일입니다. 고칠 때는 이 파일이 아니라 meta.json을 편집하세요. -->

# 랜딩 페이지·웹사이트 연출 2탄

24 개의 이름 · #145–168 · 팩 `lp2` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

이름을 찾았다면 그대로 AI에게 말하세요. 「몇 초 동안」「얼마나 세게」「무엇이 움직이는지」를 덧붙이면 생각한 결과에 더 가까워집니다.

![랜딩 페이지·웹사이트 연출 2탄 — 견본](../../assets/preview-lp2.gif)

## 스크롤 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#145](https://bbq-man.github.io/motion-prompt-kor/#145) | **타임라인 애니메이션** | Timeline on scroll | 스크롤하면 연표의 선이 길어진다 | 회사 연혁을 타임라인 애니메이션으로 만들어 줘. 스크롤에 맞춰 세로선을 늘리고, 선이 닿은 연도부터 차례로 보여 줘. |
| [#146](https://bbq-man.github.io/motion-prompt-kor/#146) | **스크롤 텍스트 리빌** | Scroll text reveal | 스크롤하면 글자가 차례로 진해진다 | 콘셉트 문구에 스크롤 텍스트 리빌을 넣어 줘. 처음엔 연한 회색이고, 스크롤에 맞춰 한 글자씩 진해지게. |
| [#147](https://bbq-man.github.io/motion-prompt-kor/#147) | **스태킹 카드** | Stacking cards | 스크롤하면 카드가 차곡차곡 쌓인다 | 서비스 3단계를 스태킹 카드로 보여 줘. 스크롤하면 다음 카드가 아래에서 올라와 앞 카드 윗변보다 12 px 아래에 겹치게. |
| [#148](https://bbq-man.github.io/motion-prompt-kor/#148) | **스크롤 배경색 전환** | Background color change on scroll | 섹션마다 페이지 배경색이 바뀐다 | 스크롤 배경색 전환을 넣어 줘. 아침 섹션은 크림색, 밤은 네이비, 휴일 섹션은 하늘색으로 부드럽게 바뀌게. |
| [#149](https://bbq-man.github.io/motion-prompt-kor/#149) | **스크롤 숨김 헤더** | Hide-on-scroll header | 내리면 숨고 올리면 다시 나온다 | 헤더를 스크롤 숨김 헤더로 만들어 줘. 아래로 스크롤하면 0.3초 만에 위로 숨기고, 조금이라도 위로 올리면 바로 다시 보여 줘. |
| [#150](https://bbq-man.github.io/motion-prompt-kor/#150) | **스크롤스파이** | Scrollspy | 읽는 중인 섹션을 목차에 표시한다 | 글 목차에 스크롤스파이를 넣어 줘. 지금 읽는 섹션 항목을 주황색으로 강조하고, 전환은 0.25초로. |
| [#151](https://bbq-man.github.io/motion-prompt-kor/#151) | **탑 버튼** | Back-to-top button | 내려가면 나타나고 누르면 맨 위로 간다 | 글 페이지에 탑 버튼을 달아 줘. 조금 스크롤하면 오른쪽 아래에 나타나고, 누르면 0.6초 만에 맨 위로 올라가게. |
| [#152](https://bbq-man.github.io/motion-prompt-kor/#152) | **스크롤 줌** | Zoom on scroll | 스크롤하면 이미지가 화면 가득 커진다 | 히어로 이미지에 스크롤 줌을 넣어 줘. 가운데 작은 사진을 스크롤에 맞춰 화면 가득 키우고, 다 커지면 헤드라인을 겹쳐 띄워 줘. |

## 마우스·입력 반응

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#153](https://bbq-man.github.io/motion-prompt-kor/#153) | **3D 틸트** | 3D tilt on hover | 커서 방향으로 카드가 입체적으로 기운다 | 회원 카드에 3D 틸트를 넣어 줘. 커서 위치에 맞춰 최대 18°까지 기울이고, 빛 반사도 같이 움직여 줘. |
| [#154](https://bbq-man.github.io/motion-prompt-kor/#154) | **스포트라이트 호버** | Spotlight hover | 커서 주변만 밝아진다 | 특징 카드에 스포트라이트 호버를 넣어 줘. 어두운 카드 위에서 커서 주변 반지름 120 px 정도만 밝히고, 테두리도 빛나게 해 줘. |
| [#155](https://bbq-man.github.io/motion-prompt-kor/#155) | **호버 이미지 전환** | Image swap on hover | 마우스를 올리면 다른 컷으로 바뀐다 | 상품 목록에 호버 이미지 전환을 넣어 줘. 카드에 커서를 올리면 0.3초 동안 뒷모습 사진으로 크로스페이드되게. |
| [#156](https://bbq-man.github.io/motion-prompt-kor/#156) | **텍스트 롤** | Text roll on hover | 글자가 위로 굴러 바뀐다 | 글로벌 메뉴에 텍스트 롤 호버를 넣어 줘. 커서를 올리면 글자가 0.035초 간격으로 하나씩 위로 굴러 올라가고, 아래에서 같은 단어가 주황색으로 나오게. |
| [#157](https://bbq-man.github.io/motion-prompt-kor/#157) | **호버 이미지 프리뷰** | Hover image reveal | 목록에 올리면 사진이 나타난다 | 시설 목록을 호버 이미지 프리뷰로 만들어 줘. 행에 커서를 올리면 그 사진을 0.25초 만에 커서 옆에 띄우고, 커서를 따라 움직이게. |
| [#158](https://bbq-man.github.io/motion-prompt-kor/#158) | **플로팅 라벨** | Floating label | 입력을 시작하면 라벨이 위로 올라간다 | 폼 입력란을 플로팅 라벨로 만들어 줘. 포커스되면 라벨을 0.24초 만에 작게 줄여 위쪽 테두리 선으로 옮겨 줘. |
| [#159](https://bbq-man.github.io/motion-prompt-kor/#159) | **실시간 유효성 검사** | Inline validation | 입력하는 동안 맞고 틀림을 바로 보여 준다 | 문의 폼에 실시간 유효성 검사를 넣어 줘. 이메일 주소를 입력하는 동안은 빨간색으로 "형식이 올바르지 않습니다"를 보여 주고, 올바르게 되면 초록색 체크로 바꿔 줘. |
| [#160](https://bbq-man.github.io/motion-prompt-kor/#160) | **로딩 버튼** | Loading button | 누르면 로딩 중에서 완료로 바뀐다 | 전송 버튼을 로딩 버튼으로 만들어 줘. 누르면 0.3초 만에 원으로 줄여 스피너를 돌리고, 끝나면 초록 체크와 "완료"로 바꿔 줘. |

## 시선을 끄는 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#161](https://bbq-man.github.io/motion-prompt-kor/#161) | **뷰 트랜지션** | View transition (shared element) | 목록 사진이 그대로 상세 화면으로 커진다 | 포트폴리오 목록에서 상세 페이지로 넘어갈 때 뷰 트랜지션을 써 줘. 누른 사진이 0.6초 동안 그대로 상세 페이지 상단까지 커지게. |
| [#162](https://bbq-man.github.io/motion-prompt-kor/#162) | **라이트박스** | Lightbox | 이미지를 어두운 배경 위에 크게 띄운다 | 시공 사례 사진을 라이트박스로 볼 수 있게 해 줘. 누르면 배경을 어둡게 하고 사진을 가운데에 크게 띄우고, 좌우 화살표로 이전·다음 사진을 넘길 수 있게. |
| [#163](https://bbq-man.github.io/motion-prompt-kor/#163) | **핫스팟** | Hotspots | 이미지 위 점을 누르면 설명이 뜬다 | 상품 사진에 핫스팟을 넣어 줘. 특징 부분에 맥박처럼 뛰는 점을 두고, 누르면 말풍선 설명을 0.25초 만에 띄워 줘. |
| [#164](https://bbq-man.github.io/motion-prompt-kor/#164) | **카운트다운 타이머** | Countdown timer | 마감까지 남은 시간이 줄어든다 | 캠페인 마감에 카운트다운 타이머를 넣어 줘. 시:분:초로, 숫자가 바뀔 때마다 0.3초 동안 아래에서 올라와 바뀌게. |
| [#165](https://bbq-man.github.io/motion-prompt-kor/#165) | **셰이프 디바이더** | Animated shape divider | 섹션 경계의 물결이 계속 일렁인다 | 히어로와 다음 섹션 경계에 움직이는 셰이프 디바이더를 넣어 줘. 흰 물결 두 겹을 서로 반대 방향으로 천천히 흐르게. |
| [#166](https://bbq-man.github.io/motion-prompt-kor/#166) | **좋아요 애니메이션** | Like button animation | 누르면 하트가 톡 터진다 | 게시물 좋아요 버튼에 좋아요 애니메이션을 넣어 줘. 누르면 하트를 빨갛게 채워 1.45배까지 튀게 하고, 주변에 작은 입자를 흩뿌리면서 숫자도 1 올려 줘. |
| [#167](https://bbq-man.github.io/motion-prompt-kor/#167) | **스크롤 다운 인디케이터** | Scroll-down cue | 아래로 스크롤하라고 계속 알려 준다 | 히어로 아래에 스크롤 다운 인디케이터를 넣어 줘. 마우스 모양 안의 점이 약 1.5초마다 아래로 내려가며 사라지는 걸 반복하게. |
| [#168](https://bbq-man.github.io/motion-prompt-kor/#168) | **배경 동영상** | Background video | 히어로 섹션 뒤에서 영상이 재생된다 | 히어로를 배경 동영상으로 만들어 줘. 음소거로 반복 재생하고, 헤드라인이 잘 읽히게 왼쪽에 어두운 그라데이션을 깔아 줘. |

번호를 누르면 갤러리의 움직이는 견본이 열립니다. 이름 하나의 초 단위 타이밍·이징 수치·참고 코드: `api/v1/ko/e/<id>.txt` ([#145](../../api/v1/ko/e/145.txt)).

[전체 팩](../README.md)
