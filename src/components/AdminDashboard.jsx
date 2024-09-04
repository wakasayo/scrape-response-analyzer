import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();

  const handleFetchUrls = () => {
    // TODO: Implement API call to fetch company URLs
    toast({
      title: "Fetching URLs",
      description: "This feature is not yet implemented.",
    });
  };

  const handleStartScraping = () => {
    // TODO: Implement web scraping functionality
    toast({
      title: "Starting Scraping",
      description: "This feature is not yet implemented.",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>API Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleFetchUrls}>Fetch Company URLs</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scraping Control</CardTitle>
          </CardHeader>
          <CardContent>
            <Button onClick={handleStartScraping}>Start Scraping</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;