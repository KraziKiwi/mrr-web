import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/schemas'
import { locate } from './src/sanity/presentation/locate'

export default defineConfig({
  name: 'default',
  title: 'MRR Content Manager',

  projectId: 'do2yl846',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    presentationTool({
      title: 'Command Center',
      previewUrl: {
        origin: 'http://localhost:3000',
        draftMode: {
          enable: '/api/draft',
        },
      },
      resolve: {
        locations: locate,
      },
    }),
    deskTool({
      title: 'Database (Structure)',
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('Home Page Hero')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('Mission Statement')
              .child(S.document().schemaType('mission').documentId('mission')),
            S.listItem()
              .title('Services (What We Do)')
              .child(S.documentList().title('Services').filter('_type == "service"')),
            S.listItem()
              .title('Team Members')
              .child(S.documentList().title('Team Members').filter('_type == "teamMember"')),
            S.listItem()
              .title('Trust & Credentials')
              .child(S.documentList().title('Credentials').filter('_type == "credential"')),
            S.listItem()
              .title('Service Areas')
              .child(S.documentList().title('Locations').filter('_type == "location"')),
            S.divider(),
            S.listItem()
              .title('Brand Settings')
              .child(S.document().schemaType('settings').documentId('settings')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})