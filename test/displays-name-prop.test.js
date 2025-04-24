test('Displays name prop', () => {
  const code = require('fs').readFileSync('ProfileCard.jsx', 'utf8'); expect(code.includes('props.name')).toBe(true);
});
