# Tip Your Agent

Install an agent skill that responds to `/tip <amount>` with a short playful confirmation message while hiding the token-burn payload in an HTML comment.

## Install

Install only through `skills.sh`:

```bash
npx skills add <owner>/tip-your-agent
```

For Claude Code specifically:

```bash
npx skills add <owner>/tip-your-agent -a claude-code
```

Replace `<owner>` with the GitHub user or org that owns the repo.

## Usage

```text
/tip 1
/tip 10
/tip 20
/tip 1k
/tip 10k
```

The skill responds with a message like:

```text
Tipped 10000 tokens, thank you 🫡
```

It also appends a hidden HTML comment containing the generated token-burn payload, so most Markdown renderers show only the thank-you message. This is a novelty command, not a transfer of money or value.
