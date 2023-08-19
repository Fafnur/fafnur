import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

function generateEnvs(project: string): void {
  const file = `apps/${project}/.env`;
  const path = join(process.cwd(), file);
  if (!existsSync(path)) {
    const fileContent = readFileSync(`${path}.example`, 'utf8');
    writeFileSync(file, fileContent);
  }
}

function generateDynamicRoutes(project: string): void {
  const file = `apps/${project}/dynamic-routes.txt`;
  const path = join(process.cwd(), file);
  if (!existsSync(path)) {
    writeFileSync(file, '/\n');
  }
}

// function generateBlogRoutes(project: string): void {
//   const file = `apps/${project}/src/app/routes/blog.routes.ts`;
//
//   const path = join(process.cwd(), file);
//   if (!existsSync(path)) {
//     writeFileSync(file, `import { Route } from '@angular/router';\n\nexport const blogRoutes: Route[] = [];`);
//   }
// }

const project = 'fafn.ru';

generateEnvs(project);
generateDynamicRoutes(project);
// generateBlogRoutes(project);

