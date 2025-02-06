
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const PaymentSuccess = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-green-600">Thank you for purchasing </div>
                <div className="mt-6">
                    <Link href="/">
                        <Button className="bg-black hover:bg-white hover:text-black text-white px-6 py-2 rounded-lg">Back to Store</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PaymentSuccess;
