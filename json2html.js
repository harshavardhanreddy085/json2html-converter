
export default function json2html(data) {
  let html = `
    <table data-user="harshavardhanreddy9558@gmail.com">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.forEach((item) => {
    html += `<tr>
               <td>${item.Name}</td>
               <td>${item.Age}</td>`;
    if (item.Gender) {
      html += `<td>${item.Gender}</td>`;
    } else {
      html += `<td></td>`;
    }
    html += `</tr>`;
  });

  html += `
      </tbody>
    </table>
  `;

  return html;
}
