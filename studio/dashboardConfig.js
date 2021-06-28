export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '60d93fd62a97bc6102f5746b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xh6rrgx8',
                  apiId: 'be9d37a1-e146-4423-a3e8-8203be3ca3d9'
                },
                {
                  buildHookId: '60d93fd7abf1b05a41a0d94b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4v62nf1a',
                  apiId: '8b874a01-8f91-4896-83e7-6e49cd76756e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yell00wish/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4v62nf1a.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
