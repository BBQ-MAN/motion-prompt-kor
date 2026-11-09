# 직접 만들기

[English](README.md) | [日本語](README.ja.md) | **한국어**

나만의 "이름 견본"을 만들기 위한 프롬프트, 렌더링 스크립트, 완성된 예시 2개입니다. 결과물은 카드 8장이 움직이는 루프 영상 3개(카드 1장은 이름 하나의 뜻을 보여 주는 작은 애니메이션)와 한 장짜리 치트시트 이미지입니다.

자기 분야로, 자기 언어로, 원하는 스타일로 만들 수 있습니다.

| | 카메라 워크 (`examples/camera-moves/`) | 모션 그래픽 (`examples/motion-graphics/`) |
|---|---|---|
| 스타일 | 밝은 회색에 파란색 하나, 픽토그램풍 | 짙은 남색 카드에 4색 |
| 언어 | 영어, 일본어, 한국어 | 일본어 |
| | ![카메라 워크 01–08](../assets/preview-camera.gif) | ![모션 그래픽 01–08](../assets/preview-motion.gif) |

함께 들어 있는 영상과 치트시트는 실제로 게시했던 것이라 표기도 게시 당시 그대로입니다(예: 10번의 일본어 이름은 手持ち風). [`packs/`](../packs/README.md)의 이름 목록에서는 手持ち로 바꿨습니다.

두 예시는 일부러 스타일을 다르게 만들었습니다. 한 가지 스타일을 배포하는 템플릿이 아닙니다. 둘의 공통점은 "이름이 주인공이고, 카드는 그 이름의 뜻을 보여 준다"는 규칙 하나뿐입니다.

## 들어 있는 것

```
prompts/en, prompts/ja, prompts/ko   코딩 AI / 이미지 생성 AI에 붙여 넣는 프롬프트
render.mjs                  HTML -> mp4 (Playwright + ffmpeg)
examples/camera-moves/
  en/  index.html  video-1of3.mp4  video-2of3.mp4  video-3of3.mp4  cheatsheet.png
  ja/  index.html  video-1of3.mp4  video-2of3.mp4  video-3of3.mp4  cheatsheet.png
  ko/  index.html  video-1of3.mp4  video-2of3.mp4  video-3of3.mp4
examples/motion-graphics/
  ja/  index.html  video-1of3.mp4  video-2of3.mp4  video-3of3.mp4  cheatsheet.png  cheatsheet-prompt.md
```

| | |
|---|---|
| 영상 | 1200x1350, 30fps, H.264 (yuv420p), 소리 없음, 9.4초, 끊김 없는 루프 |
| 치트시트 이미지 | `prompts/`의 프롬프트로 이미지 생성 AI가 만든 것. 한국어판 치트시트는 포함되어 있지 않습니다 |

영상 하나는 `<canvas>`에 그리는 HTML 파일 하나입니다. 빌드 과정도 프레임워크도 없어서, 코딩 AI(Claude Code, Codex, Cursor 등)가 전체를 읽고 그대로 고쳐 만들 수 있습니다.

## 프롬프트

이 저장소를 코딩 AI에게 읽히고, 다음 중 하나를 붙여 넣습니다.

| 하고 싶은 것 | 프롬프트 |
|---|---|
| 같은 영상을 다른 언어로 만들기 | [`prompts/ko/01-translate.md`](prompts/ko/01-translate.md) |
| 자기 분야의 이름을 원하는 스타일로 만들기 | [`prompts/ko/02-your-own-field.md`](prompts/ko/02-your-own-field.md) |
| 한 장짜리 치트시트 이미지 만들기 | [`prompts/ko/03-cheatsheet-image.md`](prompts/ko/03-cheatsheet-image.md) |

영어판은 [`prompts/en/`](prompts/en/), 일본어판은 [`prompts/ja/`](prompts/ja/)에 있습니다.

직접 고칠 때 볼 곳(`index.html` 안):

- `PAGES`와 `ITEMS`: 제목과 이름 24개
- `CELLS[0]` ~ `CELLS[23]`: 카드 1장마다 하나씩 있는 그리기 함수
- `C`: 색. `JP`, `EN`, `MONO` / `DISP`: 폰트

## 미리 보기

`examples/camera-moves/ko/index.html`을 브라우저에서 열면 루프가 재생됩니다(Chrome 등 Chromium 계열 브라우저 권장).

- `?page=2`: 2페이지 보기(페이지는 1~3)
- `?t=3.5`: 3.5초 시점의 정지 화면 보기

## mp4로 렌더링하기

[Node.js](https://nodejs.org/) 18 이상과 [ffmpeg](https://ffmpeg.org/)(PATH에 등록되어 있어야 함)가 필요합니다. `make-your-own/` 안에서 실행합니다.

```bash
cd make-your-own
npm install
npx playwright install chromium

node render.mjs examples/camera-moves/ko/index.html --page 1
# -> out/ko-page1.mp4

node render.mjs examples/motion-graphics/ja/index.html --all --sheet
# -> out/ja-page1.mp4, ja-page2.mp4, ja-page3.mp4 와 각각의 콘택트 시트 PNG
```

옵션: `--page <n>`, `--all`, `--pages <n>`, `--out <file>`, `--out-dir <dir>`, `--fps <n>`, `--crf <n>`, `--sheet`. 자세한 내용은 `node render.mjs --help`로 확인합니다.

`--sheet`는 1초마다 한 프레임씩 뽑아 이미지 한 장에 모아 저장합니다. 루프를 여러 번 보지 않아도 카드 8장의 실수를 한 번에 확인할 수 있는 가장 빠른 방법입니다.

### 렌더링 방식

HTML은 실시간 시계를 쓰지 않습니다. 모든 프레임을 프레임 번호로부터 그립니다.

| HTML 쪽 | 의미 |
|---|---|
| `window.N_FRAMES` | 한 페이지의 프레임 수 (282 = 9.4초 x 30fps) |
| `window.renderFrame(i)` | `i`번째 프레임을 `<canvas id="c">`에 그린다 |
| `window.prepareFrame(i)` | 선택 사항. 비동기여도 된다 |
| `window.READY` | 폰트를 다 불러오면 `true` |
| `?page=N`, `?render=1` | 그릴 페이지 / 미리 보기 루프 끄기 |

`render.mjs`는 프레임마다 `renderFrame(i)`를 호출하고, canvas를 PNG로 읽어 ffmpeg로 넘깁니다. 그래서 느린 컴퓨터에서도 프레임이 빠지지 않습니다. 이 약속을 지키는 HTML이라면 같은 스크립트로 렌더링할 수 있습니다.

## 폰트

예시 HTML은 네트워크에서 아무것도 불러오지 않습니다(웹 폰트, CDN, 이미지 모두 없음). macOS에 들어 있는 폰트(Helvetica Neue, Avenir Next, Hiragino Sans, SF Mono)를 쓰며, 폰트 파일은 이 저장소에 포함되어 있지 않습니다.

영어판과 일본어판 mp4는 macOS에서 렌더링했습니다. Windows나 Linux에서는 브라우저가 다른 폰트로 대체하므로 글자 모양이 조금 달라지고, 일본어판은 일본어 폰트(Noto Sans JP 등)가 설치되어 있어야 합니다. 한국어판 mp4는 Windows에서 Noto Sans KR로 렌더링했습니다. 폰트 스택은 Noto Sans KR이 없으면 Apple SD Gothic Neo, Malgun Gothic 순으로 대체되므로, 한국어판에는 Noto Sans KR 같은 한국어 폰트가 필요합니다. 다른 폰트를 쓰려면 `index.html` 위쪽에 있는 폰트 상수를 바꿉니다.

## 참고

- 일본어판 HTML은 원래 3페이지를 이어서 보여 주는 약 30초짜리 영상 하나로 작성한 것입니다. 여기서는 영어판처럼 영상 하나에 한 페이지씩 그리도록 바꿨습니다. 함께 들어 있는 일본어판 mp4는 원래 게시물에 쓴 것이라, 다시 렌더링하면 하드 컷 부분에서 1프레임 차이가 날 수 있습니다.
- 예시 HTML 안의 코드 주석은 대부분 일본어입니다.
- canvas 코드에 `roundRect`와 `letterSpacing`을 쓰기 때문에 최신 Chromium이 필요합니다. Playwright가 설치하는 버전이면 동작합니다.
- 두 예시의 카드는 갤러리에도 `camera`, `motion` 팩으로 들어 있습니다([`packs/`](../packs/README.md)). 직접 만든 것을 거기에 추가하려면 [CONTRIBUTING.md](../CONTRIBUTING.md)를 읽어 주세요(영어).

## 라이선스

[MIT](../LICENSE). 이 폴더의 코드, 영상, 이미지는 상업적 용도를 포함해 자신의 작업에 자유롭게 쓸 수 있습니다. 출처 링크를 남겨 주면 반갑지만 필수는 아닙니다.
