import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const ArtistsPage = ({data: {allWpArtist: {edges}}}) => {
  return (
    <Layout pageTitle="Artists of van der Zalm Agency">
      {edges.map((item) => {
        const artist = item.node.artistMeta;
        const slug = item.node.slug;
        return <Link to={`/artists/${slug}`}>
            <p key={item.node.id}>{artist.firstName} {artist.lastName}</p>
          </Link>
        
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
   allWpArtist {
    edges {
      node {
        id
        slug
        artistMeta {
          firstName
          lastName
          artistName
        }
      }
    }
  }
}

`

export default ArtistsPage