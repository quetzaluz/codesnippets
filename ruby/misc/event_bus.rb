class EventBus
  def initialize
    @subscriptions = {}
  end
  
  def emit(event_name,  data) 
      if @subscriptions[event_name] && @subscriptions[event_name].any?
          @subscriptions[event_name].each{ |p| p.call(data) }
      end
  end

  def subscribe(event_name,  callback)
      @subscriptions[event_name] ||= []
      @subscriptions[event_name] << callback
  end
end