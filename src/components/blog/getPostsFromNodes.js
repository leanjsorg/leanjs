// function getPostsFromNodes({ markdownNodes, sanityNodes }) {
//   const sanityPosts =
//     sanityNodes &&
//     sanityNodes.map &&
//     sanityNodes.map(
//       ({
//         slug,
//         category,
//         mainImage,
//         title,
//         excerpt,
//         _rawBody,
//         publishedAt,
//       }) => {
//         const sanityLocalFile =
//           mainImage && mainImage.asset && mainImage.asset.localFile

//         return {
//           path: `/${category}/${slug ? slug.current : ''}`,
//           imageUrl: sanityLocalFile && sanityLocalFile.publicURL,
//           fluidImage:
//             sanityLocalFile &&
//             sanityLocalFile.childImageSharp &&
//             sanityLocalFile.childImageSharp.fluid,
//           title,
//           excerpt,
//           _rawBody,
//           publishedAt,
//         }
//       }
//     )

//   const markdownPosts =
//     markdownNodes &&
//     markdownNodes.map &&
//     markdownNodes.map(node => ({
//       path: node.fields.slug,
//       imageUrl: node.frontmatter.imageUrl,
//       title: node.frontmatter.title,
//       excerpt: node.excerpt,
//     }))

//   return [...(sanityPosts || []), ...(markdownPosts || [])]
// }

// const contents = _rawBody.reduce((accContents, currentBlock) => {
//   if (currentBlock.style === 'h2') {
//     const text = currentBlock.children
//       .map(({ text }) => text)
//       .join(' ')
//       .trim()

//     accContents.push({ text, slug: slugify(text) })
//   }

//   return accContents
// }, [])

// module.exports = getPostsFromNodes
