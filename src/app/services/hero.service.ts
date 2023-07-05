import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  myArray = ['1', '2', '3', '4', '5']

  

  courses: (any)[] = [
    {
        id: 1,
        title: 'Programming Basic with Python',
        description: 'Python is the number one programming language choice formachine learning, data science and artificial intelligence.',
        duration: '1.5 Months',
        fee: '150,000 Ks',
        img_url: '../assets/images/1.png',
        course_outline: [
            'Intro to Programming',
            'Pesudo Codes',
            'Flow Charts',
            'Getting familiar with Python',
            'Basic Data Types',
            'Python Operators',
            'Advanced Data Types',
            'Control Flow',
            'Python Functions',
            'User Input and Erros Handling',
            'Python Avanced Functions',
            'Intro to OOP',
            'Advaced OOP',
            'Serching and Sorting Alogrithms'
        ]
    },
    {
        id: 2,
        title: 'Introduction to Web Development',
        description: 'This course covers three essential concepts for aspiring web developers. This includes HTML, CSS, JavaScript and Bootstrap.',
        duration: '1.5 Months',
        fee: '150,000 Ks',
        img_url: '../assets/images/2.png',
        course_outline: [
            'Introduction to Software Development',
            'Introduction to Web Devlopment',
            'Introduction to HTML',
            'HTML Boilerplate',
            'Intermediate HTML',
            'Introduction to CSS',
            'External CSS',
            'Intermediate CSS',
            'Bootstrap',
            'Advanced CSS',
            'Introduction to JavaScript',
            'JavaScript DataTypes, Variables and Functions',
            'Intermediate JavaScript',
            'Document Object Model(DOM)',
            'Introduction to JQuery'
        ]
    }, 
    {
        id: 3,
        title: 'Web Development with Anuglar/React',
        description: 'This course reviews the benefits and challenges for Single Page Applications and how to overcome these.',
        duration: '2 Months',
        fee: '200,000 Ks',
        img_url: '../assets/images/3.png',
        course_outline: [
            'Introduction & installation',
            'Components and Service',
            'Routing and Navigation',
            'Templates',
            'NPM',
            'Forms',
            'HTTP Clients',
            'Authentication',
            'Pipes and Directives',
            'Routes Reuse Strategy',
            'Introduction to TDD(Test Driven Development)'
        ]
    },
    {
        id: 4,
        title: 'Mobile App Development with Flutter',
        description: 'This course covers how to build beautiful, natively compiled, multi-platform apps from a single code base.',
        duration: '2 Months',
        fee: '200,000 Ks',
        img_url: '../assets/images/4.png',
        course_outline: [
            'Introduction to Mobile Development',
            'Flutter Installation and Enviroment Setup',
            'Widgets, Layout and UI',
            'States',
            'Library, Packges and Plugins',
            'Dart OOP',
            'Flutter and API',
            'Flutter and Firebase(Auth, Analytics, Crashlytics, Firestore,etc..)',
            'State Management'
        ]
    },
    {
        id: 5,
        title: 'Backend Development with Python(Flask)',
        description: 'This course guides you how to develop professional-grade REST APIs',
        duration: '2 Months',
        fee: '200,000 Ks',
        img_url: '../assets/images/5.png',
        course_outline: [
            'Introduction to Software Development',
            'Flask Overview',
            'Flask with SQL Database',
            'SQLAlchemy',
            'Flask with No-SQL Database',
            'Deployment',
            'Intro to Advanced Security',
            'Intro to Cloud Computing'
        ]
    },
    {
        id: 6,
        title: 'Intensive Training',
        description: 'To accelerate your career in software development. Get game-changing skills through hands-on, interactive learning, projects, career preparation and more.',
        duration: '3 Months',
        fee: '500,000 Ks',
        img_url: '../assets/images/6.png',
        course_outline: [
            'Build relevant skills to launch a career in software development',
            'Develop your technical portfolio',
            'Gain an accredited qualification',
            'Boost your career opportunities'
        ]
    },
    {
        id: 7,
        title: 'Industrial Attachment Scheme',
        description: 'To give students the opportunities to apply their academic knowledge to industry skills. Be industry ready by training at our partership software companies',
        duration: '6 Months',
        fee: 'Paid Intership',
        img_url: '../assets/images/7.png',
        course_outline: [
            "Deliverables - based on the company's requirements on the job scope",
            "Technical Skills - this covers the ability to solve technical problems related to the job scope",
            "Life Skills - soft skills which help in ensuring a successful career in software industry"
        ]
    },
    {
        id: 8,
        title: 'Python Pro BootCamp',
        description: 'From Zero to Hero with Python',
        duration: '6 Months',
        fee: '150,000 MMK per Month',
        img_url: '../assets/images/8.png',
 course_outline: [
            "Master Python Programming",
            "Automation, Game & App Development",
            "Web Development",
            "Data Science and Machine Learning",
            "Selenium, Beautiful Soup, Request, Flask, Pandas, Numpy, SciKitLearn, Plotly & Matplotlib",
            "Portfolio of 100 Python projects"
        ]
    }
]

  constructor() { }
}
