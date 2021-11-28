import React from 'react';
import { useLocation } from 'react-router';

const NestedRoute = (props) => {
  const { children, path, parent } = props;
  const history = useLocation();
  const pathname = history.pathname;
  const pathHistory = pathname.split('/');

  const parentIndex = pathHistory.lastIndexOf(parent);

  let match;

  if (parentIndex !== -1) {
    match = path === pathHistory[parentIndex + 1];
  }

  return match ? children : <React.Fragment />;
};

export const useActivePath = ({ parent }) => {
  const history = useLocation();
  const pathname = history.pathname;
  const pathHistory = pathname.split('/');

  const parentIndex = pathHistory.lastIndexOf(parent);

  let activeTab;
  if (parentIndex !== -1) {
    activeTab = pathHistory[parentIndex + 1];
  }

  return activeTab;
};

export default NestedRoute;
