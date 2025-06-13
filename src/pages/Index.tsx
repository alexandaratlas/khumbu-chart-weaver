
import { Card } from "@/components/ui/card";
import { ChartList } from "@/components/ChartList";
import { TrendingUp, PieChart, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-foreground/10 p-2 rounded-lg">
                <TrendingUp className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Data Visualizer</h1>
                <p className="text-primary-foreground/80 text-sm">Interactive Chart Dashboard</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <TrendingUp className="h-5 w-5" />
                <span>Smart Analytics</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/80">
                <PieChart className="h-5 w-5" />
                <span>Interactive Charts</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Interactive Data Visualization
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your data into beautiful, interactive charts. 
            Visualize your insights with modern, responsive design.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border hover:shadow-lg transition-all duration-300 animate-float">
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <PieChart className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Pie Charts</h3>
                <p className="text-sm text-muted-foreground">Perfect for proportional data</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Bar Charts</h3>
                <p className="text-sm text-muted-foreground">Compare categories effectively</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '1s' }}>
            <div className="flex items-center space-x-3">
              <div className="bg-primary p-2 rounded-full">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Line Charts</h3>
                <p className="text-sm text-muted-foreground">Track trends over time</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Chart Display */}
        <ChartList />
      </section>

      {/* Footer */}
      <footer className="bg-muted text-muted-foreground py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold">Data Visualizer</span>
          </div>
          <p className="text-muted-foreground">
            Beautiful and interactive data visualization experience
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
