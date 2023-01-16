import React from 'react';
import { Link } from 'react-router-dom';

import business from '../../assets/icons/business.svg';
import star from '../../assets/icons/star.svg';

function Card({ data }: { data: any }) {
  return (
    <Link to={`/${data.alias}`}>
      <div className="p-2 border bg-white border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
        <h2
          className="hidden text-lg font-semibold md:block truncate"
          title={data.name}
        >
          {data.name}
        </h2>
        <div className="grid grid-cols-[9rem_1fr] gap-2">
          {data.image_url ? (
            <img
              src={data.image_url}
              alt="business-logo"
              className="w-[9rem] h-[10rem] object-cover rounded-xl border border-slate-200"
            />
          ) : (
            <div className="w-[9rem] h-[10rem] rounded-xl bg-slate-200 flex justify-center items-center">
              <img
                src={business}
                alt="business-logo"
                className="h-[60%] opacity-20"
              />
            </div>
          )}

          <div className="flex flex-col py-1 text-xs text-slate-500">
            <h2
              className="text-lg font-semibold md:hidden truncate text-black"
              title={data.name}
            >
              {data.name}
            </h2>
            <span className="flex gap-1 items-center">
              <img
                src={star}
                alt="star"
                className="h-[1rem] w-[1rem] invert-[75%] sepia-[78%] saturate-[499%] hue-rotate-[354deg] brightness-[98%] contrast-[100%]"
              />
              <p>
                <span className="font-semibold">{data.rating ?? '-'}</span>
                <span>{` (${data.review_count ?? 0})`}</span>
              </p>
            </span>
            <p className="italic">
              <span className="font-semibold">Address: </span>
              {data.location.display_address.map((item, index) => (
                <span key={index}>
                  {index === data.location.display_address.length - 1
                    ? `${item}.`
                    : `${item}, `}
                </span>
              ))}
            </p>
            <p className="italic">
              <span className="font-semibold">Phone: </span>
              {data.display_phone ? data?.display_phone : '-'}
            </p>
            <p className="font-semibold italic text-slate-300">
              {[...Array(4)].map((item, index) =>
                index < data.price?.length ? (
                  <span className="text-slate-500" key={index}>
                    $
                  </span>
                ) : (
                  <span key={index}>$</span>
                )
              )}
            </p>
            <p className="italic">
              {data.transactions && data.transactions.length > 0 ? (
                <>
                  <span className="font-semibold">Services: </span>
                  {data.transactions.map((item, index) => (
                    <span key={index}>
                      {index === data.transactions.length - 1
                        ? `${item}.`
                        : `${item}, `}
                    </span>
                  ))}
                </>
              ) : null}
            </p>
            <p className="italic">
              <span className="font-semibold">Categories: </span>
              {data.categories.map((item, index) => (
                <span key={index}>
                  {index === data.categories.length - 1
                    ? `${item.title}.`
                    : `${item.title}, `}
                </span>
              ))}
            </p>
            {/* <div className="mt-auto">
              {data.is_closed ? (
                <div className="p-1 bg-red-500 rounded-full flex w-fit">
                  <p className="font-semibold italic text-white">Close</p>
                </div>
              ) : (
                <div className="p-1 bg-green-500 rounded-full flex w-fit">
                  <p className="font-semibold italic text-white">Open</p>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
