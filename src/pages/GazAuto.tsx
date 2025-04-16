
import React, { useState } from 'react';
import { MapPin, ShoppingCart, Truck, Calendar, AlertTriangle, Clock, Check, Settings } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import SupplierMap from "@/components/SupplierMap";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";

// Sample order history data
const orderHistory = [
  {
    id: "ORD-2025-1042",
    date: "Mar 15, 2025",
    supplier: "GazExpress",
    status: "Delivered",
    amount: "12 kg",
    price: "€270.00"
  },
  {
    id: "ORD-2025-0928",
    date: "Feb 10, 2025",
    supplier: "EcoGaz",
    status: "Delivered",
    amount: "12 kg",
    price: "€261.00"
  },
  {
    id: "ORD-2025-0756",
    date: "Jan 05, 2025",
    supplier: "GazPro",
    status: "Delivered",
    amount: "12 kg",
    price: "€276.00"
  }
];

const GazAuto = () => {
  const [autoOrderEnabled, setAutoOrderEnabled] = useState(true);
  const [lowLevelThreshold, setLowLevelThreshold] = useState(15);
  const [preferredSupplier, setPreferredSupplier] = useState("GazExpress");
  const [activeOrder, setActiveOrder] = useState(false);
  const { toast } = useToast();
  
  const placeOrder = () => {
    setActiveOrder(true);
    toast({
      title: "Order Placed Successfully",
      description: "Your gas refill order has been sent to GazExpress.",
      variant: "default",
    });
  };
  
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">GazAuto - Automated Refill</h1>
        <Button>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Place New Order
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Order status & stats */}
        <div className="col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order Status</CardTitle>
            </CardHeader>
            <CardContent>
              {activeOrder ? (
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <div className="flex items-center gap-2 text-blue-700 font-medium mb-1">
                      <Truck className="h-5 w-5" />
                      <span>Delivery in Progress</span>
                    </div>
                    <p className="text-sm text-blue-600">
                      Your order #ORD-2025-1143 is on the way
                    </p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Supplier:</span>
                        <span className="font-medium">GazExpress</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Amount:</span>
                        <span className="font-medium">12 kg</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Estimated Delivery:</span>
                        <span className="font-medium">Today, 14:00-16:00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Order Total:</span>
                        <span className="font-medium">€270.00</span>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <Button size="sm" variant="outline" className="w-full">
                        Track Order
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-2">Delivery Progress</div>
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center z-10">
                            <Check className="w-4 h-4" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-green-500 text-white flex items-center justify-center z-10">
                            <Check className="w-4 h-4" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-blue-500 text-white flex items-center justify-center z-10 animate-pulse">
                            <Truck className="w-4 h-4" />
                          </div>
                          <div className="w-7 h-7 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center z-10">
                            <Check className="w-4 h-4" />
                          </div>
                        </div>
                        <div className="absolute top-3.5 left-0 h-1 bg-gray-200 w-full -z-0"></div>
                        <div className="absolute top-3.5 left-0 h-1 bg-green-500 w-[50%] -z-0"></div>
                        <div className="flex items-center justify-between text-xs text-gray-500 mt-1">
                          <span>Order Placed</span>
                          <span>Confirmed</span>
                          <span>On the Way</span>
                          <span>Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="p-4 bg-green-50 border border-green-100 rounded-lg mb-4">
                    <div className="flex items-center gap-2 text-green-700 font-medium">
                      <Check className="h-5 w-5" />
                      <span>No Active Orders</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      You currently have sufficient gas levels
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="text-sm">
                      <div className="font-medium mb-1">Automated Order Status</div>
                      <div className="flex items-center">
                        <Badge variant={autoOrderEnabled ? "success" : "secondary"}>
                          {autoOrderEnabled ? "Enabled" : "Disabled"}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="font-medium mb-1">Current Gas Level</div>
                      <div>65% - Estimated to last 14 days</div>
                    </div>
                    
                    <div className="text-sm">
                      <div className="font-medium mb-1">Auto-Order Threshold</div>
                      <div>{lowLevelThreshold}% remaining</div>
                    </div>
                    
                    <div className="mt-4">
                      <Button 
                        className="w-full" 
                        onClick={placeOrder}
                      >
                        Order Now Anyway
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-gas-blue" />
                <CardTitle>Auto-Order Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-sm">Automatic Orders</div>
                    <div className="text-xs text-muted-foreground">
                      Order gas automatically when level is low
                    </div>
                  </div>
                  <Switch 
                    checked={autoOrderEnabled}
                    onCheckedChange={setAutoOrderEnabled}
                  />
                </div>
                
                <div>
                  <div className="font-medium text-sm mb-2">Low Level Threshold</div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full relative">
                      <div 
                        className="h-2 bg-gas-blue rounded-full" 
                        style={{ width: `${lowLevelThreshold}%` }}
                      ></div>
                      <div 
                        className="absolute w-4 h-4 bg-white border-2 border-gas-blue rounded-full top-1/2 -translate-y-1/2 cursor-pointer"
                        style={{ left: `calc(${lowLevelThreshold}% - 8px)` }}
                      ></div>
                    </div>
                    <div className="w-12 text-center font-medium">{lowLevelThreshold}%</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Drag to adjust when auto-orders are triggered
                  </div>
                </div>
                
                <div>
                  <div className="font-medium text-sm mb-2">Preferred Supplier</div>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={preferredSupplier}
                    onChange={(e) => setPreferredSupplier(e.target.value)}
                  >
                    <option value="GazExpress">GazExpress</option>
                    <option value="EcoGaz">EcoGaz</option>
                    <option value="GazPro">GazPro</option>
                  </select>
                  <div className="text-xs text-muted-foreground mt-1">
                    Orders will be placed with this supplier
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Advanced Options
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Stats & Order history */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard 
              title="Last Refill"
              value="Mar 15, 2025"
              icon={Calendar}
              iconColor="text-blue-500"
              description="31 days ago"
            />
            <StatCard 
              title="Average Cost"
              value="€268.20"
              icon={ShoppingCart}
              iconColor="text-green-500"
              description="Per 12kg refill"
              changeValue="3.2%"
              changeType="increase"
            />
            <StatCard 
              title="Time Between Refills"
              value="38 days"
              icon={Clock}
              iconColor="text-purple-500"
              description="Based on last 3 orders"
            />
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Order History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted/50 p-3 text-sm font-medium">
                  <div>Order ID</div>
                  <div>Date</div>
                  <div>Supplier</div>
                  <div>Amount</div>
                  <div>Price</div>
                  <div>Status</div>
                </div>
                {orderHistory.map((order) => (
                  <div 
                    key={order.id}
                    className="grid grid-cols-6 p-3 text-sm border-t hover:bg-gray-50"
                  >
                    <div className="text-gas-blue">{order.id}</div>
                    <div>{order.date}</div>
                    <div>{order.supplier}</div>
                    <div>{order.amount}</div>
                    <div>{order.price}</div>
                    <div>
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="link" size="sm" className="text-gas-blue">
                  View All Orders
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <SupplierMap />
          
          <Alert className="mt-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Supply Chain Notice</AlertTitle>
            <AlertDescription>
              Due to high demand, delivery times may be slightly longer than usual (1-2 extra days). Please plan your orders accordingly.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default GazAuto;
