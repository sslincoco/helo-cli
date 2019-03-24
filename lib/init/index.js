/**
 * created by Coco on 2018/11/24
 */

const program = require('commander');
const Ora = require('ora');
const path = require('path');
const inquirer = require('inquirer');
const Git = require('simple-git')

const getPromptList = require('./promptList');

const spinner = new Ora({
  color: 'green',
  text: '开始生成 helo 项目'
});

/**
* 转换answsers
* @param {object} answers inquirer生成的答案
* @returns {onject} 转换后的answers
*/ 
function transformAnswers(answers) {
  answers.projectName = answers.name.trim().toLowerCase().replace(/^[a-z]/g, first => {
    return first.toLowerCase()
  })
  return answers
}

/**
* 初始化Git
* @param {object} answers inquirer生成的答案
* @returns {onject} 转换后的answers
*/ 
function initGit(answers, destPath) {
  const git = Git(destPath)
  if(!answers.repository) {
    return git.init()
  }
  git.init()
}

module.exports = function init(projectName) {
  const promptList = getPromptList(projectName);
  inquirer.prompt(promptList).then(answers => {
    answers.projectName = answers.name;
    answers = transformAnswers(answers)
    const destPath = path.resolve(answers.name);
    spinner.start();
    // 生成初始化结构

    spinner.succeed(`项目初始化${answers.projectName}成功`)
  })
}
  

