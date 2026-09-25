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
  },
  blogs: {
    endpoint: '/api/blogs',
    label: 'Blogs',
    fields: [
      { name: 'title', type: 'text' },
      { name: 'slug', type: 'text' },
      { name: 'content', type: 'textarea' },
      { name: 'coverImage', type: 'text' },
      { name: 'tags', type: 'tags' },
      { name: 'published', type: 'checkbox' }
    ]
  },
  experience: {
    endpoint: '/api/experience',
    label: 'Experience',
    fields: [
      { name: 'company', type: 'text' },
      { name: 'role', type: 'text' },
      { name: 'startDate', type: 'date' },
      { name: 'endDate', type: 'date' },
      { name: 'description', type: 'textarea' },
      { name: 'current', type: 'checkbox' }
    ]
  },
  testimonials: {
    endpoint: '/api/testimonials',
    label: 'Testimonials',
    fields: [
      { name: 'name', type: 'text' },
      { name: 'position', type: 'text' },
      { name: 'company', type: 'text' },
      { name: 'message', type: 'textarea' },
      { name: 'avatar', type: 'text' }
    ]
  },
  services: {
    endpoint: '/api/services',
    label: 'Services',
    fields: [
      { name: 'title', type: 'text' },
      { name: 'description', type: 'textarea' },
      { name: 'icon', type: 'text' },
      { name: 'price', type: 'text' }
    ]
  }
};