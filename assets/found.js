/* Motion Prompt — "Examples" page (found.html). Plain JS, no dependencies.
   Reads examples/found.json (post IDs, URLs and our own one-line introductions only).
   Every post is shown as an X embed: widgets.js is loaded once, and each post is drawn with
   twttr.widgets.createTweet() as its card comes near the viewport. */
(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var WIDGETS = 'https://platform.twitter.com/widgets.js';

  var I18N = {
    ja: {
      title: '見つけた事例｜Motion Prompt',
      skip: '事例の一覧へ移動', navLabel: 'サイト内', navGallery: '見本', navFound: '事例', langLabel: '言語',
      themeToDark: 'ダークモードに切り替える', themeToLight: 'ライトモードに切り替える',
      eyebrow: '見つけた事例',
      h1: '名前と見本で、共通言語を作っている人たち',
      lead: 'AIに頼むための名前を、動く見本や早見表と一緒にまとめて公開している人たちのポストです。分野も言語も見た目もそれぞれ違います。投稿者が自分で作った見本のあるポストを選んでいて、ポストの内容と権利は各投稿者にあります。',
      leadNote: 'ここで紹介していることは、投稿者がこのサイトを支持しているという意味ではありません。紹介文はこのサイトが書いています。',
      noteH: '埋め込みについて',
      noteP: 'このページは、各ポストをX（旧Twitter）の埋め込みで表示しています。開くとXのサーバーから読み込まれ、XのCookieが使われます。Xはその閲覧を記録し、広告に使うことがあります。読み込むときは、パーソナライズに使わないよう求める設定（dnt）を付けています。',
      notePrivacy: 'Xのプライバシーポリシー', noteCookies: 'XのCookieについて',
      listH: '事例の一覧', loadListFailed: '一覧を読み込めませんでした。',
      count: '{n}件',
      postLang: { ja: '日本語', en: '英語' },
      postLangLabel: 'ポストの言語: {l}',
      viewOnX: 'Xで見る',
      viewOnXLabel: '{a} のポストをXで見る',
      loading: '読み込み中です…',
      gone: 'このポストは表示できません（削除された可能性があります）。',
      failed: 'Xから読み込めませんでした。広告ブロックなどで止められている可能性があります。「Xで見る」から開けます。',
      shown: '{a} のポストを表示しました',
      moreH: '事例を教えてください',
      recH: 'ポストを推薦する（自薦も歓迎）',
      recP: '名前に見本を付けて公開しているポストを見つけたら、GitHub の Issue で知らせてください。自分のポストでもかまいません。載せるのは埋め込みとリンクだけで、画像や動画をこのサイトに写すことはしません。',
      recLink: '事例を推薦する（GitHub Issue）',
      rmH: '外してほしいとき',
      rmP: 'ご自分のポストを外したい、紹介文が正しくない、という場合は Issue のフォームから依頼してください。確認できたら、すみやかに外します。',
      rmLink: '削除・訂正を依頼する（GitHub Issue）',
      author: '作者', authorName: '大滝昇平',
      whyLink: 'なぜ作ったか', makeLink: '自分の分野・自分の言語で作る', addLink: 'あなたの分野の名前を足す', listLink: '名前の一覧（GitHub）',
      removeP1: '掲載の削除・訂正は', removeLink: 'GitHub の Issue のフォーム', removeP2: 'から依頼できます。確認後、すみやかに対応します。',
      thanks1: '動く見本を並べて、プロンプトをコピーして使う形は', thanks2: 'から着想を得ました。ありがとうございます。',
    },
    en: {
      title: 'Examples — Motion Prompt',
      skip: 'Skip to the examples', navLabel: 'Site', navGallery: 'Gallery', navFound: 'Examples', langLabel: 'Language',
      themeToDark: 'Switch to dark mode', themeToLight: 'Switch to light mode',
      eyebrow: 'Examples we found',
      h1: 'People building a common language with names and samples',
      lead: 'Posts by people who publish names to use with AI, together with moving samples or cheat sheets. The fields, languages and looks all differ. We pick posts whose samples the author made, and each post and its rights belong to its author.',
      leadNote: 'Being listed here does not mean the author supports this site. The introductions are written by this site.',
      noteH: 'About the embeds',
      noteP: "This page shows each post as an X (formerly Twitter) embed. When you open it, the posts load from X's servers and X cookies are used. X may record the view and use it for ads. The embeds are loaded with the setting that asks X not to use them for personalization (dnt).",
      notePrivacy: 'X Privacy Policy', noteCookies: 'How X uses cookies',
      listH: 'Examples', loadListFailed: 'Could not load the list.',
      count: '{n} posts',
      postLang: { ja: 'Japanese', en: 'English' },
      postLangLabel: 'Post language: {l}',
      viewOnX: 'View on X',
      viewOnXLabel: 'View the post by {a} on X',
      loading: 'Loading…',
      gone: 'This post cannot be shown. It may have been deleted.',
      failed: 'Could not load from X. A content blocker may have stopped it. You can still open it with "View on X".',
      shown: 'Showing the post by {a}',
      moreH: 'Know a good one?',
      recH: 'Suggest a post (your own is welcome)',
      recP: 'If you find a post that shares names with samples, tell us in a GitHub issue. It can be your own. We only embed and link to it; images and videos are not copied to this site.',
      recLink: 'Suggest an example (GitHub issue)',
      rmH: 'To have a post removed',
      rmP: 'If you want your post taken off, or an introduction is wrong, use the issue form. We remove it as soon as the request is confirmed.',
      rmLink: 'Ask for a removal or correction (GitHub issue)',
      author: 'by', authorName: 'Shohei Ohtaki',
      whyLink: 'Why I made this', makeLink: 'Make one for your own field or language', addLink: 'Add the names of your field', listLink: 'Name lists (GitHub)',
      removeP1: 'To ask for a removal or a correction, use the ', removeLink: 'issue form on GitHub', removeP2: '. We act on it once the request is confirmed.',
      thanks1: 'The format — moving samples with a prompt you can copy — was inspired by', thanks2: '. Thank you.',
    },
    ko: {
      title: '발견한 사례 — Motion Prompt',
      skip: '사례 목록으로 이동', navLabel: '사이트 내', navGallery: '견본', navFound: '사례', langLabel: '언어',
      themeToDark: '다크 모드로 전환', themeToLight: '라이트 모드로 전환',
      eyebrow: '발견한 사례',
      h1: '이름과 견본으로 공통 언어를 만드는 사람들',
      lead: 'AI에게 요청할 때 쓰는 이름을 움직이는 견본이나 치트 시트와 함께 정리해 공개한 사람들의 게시물입니다. 분야도 언어도 모습도 저마다 다릅니다. 게시자가 직접 만든 견본이 있는 게시물을 골랐으며, 게시물의 내용과 권리는 각 게시자에게 있습니다.',
      leadNote: '여기서 소개한다고 해서 게시자가 이 사이트를 지지한다는 뜻은 아닙니다. 소개 글은 이 사이트가 작성했습니다.',
      noteH: '임베드에 대해',
      noteP: '이 페이지는 각 게시물을 X(구 Twitter) 임베드로 보여 줍니다. 페이지를 열면 X 서버에서 불러오며 X의 쿠키가 사용됩니다. X는 이 열람을 기록해 광고에 쓸 수 있습니다. 불러올 때는 개인화에 쓰지 않도록 요청하는 설정(dnt)을 붙입니다.',
      notePrivacy: 'X 개인정보처리방침', noteCookies: 'X의 쿠키 사용',
      listH: '사례 목록', loadListFailed: '목록을 불러오지 못했습니다.',
      count: '{n}건',
      postLang: { ja: '일본어', en: '영어', ko: '한국어' },
      postLangLabel: '게시물 언어: {l}',
      viewOnX: 'X에서 보기',
      viewOnXLabel: '{a}의 게시물을 X에서 보기',
      loading: '불러오는 중…',
      gone: '이 게시물은 표시할 수 없습니다(삭제되었을 수 있습니다).',
      failed: 'X에서 불러오지 못했습니다. 광고 차단기 등에 막혔을 수 있습니다. 「X에서 보기」로 열 수 있습니다.',
      shown: '{a}의 게시물을 표시했습니다',
      moreH: '사례를 알려 주세요',
      recH: '게시물 추천하기 (자기 추천도 환영)',
      recP: '이름에 견본을 붙여 공개한 게시물을 발견하면 GitHub Issue로 알려 주세요. 본인 게시물이어도 괜찮습니다. 싣는 것은 임베드와 링크뿐이며, 이미지나 영상을 이 사이트로 옮기지 않습니다.',
      recLink: '사례 추천하기 (GitHub Issue)',
      rmH: '내려 주길 원할 때',
      rmP: '본인 게시물을 내리고 싶거나 소개 글이 정확하지 않다면 Issue 양식으로 요청해 주세요. 확인되면 신속히 내립니다.',
      rmLink: '삭제·정정 요청하기 (GitHub Issue)',
      author: '만든 사람', authorName: '大滝昇平 (Shohei Ohtaki)',
      whyLink: '만든 이유', makeLink: '내 분야·내 언어로 만들기', addLink: '내 분야의 이름 추가하기', listLink: '이름 목록 (GitHub)',
      removeP1: '게재 삭제·정정은 ', removeLink: 'GitHub Issue 양식', removeP2: '으로 요청할 수 있습니다. 확인 후 신속히 처리합니다.',
      thanks1: '움직이는 견본을 나열하고 프롬프트를 복사해 쓰는 형식은', thanks2: '에서 착안했습니다. 감사합니다.',
    },
  };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode etc. */ } },
    del: function (k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } },
  };
  var darkQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
  var state = { lang: root.lang === 'en' || root.lang === 'ko' ? root.lang : 'ja', data: null };
  var cards = [];   // { item, el, box, status, shown, token }

  function t(key, vars) {
    var s = I18N[state.lang][key];
    if (s == null) s = I18N.ja[key];
    if (s == null) s = key;
    if (vars && typeof s === 'string') Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(c); });
    return n;
  }
  function say(msg) { var l = $('#live'); l.textContent = ''; setTimeout(function () { l.textContent = msg; }, 30); }
  function isDark() {
    var a = root.getAttribute('data-theme');
    return a ? a === 'dark' : darkQuery.matches;
  }

  // ------------------------------------------------------------------ X widgets
  var widgetsPromise = null;
  function loadWidgets() {
    if (widgetsPromise) return widgetsPromise;
    widgetsPromise = new Promise(function (resolve, reject) {
      if (window.twttr && window.twttr.widgets && window.twttr.widgets.createTweet) { resolve(window.twttr); return; }
      var done = false;
      var timer = setTimeout(function () { if (!done) { done = true; reject(new Error('timeout')); } }, 15000);
      var s = document.createElement('script');
      s.id = 'x-wjs'; s.async = true; s.charset = 'utf-8'; s.src = WIDGETS;
      s.onload = function () {
        if (!window.twttr || !window.twttr.ready) { done = true; clearTimeout(timer); reject(new Error('no twttr')); return; }
        window.twttr.ready(function (tw) { if (done) return; done = true; clearTimeout(timer); resolve(tw); });
      };
      s.onerror = function () { if (done) return; done = true; clearTimeout(timer); reject(new Error('blocked')); };
      document.head.appendChild(s);
    });
    widgetsPromise.catch(function () { widgetsPromise = null; var old = $('#x-wjs'); if (old) old.remove(); });
    return widgetsPromise;
  }

  function setStatus(c, key) {
    c.statusKey = key || null;
    c.status.textContent = key ? t(key) : '';
    c.status.hidden = !key;
    c.status.classList.toggle('is-warn', key === 'gone' || key === 'failed');
  }
  function show(c) {
    var token = (c.token || 0) + 1;
    c.token = token;
    c.shown = true;
    c.box.innerHTML = '';
    c.box.hidden = false;
    c.el.classList.add('is-open');
    setStatus(c, 'loading');
    return loadWidgets().then(function (tw) {
      if (c.token !== token) return;
      return tw.widgets.createTweet(c.item.id, c.box, {
        lang: state.lang, theme: isDark() ? 'dark' : 'light', dnt: true, conversation: 'none', align: 'center',
      }).then(function (el) {
        if (c.token !== token) return;
        if (el) { setStatus(c, null); c.el.classList.remove('is-gone'); }
        else { c.box.innerHTML = ''; c.box.hidden = true; setStatus(c, 'gone'); c.el.classList.add('is-gone'); }
      });
    }).catch(function () {
      if (c.token !== token) return;
      c.box.innerHTML = ''; c.box.hidden = true;
      setStatus(c, 'failed');
    });
  }
  function redrawShown() { cards.forEach(function (c) { if (c.shown) show(c); }); }

  // ------------------------------------------------------------------ list
  function authorHandle(item) { return item.author.replace(/^@/, ''); }
  function build() {
    var wrap = $('#themes');
    wrap.innerHTML = '';
    cards = [];
    var data = state.data;
    data.themes.forEach(function (th) {
      var items = data.items.filter(function (it) { return it.theme === th.slug; });
      if (!items.length) return;
      var hid = 'th-' + th.slug;
      var list = h('ul', { class: 'ex-list' });
      items.forEach(function (it) {
        var handle = authorHandle(it);
        var link = h('a', { class: 'ex-x', href: it.url, rel: 'noopener', 'aria-label': t('viewOnXLabel', { a: it.author }), text: t('viewOnX') });
        var status = h('p', { class: 'ex-status', role: 'status' });
        status.hidden = true;
        var box = h('div', { class: 'ex-embed' });
        box.hidden = true;
        var langName = (t('postLang') || {})[it.lang] || it.lang;
        var li = h('li', { class: 'ex' }, [
          h('div', { class: 'ex-head' }, [
            h('a', { class: 'ex-author', href: 'https://x.com/' + encodeURIComponent(handle), rel: 'noopener', text: it.author }),
            h('span', { class: 'ex-lang', title: t('postLangLabel', { l: langName }), 'aria-label': t('postLangLabel', { l: langName }), text: String(it.lang).toUpperCase() }),
          ]),
          h('p', { class: 'ex-intro', text: (it.intro && (it.intro[state.lang] || it.intro.en || it.intro.ja)) || '' }),
          h('div', { class: 'ex-act' }, [link]),
          status,
          box,
        ]);
        var c = { item: it, el: li, box: box, status: status, shown: false, token: 0 };
        cards.push(c);
        list.appendChild(li);
      });
      wrap.appendChild(h('section', { class: 'ex-theme', 'aria-labelledby': hid }, [
        h('div', { class: 'pack-h' }, [
          h('h3', { id: hid, text: th[state.lang] || th.en }),
          h('span', { text: t('count', { n: items.length }) }),
        ]),
        list,
      ]));
    });
    observe();
  }

  // Draw each embed as its card comes near the viewport, so the page opens fast but reads as fully embedded.
  var io = null;
  function observe() {
    if (io) io.disconnect();
    if (!('IntersectionObserver' in window)) { cards.forEach(show); return; }
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var c = cards.filter(function (x) { return x.el === e.target; })[0];
        if (c && !c.shown) show(c);
      });
    }, { rootMargin: '1200px 0px' });
    cards.forEach(function (c) { io.observe(c.el); });
  }

  // ------------------------------------------------------------------ text, language, theme
  function applyText() {
    var lang = state.lang;
    root.lang = lang;
    document.title = t('title');
    $$('[data-t]').forEach(function (n) { n.textContent = t(n.getAttribute('data-t')); });
    $$('[data-t-attr]').forEach(function (n) {
      n.getAttribute('data-t-attr').split(',').forEach(function (pair) {
        var kv = pair.split(':'); n.setAttribute(kv[0].trim(), t(kv[1].trim()));
      });
    });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false'); });
    $$('[data-href-' + lang + ']').forEach(function (a) { a.href = a.getAttribute('data-href-' + lang); });
    applyTheme();
  }
  function applyTheme() { $('#theme').setAttribute('aria-label', t(isDark() ? 'themeToLight' : 'themeToDark')); }
  $$('[data-lang]').forEach(function (b) {
    b.addEventListener('click', function () {
      var lang = b.getAttribute('data-lang');
      if (lang === state.lang) return;
      state.lang = lang;
      store.set('mp-lang', lang);
      applyText();
      if (state.data) build();  // rebuild redraws the embeds in the new language
    });
  });
  $('#theme').addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store.set('mp-theme', next);
    applyTheme();
    redrawShown();
  });
  if (darkQuery.addEventListener) darkQuery.addEventListener('change', function () {
    applyTheme();
    if (!root.getAttribute('data-theme')) redrawShown();
  });

  // ------------------------------------------------------------------ start
  applyText();
  fetch('examples/found.json', { cache: 'no-cache' })
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(function (data) {
      state.data = data;
      build();
    })
    .catch(function () { $('#f-empty').hidden = false; });
})();
