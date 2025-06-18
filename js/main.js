// This script handles the CSV file upload and displays its content in a table format.
const site = [
  "sampleID", "Site", "Treatment", "Lat", "Long", "Texture",
  "Irrigation", "SampleDepth", "Elevation", "SoilSeries", "Suborder",
  "Region", "Crop", "Slope", "GrowingDays", "MAP"
]
const tech = [
  "Season", "Mineral", "PMethod", "Weathering", "ECMethod"
]
const factor = [
  "OMClass", "TextureClass", "ClimateClass", "Fe2o3Class", 
  "SeasonCode",
]
const measure = [
  "Clay", "Sand", "WSA", "Bd", "pH", "EC", "SOC", "MBC", "PMN", "BG"
]
const crop = [
  "Crop", "CropCode", "Tsat", "T1", "dT", "m", "max"
]
document.getElementById('file').addEventListener('change', function(e) {// Handle file selection
  const file = e.target.files[0]; // Get the first file from the input
  if (!file) return; // If no file is selected, exit the function

  Papa.parse(file, { // Use PapaParse to parse the CSV file
    header: false, // Set to false if the CSV does not have headers
    skipEmptyLines: true, // Skip empty lines in the CSV
    complete: function(results) { // Callback function when parsing is complete
      const data = results.data; // Get the parsed data
      const siteInfo = document.getElementById('siteInfo');// Get the table element by ID
      const techDetail = document.getElementById('techDetail');
      const factClass = document.getElementById('factClass');
      const measuredVal = document.getElementById('measuredVal');
      const cropVal = document.getElementById('cropVal'); 
      table.innerHTML = ''; // Clear any existing content in the table

      // Create header
      const headerRow = document.createElement('tr'); // Create a new row for the header
      data[0].forEach(col => { // Loop through the first row to create headers
        const th = document.createElement('th'); // Create a new header cell
        th.textContent = col; // Set the text content of the header cell
        headerRow.appendChild(th); // Append the header cell to the header row
      });
      table.appendChild(headerRow); // Append the header row to the table

      // Create rows
      for (let i = 1; i < data.length; i++) { // Loop through the remaining rows in the data
        const row = document.createElement('tr'); // Create a new row for each data entry
        data[i].forEach(cell => { // Loop through each cell in the row
          const td = document.createElement('td'); // Create a new cell
          td.textContent = cell; // Set the text content of the cell
          row.appendChild(td); // Append the cell to the row
        });
        table.appendChild(row); // Append the row to the table
      }
    }
  });
});