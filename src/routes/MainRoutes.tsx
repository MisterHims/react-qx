import { Routes, Route } from "react-router-dom";

/////////// ERRORS PAGE \\\\\\\\\\\

import Page404Error from "../pages/errors/Page404Error";

/////////// HOME PAGE \\\\\\\\\\\

import { FullTemplate } from "../components/templates/OneViewTemplates";
import Home from "../pages/home/Home";

/////////// EXERCICES PAGES \\\\\\\\\\\

// Import Exercices Template 
import { ExercicesTemplate } from "../components/templates/ArticlesTemplates";

// Import Interstitial Exercices 
import ExercicesIndex from "../pages/articles/exercices/ExercicesIndex";

// Import Exercices Files
import FlowbiteExercice01 from "../pages/articles/exercices/flowbite/FlowbiteExercice01";
import MaterialUIExercice01 from "../pages/articles/exercices/material-ui/MaterialUIExercice01";
import MaterialUIExercice02 from "../pages/articles/exercices/material-ui/MaterialUIExercice02";
import MaterialUIExercice03 from "../pages/articles/exercices/material-ui/MaterialUIExercice03";
import PostCSSExercice01 from "../pages/articles/exercices/postcss/PostCSSExercice01";
import TailwindCSSExercice01 from "../pages/articles/exercices/tailwindcss/TailwindCSSExercice01";
import TypescriptExercice01 from "../pages/articles/exercices/typescript/TypescriptExercice01";

/////////// DOCS PAGES \\\\\\\\\\\

// Import Docs Template 
import { DocsTemplate } from "../components/templates/ArticlesTemplates";

// Import Interstitial Docs 
import DocsIndex from "../pages/articles/docs/DocsIndex";

// Import Docs Files
import ColorsArticle from "../pages/articles/docs/branding/ColorsArticle";
import FlowbiteDarkMode from "../pages/articles/docs/flowbite/FlowbiteDarkMode";
import MyReactPresentation from "../pages/articles/docs/myreact/MyReactPresentation";
import MyReactInstallation from "../pages/articles/docs/myreact/MyReactInstallation";
import MyReactStructure from "../pages/articles/docs/myreact/MyReactStructure";
import MyReactPersonnalisation from "../pages/articles/docs/myreact/MyReactPersonnalisation";
import TypescriptPresentation from "../pages/articles/docs/typescript/TypescriptPresentation";
import PostCSSPresentation from "../pages/articles/docs/postcss/PostCSSPresentation";
import PostCSSUtilities from "../pages/articles/docs/postcss/PostCSSUtilities";
import MaterialUIPresentation from "../pages/articles/docs/material-ui/MaterialUIPresentation";
import MaterialUITypography from "../pages/articles/docs/material-ui/MaterialUITypography";
import TailwindCSSPresentation from "../pages/articles/docs/tailwindcss/TailwindCSSPresentation";
import FlowbitePresentation from "../pages/articles/docs/flowbite/FlowbitePresentation";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FullTemplate><Home /></FullTemplate>} />
      <Route path="/exercices" element={<ExercicesTemplate><ExercicesIndex /></ExercicesTemplate>}/>
      <Route path="/exercices/flowbite/exercice-01" element={<ExercicesTemplate><FlowbiteExercice01 /></ExercicesTemplate>}/>
      <Route path="/exercices/material-ui/exercice-01" element={<ExercicesTemplate><MaterialUIExercice01 /></ExercicesTemplate>}/>
      <Route path="/exercices/material-ui/exercice-02" element={<ExercicesTemplate><MaterialUIExercice02 /></ExercicesTemplate>}/>
      <Route path="/exercices/material-ui/exercice-03" element={<ExercicesTemplate><MaterialUIExercice03 /></ExercicesTemplate>}/>
      <Route path="/exercices/postcss/exercice-01" element={<ExercicesTemplate><PostCSSExercice01 /></ExercicesTemplate>}/>
      <Route path="/exercices/tailwindcss/exercice-01" element={<ExercicesTemplate><TailwindCSSExercice01 /></ExercicesTemplate>}/>
      <Route path="/exercices/typescript/exercice-01" element={<ExercicesTemplate><TypescriptExercice01 /></ExercicesTemplate>}/>
      <Route path="/docs" element={<DocsTemplate><DocsIndex /></DocsTemplate>}/>
      <Route path="/docs/branding/colors" element={<DocsTemplate><ColorsArticle /></DocsTemplate>}/>
      <Route path="/docs/myreact/presentation" element={<DocsTemplate><MyReactPresentation /></DocsTemplate>}/>
      <Route path="/docs/dark-mode-with-flowbite" element={<DocsTemplate><FlowbiteDarkMode /></DocsTemplate>}/>
      <Route path="/docs/myreact/installation" element={<DocsTemplate><MyReactInstallation /></DocsTemplate>}/>
      <Route path="/docs/myreact/structure" element={<DocsTemplate><MyReactStructure /></DocsTemplate>}/>
      <Route path="/docs/myreact/personnalisation" element={<DocsTemplate><MyReactPersonnalisation /></DocsTemplate>}/>
      <Route path="/docs/typescript/presentation" element={<DocsTemplate><TypescriptPresentation /></DocsTemplate>}/>
      <Route path="/docs/postcss/presentation" element={<DocsTemplate><PostCSSPresentation /></DocsTemplate>}/>
      <Route path="/docs/postcss/utilities" element={<DocsTemplate><PostCSSUtilities /></DocsTemplate>}/>
      <Route path="/docs/material-ui/presentation" element={<DocsTemplate><MaterialUIPresentation /></DocsTemplate>}/>
      <Route path="/docs/material-ui/typographie" element={<DocsTemplate><MaterialUITypography /></DocsTemplate>}/>
      <Route path="/docs/tailwindcss/presentation" element={<DocsTemplate><TailwindCSSPresentation /></DocsTemplate>}/>
      <Route path="/docs/flowbite/presentation" element={<DocsTemplate><FlowbitePresentation /></DocsTemplate>}/>
      <Route path="/*" element={<FullTemplate><Page404Error /></FullTemplate>} />
    </Routes>
  );
};

export default MainRoutes;
