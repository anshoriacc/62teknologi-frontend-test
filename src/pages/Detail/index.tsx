import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { getDetail, getReview } from '../../services/api/business';

import star from '../../assets/icons/star.svg';

import Title from '../../components/Title';
import SlideShow from './SlideShow';
import SectionReviews from './SectionReviews';

function Detail() {
  const { id } = useParams();
  const [isLoadingDetail, setIsLoadingDetail] = useState<boolean>(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState<boolean>(false);
  const [data, setData] = useState<{}>({});
  const [reviews, setReviews] = useState<any[]>([]);

  const fetch = async (id) => {
    try {
      setIsLoadingDetail(true);
      setIsLoadingReviews(true);

      const responseDetail = await getDetail(id);
      const responseReviews = await getReview(id);

      if (responseDetail.data) {
        setData(responseDetail.data);
        setIsLoadingDetail(false);
      }

      if (responseReviews.data) {
        setReviews(responseReviews.data.reviews);
      }
    } catch (err) {
      setIsLoadingDetail(false);
      setIsLoadingReviews(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetch(id);
  }, []);

  return (
    <>
      <Title title={data?.name} />
      <div className="min-h-[inherit] p-4 flex flex-col gap-4">
        {isLoadingDetail ? (
          <div className="flex flex-col gap-4">
            <Skeleton
              height={40}
              style={{
                borderRadius: '0.75rem',
              }}
            />
            <Skeleton
              height={448}
              style={{
                borderRadius: '0.75rem',
              }}
            />
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((item, index) => (
                <Skeleton
                  height={32}
                  style={{ borderRadius: '0.75rem' }}
                  key={index}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl font-bold">{data?.name}</h1>
            <SlideShow photos={data?.photos} />
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center cursor-default">
                {data?.hours?.is_open_now ? (
                  <div className="p-1 bg-green-500 rounded-full flex w-fit">
                    <p className="font-semibold italic text-white">Open</p>
                  </div>
                ) : (
                  <div className="p-1 bg-red-500 rounded-full flex w-fit">
                    <p className="font-semibold italic text-white">Close</p>
                  </div>
                )}
                <p className="font-semibold italic text-slate-300">
                  {[...Array(4)].map((item, index) =>
                    index < data?.price?.length ? (
                      <span className="text-slate-500" key={index}>
                        $
                      </span>
                    ) : (
                      <span key={index}>$</span>
                    )
                  )}
                </p>
                <div className="flex gap-1 items-center">
                  <img
                    src={star}
                    alt="star"
                    className="h-[1rem] w-[1rem] invert-[75%] sepia-[78%] saturate-[499%] hue-rotate-[354deg] brightness-[98%] contrast-[100%]"
                  />
                  <p>
                    <span className="font-semibold">{data?.rating ?? '-'}</span>
                    <span>{` (${data?.review_count ?? 0})`}</span>
                  </p>
                </div>
                <a href={data?.url ?? "#"} className="underline text-lg">
                  web url
                </a>
                {data?.coordinates ? 
                <a href={`https://maps.google.com/?q=${data?.coordinates?.latitude},${data?.coordinates?.longitude}`} className="underline text-lg">
                  see on gmaps
                </a>
                :null}
              </div>
              <p className="italic">
                <span className="font-semibold">Address: </span>
                {data?.location?.display_address.map((item, index) => (
                  <span key={index}>
                    {index === data?.location?.display_address.length - 1
                      ? `${item}.`
                      : `${item}, `}
                  </span>
                ))}
              </p>
              <p className="italic">
                <span className="font-semibold">Phone: </span>
                {data?.display_phone ? data?.display_phone : '-'}
              </p>
              {data?.transactions && data?.transactions.length > 0 ? (
                <p className="italic">
                  <span className="font-semibold">Services: </span>
                  {data?.transactions?.map((item, index) => (
                    <span key={index}>
                      {index === data?.transactions.length - 1
                        ? `${item}.`
                        : `${item}, `}
                    </span>
                  ))}
                </p>
              ) : null}
              <p className="italic">
                <span className="font-semibold">Categories: </span>
                {data?.categories?.map((item, index) => (
                  <span key={index}>
                    {index === data?.categories.length - 1
                      ? `${item.title}.`
                      : `${item.title}, `}
                  </span>
                ))}
              </p>
              <div className="flex gap-2">
                <p className="italic font-semibold">Open hours:</p>
                <ul>
                  {data?.hours &&
                    data.hours[0].open?.map((item, index) => {
                      if (index == 0)
                        return (
                          <li
                            key={index}
                          >{`Sun: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 1)
                        return (
                          <li
                            key={index}
                          >{`Mon: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 2)
                        return (
                          <li
                            key={index}
                          >{`Tue: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 3)
                        return (
                          <li
                            key={index}
                          >{`Wed: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 4)
                        return (
                          <li
                            key={index}
                          >{`Thu: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 5)
                        return (
                          <li
                            key={index}
                          >{`Fri: ${item?.start} – ${item?.end}`}</li>
                        );
                      if (index == 6)
                        return (
                          <li
                            key={index}
                          >{`Sat: ${item?.start} – ${item?.end}`}</li>
                        );
                    })}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <hr />
      {isLoadingDetail ? (
        <div className="p-4 flex flex-col gap-4">
          <Skeleton
            height={40}
            style={{
              borderRadius: '0.75rem',
            }}
          />
        </div>
      ) : (
        <SectionReviews data={reviews} />
      )}
    </>
  );
}

export default Detail;
