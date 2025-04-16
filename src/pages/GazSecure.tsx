
import React, { useState } from 'react';
import { Shield, AlertTriangle, Bell, Clock, ShieldCheck, History, Settings, Lock } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const securityEvents = [
  {
    id: 1,
    type: "System Check",
    status: "Passed",
    time: "Today, 09:15",
    details: "All systems functioning normally"
  },
  {
    id: 2,
    type: "Valve Test",
    status: "Passed",
    time: "Today, 05:30",
    details: "Valve responded correctly to test signal"
  },
  {
    id: 3,
    type: "Flow Monitor",
    status: "Warning",
    time: "Yesterday, 19:42",
    details: "Unusual flow pattern detected, resolved automatically"
  },
  {
    id: 4,
    type: "System Check",
    status: "Passed",
    time: "Yesterday, 09:15",
    details: "All systems functioning normally"
  },
  {
    id: 5,
    type: "Manual Shutdown",
    status: "Info",
    time: "Apr 14, 09:30",
    details: "Gas supply manually shut off via app"
  }
];

const GazSecure = () => {
  const [gasEnabled, setGasEnabled] = useState(true);
  const [isConfirmingShutoff, setIsConfirmingShutoff] = useState(false);
  const [autoShutOffEnabled, setAutoShutOffEnabled] = useState(true);
  const [leakDetectionEnabled, setLeakDetectionEnabled] = useState(true);
  const [remoteSensorEnabled, setRemoteSensorEnabled] = useState(true);
  const { toast } = useToast();

  const toggleGas = (enabled: boolean) => {
    if (!enabled) {
      setIsConfirmingShutoff(true);
    } else {
      completeGasToggle(true);
    }
  };

  const completeGasToggle = (enabled: boolean) => {
    setGasEnabled(enabled);
    setIsConfirmingShutoff(false);
    
    toast({
      title: enabled ? "Gas Supply Enabled" : "Gas Supply Disabled",
      description: enabled 
        ? "Your gas supply has been safely turned on." 
        : "Your gas supply has been shut off for safety.",
      variant: enabled ? "default" : "destructive",
    });
  };

  const cancelShutoff = () => {
    setIsConfirmingShutoff(false);
  };

  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">GazSecure - Safety System</h1>
        <Button variant="outline">
          <History className="h-4 w-4 mr-2" />
          View Security Log
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* System status */}
        <div className="col-span-2">
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-gas-blue" />
                <CardTitle>System Status</CardTitle>
              </div>
              <CardDescription>
                Current status of your gas security system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-green-50 border border-green-100 rounded-lg mb-4">
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <ShieldCheck className="h-5 w-5" />
                  <span>All Systems Operational</span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Your gas system is secure and functioning normally
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard 
                  title="Uptime"
                  value="99.8%"
                  description="Last 30 days"
                  icon={Clock}
                  iconColor="text-blue-500"
                />
                <StatCard 
                  title="Last Check"
                  value="5 min ago"
                  description="Automatic system check"
                  icon={ShieldCheck}
                  iconColor="text-green-500"
                />
                <StatCard 
                  title="Active Alerts"
                  value="0"
                  description="No current warnings"
                  icon={Bell}
                  iconColor="text-gray-500"
                />
              </div>
              
              <div className="mt-6">
                <div className="text-sm font-medium mb-2">System Health</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Gas Sensor</span>
                      <span className="text-green-600">Excellent (98%)</span>
                    </div>
                    <Progress value={98} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Valve Controller</span>
                      <span className="text-green-600">Good (92%)</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Flow Meter</span>
                      <span className="text-green-600">Good (90%)</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Connection Status</span>
                      <span className="text-green-600">Excellent (99%)</span>
                    </div>
                    <Progress value={99} className="h-2" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Run Diagnostic Test
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Security Events</CardTitle>
              <CardDescription>Recent system activities and alerts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityEvents.map((event) => (
                  <div key={event.id} className="flex items-start gap-3 p-3 rounded-lg border">
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                      ${event.status === 'Warning' ? 'bg-amber-100 text-amber-600' : 
                        event.status === 'Error' ? 'bg-red-100 text-red-600' : 
                        'bg-green-100 text-green-600'}
                    `}>
                      {event.status === 'Warning' ? 
                        <AlertTriangle className="h-4 w-4" /> : 
                        event.status === 'Error' ? 
                          <AlertTriangle className="h-4 w-4" /> : 
                          <ShieldCheck className="h-4 w-4" />
                      }
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-medium">{event.type}</div>
                          <div className="text-sm text-muted-foreground">{event.time}</div>
                        </div>
                        <div className={`
                          text-xs px-2 py-1 rounded-full
                          ${event.status === 'Warning' ? 'bg-amber-100 text-amber-700' : 
                            event.status === 'Error' ? 'bg-red-100 text-red-700' : 
                            event.status === 'Info' ? 'bg-blue-100 text-blue-700' :
                            'bg-green-100 text-green-700'}
                        `}>
                          {event.status}
                        </div>
                      </div>
                      <p className="text-sm mt-1">
                        {event.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Controls & Settings */}
        <div className="col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-gas-red" />
                <CardTitle>Emergency Controls</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              {isConfirmingShutoff ? (
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 text-amber-800 mb-3">
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-medium">Confirm Gas Shutoff</span>
                  </div>
                  <p className="text-sm text-amber-700 mb-4">
                    Are you sure you want to shut off your gas supply? This will disable all gas appliances.
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      variant="destructive" 
                      onClick={() => completeGasToggle(false)}
                    >
                      Yes, Shut Off Gas
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={cancelShutoff}
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="font-medium">Gas Supply</div>
                      <div className="text-sm text-muted-foreground">
                        {gasEnabled ? "Enabled" : "Disabled"}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${gasEnabled ? 'bg-green-500' : 'bg-red-500'}`}></div>
                      <Switch 
                        checked={gasEnabled}
                        onCheckedChange={toggleGas}
                      />
                    </div>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    className="w-full"
                    onClick={() => toggleGas(false)}
                    disabled={!gasEnabled}
                  >
                    <Lock className="h-4 w-4 mr-2" />
                    Emergency Shutoff
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-gas-blue" />
                <CardTitle>Safety Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <Tabs defaultValue="general">
                  <TabsList className="w-full">
                    <TabsTrigger value="general" className="flex-1">General</TabsTrigger>
                    <TabsTrigger value="alerts" className="flex-1">Alerts</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general" className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">Auto Shut-off</div>
                        <div className="text-xs text-muted-foreground">
                          Automatically shut off gas in case of leak
                        </div>
                      </div>
                      <Switch 
                        checked={autoShutOffEnabled}
                        onCheckedChange={setAutoShutOffEnabled}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">Leak Detection</div>
                        <div className="text-xs text-muted-foreground">
                          Advanced algorithms to detect leaks
                        </div>
                      </div>
                      <Switch 
                        checked={leakDetectionEnabled}
                        onCheckedChange={setLeakDetectionEnabled}
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">Remote Sensors</div>
                        <div className="text-xs text-muted-foreground">
                          Connect additional room sensors
                        </div>
                      </div>
                      <Switch 
                        checked={remoteSensorEnabled}
                        onCheckedChange={setRemoteSensorEnabled}
                      />
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="alerts" className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">Push Notifications</div>
                        <div className="text-xs text-muted-foreground">
                          In-app alerts for security events
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">SMS Alerts</div>
                        <div className="text-xs text-muted-foreground">
                          Text messages for critical issues
                        </div>
                      </div>
                      <Switch checked={true} />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-sm">Email Reports</div>
                        <div className="text-xs text-muted-foreground">
                          Weekly safety reports via email
                        </div>
                      </div>
                      <Switch checked={false} />
                    </div>
                  </TabsContent>
                </Tabs>
                
                <Button variant="outline" size="sm" className="w-full">
                  Advanced Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Alert>
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Safety Recommendation</AlertTitle>
            <AlertDescription>
              Regular maintenance of your gas system is recommended every 12 months. Your next inspection is due in 45 days.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  );
};

export default GazSecure;
