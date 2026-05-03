const fs = require('fs');
const path = require('path');

const targets = [
  {
    example: path.join(__dirname, '../backend/.env.example'),
    env: path.join(__dirname, '../backend/.env'),
  },
  {
    example: path.join(__dirname, '../frontend/.env.example'),
    env: path.join(__dirname, '../frontend/.env'),
  },
];

targets.forEach(({ example, env }) => {
  if (!fs.existsSync(example)) {
    console.log(`Missing: ${example}`);
    return;
  }

  if (fs.existsSync(env)) {
    console.log(`Skipped (already exists): ${env}`);
    return;
  }

  fs.copyFileSync(example, env);
  console.log(`Created: ${env}`);
});