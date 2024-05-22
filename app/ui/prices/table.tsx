import { AreaChart } from '@tremor/react';
import { fetchSampleData } from '@/app/lib/postgres-data';
import Example from './tremor-block';




export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {

  const sampleData = await fetchSampleData(query);
  // console.log(sampleData);
  return (

    <Example data={sampleData} />
  );
}