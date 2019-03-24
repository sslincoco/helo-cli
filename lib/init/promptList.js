const promptList = [{
  type: 'input',
  name: 'name',
  message: '项目名称',
  validate: function(value){
    if(value && /^[a-z|A-Z]/.test(value.trim())) {
      return true
    }
    return '项目名称必须以字母开头，由字母、数字构成'
  }
}, {
  type: 'input',
  name: 'description',
  message: '项目描述',
}, {
  type: 'input',
  name: 'author',
  message: '作者',
}, {
  type: 'input',
  name: 'git地址',
  message: '请输入git地址',
  validate: function(value) {
    if(!value || /^git@(.)+\.git$/.test(value.trim())) {
      return true
    }
    return '清输入正确格式的git地址'
  }
}];

module.exports = function getPromptList(projectName) {
  promptList[0].default = projectName;
  return promptList;
}