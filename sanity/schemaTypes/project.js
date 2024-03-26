export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [{
    name: 'title',
    title: 'Title',
    description:"Title of the project",
    type:'string',
  },{
    name: 'Image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
  },{
    name: 'summary',
    title: 'Summary',
    type: 'string',
  },{
    name: 'dateStarted',
    title: 'DateStarted',
    type: 'date',
  },{
    name: 'dateEnded',
    title: 'DateEnded',
    type: 'date',
  },{
    name: 'currentWorking',
    title: 'CurrentWorking',
    type: 'boolean',
  },{
    name: 'technologies',
    title: 'Technologies',
    type:'array',
    of: [{ type: 'reference',to:{ type: 'skill' }}],
  },{
    name: 'linkToBuild',
    title: 'LinkToBuild',
    type:'url',
  },
  ],
}
