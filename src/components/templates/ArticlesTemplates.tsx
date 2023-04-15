import { ReactNode } from "react";
import Header from "../layouts/headers/Header";
import { ArticleContent} from "../layouts/contents/Content";
import MainSidebarDocs from "../layouts/sidebar/MainSideBarDocs";
import MainSidebarExercices from "../layouts/sidebar/MainSideBarExercices";

// Import Style(s)
import "../../../build/styles/templates/articles-template.css";

type Props = {
  children: ReactNode;
};

const DocsTemplate = ({ children }: Props) => {
  return (
  <div className="article-wrapper">
    <Header template="article" showNotificationBar={true}/>
    <div className="article-container">
      <MainSidebarDocs />
      <ArticleContent>{children}</ArticleContent>
    </div>
  </div>
  );
};

const ExercicesTemplate = ({ children }: Props) => {
  return (
  <div className="article-wrapper">
    <Header template="article" showNotificationBar={true}/>
    <div className="article-container">
      <MainSidebarExercices />
      <ArticleContent>{children}</ArticleContent>
    </div>
  </div>
  );
};

export { DocsTemplate, ExercicesTemplate }