const layout = require('../layout');

module.exports = ({students}) => {
  const renderedStudents = students.map((student) => {
    return `
      <h3>${student.name}</h3>
      <h3>${student.age}</h3>
      <h3>${student.instrument}</h3>
    `;
  }).join('');

  return layout({
    content: `
      ${renderedStudents}
    `
  })
}
