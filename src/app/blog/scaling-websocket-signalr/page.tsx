import Link from "next/link";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Footer } from "@/components/sections/Footer";
import "../blog-styles.css";

export const metadata: Metadata = {
  title: "Scaling WebSocket Connections: SignalR in Enterprise Systems",
  description:
    "How I architected real-time telemetry streaming for FLEDEM's fleet management platform handling thousands of vehicle connections.",
};

export default function ScalingWebSocketBlogPost() {
  return (
    <main className="min-h-screen bg-white text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,31,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,77,31,0.1),transparent_50%)]" />

        <div className="relative py-16 sm:py-20">
        <Container>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:bg-zinc-50 hover:shadow dark:bg-zinc-900 dark:text-zinc-300 dark:ring-white/10 dark:hover:bg-zinc-800"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          <header className="mt-10 max-w-3xl">
            <Badge className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white">
              Real-Time
            </Badge>
            <h1 className="mt-6 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-zinc-50 dark:via-zinc-200 dark:to-zinc-50">
              Scaling WebSocket Connections: SignalR in Enterprise Systems
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              How I architected real-time telemetry streaming for FLEDEM's fleet management 
              platform handling thousands of vehicle connections with millisecond-level latency.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time dateTime="2025-12-15">December 15, 2025</time>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>10 min read</span>
              </div>
            </div>
          </header>
        </Container>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 sm:py-20">
        <Container>

          <div className="prose prose-zinc mx-auto mt-12 max-w-3xl dark:prose-invert">
            <h2>The Problem: Real-Time at Scale</h2>
            <p>
              When I joined the FLEDEM project, the fleet management platform needed to stream 
              real-time CAN bus telemetry from thousands of vehicles to dashboard clients. 
              The requirements were demanding:
            </p>
            <ul>
              <li>
                <strong>Thousands of concurrent vehicle connections</strong> each sending telemetry data
              </li>
              <li>
                <strong>Sub-100ms latency</strong> for critical event detection
              </li>
              <li>
                <strong>Automatic reconnection</strong> for vehicles with intermittent connectivity
              </li>
              <li>
                <strong>Graceful degradation</strong> during high load or network issues
              </li>
            </ul>

            <h2>Why SignalR?</h2>
            <p>
              Given that FLEDEM's backend is built on ASP.NET Core 8, SignalR was the natural 
              choice for real-time communication. SignalR provides:
            </p>
            <ul>
              <li>Automatic fallback from WebSockets to Server-Sent Events to long polling</li>
              <li>Built-in reconnection logic</li>
              <li>Scale-out support with Azure SignalR Service or Redis backplane</li>
              <li>Typed hubs with strong typing in TypeScript clients</li>
            </ul>

            <h2>Hub Architecture</h2>
            <p>
              I designed a hub-per-domain architecture to separate concerns:
            </p>

            <h3>1. TelemetryHub - Vehicle Data Streaming</h3>
            <pre>
              <code>
{`// TelemetryHub.cs
public class TelemetryHub : Hub
{
    private readonly ITelemetryService _telemetryService;
    private readonly IFleetAccessService _fleetAccess;

    public async Task SubscribeToVehicle(Guid vehicleGuid)
    {
        // Verify user has access to this vehicle
        var hasAccess = await _fleetAccess
            .UserHasVehicleAccess(Context.UserIdentifier, vehicleGuid);
        
        if (!hasAccess) 
            throw new HubException("Access denied");

        // Add to vehicle-specific group
        await Groups.AddToGroupAsync(Context.ConnectionId, 
            $"vehicle_{vehicleGuid}");
            
        // Send last known state immediately
        var lastState = await _telemetryService
            .GetLastKnownState(vehicleGuid);
        await Clients.Caller.SendAsync("InitialState", lastState);
    }

    public async Task UnsubscribeFromVehicle(Guid vehicleGuid)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, 
            $"vehicle_{vehicleGuid}");
    }
}`}
              </code>
            </pre>

            <h3>2. Background Service for Data Broadcasting</h3>
            <p>
              Instead of having vehicles push directly to hubs (which would create connection 
              bottlenecks), I implemented a background service that:
            </p>
            <ol>
              <li>Receives vehicle telemetry via API endpoints</li>
              <li>Processes and validates the data</li>
              <li>Broadcasts to subscribed clients via SignalR groups</li>
            </ol>
            <pre>
              <code>
{`// VehicleTelemetryBackgroundService.cs
public class VehicleTelemetryBackgroundService : BackgroundService
{
    private readonly IHubContext<TelemetryHub> _hubContext;
    private readonly BlockingCollection<TelemetryMessage> _queue;

    protected override async Task ExecuteAsync(
        CancellationToken stoppingToken)
    {
        await foreach (var batch in _queue
            .GetConsumingEnumerable(stoppingToken)
            .Buffer(TimeSpan.FromMilliseconds(50), 100))
        {
            // Group by vehicle for efficient broadcasting
            var grouped = batch.GroupBy(m => m.VehicleGuid);
            
            var tasks = grouped.Select(async group => 
            {
                var vehicleGuid = group.Key;
                var latest = group
                    .OrderByDescending(m => m.Timestamp)
                    .First();
                    
                await _hubContext.Clients
                    .Group($"vehicle_{vehicleGuid}")
                    .SendAsync("TelemetryUpdate", latest);
            });
            
            await Task.WhenAll(tasks);
        }
    }
}`}
              </code>
            </pre>

            <h2>Client-Side Architecture (React + TypeScript)</h2>
            <p>
              On the frontend, I created a custom hook for managing SignalR connections:
            </p>

            <h3>useSignalR Hook</h3>
            <pre>
              <code>
{`// hooks/useSignalR.ts
export function useSignalR() {
  const [connection, setConnection] = 
    useState<HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl("/hubs/telemetry", {
        accessTokenFactory: () => getAccessToken(),
      })
      .withAutomaticReconnect({
        nextRetryDelayInMilliseconds: (retryContext) => {
          // Exponential backoff: 0s, 2s, 10s, 30s, 60s
          const delays = [0, 2000, 10000, 30000, 60000];
          return delays[Math.min(retryContext.previousRetryCount, 4)];
        },
      })
      .configureLogging(LogLevel.Warning)
      .build();

    newConnection.onreconnecting(() => {
      console.log("SignalR reconnecting...");
      setIsConnected(false);
    });

    newConnection.onreconnected(() => {
      console.log("SignalR reconnected!");
      setIsConnected(true);
      // Re-subscribe to previous groups
      resubscribeToGroups(newConnection);
    });

    newConnection.onclose(() => {
      setIsConnected(false);
    });

    setConnection(newConnection);

    return () => {
      newConnection.stop();
    };
  }, []);

  return { connection, isConnected };
}`}
              </code>
            </pre>

            <h3>Vehicle Telemetry Component</h3>
            <pre>
              <code>
{`// components/VehicleTelemetry.tsx
export function VehicleTelemetry({ vehicleGuid }: Props) {
  const { connection, isConnected } = useSignalR();
  const [telemetry, setTelemetry] = 
    useState<TelemetryData | null>(null);

  useEffect(() => {
    if (!connection || !isConnected) return;

    const handleUpdate = (data: TelemetryData) => {
      setTelemetry(data);
    };

    connection.on("TelemetryUpdate", handleUpdate);
    connection.on("InitialState", handleUpdate);

    // Subscribe to vehicle
    connection.invoke("SubscribeToVehicle", vehicleGuid);

    return () => {
      connection.off("TelemetryUpdate", handleUpdate);
      connection.off("InitialState", handleUpdate);
      connection.invoke("UnsubscribeFromVehicle", vehicleGuid);
    };
  }, [connection, isConnected, vehicleGuid]);

  if (!telemetry) return <div>Loading...</div>;

  return (
    <div>
      <h3>Speed: {telemetry.speed} km/h</h3>
      <h3>RPM: {telemetry.rpm}</h3>
      {/* ... more telemetry data ... */}
    </div>
  );
}`}
              </code>
            </pre>

            <h2>Performance Optimizations</h2>

            <h3>1. Message Batching</h3>
            <p>
              Instead of sending every telemetry update immediately, I implemented batching:
            </p>
            <ul>
              <li>
                <strong>50ms window</strong> - Collect updates for 50ms before broadcasting
              </li>
              <li>
                <strong>Max 100 messages per batch</strong> - Prevents memory buildup
              </li>
              <li>
                <strong>Latest value wins</strong> - Only send the most recent value per signal
              </li>
            </ul>
            <p>
              This reduced outgoing message volume by 80% while maintaining perceived real-time performance.
            </p>

            <h3>2. Connection Pooling</h3>
            <p>
              SignalR connections are expensive. I optimized by:
            </p>
            <ul>
              <li>Reusing connections across components via React Context</li>
              <li>Implementing connection keepalive pings every 30 seconds</li>
              <li>Gracefully closing idle connections after 5 minutes</li>
            </ul>

            <h3>3. Selective Subscriptions</h3>
            <p>
              Instead of streaming all telemetry channels, clients subscribe only to the signals 
              they need:
            </p>
            <pre>
              <code>
{`await connection.invoke("SubscribeToChannels", vehicleGuid, [
  "Vehicle_Speed",
  "Engine_RPM",
  "Battery_Voltage"
]);`}
              </code>
            </pre>
            <p>
              This reduced bandwidth by 60% for typical dashboard views.
            </p>

            <h2>Handling Reconnection Gracefully</h2>
            <p>
              Network interruptions are common in fleet management. I implemented several strategies:
            </p>

            <h3>1. Automatic Resubscription</h3>
            <pre>
              <code>
{`// Store subscriptions in React Context
const subscriptionsRef = useRef<Set<string>>(new Set());

connection.onreconnected(async () => {
  // Resubscribe to all previous groups
  for (const vehicleGuid of subscriptionsRef.current) {
    await connection.invoke("SubscribeToVehicle", vehicleGuid);
  }
});`}
              </code>
            </pre>

            <h3>2. Backfilling Missed Data</h3>
            <p>
              When reconnecting, request data missed during disconnection:
            </p>
            <pre>
              <code>
{`connection.onreconnected(async (connectionId) => {
  const missedData = await connection.invoke(
    "GetDataSince", 
    vehicleGuid, 
    lastReceivedTimestamp
  );
  setTelemetry((prev) => [...prev, ...missedData]);
});`}
              </code>
            </pre>

            <h2>Monitoring & Observability</h2>
            <p>
              Real-time systems need comprehensive monitoring:
            </p>

            <h3>Metrics I Track</h3>
            <ul>
              <li>
                <strong>Connection count</strong> - Active WebSocket connections
              </li>
              <li>
                <strong>Message throughput</strong> - Messages per second
              </li>
              <li>
                <strong>Latency</strong> - Time from telemetry API call to client receipt
              </li>
              <li>
                <strong>Reconnection rate</strong> - How often clients reconnect
              </li>
              <li>
                <strong>Error rate</strong> - Failed message deliveries
              </li>
            </ul>

            <h3>Custom Middleware</h3>
            <pre>
              <code>
{`public class SignalRMetricsMiddleware
{
    public async Task OnConnectedAsync(HubLifetimeContext context, 
        Func<HubLifetimeContext, Task> next)
    {
        _metrics.IncrementConnections();
        _logger.LogInformation(
            "SignalR connection established: {ConnectionId}", 
            context.Context.ConnectionId
        );
        
        await next(context);
    }

    public async Task OnDisconnectedAsync(
        HubLifetimeContext context, 
        Exception exception, 
        Func<HubLifetimeContext, Exception, Task> next)
    {
        _metrics.DecrementConnections();
        _logger.LogInformation(
            "SignalR connection closed: {ConnectionId}", 
            context.Context.ConnectionId
        );
        
        await next(context, exception);
    }
}`}
              </code>
            </pre>

            <h2>Lessons Learned</h2>

            <h3>1. Don't Stream Everything</h3>
            <p>
              Early versions streamed all telemetry channels to all clients. This was wasteful. 
              Let clients subscribe to only what they need.
            </p>

            <h3>2. Batch Aggressively</h3>
            <p>
              Every WebSocket frame has overhead. Batching 10-100 messages together dramatically 
              reduces network load without impacting perceived latency.
            </p>

            <h3>3. Handle Reconnection Gracefully</h3>
            <p>
              Network interruptions will happen. Build reconnection into the architecture from day one, 
              and always resubscribe to groups after reconnecting.
            </p>

            <h3>4. Monitor Everything</h3>
            <p>
              Real-time systems fail silently. Comprehensive metrics and logging are essential for 
              debugging production issues.
            </p>

            <h3>5. Test with Load</h3>
            <p>
              I used SignalR's test server to simulate 5,000+ concurrent connections locally. 
              Load testing revealed bottlenecks before they hit production.
            </p>

            <h2>Results</h2>
            <p>
              The optimized SignalR architecture for FLEDEM achieved:
            </p>
            <ul>
              <li>
                <strong>Sub-100ms latency</strong> - From API ingestion to client display
              </li>
              <li>
                <strong>3,000+ concurrent connections</strong> - On a single ASP.NET Core server
              </li>
              <li>
                <strong>99.9% uptime</strong> - Automatic reconnection handles network blips
              </li>
              <li>
                <strong>80% bandwidth reduction</strong> - Through batching and selective subscriptions
              </li>
            </ul>

            <h2>Conclusion</h2>
            <p>
              Building real-time systems at scale requires careful architecture. SignalR provides 
              excellent primitives, but you need to:
            </p>
            <ul>
              <li>Batch messages to reduce overhead</li>
              <li>Use groups for efficient broadcasting</li>
              <li>Implement robust reconnection logic</li>
              <li>Monitor connection health and message throughput</li>
              <li>Let clients subscribe selectively</li>
            </ul>
            <p>
              The result is a production-ready real-time system that scales to thousands of 
              connections while maintaining millisecond-level latency.
            </p>

            <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Building a real-time system with WebSockets or SignalR?
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                I'd love to discuss architecture patterns and performance optimization strategies.
              </p>
              <Link
                href="/#contact"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </Container>
      </article>

      <Footer />
    </main>
  );
}
