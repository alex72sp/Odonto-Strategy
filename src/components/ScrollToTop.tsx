"use client";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Usando behavior: "auto" para garantir que o reset seja instantâneo e não falhe
    // em páginas com carregamento dinâmico ou estruturas complexas.
    window.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;