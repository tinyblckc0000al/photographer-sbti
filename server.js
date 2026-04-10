require('dotenv').config();
const express = require('express');
const { photographerTypes, questions } = require('./config');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
  res.send(getHTML());
});

app.get('/api/calculate', (req, res) => {
  const { answers } = req.query;
  if (!answers) return res.json({ error: 'No answers' });
  
  const scores = {};
  photographerTypes.forEach(t => scores[t.id] = 0);
  
  const answerArr = answers.split(',').map(Number);
  answerArr.forEach((answer, idx) => {
    if (idx < questions.length && questions[idx].options[answer]) {
      const scoreMap = questions[idx].options[answer].score;
      Object.keys(scoreMap).forEach(type => {
        scores[type] = (scores[type] || 0) + scoreMap[type];
      });
    }
  });
  
  let maxScore = 0;
  let resultType = photographerTypes[0];
  Object.keys(scores).forEach(type => {
    if (scores[type] > maxScore) {
      maxScore = scores[type];
      resultType = photographerTypes.find(t => t.id === type);
    }
  });
  
  res.json({ result: resultType });
});

function getHTML() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>摄影师人格测试</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, sans-serif; background: #1a1a2e; color: #eee; min-height: 100vh; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    h1 { text-align: center; margin-bottom: 30px; font-size: 28px; }
    .card { background: #16213e; border-radius: 16px; padding: 24px; margin-bottom: 20px; }
    .progress { text-align: center; color: #888; margin-bottom: 20px; }
    .question { font-size: 18px; margin-bottom: 20px; line-height: 1.6; }
    .options { display: flex; flex-direction: column; gap: 12px; }
    .option { background: #0f3460; padding: 16px; border-radius: 12px; cursor: pointer; transition: all 0.2s; border: 2px solid transparent; }
    .option:hover { border-color: #e94560; }
    .option.selected { background: #e94560; }
    .btn { width: 100%; padding: 16px; background: #e94560; color: white; border: none; border-radius: 12px; font-size: 16px; cursor: pointer; }
    .btn:disabled { background: #555; cursor: not-allowed; }
    .result-card { text-align: center; padding: 30px; }
    .result-title { font-size: 28px; color: #e94560; margin-bottom: 16px; }
    .result-desc { font-size: 16px; line-height: 1.8; color: #aaa; margin-bottom: 20px; }
    .result-camera { background: #0f3460; padding: 20px; border-radius: 12px; margin: 20px 0; }
    .camera-name { font-size: 20px; color: #e94560; margin-bottom: 8px; }
    .camera-roast { font-size: 14px; color: #888; font-style: italic; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📷 摄影师人格测试</h1>
    <div id="quiz">
      <div class="card">
        <div class="progress">问题 <span id="current">1</span> / <span id="total">${questions.length}</span></div>
        <div class="question" id="question"></div>
        <div class="options" id="options"></div>
      </div>
      <button class="btn" id="nextBtn" onclick="nextQuestion()" disabled>下一题</button>
    </div>
    <div id="result" style="display:none"></div>
  </div>
  <script>
    const total = ${questions.length};
    let current = 0;
    let answers = [];
    
    function renderQuestion() {
      document.getElementById('current').textContent = current + 1;
      const q = questions[current];
      document.getElementById('question').textContent = q.question;
      const opts = document.getElementById('options');
      opts.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const div = document.createElement('div');
        div.className = 'option' + (answers[current] === idx ? ' selected' : '');
        div.textContent = opt.text;
        div.onclick = () => selectOption(idx);
        opts.appendChild(div);
      });
      document.getElementById('nextBtn').disabled = answers[current] === undefined;
      document.getElementById('nextBtn').textContent = current < total - 1 ? '下一题' : '查看结果';
    }
    
    function selectOption(idx) {
      answers[current] = idx;
      renderQuestion();
    }
    
    function nextQuestion() {
      if (current < total - 1) { current++; renderQuestion(); }
      else { showResult(); }
    }
    
    async function showResult() {
      const ans = answers.join(',');
      const res = await fetch('/api/calculate?answers=' + ans);
      const data = await res.json();
      document.getElementById('quiz').style.display = 'none';
      const resultDiv = document.getElementById('result');
      resultDiv.style.display = 'block';
      resultDiv.innerHTML = '<div class="card result-card">' +
        '<div class="result-title">📷 ' + data.result.name + '</div>' +
        '<div class="result-desc">' + data.result.description + '</div>' +
        '<div class="result-camera">' +
          '<div class="camera-name">📷 Ricoh GR III</div>' +
          '<div class="camera-roast">"理财产品实锤了，停产比发售快，但你真的买得到吗"</div>' +
        '</div>' +
        '<button class="btn" onclick="location.reload()">再测一次</button>' +
      '</div>';
    }
    
    renderQuestion();
  </script>
</body>
</html>`;
}

app.listen(PORT, () => {
  console.log("🚀 Server: http://localhost:" + PORT);
});