import * as React from 'react'
import { Helmet } from "react-helmet";
import { Link, useStaticQuery, graphql } from 'gatsby'


const UpperHeader = ({ name, title, date }) => (
    <header>
      <Link to="/1">
        <span>{name}</span> — {title}
      </Link>
      <time>{date}</time>
    </header>
  );

const Header = () => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
          date
        }
      }
    }
  `);
    return (
        <>
            <Helmet title={`${data.site.siteMetadata.title} — ${data.site.siteMetadata.name}`}/>
            <UpperHeader
            name={data.site.siteMetadata.name}
            title={data.site.siteMetadata.title}
            date={data.site.siteMetadata.date}
            />  
        </>
    )
}

export default Header