import { categories } from "../constants";
import { gql } from "graphql-tag";

const fetchNews = async (
  categories?: Category | String,
  keywords?: String,
  isDynamic?: boolean
) => {
  const GET_QUERY = qql`
  query MyQuery () {
    myQuery(access_key: "ba7e320de3d5d111ec8ad9af81965d51") {
      data {
        author
        category
        country
        description
        image
        language
        published_at
        source
        title
        url
      }
      pagination {
        count
        limit
        offset
        total
      }
    }
  }
 `;
};

export default fetchNews;
