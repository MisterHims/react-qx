import { Link } from "react-router-dom";

const FlowbiteDarkMode = () => {
  return (
    <div className="content">
      <p>Raté - N'a pas réussi</p>
      <p>
        Le document utilisé pour la mise en place d'un bouton fonctionnel afin
        de basculer dans le mode de son choix est destiné à un format JS et non
        pas TSX.
      </p>
      <Link title="Tailwind CSS Dark Mode - Flowbite" to="https://flowbite.com/docs/customize/dark-mode/#content">Tailwind CSS Dark Mode - Flowbite</Link>
    </div>
  );
};

export default FlowbiteDarkMode;
