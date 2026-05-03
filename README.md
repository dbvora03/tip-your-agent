# Tip Your Agent

Install an agent skill that responds to `/tip <amount>` by burning roughly that many assistant output tokens.

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

The skill emits a payload made from repeated `tip` markers. It is a novelty token burn, not a transfer of money or value.
