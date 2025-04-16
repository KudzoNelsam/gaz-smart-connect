
import React, { useState } from 'react';
import { AlertTriangle, Clock, Flame, Droplet, TrendingUp, Users } from "lucide-react";
import GasGauge from "@/components/GasGauge";
import { StatCard } from "@/components/StatCard";
import GasUsageChart from "@/components/GasUsageChart";
import SafetyControls from "@/components/SafetyControls";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Dashboard = () => {
  const [gasLevel, setGasLevel] = useState(65); 
  
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="outline">
          Refresh Data
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Gas Gauge */}
        <div className="col-span-1">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Current Gas Level</CardTitle>
              <CardDescription>Last updated: 5 minutes ago</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center space-y-6">
              <GasGauge level={gasLevel} />
              
              <div className="w-full flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setGasLevel(Math.max(0, gasLevel - 5))}
                >
                  Decrease (Demo)
                </Button>
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setGasLevel(Math.min(100, gasLevel + 5))}
                >
                  Increase (Demo)
                </Button>
              </div>
              
              <div className="w-full text-sm text-center text-muted-foreground">
                <p>Simulated interactive demo</p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Middle column - Quick Stats */}
        <div className="col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              title="Estimated Usage Time"
              value="14 days"
              icon={Clock}
              description="At current consumption rate"
            />
            <StatCard 
              title="Daily Usage"
              value="0.8 kg"
              icon={Flame}
              changeValue="5%"
              changeType="decrease"
              description="vs. last week"
            />
          </div>
          
          <SafetyControls />

          {gasLevel <= 25 && (
            <Alert variant="warning">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Low Gas Level</AlertTitle>
              <AlertDescription>
                Your gas level is getting low. Consider ordering a refill soon.
              </AlertDescription>
            </Alert>
          )}
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-2">
                <Button size="sm" variant="outline">Schedule Refill</Button>
                <Button size="sm" variant="outline">View History</Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Right column - Additional Stats */}
        <div className="col-span-1 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <StatCard 
              title="Consumption Efficiency"
              value="92%"
              icon={TrendingUp}
              changeValue="3%"
              changeType="increase"
              iconColor="text-green-500"
            />
            <StatCard 
              title="Average Usage"
              value="0.85 kg/day"
              icon={Droplet}
              description="Based on last 30 days"
            />
          </div>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Usage Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Similar Households</span>
                </div>
                <span className="text-sm font-medium">1.1 kg/day</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "77%" }}></div>
              </div>
              <p className="text-xs text-green-600 mt-1">You use 23% less gas than similar households</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Recent Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="p-2 bg-amber-50 rounded-md border border-amber-100 text-amber-800 text-xs">
                  <div className="font-medium">Low gas level alert</div>
                  <div className="text-amber-600 mt-0.5">2 days ago</div>
                </div>
                <div className="p-2 bg-blue-50 rounded-md border border-blue-100 text-blue-800 text-xs">
                  <div className="font-medium">System maintenance completed</div>
                  <div className="text-blue-600 mt-0.5">5 days ago</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="mt-6">
        <GasUsageChart title="Weekly Gas Consumption" period="weekly" />
      </div>
    </div>
  );
};

export default Dashboard;
