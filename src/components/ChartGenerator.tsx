import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Mountain, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BarChartComponent } from "./charts/BarChartComponent";
import { Button } from "@/components/ui/button";
import { LineChartComponent } from "./charts/LineChartComponent";
import { PieChartComponent } from "./charts/PieChartComponent";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

interface ChartData {
  type: 'pie' | 'bar' | 'line';
  data: Array<{
    category?: string;
    time?: string;
    value: number;
  }>;
  title?: string;
  axisXTitle?: string;
  axisYTitle?: string;
  width?: number;
  height?: number;
}

export const ChartGenerator = () => {
  const [jsonInput, setJsonInput] = useState('');
  const [chartData, setChartData] = useState<ChartData | null>(null);
  const [error, setError] = useState('');

  const handleGenerateChart = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      
      // Validate the structure
      if (!parsed.type || !parsed.data || !Array.isArray(parsed.data)) {
        throw new Error('Invalid data structure. Must have "type" and "data" array.');
      }

      if (!['pie', 'bar', 'line'].includes(parsed.type)) {
        throw new Error('Chart type must be "pie", "bar", or "line".');
      }

      setChartData(parsed);
      setError('');
      toast.success("Chart generated successfully!", {
        description: `Created a beautiful ${parsed.type} chart with Nepal-inspired styling`
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid JSON format');
      toast.error("Failed to generate chart", {
        description: "Please check your JSON format and try again"
      });
    }
  };

  const sampleData = {
    pie: {
      type: "pie",
      data: [
        { category: "Antônio Carlos Jobim", value: 22 },
        { category: "Amy Winehouse", value: 18 },
        { category: "AC/DC", value: 16 },
        { category: "Audioslave", value: 16 },
        { category: "Aerosmith", value: 10 }
      ],
      title: "Tracks Sold by Artists",
      width: 600,
      height: 400
    },
    bar: {
      type: "bar",
      data: [
        { category: "Antônio Carlos Jobim", value: 22 },
        { category: "Amy Winehouse", value: 18 },
        { category: "AC/DC", value: 16 },
        { category: "Audioslave", value: 16 },
        { category: "Aerosmith", value: 10 }
      ],
      title: "Tracks Sold by Artists",
      axisXTitle: "Artist",
      axisYTitle: "Tracks Sold",
      width: 600,
      height: 400
    },
    line: {
      type: "line",
      data: [
        { time: "January", value: 22 },
        { time: "February", value: 18 },
        { time: "March", value: 16 },
        { time: "April", value: 16 },
        { time: "May", value: 10 }
      ],
      title: "Monthly Sales Trend",
      axisXTitle: "Month",
      axisYTitle: "Sales",
      width: 600,
      height: 400
    }
  };

  const loadSampleData = (type: 'pie' | 'bar' | 'line') => {
    setJsonInput(JSON.stringify(sampleData[type], null, 2));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Input Section */}
      <Card className="bg-card/80 backdrop-blur-sm border-slate-100 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-nepal-blue/10 to-slate-100/10">
          <CardTitle className="flex items-center space-x-2 text-nepal-blue">
            <Upload className="h-5 w-5" />
            <span>Chart Data Input</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-nepal-blue mb-2 block">
                Paste your JSON data:
              </label>
              <Textarea
                value={jsonInput}
                onChange={(e) => setJsonInput(e.target.value)}
                placeholder="Paste your chart JSON data here..."
                rows={12}
                className="font-mono text-sm border-nepal-blue/20 focus:border-slate-100"
              />
            </div>

            {error && (
              <Alert className="border-nepal-crimson/30 bg-nepal-crimson/10">
                <AlertCircle className="h-4 w-4 text-nepal-crimson" />
                <AlertDescription className="text-nepal-crimson">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={handleGenerateChart}
                className="bg-gradient-to-r from-nepal-blue to-nepal-crimson hover:from-nepal-crimson hover:to-nepal-blue text-white flex-1"
              >
                <Mountain className="h-4 w-4 mr-2" />
                Generate Chart
              </Button>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-muted-foreground mb-3">Try sample data:</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleData('pie')}
                  className="border-slate-100 text-nepal-blue hover:bg-slate-100/10"
                >
                  Pie Chart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleData('bar')}
                  className="border-nepal-blue text-nepal-blue hover:bg-nepal-blue/10"
                >
                  Bar Chart
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => loadSampleData('line')}
                  className="border-nepal-crimson text-nepal-crimson hover:bg-nepal-crimson/10"
                >
                  Line Chart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Display Section */}
      <Card className="bg-gray-100 border-nepal-blue/20 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-slate-100/10 to-nepal-blue/10">
          <CardTitle className="text-nepal-blue">Chart Preview</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {chartData ? (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-nepal-blue mb-4">
                  {chartData.title || 'Chart Visualization'}
                </h3>
              </div>
              
              <div className="flex justify-center">
                {chartData.type === 'pie' && <PieChartComponent data={chartData} />}
                {chartData.type === 'bar' && <BarChartComponent data={chartData} />}
                {chartData.type === 'line' && <LineChartComponent data={chartData} />}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-64 text-center">
              <Mountain className="h-16 w-16 text-slate-400 mb-4" />
              <h3 className="text-lg font-medium text-nepal-blue mb-2">
                Ready to Visualize Your Data
              </h3>
              <p className="text-muted-foreground">
                Paste your JSON data and click "Generate Chart" to see your beautiful visualization
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
