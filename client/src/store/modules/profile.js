const state = {
    user: {
        aboutMe: {
            firstName: 'John',
            lastName: 'Doe',
            livingIn: 'New York City',
            introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore autem unde dolor explicabo corrupti laboriosam ea optio tenetur sequi aspernatur. Ut voluptas sint omnis sed praesentium unde iure eum cumque, inventore vitae sapiente dolore non maiores. Hic, dicta recusandae quo, aspernatur explicabo ad culpa alias sed accusamus a aperiam blanditiis.'
        },
        skills: {
            Javascript: 'Beginner',
            HTML: 'Intermediate',
            CSS: 'Advanced',
            Golang: 'Beginner',
            Photoshop: 'Advanced',
            MongoDB: 'Intermediate',
            Design: 'Beginner',
            React: 'Intermediate'
        }
    },
    edit: {
        aboutMe: false,
        skills: false,
        links: false
    }
};

const mutations = {
    TOGGLE_EDIT(state, payload) {
        state.edit[payload.component] = payload.active;
    },
    ABOUT_ME_EDIT(state, aboutMe) {
        state.user.aboutMe = aboutMe;
    },
    SKILLS_EDIT(state, skills) {
        state.user.skills = skills;
    }
}

export default {
    state,
    mutations
};