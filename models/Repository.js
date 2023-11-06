const mongoose = require('mongoose');

const RepositorySchema = new mongoose.Schema({
    projectName: String,
    githubLink: String,
    commit: String,
    srcPathList: [String],
    rootPathList: [String],
    classes: [String]
})

exports.Repository = mongoose.model('Repository', RepositorySchema);