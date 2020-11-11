export default {
  widgets: [
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
                  buildHookId: '5fabf699187ac8013d3beb80',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a25oobyq',
                  apiId: '7da977dd-5590-4141-92c2-f0abb4d1c697'
                },
                {
                  buildHookId: '5fabf699b6c1780089915c9d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-nc6phnc5',
                  apiId: '9796fcc9-087a-4cf0-940b-4534769927df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klincode/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-nc6phnc5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
