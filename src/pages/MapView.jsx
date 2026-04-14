import React from "react";
import Card from "../components/ui/Card";
import { MapContainer, TileLayer } from "react-leaflet";
import { Map as MapIcon, Layers } from "lucide-react";
import "leaflet/dist/leaflet.css";

export default function MapView() {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-gray-400 mb-1">
          <MapIcon className="w-3.5 h-3.5" />
          Community Map
        </div>
        <h1 className="text-2xl font-bold font-display text-gray-800">
          Needs Map View
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Visualize community needs across geographic regions
        </p>
      </div>

      {/* Map Container */}
      <Card padding="p-0" className="overflow-hidden relative">
        <div className="h-[500px] lg:h-[600px] relative">
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={true}
            className="h-full w-full rounded-2xl z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </MapContainer>

          {/* Coming soon overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/5 backdrop-blur-[1px] z-10 pointer-events-none">
            <div className="bg-white/90 backdrop-blur-xl rounded-2xl shadow-elevated p-6 text-center max-w-xs border border-white/60">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-3">
                <Layers className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-sm font-bold font-display text-gray-800 mb-1">
                Interactive Markers Coming Soon
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Need pins, clusters, and heatmaps will be layered on this map in
                Day 6.
              </p>
            </div>
          </div>
        </div>

        {/* Legend bar */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            Critical
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
            High
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Medium
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Low
          </div>
        </div>
      </Card>
    </div>
  );
}
