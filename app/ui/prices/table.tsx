import { AreaChart } from '@tremor/react';
import { fetchSampleData } from '@/app/lib/postgres-data';
import AreaChartHero from './prices-chart';
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

    // <AreaChartHero sampleData={sampleData} />
    <Example data={sampleData} />
  );
}