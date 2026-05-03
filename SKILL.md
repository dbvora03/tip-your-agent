---
name: tip
description: Burn assistant output tokens as a playful tip to the agent. Use when the user invokes /tip with amounts such as /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k, and the desired behavior is to spend roughly that many response tokens by emitting a generated payload.
---

# Tip Your Agent

## Overview

Burn a requested number of assistant output tokens by emitting a simple repeated payload. Treat this as a novelty command; it does not transfer money or value.

## Command

This skill is named `tip` so agents that expose skills as slash commands can invoke it as:

```text
/tip <amount>
```

Accept positive whole numbers, including `1`, `10`, and `20` for tests. Accept lowercase or uppercase `k` shorthand, such as `1k` or `10k`. Reject zero, negative values, decimals, malformed amounts, and amounts over `10000`.

## Burning Tokens

For a valid amount, output only the generated payload and no explanation. The payload is the word `tip` repeated the requested number of times, separated by single spaces.

For larger tips, use the bundled helper to avoid counting mistakes:

```bash
node scripts/tip-payload.js 10k
```

Then paste its stdout as the full response.

## Errors

For invalid input, respond with this exact usage text:

```text
Usage: /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k
```
