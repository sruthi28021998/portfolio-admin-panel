export const contentTypes = {
  about: {
    endpoint: '/api/about',
    singleton: true,
    label: 'About',
    fields: [
      { name: 'title', type: 'text' },
      { name: 'bio', type: 'textarea' },
      { name: 'profileImage', type: 'text' },
      { name: 'resumeUrl', type: 'text' }
    ]
  },
  skills: {
    endpoint: '/api/skills',
    label: 'Skills',
    fields: [
      { name: 'name', type: 'text' },
      { name: 'category', type: 'text' },
      { name: 'level', type: 'number' },
      { name: 'icon', type: 'text' }
    ]
  },
  projects: {
    endpoint: '/api/projects',
    label: 'Projects',
    fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
      { name: 'techStack', type: 'tags' },
      { name: 'image', type: 'text' },
      { name: 'liveUrl', type: 'text' },
      { name: 'repoUrl', type: 'text' },
      { name: 'featured', type: 'checkbox' }
    ]
  }
};