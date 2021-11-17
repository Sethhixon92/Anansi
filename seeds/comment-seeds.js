const { Comment } = require("../models");

const commentData =  [
    {
        comment_text: 'Nunc rhoncus dui vel sem.',
        employee_id: 1,
        // timesheet_id: 1
    },
    {
        comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
        employee_id: 2,
        // timesheet_id: 2
    },
    {
        comment_text: 'Aliquam erat volutpat. In congue.',
        employee_id: 3,
        // timesheet_id: 3
    },
    {
        comment_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
        employee_id: 4,
        // timesheet_id: 4
    },
    {
        comment_text: 'In hac habitasse platea dictumst.',
        employee_id: 5,
        // timesheet_id: 5

    }
];

const seedsComment = () => Comment.bulkCreate(commentData);

module.exports = seedsComment;