
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChartComponent } from "./charts/PieChartComponent";
import { BarChartComponent } from "./charts/BarChartComponent";
import { LineChartComponent } from "./charts/LineChartComponent";
import { useChartData } from "@/hooks/useChartData";
import { Loader2, Database, TrendingUp } from "lucide-react";

export const ChartList = () => {
  const { data: charts, isLoading, error } = useChartData();

  if (isLoading) {
    return (
      <Card className="bg-card border shadow-lg">
        <CardContent className="p-12 flex flex-col items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-primary font-medium">Loading chart data from database...</p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-card border shadow-lg">
        <CardContent className="p-12 flex flex-col items-center justify-center">
          <Database className="h-8 w-8 text-destructive mb-4" />
          <p className="text-destructive font-medium">Failed to load chart data</p>
          <p className="text-sm text-muted-foreground mt-2">
            {error instanceof Error ? error.message : 'Unknown error occurred'}
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!charts || charts.length === 0) {
    return (
      <Card className="bg-card border shadow-lg">
        <CardContent className="p-12 flex flex-col items-center justify-center">
          <TrendingUp className="h-8 w-8 text-primary mb-4" />
          <p className="text-primary font-medium">No charts found</p>
          <p className="text-sm text-muted-foreground mt-2">
            Add some chart data to the database to see visualizations here
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Data Visualizations
        </h2>
        <p className="text-muted-foreground">
          Interactive charts generated from your database
        </p>
      </div>

      <div className="space-y-8">
        {charts.map((chart, index) => (
          <Card key={index} className="bg-card border shadow-lg w-full">
            <CardHeader className="bg-muted/50">
              <CardTitle className="text-foreground text-center">
                {chart.title || `Chart ${index + 1}`}
              </CardTitle>
              <div className="text-center">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {chart.type.toUpperCase()}
                </span>
              </div>
            </CardHeader>
            <CardContent className="p-6 w-full overflow-hidden">
              <div className="w-full">
                {chart.type === 'pie' && <PieChartComponent data={chart} />}
                {chart.type === 'bar' && <BarChartComponent data={chart} />}
                {chart.type === 'line' && <LineChartComponent data={chart} />}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
