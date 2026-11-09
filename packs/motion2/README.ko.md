<!-- tools/build.mjs가 meta.json에서 만든 파일입니다. 고칠 때는 이 파일이 아니라 meta.json을 편집하세요. -->

# 모션 그래픽 연출 2탄

24 개의 이름 · #121–144 · 팩 `motion2` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

이름을 찾았다면 그대로 AI에게 말하세요. 「몇 초 동안」「얼마나 세게」「무엇이 움직이는지」를 덧붙이면 생각한 결과에 더 가까워집니다.

![모션 그래픽 연출 2탄 — 견본](../../assets/preview-motion2.gif)

## 모션 테크닉

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#121](https://bbq-man.github.io/motion-prompt-kor/#121) | **예비 동작** | Anticipation | 움직이기 전에 반대로 살짝 힘을 모은다 | 버튼이 오른쪽으로 튀어 나가기 전에 예비 동작을 넣어 줘. 0.3초 동안 반대쪽으로 살짝 당겼다가 찌그러진 뒤 출발하게. |
| [#122](https://bbq-man.github.io/motion-prompt-kor/#122) | **팔로 스루** | Follow-through | 몸이 멈춘 뒤에도 일부가 늦게 흔들린다 | 캐릭터가 멈춘 뒤 머리카락과 깃발에 팔로 스루를 넣어 줘. 0.5초 정도 늦게 흔들리다가 멈추게. |
| [#123](https://bbq-man.github.io/motion-prompt-kor/#123) | **바운스** | Bounce | 떨어져서 점점 낮게 튀다가 멈춘다 | 공을 위에서 떨어뜨려 바운스시켜 줘. 3번 튀고, 갈수록 낮게. |
| [#124](https://bbq-man.github.io/motion-prompt-kor/#124) | **위글** | Wiggle | 잘게, 불규칙하게 계속 흔들린다 | 알림 벨에 약한 위글을 넣어 줘. 각도는 최대 10° 정도로, 울리는 동안 계속. |
| [#125](https://bbq-man.github.io/motion-prompt-kor/#125) | **펄스** | Pulse | 심장 박동처럼 크기가 두근거린다 | 하트 아이콘에 펄스를 넣어 줘. 1.2초마다 10% 정도 커졌다가 돌아오게. |
| [#126](https://bbq-man.github.io/motion-prompt-kor/#126) | **모션 패스** | Motion path | 정해 둔 곡선을 따라 움직인다 | 종이비행기를 이 곡선 모션 패스를 따라 4초 동안 날려 줘. 방향은 진행 방향에 맞춰서. |
| [#127](https://bbq-man.github.io/motion-prompt-kor/#127) | **핑퐁 루프** | Ping-pong loop | 갔다가 돌아오기를 반복한다 | 로딩 점을 핑퐁 루프로 좌우 왕복시켜 줘. 편도 1초로. |
| [#128](https://bbq-man.github.io/motion-prompt-kor/#128) | **스톱모션 스타일** | Stop-motion style | 프레임을 덜어 내 뚝뚝 끊기게 움직인다 | 이 움직임을 스톱모션 스타일로 바꿔 줘. 초당 8프레임으로, 프레임마다 위치를 살짝 흔들어서. |

## 텍스트·도형 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#129](https://bbq-man.github.io/motion-prompt-kor/#129) | **텍스트 스크램블** | Text scramble | 글자가 무작위로 바뀌다가 제자리를 찾는다 | 제목을 텍스트 스크램블로 띄워 줘. 무작위 문자가 1초 정도 바뀌다가 왼쪽부터 차례로 확정되게. |
| [#130](https://bbq-man.github.io/motion-prompt-kor/#130) | **웨이브 텍스트** | Wave text | 글자가 파도처럼 차례로 오르내린다 | 로고 글자를 웨이브 텍스트로 움직여 줘. 한 글자씩 어긋나게, 위아래로 20px 정도. |
| [#131](https://bbq-man.github.io/motion-prompt-kor/#131) | **텍스트 온 패스** | Text on a path | 글자가 선을 따라 흘러간다 | 캐치프레이즈를 텍스트 온 패스로 물결선을 따라 왼쪽에서 오른쪽으로 흘려 줘. 한 바퀴 5초로. |
| [#132](https://bbq-man.github.io/motion-prompt-kor/#132) | **가변 폰트 애니메이션** | Variable font animation | 글자 굵기가 부드럽게 바뀐다 | 제목에 가변 폰트 애니메이션을 넣어 줘. Thin에서 Black(굵기 100에서 900)까지 1초 동안. |
| [#133](https://bbq-man.github.io/motion-prompt-kor/#133) | **텍스트 마스크** | Text mask | 글자 모양으로 뚫어 안쪽 그림을 보여 준다 | "OCEAN" 글자를 텍스트 마스크로 만들고 안에 파도 영상을 보여 줘. 마지막 1초에는 바깥도 보여 주고. |
| [#134](https://bbq-man.github.io/motion-prompt-kor/#134) | **리피터** | Repeater | 도형을 복제해 늘어놓고 돌린다 | 이 꽃잎 모양을 리피터로 12장 복제해 원형으로 배치하고, 4초에 한 바퀴 돌려 줘. |
| [#135](https://bbq-man.github.io/motion-prompt-kor/#135) | **칼레이도스코프** | Kaleidoscope | 만화경처럼 대칭으로 퍼져 나간다 | 로고 배경에 칼레이도스코프를 넣어 줘. 8분할 대칭으로, 천천히 돌리면서 퍼지게. |
| [#136](https://bbq-man.github.io/motion-prompt-kor/#136) | **라인 보일** | Line boil | 손그림 선이 잘게 일렁인다 | 손그림 일러스트에 라인 보일을 넣어 줘. 초당 10프레임으로, 선은 2–3px만 흔들리게. |

## 화면 전환·강조 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#137](https://bbq-man.github.io/motion-prompt-kor/#137) | **푸시 트랜지션** | Push transition | 다음 화면이 지금 화면을 밀어낸다 | 다음 슬라이드로는 푸시 트랜지션으로 넘겨 줘. 오른쪽에서 0.8초 동안 밀어내듯이. |
| [#138](https://bbq-man.github.io/motion-prompt-kor/#138) | **블라인드 트랜지션** | Blinds transition | 가는 띠 사이로 다음 화면이 열린다 | 장면 전환을 블라인드 트랜지션으로 해 줘. 가로 띠 7개가 1초 동안 열리게. |
| [#139](https://bbq-man.github.io/motion-prompt-kor/#139) | **큐브 트랜지션** | Cube transition | 정육면체가 돌듯이 면이 바뀐다 | 상품 사진 전환을 큐브 트랜지션으로 해 줘. 왼쪽으로 90° 돌려서 0.8초 동안. |
| [#140](https://bbq-man.github.io/motion-prompt-kor/#140) | **페이지 컬** | Page curl | 종이처럼 넘어가며 다음 장이 나온다 | 다음 챕터로는 페이지 컬로 넘겨 줘. 오른쪽 아래 모서리에서 1.2초 동안 넘기게. |
| [#141](https://bbq-man.github.io/motion-prompt-kor/#141) | **픽셀레이트** | Pixelate | 모자이크가 거칠어지며 전환된다 | 픽셀레이트로 전환해 줘. 0.6초 동안 모자이크가 거칠어지고, 가장 거칠 때 다음 화면으로. |
| [#142](https://bbq-man.github.io/motion-prompt-kor/#142) | **유리 깨짐** | Shatter | 유리처럼 깨지며 파편이 흩어진다 | 타이틀이 나오기 전에 이전 화면을 유리 깨짐으로 부숴 줘. 금이 간 뒤 파편이 1초 동안 떨어지게. |
| [#143](https://bbq-man.github.io/motion-prompt-kor/#143) | **분해도** | Exploded view | 부품이 흩어져 내부 구조를 보여 준다 | 제품 분해도를 보여 줘. 부품 4개가 1초 동안 흩어지고, 이름 라벨을 붙여서. |
| [#144](https://bbq-man.github.io/motion-prompt-kor/#144) | **스플릿 스크린** | Split screen | 화면을 나눠 동시에 보여 준다 | 스플릿 스크린으로 장면 3개를 동시에 보여 줘. 한 화면에서 2분할, 3분할로 0.5초씩. |

번호를 누르면 갤러리의 움직이는 견본이 열립니다. 이름 하나의 초 단위 타이밍·이징 수치·참고 코드: `api/v1/ko/e/<id>.txt` ([#121](../../api/v1/ko/e/121.txt)).

[전체 팩](../README.md)
