export const typeDefs = `
  type Article {
    id: ID!
    name: string
  }

  type Query {
    articles: [Article]
  }
`
