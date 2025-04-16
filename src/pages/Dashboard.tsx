
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { StatCard } from '@/components/StatCard';
import { FileText, DollarSign, Users, TrendingUp } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col gap-6">
        <header>
          <h1 className="text-3xl font-bold">Smart Payroll Dashboard</h1>
          <p className="text-muted-foreground mt-2">Generate and manage employee payslips easily</p>
        </header>

        <Alert variant="default">
          <AlertTitle>Welcome to Smart Payroll Generator</AlertTitle>
          <AlertDescription>
            Generate professional-looking payslips, manage employee data, and export payroll information to Excel.
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard 
            title="Generated Payslips" 
            value="142" 
            description="This month" 
            icon={FileText}
            iconColor="text-blue-500"
            changeValue="12%"
            changeType="increase"
          />
          <StatCard 
            title="Total Salary Processed" 
            value="$254,320" 
            description="This month" 
            icon={DollarSign}
            iconColor="text-green-500"
            changeValue="8.5%"
            changeType="increase"
          />
          <StatCard 
            title="Active Employees" 
            value="86" 
            description="From 82 last month" 
            icon={Users}
            iconColor="text-indigo-500"
            changeValue="4"
            changeType="increase"
          />
          <StatCard 
            title="Average Salary" 
            value="$2,957" 
            description="From $2,845 last month" 
            icon={TrendingUp}
            iconColor="text-amber-500"
            changeValue="3.9%"
            changeType="increase"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
