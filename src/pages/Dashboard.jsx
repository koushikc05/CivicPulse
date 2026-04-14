import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Input from "../components/ui/Input";
import Spinner from "../components/ui/Spinner";
import EmptyState from "../components/ui/EmptyState";
import Modal from "../components/ui/Modal";
import { Users, MapPin, ClipboardList, ShieldCheck, Mail, Check, AlertCircle } from "lucide-react";

export default function Dashboard() {
  const { userData, isAdmin, isFieldWorker, isVolunteer } = useAuth();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="space-y-8 pb-12">
      <div className="mb-4">
        <h1 className="text-3xl font-display font-bold text-gray-900 tracking-tight">
          Welcome back, {userData?.name}
        </h1>
        <p className="text-gray-500 mt-1">Here is what's happening in your community today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Admin specific cards */}
        {isAdmin && (
          <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow border-t-4 border-t-green-500">
            <div className="p-3 bg-green-100 rounded-xl text-green-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Admin Overview</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Full Access</h3>
              <p className="text-sm text-gray-400 mt-2">You can manage users, needs, and task assignments.</p>
            </div>
          </Card>
        )}

        {/* Field Worker specific cards */}
        {isFieldWorker && (
          <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow border-t-4 border-t-blue-500">
            <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Field Reports</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Log New Issue</h3>
              <p className="text-sm text-gray-400 mt-2">Report new community needs from your location.</p>
            </div>
          </Card>
        )}

        {/* Volunteer specific cards */}
        {isVolunteer && (
          <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow border-t-4 border-t-purple-500">
            <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
              <ClipboardList className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Your Tasks</p>
              <h3 className="text-xl font-bold text-gray-900 mt-1">Available Work</h3>
              <p className="text-sm text-gray-400 mt-2">Check the task board to find where you can help today.</p>
            </div>
          </Card>
        )}

        {/* Common cards */}
        <Card className="p-6 flex items-start gap-4 hover:shadow-lg transition-shadow">
          <div className="p-3 bg-gray-100 rounded-xl text-gray-600">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Your Role</p>
            <h3 className="text-xl font-bold text-gray-900 mt-1 capitalize">{userData?.role?.replace('_', ' ')}</h3>
            <p className="text-sm text-gray-400 mt-2">Logged in as {userData?.email}</p>
          </div>
        </Card>
      </div>

      {/* ADMIN COMPONENT SHOWCASE */}
      {isAdmin && (
        <div className="mt-12 space-y-8">
          <div className="border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-bold font-display text-gray-900">UI Component Library</h2>
            <p className="text-gray-500 mt-1">Showcasing the Day 1 reusable components available in your application.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Buttons & Badges */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Buttons & Badges</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-500 mb-3 font-medium">Button Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="danger">Danger</Button>
                    <Button loading>Loading...</Button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-3 font-medium">Badge Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="success">Completed</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="error">High Priority</Badge>
                    <Badge variant="default">Neutral</Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Inputs & Form Elements */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Inputs & Elements</h3>
              <div className="space-y-4">
                <Input 
                  label="Standard Input" 
                  placeholder="Enter some text..." 
                  icon={<Mail className="w-5 h-5 text-gray-400" />}
                />
                <Input 
                  label="Input with Error" 
                  placeholder="Failed input..." 
                  error="This field is required"
                  icon={<AlertCircle className="w-5 h-5 text-red-400" />}
                />
              </div>
            </Card>

            {/* Modal & Spinners */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Overlays & Loaders</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-xs text-gray-500">Small</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="md" />
                    <span className="text-xs text-gray-500">Medium</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-xs text-gray-500">Large</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Button onClick={() => setModalOpen(true)}>Open Demo Modal</Button>
                  
                  <Modal 
                    isOpen={modalOpen} 
                    onClose={() => setModalOpen(false)}
                    title="A Beautiful Custom Modal"
                  >
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        This is the pre-built Modal component from Day 1. It supports a title, an intuitive close button, backdrop blurring, and full responsive behavior.
                      </p>
                      <div className="flex justify-end gap-3 mt-6">
                        <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
                        <Button variant="primary" onClick={() => setModalOpen(false)}>Confirm Action</Button>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </Card>

            {/* Empty States */}
            <Card className="p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Empty State</h3>
              <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 p-2">
                <EmptyState 
                  title="No Tasks Assigned"
                  description="There are currently no tasks assigned to you. When an Admin assigns one, it will appear here."
                  icon={Check}
                  action={{
                    label: "Refresh Dashboard",
                    onClick: () => {}
                  }}
                />
              </div>
            </Card>

          </div>
        </div>
      )}
    </div>
  );
}
