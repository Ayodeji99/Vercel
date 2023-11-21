import Link from "next/link";
import NavigationButtons from "../buttons/navigation-buttons";


const AnswerEight = () => {
    return (
        <div>

<h1>Question 8</h1>
            <h2>
            A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Separately, list any relevant documentation you found and any feedback or information you’d like to share about your decision making process.
            </h2>

            <div>
                <h2>
                    Subject: Assistance with Disabling Search Engine Indexing for Your Site
                </h2>
                <h3>
                    Hi Customer,
                </h3>
                <p>
                Thank you for getting in touch! If you'd like to prevent search engines from indexing your site, <br />
                there are a few straightforward ways to achieve this.
                </p>
                <h3> Option 1: Robots.txt file</h3>
                <p>You can create a robots.txt file in the root of your project, <br />
                 This file instructs web crawlers not to index any content on your site. <br />
                  Remember that this is a convention, and well-behaved web crawlers respect it. <br />
                  However, it's not a foolproof method as some crawlers may ignore these instructions. </p>
                <h3>Option 2: HTML Meta Tag</h3>
                <p>Another option is to include a meta tag in the `head` section of your HTML pages, <br />
                This tag tells search engines not to index the page and not to follow any links on the page.</p>

                <h3>Documentation</h3>
                <Link href='https://vercel.com/docs/projects/project-configuration#advanced/robots-txt'>Vercel Robots.txt Documentation</Link> <br />
                <Link href='https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag'>HTML Meta Tags for Robots</Link>

                <h3>Decision-Making Process:</h3>
                <p>
                In recommending these options, I referred to Vercel's documentation <br />
                on the use of robots.txt for controlling web crawlers. <br />
                 The HTML meta tag is an additional measure that can be applied <br />
                 directly within the content of your web pages. It's important to note <br />
                 that while these methods are effective, they rely on the cooperation of search engines <br />
                 and web crawlers. Some well-behaved crawlers will respect these directives,<br />
                  but it's not a foolproof solution. If privacy or confidentiality is a major concern,<br />
                   you might also want to consider using authentication or other access controls <br />
                    to restrict access to your site. Feel free to implement the option  <br />
                    that best fits your needs, and let me know if you have any questions or <br />
                     if there's anything else I can assist you with!
                </p>
                <br />



                Best regards,<br />
                <br />
                <br />

                Ayodeji Aransiola <br />
                Customer Success Manager <br />
                Vercel <br />   
            </div>
            <NavigationButtons previous="/questionseven" next="/questionnine" />
        </div>
    )
}

export default AnswerEight;