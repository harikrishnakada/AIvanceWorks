import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {codeInput} from '@sanity/code-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'AIvanceWorks Blog',

  projectId: 'c3tmu94a',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
