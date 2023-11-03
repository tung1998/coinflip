declare global {
  type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'get' | 'HEAD' | 'PATCH' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'post' | 'put' | 'delete' | 'head' | 'patch' | 'connect' | 'options' | 'trace' | undefined

  type TrackingEvent = 'page_view' | 'view_content' | 'contact' | 'add_to_cart' | 'initiate_checkout' | 'view_item_list' | 'select_item'

  interface TrackEventData {
    event: string
    actionName?: string
    elementName?: string
    data?: {[key:string]: any}
  }

}

export {}
