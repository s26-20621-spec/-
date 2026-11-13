<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>단합대회 할 일 모으기</title>
  <style>
    :root {
      --primary: #2563eb;
      --primary-hover: #1d4ed8;
      --bg: #f8fafc;
      --card: #ffffff;
      --text: #0f172a;
      --muted: #64748b;
      --border: #e2e8f0;
      --success-bg: #ecfdf5;
      --success-text: #065f46;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", sans-serif;
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding: 24px 16px 60px;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
    }

    header {
      text-align: center;
      margin-bottom: 24px;
    }

    header h1 {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 6px;
    }

    header p {
      font-size: 0.92rem;
      color: var(--muted);
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
    }

    label {
      font-size: 0.9rem;
      font-weight: 600;
    }

    .anon-check {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.88rem;
      font-weight: 500;
      color: var(--muted);
      cursor: pointer;
      user-select: none;
    }

    .anon-check input {
      width: 16px;
      height: 16px;
      accent-color: var(--primary);
      cursor: pointer;
    }

    input[type="text"],
    textarea {
      width: 100%;
      padding: 11px 13px;
      border: 1px solid var(--border);
      border-radius: 10px;
      font-size: 0.95rem;
      font-family: inherit;
      color: var(--text);
      background: #fff;
      transition: border-color 0.15s;
    }

    input[type="text"]:disabled {
      background: #f1f5f9;
      color: var(--muted);
    }

    input[type="text"]:focus,
    textarea:focus {
      outline: none;
      border-color: var(--primary);
    }

    textarea {
      min-height: 110px;
      resize: vertical;
    }

    button.submit-btn {
      width: 100%;
      padding: 13px;
      background: var(--primary);
      color: #fff;
      border: none;
      border-radius: 10px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.15s;
    }

    button.submit-btn:hover:not(:disabled) {
      background: var(--primary-hover);
    }

    button.submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .toast {
      display: none;
      margin-top: 12px;
      padding: 10px 14px;
      border-radius: 8px;
      background: var(--success-bg);
      color: var(--success-text);
      font-size: 0.9rem;
      font-weight: 500;
      text-align: center;
    }

    .list-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .list-title-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .list-header h2 {
      font-size: 1.05rem;
      font-weight: 700;
    }

    .count-badge {
      font-size: 0.82rem;
      background: #e2e8f0;
      color: #334155;
      padding: 2px 9px;
      border-radius: 999px;
      font-weight: 600;
    }

    .refresh-btn {
      background: #fff;
      border: 1px solid var(--border);
      color: var(--muted);
      font-size: 0.82rem;
      padding: 5px 10px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.15s;
    }

    .refresh-btn:hover {
      border-color: var(--primary);
      color: var(--primary);
    }

    .idea-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .idea-item {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 14px 16px;
    }

    .idea-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 6px;
      font-size: 0.82rem;
    }

    .idea-author {
      font-weight: 700;
      color: var(--primary);
    }

    .idea-time {
      color: var(--muted);
    }

    .idea-content {
      font-size: 0.95rem;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .empty-state {
      text-align: center;
      color: var(--muted);
      font-size: 0.9rem;
      padding: 28px 16px;
      background: var(--card);
      border: 1px dashed var(--border);
      border-radius: 12px;
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <h1>단합대회 할 일 모으기</h1>
      <p>하고 싶은 활동, 게임, 맛집 등 자유롭게 적어주세요!</p>
    </header>

    <div class="card">
      <form id="ideaForm">
        <div class="form-group">
          <div class="label-row">
            <label for="nickname">별명</label>
            <label class="anon-check">
              <input type="checkbox" id="isAnonymous" />
              익명으로 작성
            </label>
          </div>
          <input
            type="text"
            id="nickname"
            maxlength="20"
            placeholder="별명을 입력하세요 (비워두면 익명)"
          />
        </div>

        <div class="form-group">
          <div class="label-row">
            <label for="content">하고 싶은 일 / 아이디어</label>
          </div>
          <textarea
            id="content"
            required
            placeholder="예: 보드게임 대회, 바베큐 파티, 팀별 퀴즈쇼 등"
          ></textarea>
        </div>

        <button type="submit" class="submit-btn" id="submitBtn">등록하기</button>
        <div class="toast" id="toast">시트에 등록되었습니다!</div>
      </form>
    </div>

    <section>
      <div class="list-header">
        <div class="list-title-wrap">
          <h2>모인 아이디어</h2>
          <span class="count-badge" id="ideaCount">0개</span>
        </div>
        <button type="button" class="refresh-btn" id="refreshBtn">새로고침</button>
      </div>
      <div id="ideaList" class="idea-list">
        <div class="empty-state">불러오는 중...</div>
      </div>
    </section>
  </div>

  <script>
    const form = document.getElementById('ideaForm');
    const isAnonymousCheckbox = document.getElementById('isAnonymous');
    const nicknameInput = document.getElementById('nickname');
    const contentInput = document.getElementById('content');
    const submitBtn = document.getElementById('submitBtn');
    const toast = document.getElementById('toast');
    const ideaList = document.getElementById('ideaList');
    const ideaCount = document.getElementById('ideaCount');
    const refreshBtn = document.getElementById('refreshBtn');

    isAnonymousCheckbox.addEventListener('change', () => {
      if (isAnonymousCheckbox.checked) {
        nicknameInput.dataset.prev = nicknameInput.value;
        nicknameInput.value = '익명';
        nicknameInput.disabled = true;
      } else {
        nicknameInput.disabled = false;
        nicknameInput.value = nicknameInput.dataset.prev || '';
        nicknameInput.focus();
      }
    });

    function escapeHtml(str) {
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function renderIdeas(ideas) {
      ideaCount.textContent = `${ideas.length}개`;

      if (!ideas || ideas.length === 0) {
        ideaList.innerHTML = '<div class="empty-state">아직 등록된 아이디어가 없습니다. 첫 번째 의견을 남겨보세요!</div>';
        return;
      }

      ideaList.innerHTML = ideas.map(item => `
        <div class="idea-item">
          <div class="idea-meta">
            <span class="idea-author">${escapeHtml(item.nickname)}</span>
            <span class="idea-time">${escapeHtml(item.timestamp)}</span>
          </div>
          <div class="idea-content">${escapeHtml(item.content)}</div>
        </div>
      `).join('');
    }

    function loadIdeas() {
      refreshBtn.disabled = true;
      refreshBtn.textContent = '불러오는 중...';

      google.script.run
        .withSuccessHandler(ideas => {
          renderIdeas(ideas);
          refreshBtn.disabled = false;
          refreshBtn.textContent = '새로고침';
        })
        .withFailureHandler(err => {
          ideaList.innerHTML = `<div class="empty-state">목록을 불러오지 못했습니다: ${escapeHtml(err.message)}</div>`;
          refreshBtn.disabled = false;
          refreshBtn.textContent = '새로고침';
        })
        .getIdeas();
    }

    refreshBtn.addEventListener('click', loadIdeas);

    form.addEventListener('submit', e => {
      e.preventDefault();

      const content = contentInput.value.trim();
      if (!content) {
        alert('할 일 내용을 입력해 주세요.');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = '저장 중...';

      const payload = {
        isAnonymous: isAnonymousCheckbox.checked,
        nickname: nicknameInput.value,
        content: content
      };

      google.script.run
        .withSuccessHandler(updatedIdeas => {
          contentInput.value = '';
          submitBtn.disabled = false;
          submitBtn.textContent = '등록하기';

          toast.style.display = 'block';
          setTimeout(() => {
            toast.style.display = 'none';
          }, 2500);

          renderIdeas(updatedIdeas);
        })
        .withFailureHandler(err => {
          alert('저장 중 오류가 발생했습니다: ' + err.message);
          submitBtn.disabled = false;
          submitBtn.textContent = '등록하기';
        })
        .submitIdea(payload);
    });

    document.addEventListener('DOMContentLoaded', loadIdeas);
  </script>
</body>
</html>
