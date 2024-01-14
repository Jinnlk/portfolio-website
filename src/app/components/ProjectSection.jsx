import React from 'react'
import ProjectCard from "@/app/components/ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Automated Slack Bot",
        description: "Custom Slack bot made to automate reminders. Hosted on AWS Lambda and utilizes BeautifulSoup for webscraping.",
        image: "/projects/slack-bot.png",
        tag: ["Slack API", "AWS Lambda", "BeautifulSoup"]
    },

    {
        id: 2,
        title: "Evaluating TF-IDF Value Accuracy on Detecting Fraudulent Job Postings",
        description: "Explored the effectiveness of TF-IDF Values on detecting fraudulent job postings through evaluation of various common classification machine learning models.",
        image: "/projects/tf-idf.png",
        tag: ["Natural Language Processing", "Classification Models", "TF-IDF"]
    }
]

const ProjectSection = () => {
    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image}
            />
                )}
            </div>
        </>
    );
};

export default ProjectSection