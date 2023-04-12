import { ReactNode } from "react";
import Header from "../layouts/headers/Header";
import { ArticleContent} from "../layouts/contents/Content";
import MainSidebarDocs from "../layouts/navigation/sidebar/MainSideBarDocs";
import MainSidebarExercices from "../layouts/navigation/sidebar/MainSideBarExercices";

// Import Style(s)
import "../../../build/styles/templates/articles-template.css";

type Props = {
  children: ReactNode;
};

const DocsTemplate = ({ children }: Props) => {
  return (
  <div className="article-wrapper">
    <Header template="article" showNotificationBar={true}/>
    <div className="article-container flex flex-row justify-center flex-nowrap">
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
    <div className="article-container flex flex-row justify-center flex-nowrap">
      <MainSidebarExercices />
      <ArticleContent>{children}</ArticleContent>
    </div>
  </div>
  );
};

export { DocsTemplate, ExercicesTemplate }