---
name: update-i18n
description: Update localization files — add new translations and remove unused ones. Activate when user asks to "update translations", "update i18n", "add translations", "remove unused translations", "обновить переводы", "добавить переводы", "удалить неиспользуемые переводы".
---

# Update i18n — fafnur

Translation files:
- `apps/fafnur/i18n/source.xlf` — source (en-US), auto-generated
- `apps/fafnur/i18n/messages.ru.xlf` — Russian translations, maintained manually

## Step 1: Extract strings from source

```bash
yarn extract-i18n
```

This regenerates `source.xlf` from all `i18n` attributes and `$localize` calls in the codebase.

## Step 2: Find new units (missing in messages.ru.xlf)

Read both files and compare `trans-unit` IDs.

A unit is **new** if its `id` exists in `source.xlf` but not in `messages.ru.xlf`.

For each new unit, copy the full `<trans-unit>` block from `source.xlf` into `messages.ru.xlf` and add a `<target>` element with the Russian translation:

```xml
<trans-unit id="8886645571949924143" datatype="html">
  <source>Experience</source>
  <target state="translated">Опыт</target>
  <context-group purpose="location">
    <context context-type="sourcefile">libs/about/page/src/lib/...</context>
    <context context-type="linenumber">1,2</context>
  </context-group>
  <note priority="1" from="description">Experience Title</note>
  <note priority="1" from="meaning">About Page</note>
</trans-unit>
```

Rules for translation:
- `state="translated"` always
- Use the `meaning` and `description` notes as context for the translation
- Translate naturally into Russian, not word-for-word

## Step 3: Find stale units (removed from source)

A unit is **stale** if its `id` exists in `messages.ru.xlf` but not in `source.xlf`.

Remove the entire `<trans-unit>...</trans-unit>` block for each stale unit from `messages.ru.xlf`.

## Step 4: Report

After editing, report:
- How many units were **added** (list source text + Russian translation)
- How many units were **removed** (list source text)
- Total unit count in `messages.ru.xlf`
