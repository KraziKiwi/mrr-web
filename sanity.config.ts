import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './src/schemas'
import { locate } from './src/sanity/presentation/locate'

export default defineConfig({
  name: 'default',
  title: 'FFP Content Manager',

  projectId: '7ykhc4pr',
  dataset: 'production',

  basePath: '/admin',

  plugins: [
    presentationTool({
      title: 'Command Center',
      previewUrl: {
        origin: 'https://staging--future-proof-projects.netlify.app',
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
              .title('Portfolio Gallery')
              .child(S.documentList().title('Projects').filter('_type == "project"')),
            S.listItem()
              .title('Team Members')
              .child(S.documentList().title('Team Members').filter('_type == "teamMember"')),
            S.listItem()
              .title('Trust & Credentials')
              .child(S.documentList().title('Credentials').filter('_type == "credential"')),
            S.listItem()
              .title('Service Areas')
              .child(S.documentList().title('Locations').filter('_type == "location"')),
            S.listItem()
              .title('Common Questions (FAQ)')
              .child(S.documentList().title('FAQs').filter('_type == "faq"')),
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

