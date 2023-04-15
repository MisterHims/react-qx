import { ReactNode } from "react";
import Footer from "../footers/Footer";

type Props = {
  children: ReactNode;
};

const FullContent = ({ children }: Props) => {
  return (
    <article className="full-content flex flex-col grow justify-center text-center">
      {children}
    </article>
  );
};

const ArticleContent = ({ children }: Props) => {
  return (
    <article className="article-content flex flex-col">
      {children}
      <Footer />
    </article>
  );
};

export { FullContent, ArticleContent }
