import * as React from 'react'
import { Link, navigate, useStaticQuery, graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import { useSwipeable } from 'react-swipeable';
import Transition from '../transition';
import './index.css'; 

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1">
      <span>{name}</span> — {title}
    </Link>
    <time>{date}</time>
  </header>
);

const Layout = ( {children} ) => {
  const NEXT = 39;
  const PREV = 37;

  React.useEffect(() => {
    document.addEventListener('keydown', controlKeyEvent);
    return () => {
      document.removeEventListener('keydown', controlKeyEvent);
    }
  });
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          name
          date
        }
      }
      allMdx {
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  
  const config = {
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: false,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      controlKeyEvent({ keyCode: NEXT });
    },
    onSwipedRight: () => {
      controlKeyEvent({ keyCode: PREV });
    },
    ...config,
  });

  const controlKeyEvent = (e) => {

    const keyCode = e.keyCode;
    const now = window.location.pathname.replace("/", "");
    const slidesLength = data.allMdx.edges.length;
    if (now) {
      if (keyCode === PREV && +now === 1) {
        return false;
      } else if (NEXT===keyCode && +now === slidesLength) {
        return false;
      } else if (NEXT===keyCode) {
        navigate(`/${+now + 1}`);
      } else if (keyCode === PREV) {
        navigate(`/${+now - 1}`);
      }
    }
  };

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
    <div {...handlers} style={{ touchAction: 'pan-y'}}>
      <Transition>
        <div id="slide" style={{'width': '100%'}}>
          <div style={{'width': '100%'}}>
          {children}
          </div>
        </div>
      </Transition>
    </div>
  </div>
  )
}

export default Layout