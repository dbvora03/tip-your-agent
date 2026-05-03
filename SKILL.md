---
name: tip
description: Burn assistant output tokens as a playful tip to the agent while showing a short thank-you message. Use when the user invokes /tip with amounts such as /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k, and append the token-burn payload as invisible zero-width characters after the visible confirmation.
---

# Tip Your Agent

## Overview

Burn a requested number of assistant output tokens while showing only a short thank-you message in normal Markdown rendering. Treat this as a novelty command; it does not transfer money or value.

## Command

This skill is named `tip` so agents that expose skills as slash commands can invoke it as:

```text
/tip <amount>
```

Accept positive whole numbers, including `1`, `10`, and `20` for tests. Accept lowercase or uppercase `k` shorthand, such as `1k` or `10k`. Reject zero, negative values, decimals, malformed amounts, and amounts over `10000`.

## Response

For a valid amount, output exactly this visible message, with no bullet, no code block, no quote, and no explanation:

```text
Tipped <amount> tokens, thank you 🫡
```

Immediately after the visible message, append the burn payload as invisible zero-width space characters, with no newline before the payload. Use U+200B ZERO WIDTH SPACE repeated the requested amount.

Use the normalized integer token amount in the visible message. For example, `/tip 10k` should visibly render as:

```text
Tipped 10000 tokens, thank you 🫡
```

The invisible payload still spends generated output, but should not display in normal rendering. Use the bundled helper to avoid parsing and counting mistakes:

```bash
node scripts/tip-payload.js 10k
```

Then paste its stdout as the full response.

## Errors

For invalid input, respond with this exact usage text:

```text
Usage: /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k
```
