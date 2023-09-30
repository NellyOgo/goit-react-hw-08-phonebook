import { ContactForm } from '../Form/Form';
import { Application, FormTitle } from './App.styled';
import { Route, Routes } from 'react-router-dom';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Layout } from 'components/Layout';
import HomePage from 'pages/HomePage/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};