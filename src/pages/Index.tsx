
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChartGenerator } from "@/components/ChartGenerator";
import { Mountain, TrendingUp, PieChart, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen nepal-pattern">
      {/* Header with Nepal-inspired design */}
      <header className="bg-gradient-to-r from-nepal-blue to-nepal-crimson text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-nepal-gold p-2 rounded-lg shadow-md">
                <Mountain className="h-8 w-8 text-nepal-blue" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">AI Accountant</h1>
                <p className="text-blue-100 text-sm">नेपालको डिजिटल लेखा समाधान</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-blue-100">
                <TrendingUp className="h-5 w-5" />
                <span>Smart Analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-100">
                <PieChart className="h-5 w-5" />
                <span>Interactive Charts</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mountain-silhouette h-8"></div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-nepal-blue mb-4">
            Interactive Data Visualization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your accounting data into beautiful, interactive charts inspired by the scenic beauty of Nepal. 
            Visualize your financial insights with the power of the Himalayas.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-gradient-to-br from-nepal-gold/10 to-nepal-gold/20 border-nepal-gold/30 hover:shadow-lg transition-all duration-300 animate-float">
            <div className="flex items-center space-x-3">
              <div className="bg-nepal-gold p-2 rounded-full">
                <PieChart className="h-6 w-6 text-nepal-blue" />
              </div>
              <div>
                <h3 className="font-semibold text-nepal-blue">Pie Charts</h3>
                <p className="text-sm text-muted-foreground">Perfect for proportional data</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-nepal-blue/10 to-nepal-blue/20 border-nepal-blue/30 hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="bg-nepal-blue p-2 rounded-full">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-nepal-blue">Bar Charts</h3>
                <p className="text-sm text-muted-foreground">Compare categories effectively</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-nepal-crimson/10 to-nepal-crimson/20 border-nepal-crimson/30 hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center space-x-3">
              <div className="bg-nepal-crimson p-2 rounded-full">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-nepal-blue">Line Charts</h3>
                <p className="text-sm text-muted-foreground">Track trends over time</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Chart Generator */}
        <ChartGenerator />
      </section>

      {/* Footer */}
      <footer className="bg-nepal-blue text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Mountain className="h-6 w-6 text-nepal-gold" />
            <span className="text-nepal-gold font-semibold">AI Accountant</span>
          </div>
          <p className="text-blue-200">
            Bringing the beauty of Nepal to your data visualization experience
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
