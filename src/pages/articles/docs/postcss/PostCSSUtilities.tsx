import React from 'react'

const PostCSSUtilities = () => {
  return (
    <div className="content">
        <h2>PostCSSUtilities</h2>
        <h3>Que sont les Utilities</h3>
        <p>
            Les "Utilities" sont des @mixins déjà post-configurés afin d'obtenir une portabilité maximale sur de nombreux navigateurs.
            Il est ainsi possible de rapidement pouvoir styliser un séparateur hr à travers les arguments que composent notre @util hr(#000, 20px, dotted, 3px);
            Voir la document à propos de l'Utilities hr <a href='https://ismamz.github.io/postcss-utilities/docs#horizontal-rule'>ici</a>.
        </p>
        <p>
            Une documentation bien plus précise est également disponible à travers ce lien : <a href="https://ismamz.github.io/postcss-utilities/">https://ismamz.github.io/postcss-utilities/</a>
        </p>
    </div>
  )
}

export default PostCSSUtilities