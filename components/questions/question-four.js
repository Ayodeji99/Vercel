import NavigationButtons from "../buttons/navigation-buttons";


const AnswerFour = () => {
    return (
        <div>

<h1>Question 4</h1>
            <h2>When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?</h2>
            <p>Vercel provides different serverless and edge computing options,
                 including Edge Functions, Serverless Functions, and Edge Middleware. 
                 The choice between them depends on the specific requirements and architecture of your project</p>

                 <div>
                    <h3>Edge Functions</h3>
                    <p>
                    Use Case: Edge Functions are ideal when you need to execute logic 
                    directly at the edge locations of Vercel's global network. 
                    This allows you to perform operations close to the end-users, reducing latency.
                    </p>
                    <p>
                    Key Features: Executed at the edge locations, instant global deployment, 
                    can intercept and modify requests and responses.
                    </p>
                    <p>
                    Example Use Cases: A/B testing, header manipulation,
                    authentication checks at the edge, etc.
                    </p>
                 </div>

                 <div>
                    <h3>Serveless Functions</h3>
                    <p>
                    Use Case: Serverless Functions are suitable for executing 
                    logic on-demand in response to specific HTTP requests. 
                    These functions run in the cloud (not necessarily at the edge locations)
                     and can be triggered by HTTP requests or other events.
                    </p>
                    <p>
                    Key Features: Event-driven, scalable, can be deployed globally 
                    but may introduce some additional latency compared to Edge Functions.
                    </p>
                    <p>
                    Example Use Cases: API endpoints, form handling, 
                    backend processing triggered by HTTP requests, etc.
                    </p>
                 </div>

                 <div>
                    <h3>Edge Middleware</h3>
                    <p>
                    Use Case: Edge Middleware is designed for modifying requests 
                    and responses at the edge locations, similar to Edge Functions. 
                    However, it's specifically focused on middleware-type functionality,
                     allowing for reusable logic to be applied across multiple routes
                    </p>
                    <p>
                    Key Features: Reusable middleware logic, 
                    can be applied to specific routes or globally, executed at the edge.
                    </p>
                    <p>
                    Example Use Cases: Caching strategies, security headers, 
                    common request/response modifications applied to multiple routes.
                    </p>
                 </div>
                 <NavigationButtons previous="/questionthree" next="/questionfive" />
        </div>
    )
}

export default AnswerFour;