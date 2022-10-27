
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: ["http://localhost:1337/graphql", 'src/graphql/wishlist.graphql'],
  documents: "src/**/*.graphql",
  generates: {
    "src/graphql/types/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
