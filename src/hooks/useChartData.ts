
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

      const parsedData = data?.map(item => {
        try {
          const parsed = JSON.parse(item.json_input_from_ai)
          console.log('Parsed chart data:', parsed)
          return parsed
        } catch (e) {
          console.error('Error parsing JSON:', e, 'Raw data:', item.json_input_from_ai)
          return null
        }
      }).filter(Boolean) || []

      console.log('Final parsed data:', parsedData)
      return parsedData
    }
  })
}
