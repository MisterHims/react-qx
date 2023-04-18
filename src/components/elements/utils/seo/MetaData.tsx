import { useEffect } from "react";

export const MetaData = (
  title: string | undefined,
  description: string | undefined
) => {
  const defaultTitle = "title page";
  const defaultDesc = "meta description";

  useEffect(() => {
    document.title = title || defaultTitle;
    const metaDescription = document.querySelector<HTMLMetaElement>(
      "meta[name='description']"
    );
    if (metaDescription) {
      metaDescription.setAttribute("content", description || defaultDesc);
    }
  }, [defaultTitle, title, defaultDesc, description]);
};
