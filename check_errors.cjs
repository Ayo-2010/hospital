const http = require('http');
const paths = ['/', '/about', '/doctors', '/services', '/contact', '/emergency', '/faq', '/departments', '/careers', '/health-information', '/surgery'];

Promise.all(paths.map(p => new Promise((resolve) => {
  http.get('http://localhost:3002' + p, (res) => {
    let d = '';
    res.on('data', c => d += c);
    res.on('end', () => {
      if (res.statusCode !== 200) {
        const msgMatch = d.match(/<p class="mb-4 px-2 text-\[#[0-9A-Fa-f]+\] text-md"[^>]*>([^<]+)<\/p>/);
        const stackMatch = d.match(/at (.+?) \(.+\/([^/\s]+):/);
        console.log(p + ': ' + res.statusCode + ' - ' + (msgMatch ? msgMatch[1] : 'unknown') + (stackMatch ? ' at ' + stackMatch[1] + ' in ' + stackMatch[2] : ''));
      } else {
        console.log(p + ': ' + res.statusCode);
      }
      resolve();
    });
  }).on('error', e => { console.log(p + ': ERROR ' + e.message); resolve(); });
}))).then(() => console.log('Done'));
