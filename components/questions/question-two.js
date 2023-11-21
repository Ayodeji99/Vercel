import NavigationButtons from "../buttons/navigation-buttons";


const AnswerTwo = () => {
    return (
        <div>
            <h1>Question 2</h1>
            <h2>Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role).
                 How did you determine that your solution was successful? </h2>
                 <p>
                    During my time working with an ATM company(name withheld) we were supposed to stage,
                    blast, fix cameras(standard and shutter), configure the printer and run tests on 185 Automated which were meant to be delivered to another state
                    in the northern part of the country, the containers that would transport them
                    were to arrive in 3 hours, after blasting and fixing, we discovered that we were short of 7 standar cameras,
                    and ordering new ones from the office would take 2-3 days, so there were some machines 
                    that were also at a side in the warehouse which were meant to be delivered in 3 week that were fully
                    staged, blasted and cameras(both standard and shutter) were also fixed I thought about this and told the team
                    about taking out the cameras out of the fixed ones that were meant for delivery in 3 weeks
                    while we order the new set from the office and replace them when they arrive as we have to priotise the 
                    machines going out in 3 hours over the ones that are meant to be delivered in
                    the next 3 weeks to maintain a good customer service relationship, the team agreed with the idea, as it was 
                    a collective effort, the cameras were fixed and the machines were delivered, our clients were also happy.
                 </p>
                 <NavigationButtons previous="/questiontwo" next="/questionthree" />
        </div>
    )
}

export default AnswerTwo;