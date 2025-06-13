
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
      const { data, error } = await supabase
        .from('dump_this_table_prabin')
        .select('json_input_from_ai')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching chart data:', error)
        throw error
      }

      return data?.map(item => {
        try {
          return JSON.parse(item.json_input_from_ai)
        } catch (e) {
          console.error('Error parsing JSON:', e)
          return null
        }
      }).filter(Boolean) || []
    }
  })
}
