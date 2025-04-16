
import React from 'react';
import { TrendingUp, Clock, Zap, Calendar, BarChart2, Info, Check, Lightbulb } from "lucide-react";
import GasUsageChart from "@/components/GasUsageChart";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Sample data for recommendations
const recommendations = [
  {
    id: 1,
    title: "Adjust Flame Intensity",
    description: "Reduce flame intensity during cooking to save up to 15% gas",
    impact: "High",
    savings: "€8/month",
    implemented: false
  },
  {
    id: 2,
    title: "Optimal Cooking Hours",
    description: "Cook during off-peak hours (10am-4pm) for better efficiency",
    impact: "Medium",
    savings: "€5/month",
    implemented: true
  },
  {
    id: 3,
    title: "Maintenance Check",
    description: "Schedule a maintenance check to improve system efficiency",
    impact: "High",
    savings: "€10/month",
    implemented: false
  },
  {
    id: 4,
    title: "Upgrade Burner Heads",
    description: "Replace old burner heads with energy-efficient models",
    impact: "High",
    savings: "€12/month",
    implemented: false
  },
  {
    id: 5,
    title: "Insulate Gas Pipes",
    description: "Add insulation to exposed gas pipes to prevent heat loss",
    impact: "Medium",
    savings: "€4/month",
    implemented: false
  }
];

// Sample data for user comparison
const comparisonData = {
  user: 24.5,
  neighborhood: 29.8,
  city: 31.2,
  similar: 26.4
};

const GazOptim = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">GazOptim - Usage Optimization</h1>
        <Button variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          View Reports
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Efficiency overview */}
        <div className="col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <StatCard 
              title="Efficiency Score"
              value="86/100"
              icon={TrendingUp}
              iconColor="text-green-500"
              description="Better than 68% of users"
              changeValue="4 pts"
              changeType="increase"
            />
            <StatCard 
              title="Avg. Usage Time"
              value="2.8 hrs/day"
              icon={Clock}
              iconColor="text-blue-500"
              description="Last 30 days"
              changeValue="12 min"
              changeType="decrease"
            />
            <StatCard 
              title="Energy Savings"
              value="€23.50"
              icon={Zap}
              iconColor="text-amber-500"
              description="Estimated monthly savings"
              changeValue="8%"
              changeType="increase"
            />
          </div>
          
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Comparison With Similar Households</CardTitle>
                <Button variant="ghost" size="sm">
                  <Info className="h-4 w-4 mr-1" />
                  Learn More
                </Button>
              </div>
              <CardDescription>
                Your monthly gas consumption compared to others
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Your Usage (kg/month)</span>
                    <span className="text-sm font-medium text-green-600">{comparisonData.user} kg</span>
                  </div>
                  <Progress value={100} className="h-3 bg-green-100" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Similar Households</span>
                    <span className="text-sm">{comparisonData.similar} kg</span>
                  </div>
                  <Progress value={(comparisonData.similar / comparisonData.user) * 100} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Neighborhood Average</span>
                    <span className="text-sm">{comparisonData.neighborhood} kg</span>
                  </div>
                  <Progress value={(comparisonData.neighborhood / comparisonData.user) * 100} className="h-3" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">City Average</span>
                    <span className="text-sm">{comparisonData.city} kg</span>
                  </div>
                  <Progress value={(comparisonData.city / comparisonData.user) * 100} className="h-3" />
                </div>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-100 rounded-lg mt-6">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 text-green-700 p-2 rounded-full">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-medium text-green-800">You're doing great!</div>
                    <p className="text-sm text-green-700 mt-1">
                      Your gas consumption is 17% lower than the neighborhood average and 8% lower than similar households.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Usage Trends</CardTitle>
              <CardDescription>
                Monitor your consumption patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="monthly">
                <TabsList className="mb-4">
                  <TabsTrigger value="weekly">Weekly</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>
                <TabsContent value="weekly">
                  <GasUsageChart period="weekly" />
                </TabsContent>
                <TabsContent value="monthly">
                  <GasUsageChart 
                    period="monthly" 
                    data={[
                      { name: 'Jan', usage: 28 },
                      { name: 'Feb', usage: 25 },
                      { name: 'Mar', usage: 22 },
                      { name: 'Apr', usage: 24 },
                      { name: 'May', usage: 21 },
                      { name: 'Jun', usage: 18 }
                    ]}
                  />
                </TabsContent>
                <TabsContent value="yearly">
                  <GasUsageChart 
                    period="yearly" 
                    data={[
                      { name: '2021', usage: 320 },
                      { name: '2022', usage: 310 },
                      { name: '2023', usage: 290 },
                      { name: '2024', usage: 260 },
                      { name: '2025', usage: 240 }
                    ]}
                  />
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter>
              <div className="text-sm text-muted-foreground">
                <InfoTip>Hover over the chart to see detailed consumption data</InfoTip>
              </div>
            </CardFooter>
          </Card>
        </div>
        
        {/* Recommendations */}
        <div className="col-span-1">
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-amber-500" />
                <CardTitle>Smart Recommendations</CardTitle>
              </div>
              <CardDescription>
                AI-powered suggestions to optimize your gas usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((rec) => (
                  <div 
                    key={rec.id} 
                    className={`p-3 rounded-lg border ${rec.implemented ? 'bg-green-50 border-green-100' : 'hover:bg-gray-50'}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-medium mb-1 flex items-center gap-2">
                          {rec.implemented && <Check className="h-4 w-4 text-green-600" />}
                          {rec.title}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {rec.description}
                        </p>
                      </div>
                      <div className={`
                        text-xs font-medium px-2 py-1 rounded-full
                        ${rec.impact === 'High' ? 'bg-green-100 text-green-700' : 
                          'bg-blue-100 text-blue-700'}
                      `}>
                        {rec.impact}
                      </div>
                    </div>
                    
                    <div className="flex justify-between mt-3">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Potential savings: </span>
                        <span className="font-medium text-green-600">{rec.savings}</span>
                      </div>
                      
                      {!rec.implemented && (
                        <Button size="sm" variant="ghost" className="text-xs">
                          Mark as Done
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <InfoTip>Recommendations are updated weekly based on your usage patterns</InfoTip>
              <Button variant="outline" size="sm">Refresh</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage Breakdown by Appliance</CardTitle>
            <CardDescription>Understand which appliances consume the most gas</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <ApplianceUsage 
                name="Cooking Stove" 
                percentage={45} 
                value="11.0 kg/month" 
                trend="increase" 
                trendValue="3%" 
              />
              <ApplianceUsage 
                name="Water Heater" 
                percentage={30} 
                value="7.4 kg/month" 
                trend="decrease" 
                trendValue="8%" 
              />
              <ApplianceUsage 
                name="Space Heater" 
                percentage={15} 
                value="3.7 kg/month" 
                trend="neutral" 
                trendValue="0%" 
              />
              <ApplianceUsage 
                name="Clothes Dryer" 
                percentage={8} 
                value="2.0 kg/month" 
                trend="decrease" 
                trendValue="5%" 
              />
              <ApplianceUsage 
                name="Other" 
                percentage={2} 
                value="0.5 kg/month" 
                trend="neutral" 
                trendValue="1%" 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

interface ApplianceUsageProps {
  name: string;
  percentage: number;
  value: string;
  trend: 'increase' | 'decrease' | 'neutral';
  trendValue: string;
}

const ApplianceUsage: React.FC<ApplianceUsageProps> = ({ name, percentage, value, trend, trendValue }) => {
  return (
    <div className="text-center">
      <div className="relative w-24 h-24 mx-auto mb-2">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#1E88E5"
            strokeWidth="10"
            strokeDasharray={`${percentage * 2.51} 251`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="55"
            textAnchor="middle"
            fontSize="20"
            fontWeight="bold"
          >
            {percentage}%
          </text>
        </svg>
      </div>
      <div className="font-medium">{name}</div>
      <div className="text-sm text-muted-foreground">{value}</div>
      <div className={`text-xs mt-1 ${
        trend === 'increase' ? 'text-red-500' : 
        trend === 'decrease' ? 'text-green-500' : 
        'text-gray-500'
      }`}>
        {trend === 'increase' ? '↑' : trend === 'decrease' ? '↓' : '—'} {trendValue}
      </div>
    </div>
  );
};

interface InfoTipProps {
  children: React.ReactNode;
}

const InfoTip: React.FC<InfoTipProps> = ({ children }) => {
  return (
    <div className="flex items-center gap-1 text-muted-foreground">
      <Info className="h-3.5 w-3.5" />
      <span>{children}</span>
    </div>
  );
};

export default GazOptim;
