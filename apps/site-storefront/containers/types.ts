export interface WidgetPayload {
  id?: number;
  name?: string;
  url?: string;
  method?: string;
  sideLoader?: string;
  widget_id?: number;
}

export interface WidgetData {
  id?: number;
  widget_name?: string;
  hidden?: boolean;
  widget_index?: number;
  component?: string | null;
  component_view?: string | null;
  payload?: WidgetPayload;
  page_id?: number;
  data?: any;
}
