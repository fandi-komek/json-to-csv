# Download JSON data to CSV
A simple function to download JSON data into CSV files in React.JS

## Install:

Install with npm:
```sh
npm i --save json-to-csv
```

## Example Usage:
```html
import ExportJsonToCsv from "../function/json-to-csv";

...

handleExportJsonToCsv(e) {
    e.preventDefault();
    ExportJsonToCsv({
        data: this.state.myJsonData,
        filename: "my_download.csv",
        separator: ','
    });

    // do anything else after download
}

...

<button onClick={(e) => {this.handleExportJsonToCsv(e);}}>
    Download Data
</button>
```

## Arguments
```
data : JSON data to download (required)
filename : file name full with csv file extension (optional)
separator: csv separator (default: ',') (optional)
```