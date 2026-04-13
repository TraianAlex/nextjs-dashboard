import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import CustomersTable from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/fonts';
import { CustomersTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';
import { fetchCustomersPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParamsResolved = await searchParams;
  const query = searchParamsResolved?.query || '';
  const currentPage = Number(searchParamsResolved?.page) || 1;
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <Search placeholder='Search customers...' />
      </div>
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <CustomersTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
