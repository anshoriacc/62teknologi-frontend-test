import React from 'react';

import Review from './Review';

function Reviews({ data }: { data: any[] }) {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Reviews</h2>
      <div className="flex flex-col gap-4">
        {data
          ? data.map((item, index) => <Review data={item} key={index} />)
          : null}
      </div>
    </div>
  );
}

export default Reviews;
