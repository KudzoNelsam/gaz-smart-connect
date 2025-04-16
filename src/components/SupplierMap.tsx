
import React from 'react';
import { MapPin, Info, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Supplier {
  id: string;
  name: string;
  distance: string;
  rating: number;
  price: string;
  address: string;
  phone: string;
  hours: string;
}

interface SupplierMapProps {
  suppliers?: Supplier[];
}

const demoSuppliers: Supplier[] = [
  {
    id: '1',
    name: 'GazExpress',
    distance: '1.2 km',
    rating: 4.7,
    price: '€22.50/kg',
    address: '123 Rue du Commerce, Paris',
    phone: '+33 1 23 45 67 89',
    hours: '8:00 - 20:00'
  },
  {
    id: '2',
    name: 'EcoGaz',
    distance: '2.5 km',
    rating: 4.2,
    price: '€21.75/kg',
    address: '45 Avenue de la République, Paris',
    phone: '+33 1 98 76 54 32',
    hours: '9:00 - 19:00'
  },
  {
    id: '3',
    name: 'GazPro',
    distance: '3.7 km',
    rating: 4.9,
    price: '€23.00/kg',
    address: '78 Boulevard Voltaire, Paris',
    phone: '+33 1 45 67 89 01',
    hours: '7:30 - 21:00'
  }
];

const SupplierMap: React.FC<SupplierMapProps> = ({ suppliers = demoSuppliers }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gas-blue" />
            <CardTitle>Nearby Gas Suppliers</CardTitle>
          </div>
          <div className="text-sm text-muted-foreground">3 suppliers found</div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-100 h-40 mb-4 rounded-md flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="h-6 w-6 mx-auto mb-2" />
            <p>Interactive Map</p>
            <p className="text-xs mt-1">(Map integration will be implemented here)</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {suppliers.map((supplier) => (
            <div key={supplier.id} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="font-medium">{supplier.name}</div>
                  <div className="text-sm text-muted-foreground">{supplier.distance} • {supplier.price}</div>
                </div>
                <div className="flex items-center bg-gas-blue/10 px-2 py-1 rounded text-gas-blue">
                  <span className="text-sm font-medium">{supplier.rating}</span>
                  <span className="text-xs ml-1">★</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-1 text-sm mt-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="text-xs">{supplier.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="h-3.5 w-3.5" />
                  <span className="text-xs">{supplier.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-xs">{supplier.hours}</span>
                </div>
              </div>
              
              <div className="mt-3 flex gap-2">
                <button className="text-xs px-3 py-1 rounded bg-gas-blue text-white">Order</button>
                <button className="text-xs px-3 py-1 rounded border border-gray-300">Details</button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupplierMap;
