
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, MapPin, Clock, ChevronRight } from "lucide-react";

// Supplier interface
interface Supplier {
  id: number;
  name: string;
  distance: string;
  deliveryTime: string;
  available: boolean;
  price: string;
}

// Sample data for suppliers
const suppliers: Supplier[] = [
  {
    id: 1,
    name: "GazExpress",
    distance: "2.4 km",
    deliveryTime: "30-45 min",
    available: true,
    price: "$45.99"
  },
  {
    id: 2,
    name: "QuickGas",
    distance: "3.7 km",
    deliveryTime: "45-60 min",
    available: true,
    price: "$42.50"
  },
  {
    id: 3,
    name: "Metro Propane",
    distance: "5.2 km",
    deliveryTime: "60-75 min",
    available: true,
    price: "$40.25"
  },
  {
    id: 4,
    name: "City Gas Co.",
    distance: "1.8 km",
    deliveryTime: "Currently Closed",
    available: false,
    price: "$47.75"
  },
  {
    id: 5,
    name: "Green Fuel Inc.",
    distance: "4.3 km",
    deliveryTime: "50-65 min",
    available: true,
    price: "$43.50"
  }
];

const GazAuto = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">GazAuto</h1>
        <p className="text-muted-foreground mt-2">Automated Gas Refill & Supplier Management</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Refill Status</CardTitle>
              <CardDescription>Automatic refill settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Auto-Refill</span>
                <Badge variant="default">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Threshold</span>
                <span>10% remaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Next Check</span>
                <span>In 2 days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium">Current Level</span>
                <span>68%</span>
              </div>
              <div className="pt-4">
                <Button className="w-full">Configure Settings</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Order History</CardTitle>
              <CardDescription>Recent gas refill orders</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order #GZ-1082</span>
                  <Badge variant="outline">Delivered</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-2">March 15, 2023</div>
                <div className="text-sm mt-1">13kg refill from GazExpress</div>
              </div>

              <div className="border rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order #GZ-1065</span>
                  <Badge variant="outline">Delivered</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-2">February 20, 2023</div>
                <div className="text-sm mt-1">13kg refill from Metro Propane</div>
              </div>

              <div className="border rounded-lg p-3">
                <div className="flex justify-between">
                  <span className="font-medium">Order #GZ-1047</span>
                  <Badge variant="outline">Delivered</Badge>
                </div>
                <div className="text-sm text-muted-foreground mt-2">January 28, 2023</div>
                <div className="text-sm mt-1">13kg refill from QuickGas</div>
              </div>

              <Button variant="outline" className="w-full">View All Orders</Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Nearby Suppliers</CardTitle>
              <CardDescription>Find and order from gas suppliers in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {suppliers.map((supplier) => (
                  <div key={supplier.id} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-lg">{supplier.name}</h3>
                        <div className="flex space-x-4 mt-2">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{supplier.distance}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-muted-foreground" />
                            <span className="text-sm">{supplier.deliveryTime}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Badge 
                          variant={supplier.available ? "secondary" : "outline"}
                        >
                          {supplier.available ? "Available" : "Unavailable"}
                        </Badge>
                        <div className="text-right mt-2 font-bold">{supplier.price}</div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <Button variant="outline" className="flex items-center">
                        <Truck className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                      <Button disabled={!supplier.available} className="flex items-center">
                        Order Now
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GazAuto;
