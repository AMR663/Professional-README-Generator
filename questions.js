module.exports = {
    questions: [
        {
            type:'input',
            name:'Project title',
            message:'What is the name of your project?',
        },
        {
            type:'input',
            name:'Description',
            message:'What would you want your discription to say?',
        },
        {
            type:'input',
            name:'Installation',
            message:'Installation instructions?',
        },
        {
            type:'input',
            name:'Usage',
            message:'Would you like to add a Usage Guide?',
        },
        {
            type:'input',
            name:'Contributing',
            message:'Would you like to add a Contributing section?',
        },
        {
            type:'input',
            name:'Tests',
            message:'Would you like to add Tests?',
        },
        {
            type:'list',
            name:'License',
            message:'Would you like to add a License?',
            choices: [
                'MIT',
                'GPL'
            ]
        },
        {
            type:'input',
            name:'Questions',
            message:'GitHub Useername',
        },
        {
            type:'input',
            name:'Questions2',
            message:'Personal Email link',
        }
    ]
};