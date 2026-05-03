#!/usr/bin/env node
"use strict";

const DEFAULT_MAX_TIP = 10000;
const USAGE = "Usage: /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k";

function parseAmount(rawAmount, options = {}) {
  const maxTip = Number.isInteger(options.maxTip) ? options.maxTip : DEFAULT_MAX_TIP;

  if (typeof rawAmount !== "string") {
    throw new Error(USAGE);
  }

  const normalized = rawAmount.trim();
  const match = normalized.match(/^([1-9][0-9]*)([kK])?$/);
  if (!match) {
    throw new Error(USAGE);
  }

  const base = Number.parseInt(match[1], 10);
  const amount = match[2] ? base * 1000 : base;

  if (!Number.isSafeInteger(amount) || amount < 1 || amount > maxTip) {
    throw new Error(USAGE);
  }

  return amount;
}

function payloadForAmount(amount) {
  if (!Number.isInteger(amount) || amount < 1) {
    throw new Error(USAGE);
  }

  return Array.from({ length: amount }, () => "tip").join(" ");
}

function payloadForRawAmount(rawAmount, options = {}) {
  return payloadForAmount(parseAmount(rawAmount, options));
}

if (require.main === module) {
  try {
    process.stdout.write(payloadForRawAmount(process.argv[2]));
    process.stdout.write("\n");
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  }
}

module.exports = {
  DEFAULT_MAX_TIP,
  USAGE,
  parseAmount,
  payloadForAmount,
  payloadForRawAmount,
};
