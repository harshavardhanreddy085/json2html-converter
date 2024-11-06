export default function json2html(data) {
    // Get all unique columns from the data
    const columns = new Set();
    data.forEach(obj => {
        Object.keys(obj).forEach(key => columns.add(key));
    });
    
    // Convert columns set to array
    const columnArray = Array.from(columns);
    
    // Create table header
    let html = '<table data-user="harshavardhanreddy9558@gmail.com">\n';
    html += '  <thead>\n    <tr>';
    columnArray.forEach(column => {
        html += <th>${column}</th>;
    });
    html += '</tr>\n  </thead>\n';
    
    // Create table body
    html += '  <tbody>\n';
    data.forEach(row => {
        html += '    <tr>';
        columnArray.forEach(column => {
            html += <td>${row[column] || ''}</td>;
        });
        html += '</tr>\n';
    });
    html += '  </tbody>\n</table>';
    
    return html;
}
