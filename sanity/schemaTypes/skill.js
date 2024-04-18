export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [{
    name: 'title',
    title: 'Title',
    description:"Title of the skill",
    type:'string',
  },{
    name: 'progress',
    title: 'Progress',
    type: 'number',
    description:"Proficiency of the skill",
    validation: Rule => Rule.min(0).max(100),

  },{
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },{
    name: 'technology',
    title: 'Technology',
    type: 'boolean',
  },
  ],
}
