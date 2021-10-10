// eslint-disable-next-line import/no-anonymous-default-export
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Precio',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Imagenes',
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
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          {title: 'Muebles', value: 'muebles'},
          {title: 'Bazar', value: 'bazar'}
        ],
      }
    },
  ],
}