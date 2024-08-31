'use client';

import { useParams } from 'next/navigation';
import { Suspense, lazy } from 'react';
import Loading from '@/components/Loading/index.js';
const ResultList = lazy(() => import('@/components/ResultList'));

export default function ResultPage() {
  const { makeId, year } = useParams();

  return (
    <Suspense fallback={<Loading />}>
      <ResultList
        makeId={makeId}
        year={year}
      />
    </Suspense>
  );
}
