<<<<<<< HEAD
// app.js - 간단한 Express 웹 서버
const express = require('express');
const app = express();
const port = 3000;

// JSON 파싱을 위한 미들웨어
app.use(express.json());
=======
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
>>>>>>> c6153e2adeb77ff71b91b402b682f574835dfa86

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
<<<<<<< HEAD
    message: '안녕하세요! Node.js 서버가 정상 작동중입니다.',
=======
    message: '🚀 ECR 배포 성공!',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  });
});

// 헬스체크 라우트
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
>>>>>>> c6153e2adeb77ff71b91b402b682f574835dfa86
    timestamp: new Date().toISOString()
  });
});

<<<<<<< HEAD
// 사용자 정보 가져오기
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: '김철수', age: 25 },
    { id: 2, name: '이영희', age: 30 },
    { id: 3, name: '박민수', age: 28 }
  ];
  res.json(users);
});

// 새 사용자 추가
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  const newUser = {
    id: Date.now(),
    name: name || '익명',
    age: age || 0
  };
  res.status(201).json({
    message: '사용자가 추가되었습니다.',
    user: newUser
  });
});

// 서버 시작
app.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행중입니다.`);
});

// 에러 처리
process.on('uncaughtException', (err) => {
  console.error('예상치 못한 에러:', err);
  process.exit(1);
});
=======
// 서버 시작
app.listen(PORT, () => {
  console.log(`🎯 서버가 포트 ${PORT}에서 실행 중입니다!`);
  console.log(`📱 http://localhost:${PORT}`);
});
>>>>>>> c6153e2adeb77ff71b91b402b682f574835dfa86
