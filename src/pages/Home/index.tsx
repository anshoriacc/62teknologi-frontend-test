import React, { useCallback, useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { useSelector } from 'react-redux';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Reducers } from '../../redux/types';
import { getBusiness, resetData } from '../../redux/actions';
import { SearchParams } from '../../services/api/business';

import Title from '../../components/Title';
import Card from '../../components/Card';
import SearchFilter from './SearchFilter';
import StartImage from './StartImage';

function Home() {
  const dispatch = useAppDispatch();
  const state = useSelector((state: Reducers) => state.home);
  const [params, setParams] = useState<SearchParams>({
    term: null,
    location: null,
    latitude: null,
    longitude: null,
    categories: null,
    price: null,
    limit: 10,
    offset: 0,
    sort_by: 'best_match',
  });

  const submitHandler = (e) => {
    e.preventDefault();

    if (!(params.location || (params.latitude && params.longitude))) {
      return alert('Fill location or latitude & longitude!');
    }

    dispatch(getBusiness(params));
  };

  const setParamsHandler = useCallback(
    (e) => {
      e.preventDefault();

      setParams((params) => ({
        ...params,
        [e.target.name]: e.target.value ? e.target.value : null,
      }));
    },
    [setParams, params]
  );

  const resetParamsHandler = (e) => {
    e.preventDefault();
    setParams((params) => ({
      ...params,
      term: null,
      location: null,
      latitude: null,
      longitude: null,
      categories: null,
      price: null,
      limit: 10,
      offset: 0,
      sort_by: 'best_match',
    }));

    dispatch(resetData());
  };

  const nextPage = () => {
    setParams((params) => ({
      ...params,
      offset: params.offset + params.limit,
    }));

    dispatch(getBusiness({ ...params, offset: params.offset + params.limit }));
  };

  const prevPage = () => {
    setParams((params) => ({
      ...params,
      offset: params.offset - params.limit,
    }));

    dispatch(getBusiness({ ...params, offset: params.offset - params.limit }));
  };

  return (
    <>
      <Title />
      <div className="min-h-[inherit] p-4 flex flex-col justify-between gap-4">
        <SearchFilter
          params={params}
          setParamsHandler={setParamsHandler}
          resetParamsHandler={resetParamsHandler}
          submitHandler={submitHandler}
        />
        {!state.isLoadingHome && state.data.length === 0 ? (
          <StartImage />
        ) : state.isLoadingHome ? (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              {[...Array(10)].map((item, index) => (
                <Skeleton
                  height={205.6}
                  style={{ borderRadius: '0.75rem' }}
                  key={index}
                />
              ))}
            </div>
            <Skeleton
              height={48}
              style={{
                borderRadius: '0.75rem',
              }}
            />
          </>
        ) : (
          <>
            <div className="grid md:grid-cols-2 gap-4">
              {state.data.map((business, index) => (
                <Card data={business} key={index}></Card>
              ))}
            </div>
            <div className="self-center flex gap-4">
              <button
                onClick={prevPage}
                disabled={state.meta.page <= 1 ? true : false}
                className="py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-300 disabled:bg-slate-200"
              >{`<`}</button>
              <button
                onClick={nextPage}
                disabled={
                  state.meta.page >= state.meta.totalPage ? true : false
                }
                className="py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-300 disabled:bg-slate-200"
              >{`>`}</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
