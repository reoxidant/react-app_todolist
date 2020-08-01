import React from 'react';
import './app.css';
import Header from "./header/header";
import Content from "./content/content";

const projectList = [
    {
        projectName: "Freelance",
        tasks: [
            {
                label: "Build new React app",
                status: 0,
                important: false
            },
            {
                label: "Learn English",
                status: 2,
                important: true
            },
            {
                label: "Learn a new course for IOS Development",
                status: 1,
                important: false
            },
            {
                label: "Take a call client Mary Sokolov",
                status: 0,
                important: true
            }
        ],
    },
    {
        projectName: "Homeworks",
        tasks: [
            {
                label: "Drink Coffee",
                status: 1,
                important: false
            },
            {
                label: "Brush teeth",
                status: 0,
                important: true
            },
            {
                label: "Speak English with anyone",
                status: 2,
                important: true
            },
            {
                label: "Go out on the street",
                status: 2,
                important: false
            },
        ]
    }
];

const statusList = [
    {
        name: "Today",
        select: false
    },
    {
        name: "Complete",
        select: false
    },
    {
        name: "Need to do",
        select: true
    }
];

const App = () => {
    return (
        <div>
            <Header/>
            <Content todoList={projectList} statusList={statusList}/>
        </div>
    );
}

export default App;