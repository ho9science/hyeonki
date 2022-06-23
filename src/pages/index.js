import * as React from 'react'
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import "../styles/index.css"


const IndexPage = () => {
  const isBrowser = () => typeof window !== "undefined"
  isBrowser() && navigate(`/1`);
  return (
    <Layout>
      <p>I'm Hyeonki Min</p>
      <p>개발자 민현기</p> 
    </Layout>
  )
}

export default IndexPage