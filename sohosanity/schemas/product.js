export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}]
    },
    {
      name: 'detail',
      title: 'Detalle',
      type: 'text'
    },
    {
      name: 'measures',
      title: 'Medidas',
      type: 'text'
    },
    {
      name: 'cares',
      title: 'Cuidados',
      type: 'text'
    },
    {
      name: 'colour',
      title: 'Color',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          { value: "blanco", title: "Blanco"},
          { value: "negro", title: "Negro"}
        ],
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}]
    },
  ],

  preview: {
    select: {
      title: 'title',
      category: 'category.name',
    },
    prepare(selection) {
      const {category} = selection
      return Object.assign({}, selection, {
        subtitle: category && `by ${category}`,
      })
    },
  },
}