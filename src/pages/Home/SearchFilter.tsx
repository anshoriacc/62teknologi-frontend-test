import React, { useState } from 'react';

import { SearchParams } from '../../services/api/business';

function SearchFilter({
  params,
  setParamsHandler,
  resetParamsHandler,
  submitHandler,
}: {
  params: SearchParams;
  setParamsHandler: (e) => void;
  resetParamsHandler: (e) => void;
  submitHandler: (e) => void;
}) {
  const [showFilter, setShowFilter] = useState<boolean>(false);

  return (
    <section className="p-4 bg-blue-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Search Business</h2>
      <form onSubmit={submitHandler} className="flex flex-col gap-4">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="location" className="ml-1 text-sm">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={params.location ?? ''}
              onChange={setParamsHandler}
              className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="latitude" className="ml-1 text-sm">
              Latitude <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="latitude"
              name="latitude"
              value={params.latitude ?? ''}
              onChange={setParamsHandler}
              className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="longitude" className="ml-1 text-sm">
              Longitude <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="longitude"
              name="longitude"
              value={params.longitude ?? ''}
              onChange={setParamsHandler}
              className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
            />
          </div>
        </div>
        <div
          onClick={() => setShowFilter((value) => !value)}
          className="text-sm font-semibold cursor-pointer text-slate-600 self-end hover:underline"
        >
          {`${showFilter ? 'hide' : 'show'} filters`}
        </div>
        {showFilter ? (
          <>
            <div className="flex flex-col">
              <label htmlFor="term" className="ml-1 text-sm">
                Search by name
              </label>
              <input
                type="search"
                id="term"
                name="term"
                value={params.term ?? ''}
                onChange={setParamsHandler}
                className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
              />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <label htmlFor="categories" className="ml-1 text-sm">
                  Categories:
                </label>
                <select
                  id="categories"
                  name="categories"
                  value={params.categories ?? ''}
                  onChange={setParamsHandler}
                  className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                >
                  <option value="">---</option>
                  <option value="restaurants">Restaurants</option>
                  <option value="shopping">Shopping</option>
                  <option value="nightlife">Nightlife</option>
                  <option value="active">Active Life</option>
                  <option value="beautysvc">Beauty & Spa</option>
                  <option value="auto">Automotive</option>
                  <option value="homeservices">Home Services</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="price" className="ml-1 text-sm">
                  Price:
                </label>
                <select
                  id="price"
                  name="price"
                  value={params.price ?? ''}
                  onChange={setParamsHandler}
                  className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                >
                  <option value="">---</option>
                  <option value="1">$</option>
                  <option value="2">$$</option>
                  <option value="3">$$$</option>
                  <option value="4">$$$$</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="sort_by" className="ml-1 text-sm">
                  Sort by:
                </label>
                <select
                  id="sort_by"
                  name="sort_by"
                  onChange={setParamsHandler}
                  className="py-2 px-3 rounded-md focus:outline-2 outline-slate-200"
                >
                  <option value="best_match">best match</option>
                  <option value="rating">rating</option>
                  <option value="review_count">total review</option>
                  <option value="distance">distance</option>
                </select>
              </div>
            </div>
          </>
        ) : null}
        <div className="w-fit self-end flex gap-4 items-center">
          <div
            onClick={resetParamsHandler}
            className="text-sm font-semibold cursor-pointer text-slate-600 hover:underline"
          >
            Reset
          </div>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-400 rounded-md hover:bg-blue-300"
          >
            Search
          </button>
        </div>
      </form>
    </section>
  );
}

export default SearchFilter;
