import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../store/cardSlice';
import CardItem from './CardItem';
import Pagination from './Pagination';

const CardsList = () => {
  const { cards } = useSelector(state => state.cards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);

  console.log(cards);

  return (
    <div>CardsList</div>
  )
}

export default CardsList