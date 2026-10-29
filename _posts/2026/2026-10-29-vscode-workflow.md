---
date: 2026-10-29T13:25:53Z
title: Chevere Workflow VS Code extension
tags:
    - vscode
    - chevere
author: rodber
summary: Flowing workflows
image: /org/chevere/packages/vscode-workflow/vscode-workflow-social.png
---

I've created a [VS Code extension](https://marketplace.visualstudio.com/items?itemName=Chevere.vscode-workflow) for the [Chevere Workflow](https://chevere.org/packages/workflow) library. It provides language server support with DSL-like introspection. This extension aims to ease the development and maintenance of complex workflow procedures by providing auto-completion, linter and graph preview.

![Workflow VS Code Marketplace](/photos/2026/vscode-workflow-marketplace.webp)

## Why

This became a need as soon as I noticed friction points that made package usage unpredictable, time-consuming and therefore expensive to work with. Several times I found myself requiring a considerable effort to design a workflow, but once the design was completed the whole experience was better.

The get started part showed me a gravy train situation that needed a language tool to make it easy on the beginning of the design process, with a visualization of the underlying job sequence.

Two pain areas got my attention: (1) Type checking and (2) visibility of the process graph. Workflow must be able to communicate the IDE all the violations, provide predictions based on declared jobs and deliver an interactive graph visualization.

## Enter lint mode

To make this extension possible, the library needed a [lint mode](https://chevere.org/packages/workflow.html#lint-mode), which is a special runtime flag that instructs the library to collect all type hints, errors and inconsistencies under a structured [Workflow Lint schema](https://github.com/chevere/workflow/blob/3.1/schema/workflow-lint.schema.json), which is analyzed by the extension and reported back to the user.

This automatic feedback loop makes the package usage experience superior (there's some opinion on my bias) as this structured format can be introspected and analyzed by IDEs, agents, etc.

## Features

- **Diagnostics**: Validates job arguments against reflected PHP class signatures: missing required params, unknown args, type mismatches, `response()` chain errors, [Chevere Parameter attribute](https://github.com/chevere/parameter) constraint violations, `withRunIf()`/`withRunIfNot()` variable and response violations, and `withDepends()` missing dependency errors
- **Inlay hints**: Shows parameter types before argument values and return types after `response()` calls
- **Hover**: Displays full method signatures with parameter types, defaults, and required/optional status; hovering over `variable('name')` shows the variable's schema
- **Completion**: Suggests available parameter names (required first) with snippet expansion; offers `response()` references to other jobs in the workflow
- **Graph**: Interactive Mermaid visualization of the workflow dependency graph, with zoom/pan controls, export SVG/PNG and copy-to-clipboard Mermaid source code button
- **Stages**: Interactive lists stages (execution flow)

![Workflow VS Code Graph](/photos/2026/vscode-workflow-graph.avif)

![Workflow VS Code Autocomplete](/photos/2026/vscode-workflow-autocomplete.avif)

## Get it now

You can get the extension directly via [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=Chevere.vscode-workflow). Source code available at [chevere/vscode-workflow](https://github.com/chevere/vscode-workflow).
