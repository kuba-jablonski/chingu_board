const state = {
    projects: [
        {
            details: {
                name: 'Sample Project',
                team: '2 people',
                commitment: '3 h / day',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quam ac sodales pharetra. Quisque at justo fringilla, sodales tortor vitae, fermentum velit. Ut maximus ac orci sed consequat. Aenean volutpat bibendum ex, iaculis hendrerit nulla egestas finibus. Sed at ex vel nisl consectetur sollicitudin eu fringilla ante.'
            },
            candidate: {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quam ac sodales pharetra. Quisque at justo fringilla, sodales tortor vitae, fermentum velit. Ut maximus ac orci sed consequat. Aenean volutpat bibendum ex, iaculis hendrerit nulla egestas finibus. Sed at ex vel nisl consectetur sollicitudin eu fringilla ante.',
                skills: {
                    Javascript: 'Required',
                    HTML: 'Optional'
                }
            },
            creator: 'Bob Smith',
            id: 1
        },
        {
            details: {
                name: 'Sample Project 2',
                team: '2 people',
                commitment: '3 h / day',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quam ac sodales pharetra. Quisque at justo fringilla, sodales tortor vitae, fermentum velit. Ut maximus ac orci sed consequat. Aenean volutpat bibendum ex, iaculis hendrerit nulla egestas finibus. Sed at ex vel nisl consectetur sollicitudin eu fringilla ante.'
            },
            candidate: {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat quam ac sodales pharetra. Quisque at justo fringilla, sodales tortor vitae, fermentum velit. Ut maximus ac orci sed consequat. Aenean volutpat bibendum ex, iaculis hendrerit nulla egestas finibus. Sed at ex vel nisl consectetur sollicitudin eu fringilla ante.',
                skills: {
                    Javascript: 'Required',
                    HTML: 'Optional'
                }
            },
            creator: 'Jane Doe',
            id: 2
        }        
    ]
};

export default {
    state
};