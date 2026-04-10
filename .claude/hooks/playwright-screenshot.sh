#!/usr/bin/env bash
# PreToolUse hook: ensures all Playwright screenshots go under playwright/ directory
# Rewrites the filename parameter to prepend "playwright/" if not already present

INPUT=$(cat)

UPDATED=$(node -e "
const input = JSON.parse(process.argv[1]);
const toolInput = input.tool_input || {};
let fn = toolInput.filename || 'screenshot.png';

// Ensure filename starts with playwright/
if (!fn.startsWith('playwright/')) {
  fn = 'playwright/' + fn;
}

// Create parent directory
const path = require('path');
const fs = require('fs');
const dir = path.dirname(fn);
fs.mkdirSync(dir, { recursive: true });

// Output updated input
const updatedInput = { ...toolInput, filename: fn };
const result = {
  hookSpecificOutput: {
    hookEventName: 'PreToolUse',
    updatedInput: updatedInput
  }
};
console.log(JSON.stringify(result));
" "$INPUT")

echo "$UPDATED"
