# NX Generators

**ALWAYS use NX generators** instead of manually creating files. Generator defaults in `nx.json`: `style=scss`, `changeDetection=OnPush`, `prefix=fafnur`.

```bash
# Component (path = full path including component folder and name)
yarn nx g @nx/angular:component libs/about/page/src/lib/my-feature/my-component/my-component

# Library
yarn nx g @nx/angular:library libs/ui/icons --name=ui/icons

# Service
yarn nx g @nx/angular:service libs/core/src/lib/my-service/my-service

# Pipe / Directive
yarn nx g @nx/angular:pipe libs/core/src/lib/my-pipe/my-pipe
yarn nx g @nx/angular:directive libs/ui/buttons/src/lib/my-dir/my-dir

# Dry run (preview)
yarn nx g @nx/angular:component path/to/component --dry-run
```
