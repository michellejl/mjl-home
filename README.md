# Technologies Used:

## General
- [**Gatsby**](https://www.gatsbyjs.org/)
  - [Gatsby Tutorials](https://www.gatsbyjs.org/tutorial/part-one/)
  - [Zero to Depoy: A Practical Guide to Static Sites with Gatsby](https://scotch.io/tutorials/zero-to-deploy-a-practical-guide-to-static-sites-with-gatsbyjs)
- **React**
- **CSS**
  - [variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)
  - [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [**Emotion**](https://emotion.sh/) (CSS-in-JS)
  - [Gatsby using emotion example](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-emotion)
  - [gatsby-plugin-emotion](https://www.gatsbyjs.org/packages/gatsby-plugin-emotion/)
- **Fonts**
  - [Google Fonts](https://fonts.google.com/)
  - [Font Awesome](https://fontawesome.com/)
    - [Font Awesome React Component](https://github.com/FortAwesome/react-fontawesome#build-a-library-to-reference-icons-throughout-your-app-more-conveniently)
- **Tools/Software**
  - [VS Code Insiders](https://code.visualstudio.com/insiders/)

## Gatsby Plugins in use:
- **gatsby-transformer-remark** : 
  - Transforms all markdown file nodes into MarkdownRemark nodes which can be queried for their content
- **gatsby-source-filesystem** : 
  - Allows all files to be queried with GraphQL and makes them visible as File Nodes. 
- **gatsby-plugin-react-helmet** (preinstalled with Gatsby Starter) : 

## Node APIs
- ```createFilePath``` --> this function comes from the ```gatsby-source-filesystem``` plugin. It enables us to create a file path from the File nodes in the project.
- ```createNodeField``` --> this function adds the slug as a field to each file node, that can then be queried with GraphQL.
- ```createPages``` --> 

## GraphQL Things
- Gatsby comes with GraphQL by default, and GraphQL comes with a handy tool called GraphiQL, which is visible at [http://localhost:8000/___graphql](http://localhost:8000/___graphql)
- This query will return all files inside of ```/src/``` (as specified in ```gatsby-config.js```)
  ```graphql
  {
    allFile {
      edges {
        node {
          id
        }
      }
    }
  }

  ``` 



# Dev Environment Versions:
- Node v10.4.0


# Files
- **src**
  - **blog-posts**
    - *.md --> markdown files of blog posts
  - **components**
    - header.js
  - **layouts**
    - index.css
    - index.js
  - **pages**
    - 404.js
    - index.js
    - page-2.js


<!-- # Inspiration:
  - Navbar: [Cole Waldrip on CodePen](https://codepen.io/colewaldrip/pen/KpRwgQ) -->