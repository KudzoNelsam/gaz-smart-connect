
import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface SafetyControlsProps {
  isGasOn?: boolean;
  onToggleGas?: (isOn: boolean) => void;
}

const SafetyControls: React.FC<SafetyControlsProps> = ({
  isGasOn = true,
  onToggleGas
}) => {
  const [gasEnabled, setGasEnabled] = useState(isGasOn);
  const [isConfirmingShutoff, setIsConfirmingShutoff] = useState(false);
  const { toast } = useToast();

  const handleToggleGas = () => {
    if (gasEnabled) {
      // If turning off, show confirmation first
      setIsConfirmingShutoff(true);
    } else {
      // If turning on, do it immediately
      completeToggle(true);
    }
  };

  const completeToggle = (newState: boolean) => {
    setGasEnabled(newState);
    setIsConfirmingShutoff(false);
    
    // Call the parent handler if provided
    if (onToggleGas) {
      onToggleGas(newState);
    }
    
    // Show toast notification
    toast({
      title: newState ? "Gas Supply Enabled" : "Gas Supply Disabled",
      description: newState 
        ? "Your gas supply has been safely turned on." 
        : "Your gas supply has been shut off for safety.",
      variant: newState ? "default" : "destructive",
    });
  };

  const cancelShutoff = () => {
    setIsConfirmingShutoff(false);
  };

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-gas-blue" />
          <CardTitle>Safety Controls</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
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
                  onClick={() => completeToggle(false)}
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
            <div className="flex justify-between items-center">
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
                  onCheckedChange={handleToggleGas}
                />
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">System Status: Normal</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Last check: 2 minutes ago
            </p>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
          >
            Run System Diagnostic
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyControls;
