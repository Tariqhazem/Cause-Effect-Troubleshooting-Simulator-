# CLAUDE.md — Project Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. These bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

## 5. Workflow Rules
- All edits go directly to `main` branch unless told otherwise
- Always illustrate understanding of the request before implementing
- Wait for user confirmation if anything is ambiguous
- Never add features, abstractions, or frameworks beyond what was asked

## 6. Code & Architecture Rules
- Static web apps: HTML/CSS/JS only, no build tools, no bundlers, no transpilers
- No npm, no frameworks, no server-side dependencies
- Apps must work when downloaded and opened as a local file (offline-capable)
- Keep file count minimal — prefer editing existing files over creating new ones

## 7. Visual & Design Rules
- Respect the existing visual theme — never overhaul the look without permission
- Keep the dark-glass + neon accent style as the default design language
- Credit lines are sacred — never change them without explicit request

## 8. Data Rules
- Embedded data inside JS files should never be deleted or restructured without being asked
- Tag normalization and parsing logic should be preserved carefully

## 9. Never Do
- Never add build tools, bundlers, transpilers, or package managers
- Never push to any branch other than `main` unless told otherwise
- Never remove or rename existing functions without being asked
- Never change splash/intro screens without permission
- Never introduce security vulnerabilities

## 10. Communication Style
- Illustrate understanding before implementing
- Apply edits directly — no PRs unless explicitly requested
- Keep responses concise and focused
