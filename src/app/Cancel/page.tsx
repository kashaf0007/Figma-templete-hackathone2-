import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <XCircle className="w-8 h-8 text-red-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800">Payment Canceled</h1>
        <p className="text-gray-600 mt-2">Your payment was not completed. You can try again or return to the store.</p>
        <div className="mt-6">
          <Link href="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">Back to Store</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
