import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Navigation from './Navigation';
import tangoLogo from '../images/logo.png';
import { HeaderWrapper } from './styles/HeaderStyles';

const Header = () => {
  const {
    site,
    menu: {
      edges: [{ node: menu }],
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    menu: allWordpressWpApiMenusMenusItems{ 
   totalCount
   edges {
    node {
      id
      name
      items{
        title
		url
       }
     }
   }
 }
}
  `
  );

  return (
    <HeaderWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <Link to="/">
              <img src={tangoLogo} alt={site.siteMetadata.title} />
            </Link>
          </div>
          <div className="col-md-8 menu">
            <Navigation menu={menu} />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
