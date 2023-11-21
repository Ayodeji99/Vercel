import NavigationButtons from "../buttons/navigation-buttons";


const AnswerThree = () => {
    return (
        <div>

<h1>Question 3</h1>
            <h2>How would you compare Next.js with another frontend framework? 
                Feel free to compare with a framework of your choice? </h2>

            <p>
                I would be ccomparing Next.js with React.js, React is a Javascript Library
                for building user interfaces and Single-page applications, while Next Js is a React
                framework: meaning that it is built on top of React and adds additional
                features to facilitates server-side rendering, routing, and other aspects 
                of building web applications.
            </p>

            <div>
                <h3>Rendering</h3>
                <p>React: Primarily focused on client-side rendering (CSR).
                     Initial page load involves loading JavaScript, which then renders the components on the client side.</p>
                     <p>
                     Next.js: Supports both client-side rendering and server-side rendering (SSR).
                      SSR improves initial page load times and is beneficial for SEO.
                     </p>

                     <h3>Routing</h3>
                     <p>
                     React: Requires additional libraries or manual configuration for routing. 
                     Commonly used libraries include React Router.
                     </p>
                     <p>
                     Next.js: Provides a file-system-based routing system. 
                     Each .js or .tsx file in the pages directory corresponds to a route. This makes routing straightforward and intuitive.
                     </p>

                     <h3>File-based Routing</h3>
                     <p>React: Typically involves configuring routes separately from component files.</p>
                     <p>Next.js: Utilizes a file-based routing system, enhancing project structure and making it easy
                         to understand the relationship between routes and components.</p>

                         <h3>Ecosystem</h3>
                         <p>
                         React: Has a vast ecosystem of third-party libraries, tools, and resources.
                         </p>
                         <p>
                         Next.js: Inherits the React ecosystem and adds its own features. 
                         The Next.js ecosystem includes plugins, integrations, and conventions 
                         tailored for server-side rendering and routing.
                         </p>

                         <h3>Deployment</h3>
                         <p>React: Can be deployed to static file hosts, 
                            CDN (Content Delivery Network), or server environments.</p>
                            <p>
                            Next.js: Can be deployed similarly to React applications. 
                            Additionally, it supports serverless deployments on platforms like Vercel, 
                            making it easy to deploy and scale applications.
                            </p>
            </div>
            <NavigationButtons previous="/questiontwo" next="/questionfour" />
        </div>
    )
}

export default AnswerThree;