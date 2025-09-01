const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 기본 라우트
app.get('/', (req, res) => {
  res.json({
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
    timestamp: new Date().toISOString()
  });
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`🎯 서버가 포트 ${PORT}에서 실행 중입니다!`);
  console.log(`📱 http://localhost:${PORT}`);
});
