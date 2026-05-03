---
name: tip
description: Burn assistant output tokens as a playful tip to the agent while showing a short thank-you message. Use when the user invokes /tip with amounts such as /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k, and hide the token-burn payload in an HTML comment after the visible confirmation.
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

For a valid amount, output:

```text
Tipped <amount> tokens, thank you 🫡
```

Then immediately append an HTML comment containing the burn payload. The payload is the word `tip` repeated the requested number of times, separated by single spaces:

```text
<!-- tip tip tip ... -->
```

Use the normalized integer token amount in the visible message. For example, `/tip 10k` should visibly render as:

```text
Tipped 10000 tokens, thank you 🫡
```

The hidden HTML comment still spends output tokens, but should not display in most Markdown renderers. Use the bundled helper to avoid parsing and counting mistakes:

```bash
node scripts/tip-payload.js 10k
```

Then paste its stdout as the full response.

## Errors

For invalid input, respond with this exact usage text:

```text
Usage: /tip 1, /tip 10, /tip 20, /tip 1k, or /tip 10k
```
