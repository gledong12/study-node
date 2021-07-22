const path = require('paht');
const fs = require('fs').promises;

// 폴더 만들기
fs.mkdir('video').catch(console.error);

fs.mkdir('captured').catch(console.error);

fs.mkdir('duplicated').catch(console.error);