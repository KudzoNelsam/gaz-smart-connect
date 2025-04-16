
import React from 'react';
import { Bell, AlertTriangle, Check, Info, Settings, MoreHorizontal, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

// Sample notifications data
const notifications = [
  {
    id: 1,
    type: "alert",
    title: "Low Gas Level Warning",
    description: "Your gas level has dropped to 22%. Consider ordering a refill soon.",
    time: "2 hours ago",
    read: false
  },
  {
    id: 2,
    type: "info",
    title: "Scheduled Maintenance",
    description: "Your system is due for maintenance in the next 30 days. Contact support to schedule.",
    time: "Yesterday",
    read: false
  },
  {
    id: 3,
    type: "success",
    title: "Order Delivered",
    description: "Your gas refill order #ORD-2025-1042 has been successfully delivered.",
    time: "Mar 15, 2025",
    read: true
  },
  {
    id: 4,
    type: "alert",
    title: "Unusual Gas Flow Detected",
    description: "Minor flow irregularity was detected and automatically resolved. No action needed.",
    time: "Mar 12, 2025",
    read: true
  },
  {
    id: 5,
    type: "info",
    title: "New Feature Available",
    description: "We've added new optimization features to help you save more gas. Check them out!",
    time: "Mar 10, 2025",
    read: true
  },
  {
    id: 6,
    type: "success",
    title: "Gas Efficiency Improved",
    description: "Congratulations! Your gas efficiency score has improved by 8% this month.",
    time: "Mar 05, 2025",
    read: true
  }
];

const Notifications = () => {
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            Mark All Read
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-gas-blue" />
                <CardTitle>Recent Notifications</CardTitle>
              </div>
              <CardDescription>
                Stay updated on your gas system and usage
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="all">
                <TabsList className="mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  <TabsTrigger value="info">Info</TabsTrigger>
                  <TabsTrigger value="success">Success</TabsTrigger>
                </TabsList>
                
                <TabsContent value="all">
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <NotificationItem key={notification.id} notification={notification} />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="alerts">
                  <div className="space-y-4">
                    {notifications
                      .filter(notif => notif.type === 'alert')
                      .map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="info">
                  <div className="space-y-4">
                    {notifications
                      .filter(notif => notif.type === 'info')
                      .map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))
                    }
                  </div>
                </TabsContent>
                
                <TabsContent value="success">
                  <div className="space-y-4">
                    {notifications
                      .filter(notif => notif.type === 'success')
                      .map((notification) => (
                        <NotificationItem key={notification.id} notification={notification} />
                      ))
                    }
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-center mt-6">
                <Button variant="outline">
                  Load More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="col-span-1">
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-gas-blue" />
                <CardTitle>Notification Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="font-medium">Notification Channels</div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">In-App Notifications</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications in the app
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Push Notifications</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications on your device
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Email Notifications</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications via email
                      </div>
                    </div>
                    <Switch checked={false} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">SMS Notifications</div>
                      <div className="text-xs text-muted-foreground">
                        Receive notifications via SMS
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="font-medium">Notification Types</div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Critical Alerts</div>
                      <div className="text-xs text-muted-foreground">
                        Gas leaks, safety issues, etc.
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">System Status</div>
                      <div className="text-xs text-muted-foreground">
                        System checks, maintenance, etc.
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Gas Level Alerts</div>
                      <div className="text-xs text-muted-foreground">
                        Low gas levels, refill reminders
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Order Updates</div>
                      <div className="text-xs text-muted-foreground">
                        Order status, delivery info
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm">Tips & Promotions</div>
                      <div className="text-xs text-muted-foreground">
                        Usage tips, special offers
                      </div>
                    </div>
                    <Switch checked={false} />
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full">
                  Advanced Settings
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Notification Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Unread Notifications:</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Total Notifications:</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Critical Alerts:</span>
                  <span className="font-medium">0</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Last Notification:</span>
                  <span className="font-medium">2 hours ago</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-4">
                Export Notification History
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

interface NotificationItemProps {
  notification: {
    id: number;
    type: string;
    title: string;
    description: string;
    time: string;
    read: boolean;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({ notification }) => {
  const getIcon = () => {
    switch (notification.type) {
      case 'alert':
        return <AlertTriangle className="h-5 w-5 text-amber-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      case 'success':
        return <Check className="h-5 w-5 text-green-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };
  
  const getBgColor = () => {
    if (notification.read) return '';
    
    switch (notification.type) {
      case 'alert':
        return 'bg-amber-50';
      case 'info':
        return 'bg-blue-50';
      case 'success':
        return 'bg-green-50';
      default:
        return 'bg-gray-50';
    }
  };
  
  return (
    <div className={`p-4 border rounded-lg flex gap-3 ${getBgColor()}`}>
      <div className={`
        w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
        ${notification.type === 'alert' ? 'bg-amber-100' : 
          notification.type === 'info' ? 'bg-blue-100' : 
          notification.type === 'success' ? 'bg-green-100' : 'bg-gray-100'}
      `}>
        {getIcon()}
      </div>
      
      <div className="flex-1">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-medium">
              {notification.title}
              {!notification.read && (
                <Badge variant="secondary" className="ml-2 bg-blue-100 text-blue-700">New</Badge>
              )}
            </div>
            <div className="text-sm text-muted-foreground mt-0.5">{notification.time}</div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm mt-1">
          {notification.description}
        </p>
      </div>
    </div>
  );
};

export default Notifications;
