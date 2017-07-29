export const typeDefs = `

type Actor implements Node {
  createdAt: DateTime!
  experience: Difficulty!
  firstName: String!
  id: ID! @isUnique
  lastName: String!
  scenes: [Scene!]! @relation(name: "SceneOfActor")
  updatedAt: DateTime!
}

type File implements Node {
  contentType: String!
  createdAt: DateTime!
  id: ID! @isUnique
  name: String!
  secret: String! @isUnique
  size: Int!
  updatedAt: DateTime!
  url: String! @isUnique
}

type Scene implements Node {
  actors: [Actor!]! @relation(name: "SceneOfActor")
  createdAt: DateTime!
  difficulty: Difficulty!
  id: ID! @isUnique
  name: String!
  updatedAt: DateTime!
}

type User implements Node {
  createdAt: DateTime!
  id: ID! @isUnique
  updatedAt: DateTime!
}

# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
  channels: [Channel]    # "[]" means this is a list of channels
}
`;