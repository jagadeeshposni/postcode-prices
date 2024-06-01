import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/search';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import HouseTypeSwitches from './ui/dashboard/house-type-switches';
import { fetchRealData, fetchSampleData } from './lib/postgres-data';
import PricesChart from './ui/search/prices-chart';
import { PriceDataByPropertyType } from './lib/definitions';

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || '';
  // const data = await fetchSampleData(query);
  let data: PriceDataByPropertyType[] = [];
  if (query) {
    data = await fetchRealData(query);
  }
  //TODO: Explore tailwind snippets
  return (
    <div>
      <div className="flex w-auto items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>House Prices Index by Postcode</h1>
      </div>

      <div className="c mt-4 items-center justify-between">
        <Search placeholder="Search postcode..." />
        <HouseTypeSwitches />
      </div>

      <div>
        <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
          <PricesChart data={data} />
        </Suspense>
      </div>
    </div>
  );
}