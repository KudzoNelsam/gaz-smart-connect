
import React from 'react';
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { StatCard } from '@/components/StatCard';
import { Gauge, AlertTriangle, TrendingUp, Truck } from 'lucide-react';
import GasGauge from '@/components/GasGauge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const GasDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="text-3xl font-bold">Smart Gas Management Dashboard</h1>
          <p className="text-muted-foreground mt-2">Monitor and manage your gas usage efficiently and safely</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Gas Level" 
            value="68%" 
            description="Current tank level" 
            icon={Gauge}
            iconColor="text-blue-500"
            changeValue="2%"
            changeType="decrease"
          />
          <StatCard 
            title="Safety Status" 
            value="Normal" 
            description="No leaks detected" 
            icon={AlertTriangle}
            iconColor="text-green-500"
          />
          <StatCard 
            title="Monthly Usage" 
            value="12.4 kg" 
            description="From previous 14.2 kg" 
            icon={TrendingUp}
            iconColor="text-indigo-500"
            changeValue="12.6%"
            changeType="decrease"
          />
          <StatCard 
            title="Nearest Supplier" 
            value="2.4 km" 
            description="Delivery in ~30 min" 
            icon={Truck}
            iconColor="text-amber-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
          {/* GazEssentiel Card */}
          <Card>
            <CardHeader>
              <CardTitle>GazEssentiel</CardTitle>
              <CardDescription>Smart Gas Level Monitoring</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center">
              <GasGauge level={68} />
              <div className="mt-4 flex gap-4">
                <Button variant="default" asChild>
                  <Link to="/monitoring">View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* GazSecure Card */}
          <Card>
            <CardHeader>
              <CardTitle>GazSecure</CardTitle>
              <CardDescription>Advanced Gas Safety System</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-md">
                  <div>
                    <h4 className="font-medium">Leak Detection</h4>
                    <p className="text-sm text-muted-foreground">No issues detected</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-md">
                  <div>
                    <h4 className="font-medium">Valve Status</h4>
                    <p className="text-sm text-muted-foreground">Functioning normally</p>
                  </div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-md">
                  <div>
                    <h4 className="font-medium">Estimate Time Remaining</h4>
                    <p className="text-sm text-muted-foreground">~21 days at current usage</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="default" asChild>
                  <Link to="/security">Manage Safety</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Combined Card for GazOptim and GazAuto */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your gas supply and usage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">GazOptim</h3>
                  <p className="text-sm text-muted-foreground mb-4">Optimize your gas usage with smart recommendations</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/optimization">View Insights</Link>
                  </Button>
                </div>
                
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium">GazAuto</h3>
                  <p className="text-sm text-muted-foreground mb-4">Automatic refill and supplier management</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/suppliers">Manage Suppliers</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GasDashboard;
