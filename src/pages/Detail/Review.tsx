import React from 'react';

import star from '../../assets/icons/star.svg';

function Review({
  data,
}: {
  data: { user: any; rating: number; text: string };
}) {
  return (
    <div className="p-2 flex flex-col gap-2 border bg-white border-slate-200 rounded-xl">
      <div className="flex gap-2 items-center">
        {data.user?.image_url ? (
          <img
            src={data.user?.image_url}
            alt="business-logo"
            className="w-8 h-8 object-cover rounded-full border border-slate-200"
          />
        ) : (
          <div className="w-8 h-8 object-cover rounded-full border bg-slate-200 border-slate-200"></div>
        )}

        <h3 className="font-semibold">{data.user?.name}</h3>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((item, index) =>
          index < data.rating ? (
            <img
              src={star}
              alt="star"
              key={index}
              className="h-[1.5rem] w-[1.5rem] invert-[75%] sepia-[78%] saturate-[499%] hue-rotate-[354deg] brightness-[98%] contrast-[100%]"
            />
          ) : (
            <img
              src={star}
              alt="star"
              key={index}
              className="h-[1.5rem] w-[1.5rem] invert-[100%] sepia-[3%] saturate-[882%] hue-rotate-[320deg] brightness-[114%] contrast-[87%]"
            />
          )
        )}
      </div>
      <p>{data.text}</p>
    </div>
  );
}

export default Review;
