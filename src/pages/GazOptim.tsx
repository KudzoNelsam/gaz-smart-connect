
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, TrendingUp, Award, Calendar } from "lucide-react";

const GazOptim = () => {
  const [chartPeriod, setChartPeriod] = useState<"daily" | "weekly" | "monthly">("monthly");

  return (
    <div className="container mx-auto p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">GazOptim</h1>
        <p className="text-muted-foreground mt-2">Usage Optimization & Smart Recommendations</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Gas Usage</CardTitle>
                  <CardDescription>Your consumption patterns over time</CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Button 
                    variant={chartPeriod === "daily" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setChartPeriod("daily")}
                  >
                    Daily
                  </Button>
                  <Button 
                    variant={chartPeriod === "weekly" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setChartPeriod("weekly")}
                  >
                    Weekly
                  </Button>
                  <Button 
                    variant={chartPeriod === "monthly" ? "default" : "outline"} 
                    size="sm" 
                    onClick={() => setChartPeriod("monthly")}
                  >
                    Monthly
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-80 flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  [Usage Chart for {chartPeriod} period will be displayed here]
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <div className="text-muted-foreground text-sm">Average Daily Use</div>
                  <div className="text-2xl font-bold mt-1">0.42 kg</div>
                  <div className="flex items-center mt-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    12% better than similar users
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="text-muted-foreground text-sm">Monthly Consumption</div>
                  <div className="text-2xl font-bold mt-1">12.4 kg</div>
                  <div className="flex items-center mt-1 text-sm text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    8% less than last month
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="text-muted-foreground text-sm">Efficiency Score</div>
                  <div className="text-2xl font-bold mt-1">87/100</div>
                  <div className="flex items-center mt-1 text-sm text-amber-500">
                    <Award className="h-4 w-4 mr-1" />
                    Top 15% in your area
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Usage Comparison</CardTitle>
              <CardDescription>How you compare to similar households</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">
                  [Comparison chart will be displayed here]
                </p>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center">
                  <span>Your household</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                  <span className="font-medium">12.4 kg</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Similar households</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-gray-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                  <span className="font-medium">17.8 kg</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>Efficient households</span>
                  <div className="w-1/2 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '32%' }}></div>
                  </div>
                  <span className="font-medium">10.1 kg</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Smart Recommendations</CardTitle>
              <CardDescription>AI-driven suggestions to optimize your gas usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="flex items-start">
                  <LightbulbIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Adjust cooking habits</h4>
                    <p className="text-sm mt-1">Using a lid when boiling water could save up to 14% of gas.</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">Learn more</Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="flex items-start">
                  <LightbulbIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Optimal flame intensity</h4>
                    <p className="text-sm mt-1">Using medium instead of high flame can reduce consumption by 20% without increasing cooking time significantly.</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">Learn more</Button>
              </div>
              
              <div className="border rounded-lg p-4 bg-blue-50">
                <div className="flex items-start">
                  <Calendar className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Refill price opportunity</h4>
                    <p className="text-sm mt-1">Gas prices are expected to drop by 5% next week. Consider delaying your refill if possible.</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="mt-2 w-full">Set reminder</Button>
              </div>
              
              <div className="border rounded-lg p-4">
                <div className="flex items-start">
                  <LightbulbIcon className="h-5 w-5 text-muted-foreground mr-2 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Get personalized tips</h4>
                    <p className="text-sm mt-1">Complete your usage profile to receive more customized recommendations.</p>
                  </div>
                </div>
                <Button className="mt-2 w-full">Complete profile</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Monthly Report</CardTitle>
              <CardDescription>Your March 2023 summary</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Usage</span>
                <span className="font-medium">12.4 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Daily</span>
                <span className="font-medium">0.42 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Peak Day</span>
                <span className="font-medium">March 15 (0.8 kg)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cost Estimate</span>
                <span className="font-medium">$45.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">CO₂ Emissions</span>
                <span className="font-medium">37.2 kg</span>
              </div>
              <Button variant="outline" className="w-full">
                Download Full Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GazOptim;
