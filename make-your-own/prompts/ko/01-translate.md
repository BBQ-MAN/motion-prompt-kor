# 프롬프트 1: 다른 언어판 만들기

이 저장소를 읽을 수 있는 코딩 AI(Claude Code, Codex, Cursor 등)에 붙여 넣어 사용합니다. `<LANGUAGE>`와 `<lang>`을 바꿔 주세요(예: `스페인어`와 `es`).

```
이 저장소의 make-your-own/README.ko.md 와 make-your-own/examples/camera-moves/en/index.html 을 읽어 주세요.

목표: 카메라 워크 영상 3개의 <LANGUAGE> 버전을 만든다.

1. make-your-own/examples/camera-moves/en/index.html 을
   make-your-own/examples/camera-moves/<lang>/index.html 로 복사한다.
2. 화면에 나오는 글자만 번역한다.
   - PAGES(페이지 제목)와 ITEMS(이름 + 한 줄 설명)
   - drawPage() 안의 제목 텍스트
   - 카드 안의 작은 라벨("Quiet", "LOUD", "Audio", "Video"로 검색)
   "REC", "24mm", "1.7m/s" 같은 계기판(HUD) 표시는 번역하지 않는다.
3. 레이아웃, 색, 타이밍, CELLS 의 그리기 코드는 바꾸지 않는다.
4. 이름 24개는 <LANGUAGE> 영상 업계에서 실제로 쓰는 용어로 한다. 하나씩 확인한다
   (웹 검색이 가능하면 찾아본다). "Dolly zoom"이나 "J-cut"처럼 영어를 그대로 쓰는 언어도 많다.
   그런 경우에는 영어 그대로 둔다. 직역해서 새 말을 만들지 않는다. 확신이 없는 이름은 목록으로 보고한다.
5. <LANGUAGE>에 다른 폰트가 필요하면(한중일 문자, 아랍 문자, 태국 문자 등) 폰트 상수
   (JP / EN / MONO)를 이 컴퓨터에 설치된 폰트로 바꾸고, 무엇을 썼는지 알려 준다.
   오른쪽에서 왼쪽으로 쓰는 언어라면 레이아웃을 바꾸기 전에 먼저 물어본다.
6. 글자가 들어가는지 확인한다. 이름은 카드 폭(539px) 안에서 한 줄로 들어가야 한다. 너무 길면
   먼저 더 짧은 통용 용어가 있는지 찾는다. 글자 크기를 줄이는 것은 마지막 수단이고, 그때는
   24개 모두 같은 크기로 맞춘다.
7. 렌더링해서 확인한다.
     cd make-your-own && node render.mjs examples/camera-moves/<lang>/index.html --all --sheet
   out/ 에 생긴 콘택트 시트 3장을 직접 열어 본다. 잘린 글자, 겹침, 표시되지 않는 글자(빈 네모)가 없어야 한다.
8. 보고: 이름 24개 대응표(영어 -> <LANGUAGE>), 확신이 없던 이름, 사용한 폰트.
```

모션 그래픽 예시(`make-your-own/examples/motion-graphics/ja/index.html`, 일본어)도 같은 방법으로 번역할 수 있습니다. 화면에 나오는 글자는 `SERIES`, `PAGES`, `ITEMS`와 카드 안의 예시 단어 몇 개입니다.

번역한 이름을 `packs/`의 목록에도 추가하려면 [CONTRIBUTING.md](../../../CONTRIBUTING.md)(영어)를 읽어 주세요.
