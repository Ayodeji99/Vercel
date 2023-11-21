import NavigationButtons from "../buttons/navigation-buttons";



const AnswerNine = () => {
    return (
        <div>

<h1>Question 9</h1>
            <h2>
            What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
            </h2>
            <p>
                One of the common problems customers are likely 
                to face while seeking help from vercel accord to research 
                is related to deployment issues or errors during the build process.
                Deploying the applications successfully can be challenging due to 
                various factors such as configuration errors, dependency mismatches,
                or issues with the build script.
            </p>  <br />
            <h3>
                Short-Term
            </h3>
            <p>
                Finding short term solutions, i would use the following 
                leverage to assist the customers
            </p>
                <ol>
                    <li>Error Analysis</li>
                    <li>Documentation Guidance</li>
                    <li>Configuration Review</li>
                    <li>Dependency Updates</li>
                    <li>Build Command Checks</li>
                </ol>

            <h3>
                Long Term
            </h3>
            <p>
            Finding short term solutions, i would use the following 
                leverage to assist the customers
            </p>
                <ol>
                    <li>Educational Resources</li>
                    <li>Community Engagement</li>
                    <li>Diagnostic Tools</li>
                    <li>Continuous Integration/Continuous Deployment(CI/CD)</li>
                    <li>Feedback Loop</li>
                    <li>Regular Updates</li>
                </ol>

            <p>
            By combining short-term solutions for immediate problem resolution with long-term strategies focused on education, tool adoption, and community engagement, customers can build resilience in their deployment processes. This approach not only resolves immediate issues but also equips customers with the knowledge and tools to navigate future challenges more effectively.
            </p>
            <NavigationButtons previous="/questioneight" next="/questionten" />
        </div>
    )
}

export default AnswerNine;