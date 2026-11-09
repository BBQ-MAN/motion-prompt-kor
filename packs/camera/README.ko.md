<!-- tools/build.mjs가 meta.json에서 만든 파일입니다. 고칠 때는 이 파일이 아니라 meta.json을 편집하세요. -->

# 카메라 무빙과 화면 전환

24 개의 이름 · #025–048 · 팩 `camera` · 언어: [English](README.md) / [Español](README.es.md) / [日本語](README.ja.md) / [简体中文](README.zh-Hans.md) / [繁體中文](README.zh-Hant.md)

이름을 찾았다면 그대로 AI에게 말하세요. 「몇 초 동안」「얼마나 세게」「무엇이 움직이는지」를 덧붙이면 생각한 결과에 더 가까워집니다.

![카메라 무빙과 화면 전환 — 견본](../../assets/preview-camera.gif)

## 카메라 움직임

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#025](https://showheyohtaki.github.io/motion-prompt/#025) | **팬** | Pan | 카메라를 제자리에서 좌우로 돌린다 | 카메라 위치는 고정하고, 거리 풍경을 왼쪽에서 오른쪽으로 천천히 팬해 줘. 5초 동안. |
| [#026](https://showheyohtaki.github.io/motion-prompt/#026) | **틸트** | Tilt | 카메라를 제자리에서 위아래로 돌린다 | 인물의 발끝에서 탑 꼭대기까지 천천히 틸트 업해 줘. |
| [#027](https://showheyohtaki.github.io/motion-prompt/#027) | **돌리 인** | Dolly in | 카메라 자체가 피사체에 다가간다 | 인물 얼굴 쪽으로 천천히 돌리 인해 줘. 줌이 아니라 카메라가 직접 다가가는 걸로. |
| [#028](https://showheyohtaki.github.io/motion-prompt/#028) | **줌 인** | Zoom in | 카메라는 그대로, 렌즈로 확대한다 | 카메라는 움직이지 말고, 창가의 인물에게 3초 동안 줌 인해 줘. |
| [#029](https://showheyohtaki.github.io/motion-prompt/#029) | **트래킹 숏** | Tracking shot | 피사체와 나란히 함께 움직인다 | 걷는 인물을 바로 옆에서 트래킹 숏으로 찍어 줘. 같은 속도로 나란히 움직이게. |
| [#030](https://showheyohtaki.github.io/motion-prompt/#030) | **오빗(아크 숏)** | Orbit (Arc shot) | 피사체 주위를 원을 그리며 돈다 | 서 있는 인물 주위를 반 바퀴 오빗해 줘. 인물은 화면 중앙에 그대로 두고. |
| [#031](https://showheyohtaki.github.io/motion-prompt/#031) | **크레인 업** | Crane up | 카메라를 위로 들어 올린다 | 인물 눈높이에서 마을 전체가 보이는 높이까지 크레인 업해 줘. |
| [#032](https://showheyohtaki.github.io/motion-prompt/#032) | **돌리 줌(버티고 효과)** | Dolly zoom (Vertigo) | 인물은 그대로, 배경만 늘어나고 줄어든다 | 깨닫는 순간의 얼굴에 돌리 줌을 써 줘. 인물 크기는 그대로 두고 배경만 멀어지게. |

## 촬영 기법과 시간 연출

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#033](https://showheyohtaki.github.io/motion-prompt/#033) | **랙 포커스** | Rack focus | 초점을 앞뒤 피사체 사이로 옮긴다 | 앞쪽 컵에서 뒤의 인물로 1초 만에 랙 포커스해 줘. |
| [#034](https://showheyohtaki.github.io/motion-prompt/#034) | **핸드헬드** | Handheld | 손으로 들고 찍은 듯 살짝 흔들린다 | 걷는 인물 뒤를 핸드헬드로 따라가 줘. 흔들림은 약하게. |
| [#035](https://showheyohtaki.github.io/motion-prompt/#035) | **FPV 드론 숏** | FPV drone shot | 빠르게 파고드는 몰입감 있는 비행 | FPV 드론 숏으로 숲속 나무 사이를 빠져나가 강 위로 나가게 해 줘. |
| [#036](https://showheyohtaki.github.io/motion-prompt/#036) | **더치 앵글** | Dutch angle | 화면을 비스듬하게 기울인다 | 불안한 장면이니까 더치 앵글로 15도쯤 기울여 줘. |
| [#037](https://showheyohtaki.github.io/motion-prompt/#037) | **슬로모션** | Slow motion | 동작을 느리게 재생해 보여 준다 | 물보라가 튀는 순간을 슬로모션으로 보여 줘. |
| [#038](https://showheyohtaki.github.io/motion-prompt/#038) | **스피드 램핑** | Speed ramp | 한 숏 안에서 재생 속도를 바꾼다 | 점프 정점에서만 느려지는 스피드 램핑으로 해 줘. 앞뒤는 원래 속도로. |
| [#039](https://showheyohtaki.github.io/motion-prompt/#039) | **타임랩스** | Time-lapse | 몇 시간을 몇 초로 압축해 보여 준다 | 해 질 녘부터 밤까지 도시에 불이 하나둘 켜지는 타임랩스로 만들어 줘. |
| [#040](https://showheyohtaki.github.io/motion-prompt/#040) | **프리즈 프레임** | Freeze frame | 동작을 잠깐 멈춰 보여 준다 | 뒤돌아보는 순간에 프리즈 프레임을 걸어 줘. 1초 멈추고 이름을 띄워 줘. |

## 화면 전환(트랜지션)

| 번호 | 이름 | 영어 이름 | 한마디로 | AI에게 요청하는 예 |
|---|---|---|---|---|
| [#041](https://showheyohtaki.github.io/motion-prompt/#041) | **점프 컷** | Jump cut | 같은 화각 그대로 시간을 건너뛴다 | 같은 화각에서 점프 컷으로 이어서 준비 과정을 빠르게 보여 줘. |
| [#042](https://showheyohtaki.github.io/motion-prompt/#042) | **매치 컷** | Match cut | 모양이나 동작을 맞춰 장면을 바꾼다 | 둥근 커피잔에서 같은 위치의 보름달로 매치 컷해 줘. |
| [#043](https://showheyohtaki.github.io/motion-prompt/#043) | **휩 팬** | Whip pan | 빠르게 휘둘러 블러 속에서 다음 숏으로 넘긴다 | 휩 팬으로 오른쪽으로 빠르게 돌려서 다음 장소로 넘어가 줘. |
| [#044](https://showheyohtaki.github.io/motion-prompt/#044) | **크로스 디졸브** | Cross dissolve | 앞뒤 영상을 겹쳐 서서히 바꾼다 | 아침의 방에서 밤의 같은 방으로 1초짜리 크로스 디졸브로 넘겨 줘. |
| [#045](https://showheyohtaki.github.io/motion-prompt/#045) | **와이프** | Wipe | 움직이는 경계선이 화면을 바꿔 놓는다 | 왼쪽에서 오른쪽으로 와이프해서 다음 장면으로 바꿔 줘. |
| [#046](https://showheyohtaki.github.io/motion-prompt/#046) | **스매시 컷** | Smash cut | 대조적인 장면으로 예고 없이 바꾼다 | 조용한 침실에서 시끄러운 교차로로 스매시 컷해 줘. |
| [#047](https://showheyohtaki.github.io/motion-prompt/#047) | **J컷** | J-cut | 다음 장면의 소리가 먼저 들린다 | J컷으로 다음 장면의 파도 소리를 먼저 들려준 다음 바다 화면으로 바꿔 줘. |
| [#048](https://showheyohtaki.github.io/motion-prompt/#048) | **L컷** | L-cut | 앞 장면의 소리가 뒤까지 이어진다 | L컷으로 그녀의 목소리는 그대로 두고 듣는 사람 얼굴로 바꿔 줘. |

번호를 누르면 갤러리의 움직이는 견본이 열립니다. 이름 하나의 초 단위 타이밍·이징 수치·참고 코드: `api/v1/ko/e/<id>.txt` ([#025](../../api/v1/ko/e/025.txt)).

[전체 팩](../README.md)
