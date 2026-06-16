import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-screen gap-3">
      <h2 className="font-bold text-3xl">This Page Doesn't Exist</h2>

      <Link href="/" className="btn btn-error">
        Return Home
      </Link>
    </div>
  );
};

export default NotFoundPage;