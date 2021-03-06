import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { exempleAction } from '../store/actions/example';

const Homepage = () => {
  const dispatch = useDispatch();
  const exemple = useSelector((state) => state.exemple.mutation);

  useEffect(() => {
    dispatch(exempleAction());
  });
  return <>Bienvenue sur le boilerplate : {exemple}</>;
};

export default Homepage;
