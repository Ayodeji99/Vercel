import NavigationButtons from "../buttons/navigation-buttons";

const AnswerOne = () => {
    return (
             
        <div>
            <h1>Question 1</h1>
            <h2>What do you want to learn or do more of at work?</h2>
            <p>As a Customer Success Manager, i would like to stay update on 
                the latest industry trends and techonolgy revelant to my services,
                i would like to deepen my knowledge and understanding of the company's 
                products and services technical architechture and integrations,
                i would like to strenghten my collaboration skill by working closely
                with product development, sales, and marketing teams fostering a culture
                of cross-functional collaboration toimprove overall customer experience.
                 </p>
                 <p>
                    I would like to find solutions to the customer problems, developing
                    strateegies for building and maintaining long-term relationships with all customers,
                    identifying opportunities for upselling or cross-selling based on customer needs. 
                    I would also stay abreast of developments in the customer success field by attending
                    conference, webinars, and workshops. Also, i would like to take on leadership role
                    within the organization contributing to streategy and decision-making.
                 </p>

                 <NavigationButtons previous="/" next="/questiontwo" />
        </div>
    
    )
}
export default AnswerOne;