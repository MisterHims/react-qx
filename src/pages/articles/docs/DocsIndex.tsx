import { Box } from "@mui/material"

const DocsIndex = () => {
  return (
    <Box component="main" className="content">
      <ul>
        <h3>Niveau 1 - Titre h2</h3>
        <li><p>Niveau 1 - Text n°1</p></li>
        <li><p>Niveau 1 - Text n°2</p></li>
        <li><p>Niveau 1 - Text n°3</p></li>
        <ul>
          <h3>Niveau 2 - Titre h3</h3>
          <li><p>Niveau 2 - Text n°1</p></li>
          <li><p>Niveau 2 - Text n°2</p></li>
          <li><p>Niveau 2 - Text n°3</p></li>
          <li><p>Niveau 2 - Text n°4</p></li>
          <ul>
            <h3>Niveau 3 - Titre h3</h3>
          <li><p>Niveau 3 - Text n°1</p></li>
          <li><p>Niveau 3 - Text n°2</p></li>
          <li><p>Niveau 3 - Text n°3</p></li>
          <li><p>Niveau 3 - Text n°4</p></li>
          </ul>
        </ul>
      </ul>
    </Box>
  )
}

export default DocsIndex