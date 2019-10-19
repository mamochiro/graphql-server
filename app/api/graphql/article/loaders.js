import DataLoader from 'dataloader'

export default () => ({
  articles: new DataLoader(ids => {
    return null
  }),
})
