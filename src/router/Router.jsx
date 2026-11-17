import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  pathname: '/',
  push: () => {},
  replace: () => {},
});

export function RouterProvider({ children }) {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    // If hash routing is used (e.g. #/services)
    if (window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const path = window.location.pathname;
    return path || '/';
  };

  const [pathname, setPathname] = useState(getInitialPath);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getInitialPath());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const push = (to) => {
    if (to === pathname) return;
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', to);
      setPathname(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const replace = (to) => {
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', to);
      setPathname(to);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ pathname, push, replace }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function usePathname() {
  const { pathname } = useContext(RouterContext);
  return pathname;
}

export function Link({ to, children, className = '', style = {}, onClick, ...props }) {
  const { push } = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick(e);
    push(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className} style={style} {...props}>
      {children}
    </a>
  );
}
