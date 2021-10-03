// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'carousel',
  title: 'Carousel',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    }
  ]
}