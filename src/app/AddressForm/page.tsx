'use client'
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '../Components/Navbar';


const AddressForm = () => {
  return (
    <div>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen  bg-gray-100">
      <Card className="max-w-md w-full mt-5 p-6">
        <CardContent>
          <h1 className="text-xl font-bold text-center mb-4">Address Form</h1>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium">Name</Label>
              <Input id="name" placeholder="Enter your full name" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="phone" className="block text-sm font-medium">Phone</Label>
              <Input id="phone" placeholder="Enter your phone number" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="addressLine1" className="block text-sm font-medium">Address Line 1</Label>
              <Input id="addressLine1" placeholder="Enter your street address" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="addressLine2" className="block text-sm font-medium">Address Line 2</Label>
              <Input id="addressLine2" placeholder="Enter apartment, suite, etc. (optional)" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="cityLocality" className="block text-sm font-medium">City/Locality</Label>
              <Input id="cityLocality" placeholder="Enter your city or locality" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="stateProvince" className="block text-sm font-medium">State/Province</Label>
              <Input id="stateProvince" placeholder="Enter your state or province" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="postalCode" className="block text-sm font-medium">Postal Code</Label>
              <Input id="postalCode" placeholder="Enter your postal code" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="countryCode" className="block text-sm font-medium">Country Code</Label>
              <Input id="countryCode" placeholder="Enter your country code (e.g., US)" className="mt-1 w-full" />
            </div>
            <div>
              <Label htmlFor="addressResidentialIndicator" className="block text-sm font-medium">Residential Address</Label>
              <Input id="addressResidentialIndicator" placeholder="Yes or No" className="mt-1 w-full" />
            </div>
            <button type="submit" className="w-full mt-4">Submit</button>
          </form>
        </CardContent>
      </Card>
    </div>
    </div>
  );
};

export default AddressForm;
