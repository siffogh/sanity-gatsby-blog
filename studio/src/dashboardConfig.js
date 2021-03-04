export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6040fc74bcac773aac0a55dd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4ezo3qgo',
                  apiId: '16189d92-72bc-488a-9e69-0ced58f7f36a'
                },
                {
                  buildHookId: '6040fc744676fc3884314bcb',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-exhogtb4',
                  apiId: 'eb7435c5-756b-4152-a952-8ca2881f52f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siffogh/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-exhogtb4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
