
import { useQuery } from '@tanstack/react-query'
import { supabase } from '@/lib/supabase'

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

export const useChartData = () => {
  return useQuery({
    queryKey: ['chartData'],
    queryFn: async (): Promise<ChartData[]> => {
      console.log('Fetching chart data from Supabase...')
      
      const { data, error } = await supabase
        .from('dump_this_table_prabin')
        .select('json_input_from_ai')
        .order('created_at', { ascending: false })

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Error fetching chart data:', error)
        throw error
      }

      if (!data || data.length === 0) {
        console.log('No data found in database')
        return []
      }

      const parsedData = data?.map(item => {
        try {
          // Check if json_input_from_ai is already an object or a string
          let chartData;
          if (typeof item.json_input_from_ai === 'string') {
            chartData = JSON.parse(item.json_input_from_ai)
          } else {
            // It's already an object
            chartData = item.json_input_from_ai
          }
          
          console.log('Chart data item:', chartData)
          return chartData
        } catch (e) {
          console.error('Error processing data:', e, 'Raw data:', item.json_input_from_ai)
          return null
        }
      }).filter(Boolean) || []

      console.log('Final parsed data:', parsedData)
      return parsedData
    }
  })
}
