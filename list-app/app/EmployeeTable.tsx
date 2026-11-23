
export default function EmployeeTable() {
    const employees = [
        {name: "Boomer",
        job: "Software Engineer"},
        {name: "Rocky",
        job: "Cloud Architect"},
        {name: "Cocoa",
        job: "UX Designer"}
      ];

      // Use the map function to create table rows and table data of 
      // employee name and jobs.
      //Here is what the first table row should look like.
      //<tr><td>Boomer</td><td>Software Engineer</td></tr>
      
  return (
    <div>
    <table>
        <caption>Employees</caption>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
          {/* The array you created using the map function should go here */}
        
        </tbody>
    </table>
    </div>
  );
}

