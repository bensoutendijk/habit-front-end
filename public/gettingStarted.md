# Getting Started
**Welcome to Habit!** Here are the steps to get started making your own documentation hub:

### 1. Create an Account

Create your account by signing up <a href="/signup">here</a>.

All accounts with Habit are free forever.

### 2. Start Building Your Documentation

Use JSON to define your Table of Contents.

Habit will interpret the following Schema:

```javascript
{
  content: [
    {
      sectionName: 'Getting Started',
      path: '/getting-started',
      content: 'gettingStarted.md',
      icon: 'file',
      access: 'default',
    },
    {
      sectionName: 'Format',
      path: '/format',
      content: [
        {
          sectionName: 'JSON',
          path: '/format/json',
          content: 'json.md',
          icon: '',
          access: 'default',
        },
      ],
      icon: 'file',
      access: 'default',
    },
    {
      sectionName: 'Sidebar Nav',
      path: '/sidebar',
      content: [
        {
          sectionName: 'Nesting',
          path: '/sidebar/nesting',
          content: 'nesting.md',
          icon: '',
          access: 'default',
        },
      ],
      icon: 'file',
      access: 'default',
    },
  ],
}
```