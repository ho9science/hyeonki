import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {Helmet} from "react-helmet";
import './index.css';

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1">
      <span>{name}</span> — {title}
    </Link>
    <time>{date}</time>
  </header>
);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
        }
      }
    }
  `)
  return (
    <div>
    <Helmet
      title={`${data.site.siteMetadata.title} — ${data.site.siteMetadata.name}`}
    />
    <Header
      name={data.site.siteMetadata.name}
      title={data.site.siteMetadata.title}
      date={data.site.siteMetadata.date}
    />
    <main>
        {children}
      </main>
  </div>
  )
}

export default Layout