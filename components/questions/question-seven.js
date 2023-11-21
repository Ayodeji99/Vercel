import Link from "next/link";
import NavigationButtons from "../buttons/navigation-buttons";


const AnswerSeven = () => {
    return (
        <div>

<h1>Question 7</h1>
            <h2>
            A customer has a project on Vercel and 
            they want to redirect the /blog path to another website. 
            Please write a reply to the customer. 
            Separately, list any relevant documentation you found 
            and any feedback or information you’d like to share about 
            your decision making process.
            </h2>

            <div>
                <h2>Subject: Assitance with Redirecting /blog Path on Vercel</h2>
                <h3>
                    Hi Customer,
                </h3>
                <p>
                Thank you for reaching out! I'd be happy to help you set up a redirect<br />
                 for the /blog path on your Vercel project. To achieve this, <br />
                 we can leverage Vercel's routing capabilities.
                </p>

                <p>
                Before proceeding, here are the steps to set up a redirect:
                </p>
                <h3>Create a vercel.json file:</h3>
                <p>If you don't already have one, create a vercel.json file in the root of your project.</p>
                <h3>Add Redirect Configuration:</h3>
                <p>If you don't already have one, create a vercel.json file in the root of your project.</p>
                <h3>Deploy Changes</h3>
                <p>
                After making these changes, deploy your project to Vercel. <br />
                The new routing configuration will take effect. <br />
                Please note that the status code in the configuration is set to 301,<br />
                which signifies a permanent redirect. <br />
                Adjust this code as needed based on your use case
                </p>
                
                <h3>Documentation</h3>
                <Link href='https://vercel.com/docs/projects/project-configuration#routes'>Vercel Routing Documentation</Link> <br />
                <Link href='https://vercel.com/docs/projects/project-configuration#redirects'>Vercel Redirects Documentation</Link>

                <h3>Decision-Making Process:</h3>
                <p>
                In making these recommendations, I referred to Vercel's official documentation <br />
                 on routing and redirects. The provided configuration is a standard way to set up redirects <br />
                  for specific paths. The 301 status code indicates a permanent redirect,<br />
                   which is suitable for scenarios where you want search engines to update their indexes<br />
                    with the new URL. Remember, these changes might take a short time to propagate globally <br />
                     due to caching. If you encounter any issues or have further questions, feel free to reach out.<br />
                      Let me know if you have any questions or if there's anything else I can assist you with!<br />

                Best regards,<br />
                <br />
                <br />

                Ayodeji Aransiola <br />
                Customer Success Manager <br />
                Vercel <br />   
                </p>

            </div>
            <NavigationButtons previous="/questionsix" next="/questioneight" />
        </div>
    )
}

export default AnswerSeven;