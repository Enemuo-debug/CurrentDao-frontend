export interface ChartDataPoint {
  x: string | number | Date;
  y: number;
  label?: string;
  color?: string;
}

export interface ChartData {
  name: string;
  data: ChartDataPoint[];
  color?: string;
}

export interface PieChartData {
  name: string;
  value: number;
  color?: string;
}

export interface ChartTheme {
  backgroundColor?: string;
  gridColor?: string;
  textColor?: string;
  colors: string[];
}

export interface ChartConfig {
  width?: number;
  height?: number;
  margin?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  theme?: ChartTheme;
  animation?: boolean;
  responsive?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  showGrid?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  zoomEnabled?: boolean;
  panEnabled?: boolean;
  exportEnabled?: boolean;
}

export interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  coordinate?: {
    x: number;
    y: number;
  };
}

export interface ChartLegendProps {
  payload?: any[];
  align?: 'left' | 'center' | 'right';
  verticalAlign?: 'top' | 'middle' | 'bottom';
  iconType?: 'line' | 'square' | 'rect' | 'circle' | 'cross' | 'diamond' | 'star' | 'triangle' | 'wye';
  layout?: 'horizontal' | 'vertical';
}

export interface ChartAxisProps {
  dataKey?: string;
  type?: 'number' | 'category';
  domain?: [number | string, number | string] | 'auto' | 'dataMin' | 'dataMax';
  ticks?: number[];
  tickFormatter?: (value: any) => string;
  label?: string;
  angle?: number;
  textAnchor?: 'start' | 'middle' | 'end';
}

export interface LineChartProps extends ChartConfig {
  data: ChartData[];
  strokeWidth?: number;
  dot?: boolean | { r?: number; fill?: string };
  curveType?: 'linear' | 'basis' | 'cardinal' | 'catmullRom' | 'monotoneX' | 'monotoneY' | 'natural' | 'step' | 'stepAfter' | 'stepBefore';
  showArea?: boolean;
  gradient?: boolean;
  title?: string;
  description?: string;
  className?: string;
  showControls?: boolean;
  onDataPointClick?: (data: any) => void;
  ariaLabel?: string;
}

export interface BarChartProps extends ChartConfig {
  data: ChartData[];
  barSize?: number;
  radius?: number | [number, number, number, number];
  layout?: 'horizontal' | 'vertical';
  stackId?: string;
  title?: string;
  description?: string;
  className?: string;
  showControls?: boolean;
  onDataPointClick?: (data: any) => void;
  ariaLabel?: string;
}

export interface PieChartProps extends ChartConfig {
  data: PieChartData[];
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  paddingAngle?: number;
  showLabels?: boolean;
  labelLine?: boolean;
  title?: string;
  description?: string;
  className?: string;
  showControls?: boolean;
  onDataPointClick?: (data: any) => void;
  ariaLabel?: string;
}

export interface AreaChartProps extends ChartConfig {
  data: ChartData[];
  strokeWidth?: number;
  dot?: boolean | { r?: number; fill?: string };
  curveType?: 'linear' | 'basis' | 'cardinal' | 'catmullRom' | 'monotoneX' | 'monotoneY' | 'natural' | 'step' | 'stepAfter' | 'stepBefore';
  gradient?: boolean;
  stackId?: string;
  title?: string;
  description?: string;
  className?: string;
  showControls?: boolean;
  onDataPointClick?: (data: any) => void;
  ariaLabel?: string;
}

export interface ChartExportOptions {
  format: 'png' | 'svg' | 'pdf';
  filename?: string;
  quality?: number;
  backgroundColor?: string;
}

export interface ChartInteractionState {
  isZoomed: boolean;
  zoomDomain?: {
    x?: [number, number];
    y?: [number, number];
  };
  isPanning: boolean;
  selectedData?: any;
}

export type ChartType = 'line' | 'bar' | 'pie' | 'area';

export interface EnergyTradingData {
  timestamp: Date;
  price: number;
  volume: number;
  demand: number;
  supply: number;
  source: string;
}

export interface MarketTrendData {
  period: string;
  trend: 'up' | 'down' | 'stable';
  change: number;
  volume: number;
}

export interface UserAnalyticsData {
  userId: string;
  trades: number;
  volume: number;
  profit: number;
  efficiency: number;
  timestamp: Date;
}
