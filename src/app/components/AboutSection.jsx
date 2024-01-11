"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Python</li>
                <li>Java</li>
                <li>Pandas</li>
                <li>SQL</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul>
                <li>University of California, Berkeley</li>
                <li>Computer Science & Data Science</li>
            </ul>
        )
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <ul className="list-disc pl-2">
                <li>Student Association for Applied Statistics</li>
                <li>EthiCAL Apparel</li>
            </ul>
        )
    }
    ]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
            }
        );
    };

    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 mx-4 xl:gap-16 sm:py-16 xl:py-16">
                <Image
                    src="/jinn-ethical-clouds.JPEG"
                    alt="jinn image"
                    width={300}
                    height={300}
                />
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">{"Growing up in the Central Valley made me question one thing - where's all the tech? For the first 16 years of my life, I never realized how under-resourced my community was in higher education until I went college exploring. I met with peers from all around the world who had better academic resources that aided them to pathways in tech. Instead of letting this setback weigh me down, I've used it as inspiration to always take opportunities to further my tech journey. I'm currently studying Computer Science and Data Science with an emphasis in Economics. Despite the cool names, machine learning and AI fascinate me. I think it's amazing how big data can be manipulated to find remarkable insights and want to discover how far society can push these topics. So when I'm not tinkering with ML models, you can find me dialing in espresso or composing my next best outfit of the day."}
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                            Education
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>
                            Experience
                        </TabButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;