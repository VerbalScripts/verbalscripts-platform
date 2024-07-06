/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Metadata } from "next";
import PendingWrapper from "./components/PendingWrapper";

export const metadata: Metadata = {
  title: 'Dashboard | Pending',
}


export default function Page() {
 
  return (
    <div className='bg-white dark:bg-zinc-800 min-h-screen'>
     <PendingWrapper />
    </div>
  );
}
