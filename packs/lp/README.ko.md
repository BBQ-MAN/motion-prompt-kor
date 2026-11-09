<!-- tools/build.mjs가 meta.json에서 만든 파일입니다. 고칠 때는 이 파일이 아니라 meta.json을 편집하세요. -->

# 랜딩 페이지·웹사이트 연출

24 개의 이름 · #073–096 · 팩 `lp` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

이름을 찾았다면 그대로 AI에게 말하세요. 「몇 초 동안」「얼마나 세게」「무엇이 움직이는지」를 덧붙이면 생각한 결과에 더 가까워집니다.

## 스크롤 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#073](https://showheyohtaki.github.io/motion-prompt/#073) | **패럴랙스 스크롤** | Parallax scrolling | 스크롤할 때 뒤쪽 레이어일수록 느리게 움직임 | 히어로 섹션 배경을 패럴랙스 스크롤로 만들어 줘. 배경은 스크롤 양의 0.3배로 움직이게. |
| [#074](https://showheyohtaki.github.io/motion-prompt/#074) | **스크롤 페이드인** | Fade-in on scroll | 화면에 들어온 요소가 부드럽게 나타남 | 각 섹션의 제목과 카드를 스크롤 페이드인으로 보여 줘. 아래에서 30px, 0.6초로. |
| [#075](https://showheyohtaki.github.io/motion-prompt/#075) | **스티키 헤더** | Sticky header | 스크롤해도 헤더가 위에 고정됨 | 헤더를 스티키 헤더로 만들어 줘. 위에 붙으면 아래에 옅은 그림자를 넣어서. |
| [#076](https://showheyohtaki.github.io/motion-prompt/#076) | **핀 고정** | Pinning | 섹션을 멈춰 두고 내용만 넘김 | '3단계' 섹션을 핀 고정하고, 스크롤할 때마다 한 단계씩 사진과 번호를 바꿔 줘. |
| [#077](https://showheyohtaki.github.io/motion-prompt/#077) | **가로 스크롤** | Horizontal scroll | 세로 스크롤에 맞춰 내용이 옆으로 흐름 | 포트폴리오 섹션을 가로 스크롤로 만들어 줘. 아래로 스크롤한 만큼 카드를 왼쪽으로 흘려 줘. |
| [#078](https://showheyohtaki.github.io/motion-prompt/#078) | **스크롤 스냅** | Scroll snap | 스크롤이 섹션 경계에 딱 맞춰 멈춤 | 섹션마다 스크롤 스냅을 걸어 줘. 조금만 스크롤해도 다음 섹션 맨 위에 맞춰지게. |
| [#079](https://showheyohtaki.github.io/motion-prompt/#079) | **스크롤 프로그레스 바** | Scroll progress bar | 읽은 분량을 상단 막대로 보여 줌 | 기사 페이지 위에 스크롤 프로그레스 바를 달아 줘. 두께 4px, 색은 브랜드 주황색으로. |
| [#080](https://showheyohtaki.github.io/motion-prompt/#080) | **형광펜 애니메이션** | Highlighter animation | 중요한 말 아래에 형광펜 줄이 그어짐 | 강조할 문구가 스크롤로 화면에 들어오면 형광펜 애니메이션으로 노란 줄을 그어 줘. 왼쪽부터 0.8초로. |

## 호버·클릭 인터랙션

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#081](https://showheyohtaki.github.io/motion-prompt/#081) | **호버 리프트** | Hover lift | 마우스를 올리면 그림자와 함께 떠오름 | 카드에 호버 리프트를 넣어 줘. 위로 8px, 그림자는 진하게, 0.3초로. |
| [#082](https://showheyohtaki.github.io/motion-prompt/#082) | **호버 이미지 줌** | Image zoom on hover | 프레임은 그대로, 사진만 확대됨 | 포트폴리오 사진에 호버 이미지 줌을 넣어 줘. 프레임은 고정하고, 내용만 0.5초 동안 1.1배까지. |
| [#083](https://showheyohtaki.github.io/motion-prompt/#083) | **커서 팔로워** | Cursor follower | 도형이 마우스 커서를 한 박자 늦게 따라감 | 사이트 전체에 커서 팔로워를 넣어 줘. 지름 30px 주황색 원이 커서를 살짝 늦게 따라오게. |
| [#084](https://showheyohtaki.github.io/motion-prompt/#084) | **마그네틱 버튼** | Magnetic button | 가까이 온 커서 쪽으로 버튼이 끌려감 | 문의 버튼을 마그네틱 버튼으로 만들어 줘. 커서와의 거리의 0.3배만큼 따라가고, 벗어나면 탄력 있게 돌아오게. |
| [#085](https://showheyohtaki.github.io/motion-prompt/#085) | **리플 효과** | Ripple effect | 누른 자리에서 물결이 퍼짐 | 전송 버튼에 리플 효과를 넣어 줘. 누른 위치에서 흰 원이 0.6초 동안 퍼지다가 사라지게. |
| [#086](https://showheyohtaki.github.io/motion-prompt/#086) | **밑줄 애니메이션** | Underline animation | 호버한 링크의 밑줄이 왼쪽부터 늘어남 | 메뉴 링크에 밑줄 애니메이션을 넣어 줘. 호버하면 왼쪽부터 0.3초로 늘어나고, 벗어나면 오른쪽으로 빠지게. |
| [#087](https://showheyohtaki.github.io/motion-prompt/#087) | **비포 애프터 슬라이더** | Before/after slider | 경계선을 드래그해 전후를 비교함 | 시공 사례 사진을 비포 애프터 슬라이더로 만들어 줘. 가운데 선을 드래그하면 왼쪽은 시공 전, 오른쪽은 시공 후로 비교되게. |
| [#088](https://showheyohtaki.github.io/motion-prompt/#088) | **이탈 방지 팝업** | Exit-intent popup | 방문자가 떠나려 할 때 띄우는 팝업 | 랜딩 페이지에 이탈 방지 팝업을 넣어 줘. 커서가 화면 위로 나가면 쿠폰 팝업을 한 번만 띄워 줘. |

## 로딩·페이지 이동·반복 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#089](https://showheyohtaki.github.io/motion-prompt/#089) | **프리로더** | Preloader | 페이지를 불러오는 동안 보여 주는 화면 | 사이트 프리로더를 만들어 줘. 로고와 % 숫자를 보여 주고, 100%가 되면 화면이 위로 걷히게. |
| [#090](https://showheyohtaki.github.io/motion-prompt/#090) | **레이지 로딩** | Lazy loading | 화면에 들어온 이미지만 불러옴 | 갤러리 이미지를 레이지 로딩으로 바꿔 줘. 불러오기 전에는 회색 플레이스홀더, 다 불러오면 0.3초 동안 페이드인으로. |
| [#091](https://showheyohtaki.github.io/motion-prompt/#091) | **무한 스크롤** | Infinite scroll | 끝까지 내리면 다음 항목이 자동으로 추가됨 | 공지 목록을 무한 스크롤로 만들어 줘. 맨 아래에 오면 로딩 표시를 띄우고 10개씩 추가해 줘. |
| [#092](https://showheyohtaki.github.io/motion-prompt/#092) | **페이지 전환 애니메이션** | Page transition | 페이지를 옮길 때 사이를 잇는 연출 | 페이지 전환 애니메이션을 넣어 줘. 링크를 누르면 주황색 패널이 왼쪽에서 오른쪽으로 지나가며 다음 페이지로 바뀌게. |
| [#093](https://showheyohtaki.github.io/motion-prompt/#093) | **스무스 스크롤** | Smooth scroll | 앵커 링크로 부드럽게 이동함 | 메뉴의 앵커 링크를 스무스 스크롤로 만들어 줘. 고정 헤더 높이만큼 띄워서 멈추게. |
| [#094](https://showheyohtaki.github.io/motion-prompt/#094) | **마키** | Marquee | 글자나 로고가 띠 모양으로 끝없이 흐름 | 서비스 이름을 마키로 오른쪽에서 왼쪽으로 흘려 줘. 끊김 없이 루프되게, 속도는 1초에 80px 정도로. |
| [#095](https://showheyohtaki.github.io/motion-prompt/#095) | **그라데이션 애니메이션** | Animated gradient | 배경 색이 계속 움직이며 섞임 | 히어로 섹션 배경을 그라데이션 애니메이션으로 만들어 줘. 주황색과 파란색이 천천히 섞이게, 10초에 한 바퀴. |
| [#096](https://showheyohtaki.github.io/motion-prompt/#096) | **플로팅 애니메이션** | Floating animation | 요소가 천천히 위아래로 떠다님 | 히어로 섹션의 스마트폰 이미지에 플로팅 애니메이션을 넣어 줘. 위아래 8px, 2.4초에 한 번 왕복. |

번호를 누르면 갤러리의 움직이는 견본이 열립니다. 이름 하나의 초 단위 타이밍·이징 수치·참고 코드: `api/v1/ko/e/<id>.txt` ([#073](../../api/v1/ko/e/073.txt)).

[전체 팩](../README.md)
