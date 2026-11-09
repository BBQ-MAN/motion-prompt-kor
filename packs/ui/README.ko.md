<!-- tools/build.mjs가 meta.json에서 만든 파일입니다. 고칠 때는 이 파일이 아니라 meta.json을 편집하세요. -->

# UI 컴포넌트 이름

24 개의 이름 · #049–072 · 팩 `ui` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

이름을 찾았다면 그대로 AI에게 말하세요. 「몇 초 동안」「얼마나 세게」「무엇이 움직이는지」를 덧붙이면 생각한 결과에 더 가까워집니다.

## 열리고 겹치는 컴포넌트

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#049](https://showheyohtaki.github.io/motion-prompt/#049) | **모달** | Modal dialog | 배경이 어두워지고 가운데에 창이 뜬다 | 삭제 버튼을 누르면 모달로 확인 창을 띄워 줘. 배경은 40% 정도 어둡게 하고, 0.3초 동안 살짝 커지면서 페이드인되게. |
| [#050](https://showheyohtaki.github.io/motion-prompt/#050) | **드로어** | Drawer (Off-canvas) | 옆에서 메뉴 패널이 밀려 나온다 | 메뉴 버튼을 누르면 왼쪽에서 드로어를 열어 줘. 너비는 화면의 40%, 0.4초 동안 밀려 나오고 배경은 살짝 어둡게. |
| [#051](https://showheyohtaki.github.io/motion-prompt/#051) | **바텀 시트** | Bottom sheet | 화면 아래에서 패널이 올라온다 | "상세 보기"를 누르면 바텀 시트로 상세 정보를 띄워 줘. 높이는 화면의 40%, 0.4초 동안 올라오고 아래로 끌어내리면 닫히게. |
| [#052](https://showheyohtaki.github.io/motion-prompt/#052) | **아코디언** | Accordion | 제목을 누르면 내용이 펼쳐지고 접힌다 | FAQ를 아코디언으로 만들어 줘. 누른 항목만 0.35초에 펼치고 화살표는 180° 돌려 줘. |
| [#053](https://showheyohtaki.github.io/motion-prompt/#053) | **드롭다운** | Dropdown (select) | 누르면 아래로 선택지 목록이 펼쳐진다 | 지역 입력란을 드롭다운으로 만들어 줘. 누르면 0.25초 만에 아래로 선택지를 펼치고, 하나 고르면 닫으면서 값을 채워 줘. |
| [#054](https://showheyohtaki.github.io/motion-prompt/#054) | **툴팁** | Tooltip | 마우스를 올리면 짧은 설명이 뜬다 | "?" 아이콘에 툴팁을 달아 줘. 마우스를 올리고 0.2초 뒤에 위쪽에 설명을 띄우고, 커서가 벗어나면 사라지게. |
| [#055](https://showheyohtaki.github.io/motion-prompt/#055) | **팝오버** | Popover | 누르면 버튼을 가리키는 작은 창이 뜬다 | "상세" 버튼에 팝오버를 달아 줘. 누르면 오른쪽에 작은 창을 0.3초 동안 띄우고, OK를 누르면 닫히게. |
| [#056](https://showheyohtaki.github.io/motion-prompt/#056) | **토스트** | Toast notification | 구석에 알림이 떴다가 저절로 사라진다 | 저장하면 오른쪽 아래에 토스트로 "저장했습니다"를 띄워 줘. 0.35초에 오른쪽에서 들어오고 2초 뒤 자동으로 사라지게. |

## 선택·전환 컴포넌트

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#057](https://showheyohtaki.github.io/motion-prompt/#057) | **탭** | Tabs | 탭을 눌러 보이는 내용을 전환한다 | 요금 페이지 위에 탭 3개를 놓아 줘. 누르면 밑줄을 0.25초 동안 미끄러뜨리고, 내용은 0.2초 크로스페이드로 바꿔 줘. |
| [#058](https://showheyohtaki.github.io/motion-prompt/#058) | **캐러셀** | Carousel | 옆으로 넘기며 하나씩 보여 준다 | 메인 이미지를 캐러셀로 만들어 줘. 오른쪽 화살표로 한 장씩 0.4초에 넘기고, 아래에 현재 위치 점을 표시해 줘. |
| [#059](https://showheyohtaki.github.io/motion-prompt/#059) | **토글 스위치** | Toggle switch | 설정을 켜고 끈다 | 알림 설정의 각 줄에 토글 스위치를 놓아 줘. 누르면 0.2초에 손잡이를 미끄러뜨리고, 켜지면 트랙을 파랗게 해 줘. |
| [#060](https://showheyohtaki.github.io/motion-prompt/#060) | **세그먼트 컨트롤** | Segmented control | 붙어 있는 버튼 줄로 보기를 전환한다 | 차트 위에 일/주/월 세그먼트 컨트롤을 놓아 줘. 누르면 선택 배경을 0.25초에 미끄러뜨리고 차트도 같이 바꿔 줘. |
| [#061](https://showheyohtaki.github.io/motion-prompt/#061) | **필터 칩** | Filter chips | 눌러서 필터 조건을 켜고 끈다 | 목록 위에 필터 칩을 놓아 줘. 누른 칩은 체크 표시를 붙여 파랗게 하고, 0.15초 안에 목록을 걸러 줘. |
| [#062](https://showheyohtaki.github.io/motion-prompt/#062) | **레인지 슬라이더** | Range slider | 핸들 두 개로 최소·최대 범위를 고른다 | 가격 필터를 핸들 2개짜리 레인지 슬라이더로 만들어 줘. 드래그하는 동안에는 값을 말풍선으로 보여 줘. |
| [#063](https://showheyohtaki.github.io/motion-prompt/#063) | **스테퍼** | Stepper (+/−) | +/− 버튼으로 숫자를 하나씩 바꾼다 | 수량 입력란을 스테퍼로 만들어 줘. +와 −로 1씩 바꾸고, 누를 때마다 숫자가 0.25초 동안 살짝 튀게 해 줘. |
| [#064](https://showheyohtaki.github.io/motion-prompt/#064) | **페이지네이션** | Pagination | 번호 버튼으로 페이지를 넘긴다 | 검색 결과 아래에 페이지네이션을 달아 줘. 현재 페이지는 파란 원으로 하고, 누르면 0.2초에 원을 옮기면서 목록을 바꿔 줘. |

## 내비게이션·상태 표시

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#065](https://showheyohtaki.github.io/motion-prompt/#065) | **햄버거 메뉴** | Hamburger menu | 세 줄 아이콘을 누르면 메뉴가 열린다 | 모바일 헤더 오른쪽에 햄버거 메뉴를 놓아 줘. 누르면 세 줄을 0.3초에 ×로 바꾸고 메뉴를 위에서 내려 줘. |
| [#066](https://showheyohtaki.github.io/motion-prompt/#066) | **브레드크럼** | Breadcrumbs | 사이트 안의 현재 위치를 계층으로 보여 준다 | 글 페이지 위에 브레드크럼을 달아 줘. "홈 › 강좌 › 웹 디자인" 형태로, 현재 페이지는 굵게 하고 링크는 없이. |
| [#067](https://showheyohtaki.github.io/motion-prompt/#067) | **메가 메뉴** | Mega menu | 메인 메뉴에서 넓은 링크 패널이 펼쳐진다 | 헤더의 "제품"에 메가 메뉴를 달아 줘. 마우스를 올리면 0.25초에 전체 너비 패널을 내리고 링크 3열과 이미지를 배치해 줘. |
| [#068](https://showheyohtaki.github.io/motion-prompt/#068) | **스텝 인디케이터** | Step indicator | 절차의 몇 번째 단계인지 보여 준다 | 가입 폼 위에 스텝 인디케이터를 달아 줘. 입력·확인·결제·완료 4단계로 하고, 끝난 단계는 체크로 표시해 줘. |
| [#069](https://showheyohtaki.github.io/motion-prompt/#069) | **스켈레톤 UI** | Skeleton screen | 로딩 중에 회색 틀로 자리를 채운다 | 목록을 불러오는 동안 스켈레톤 UI를 보여 줘. 내용과 같은 모양의 회색 블록에 빛이 0.9초마다 왼쪽에서 오른쪽으로 지나가게. |
| [#070](https://showheyohtaki.github.io/motion-prompt/#070) | **스피너** | Spinner | 빙글빙글 돌며 대기 중임을 알린다 | 전송하는 동안 폼 위에 스피너를 띄워 줘. 1초에 한 바퀴 조금 넘게 돌리고, 끝나면 파란 체크로 바꿔 줘. |
| [#071](https://showheyohtaki.github.io/motion-prompt/#071) | **배지** | Badge | 작은 원 안의 숫자로 개수를 알린다 | 헤더의 종 아이콘에 배지를 달아 안 읽은 개수를 보여 줘. 개수가 늘 때마다 0.3초 동안 살짝 튀고, 열면 사라지게. |
| [#072](https://showheyohtaki.github.io/motion-prompt/#072) | **빈 상태** | Empty state | 아직 표시할 내용이 없을 때의 안내 화면 | 목록이 비면 빈 상태 화면을 보여 줘. 선 아이콘, "아직 아무것도 없습니다", 추가 버튼을 0.35초 동안 페이드인해 줘. |

번호를 누르면 갤러리의 움직이는 견본이 열립니다. 이름 하나의 초 단위 타이밍·이징 수치·참고 코드: `api/v1/ko/e/<id>.txt` ([#049](../../api/v1/ko/e/049.txt)).

[전체 팩](../README.md)
