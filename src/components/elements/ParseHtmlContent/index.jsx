"use client";

import parse from "html-react-parser";
import { useEffect, useState } from "react";

const ParseHtmlContent = ({ htmlString }) => {
  const [parsedHtml, setParsedHtml] = useState(null);

  useEffect(() => {
    setParsedHtml(parse(htmlString));
  }, [htmlString]);
  return <>{parsedHtml}</>;
};

export default ParseHtmlContent;
