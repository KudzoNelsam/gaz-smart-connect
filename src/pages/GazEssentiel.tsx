
import React, { useState } from 'react';
import { CalendarDays, BarChart2, History, Activity, DownloadCloud } from "lucide-react";
import GasGauge from "@/components/GasGauge";
import { StatCard } from "@/components/StatCard";
import GasUsageChart from "@/components/GasUsageChart";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Sample consumption history data
const consumptionHistory = [
  { date: "Apr 15, 2025", amount: "0.9 kg", level: "68%", cost: "€20.25" },
  { date: "Apr 14, 2025", amount: "0.8 kg", level: "73%", cost: "€18.00" },
  { date: "Apr 13, 2025", amount: "0.7 kg", level: "77%", cost: "€15.75" },
  { date: "Apr 12, 2025", amount: "1.1 kg", level: "81%", cost: "€24.75" },
  { date: "Apr 11, 2025", amount: "0.8 kg", level: "87%", cost: "€18.00" },
];

// Sample data for charts
const dailyData = [
  { name: '12 AM', usage: 0.3 },
  { name: '4 AM', usage: 0.1 },
  { name: '8 AM', usage: 0.5 },
  { name: '12 PM', usage: 0.8 },
  { name: '4 PM', usage: 0.6 },
  { name: '8 PM', usage: 1.2 },
];

const weeklyData = [
  { name: 'Mon', usage: 2.4 },
  { name: 'Tue', usage: 1.3 },
  { name: 'Wed', usage: 2.8 },
  { name: 'Thu', usage: 3.9 },
  { name: 'Fri', usage: 2.2 },
  { name: 'Sat', usage: 1.8 },
  { name: 'Sun', usage: 1.6 },
];

const monthlyData = [
  { name: 'Jan', usage: 65 },
  { name: 'Feb', usage: 59 },
  { name: 'Mar', usage: 80 },
  { name: 'Apr', usage: 70 },
  { name: 'May', usage: 56 },
  { name: 'Jun', usage: 55 },
  { name: 'Jul', usage: 40 },
  { name: 'Aug', usage: 45 },
  { name: 'Sep', usage: 60 },
  { name: 'Oct', usage: 70 },
  { name: 'Nov', usage: 75 },
  { name: 'Dec', usage: 85 },
];

const GazEssentiel = () => {
  const [gasLevel, setGasLevel] = useState(65);
  
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">GazEssentiel - Monitoring</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <DownloadCloud className="h-4 w-4 mr-2" />
            Export Data
          </Button>
          <Button size="sm">
            Configure Alerts
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Gas level gauge & settings */}
        <div className="col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Gas Level</CardTitle>
              <CardDescription>Current tank status</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-4">
              <GasGauge level={gasLevel} />
              
              <div className="w-full text-sm">
                <div className="flex justify-between items-center mb-1">
                  <span>Last Update:</span>
                  <span className="font-medium">5 min ago</span>
                </div>
                <div className="flex justify-between items-center mb-1">
                  <span>Estimated Weight:</span>
                  <span className="font-medium">7.8 kg</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Capacity:</span>
                  <span className="font-medium">12 kg</span>
                </div>
              </div>
              
              <Button className="w-full" variant="outline" size="sm">
                Configure Sensors
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Alert settings */}
        <div className="col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Alert Settings</CardTitle>
              <CardDescription>Notification thresholds</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="mb-2 text-sm font-medium">Critical Alert</div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-red-500 rounded-full" style={{ width: '10%' }}></div>
                    </div>
                    <div className="font-medium">10%</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Send SMS + Push notification
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 text-sm font-medium">Warning Alert</div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-amber-500 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <div className="font-medium">25%</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Send Push notification
                  </div>
                </div>
                
                <div>
                  <div className="mb-2 text-sm font-medium">Reminder Alert</div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-500 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                    <div className="font-medium">40%</div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Send In-app notification
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Edit Alert Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Stats */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <StatCard 
              title="Current Usage"
              value="0.8 kg/day"
              icon={Activity}
              iconColor="text-blue-500"
              description="Based on last 7 days"
            />
            <StatCard 
              title="Days Remaining"
              value="14 days"
              icon={CalendarDays}
              iconColor="text-green-500"
              description="At current consumption"
            />
            <StatCard 
              title="Monthly Average"
              value="24.5 kg"
              icon={BarChart2}
              iconColor="text-purple-500"
              description="3.2% less than last month"
            />
          </div>
        
          <Card>
            <CardHeader>
              <CardTitle>Consumption History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-4 bg-muted/50 p-3 text-sm font-medium">
                  <div>Date</div>
                  <div>Amount</div>
                  <div>Level</div>
                  <div>Est. Cost</div>
                </div>
                {consumptionHistory.map((item, index) => (
                  <div 
                    key={index}
                    className="grid grid-cols-4 p-3 text-sm border-t"
                  >
                    <div>{item.date}</div>
                    <div>{item.amount}</div>
                    <div>{item.level}</div>
                    <div>{item.cost}</div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="link" size="sm" className="text-gas-blue">
                  <History className="h-4 w-4 mr-1" />
                  View Full History
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6">
        <Alert>
          <AlertDescription>
            Configure SMS alerts in your profile settings to receive low-level notifications even when you're not using the app.
          </AlertDescription>
        </Alert>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Gas Consumption Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="weekly">
              <TabsList className="mb-4">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily">
                <GasUsageChart 
                  title="Today's Consumption" 
                  data={dailyData} 
                  period="daily" 
                />
              </TabsContent>
              <TabsContent value="weekly">
                <GasUsageChart 
                  title="This Week's Consumption" 
                  data={weeklyData} 
                  period="weekly" 
                />
              </TabsContent>
              <TabsContent value="monthly">
                <GasUsageChart 
                  title="This Year's Consumption" 
                  data={monthlyData} 
                  period="monthly" 
                />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GazEssentiel;
