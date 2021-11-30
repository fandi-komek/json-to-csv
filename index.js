//'use strict';
/** 
 * Function to export JSON into CSV files
 * Created by : Fandi
 * accept 3 parameter:
 * data : JSON format
 * filename : filename with csv extensions file (default: 'download.csv')
 * separator: user defined separator (default: ',')
 */
 Object.defineProperty(exports, "__esModule", {
    value: true
});
  
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
  
var ExportJsonToCsv = function ExportJsonToCsv(props) {
    var data        = props.data,
        filename    = typeof props.filename === 'string' && props.filename.trim() !== ''? props.filename.trim():'download.csv',
        separator   = typeof props.separator === 'string' && props.separator.trim() !== ''? props.separator.trim():',';
      
    var header      = Array.from(new Set(data.reduce(function(r, e) {
        return [].concat(_toConsumableArray(r), _toConsumableArray(Object.keys(e)));
    }, [])));
    var csv         = data.map(function(row) {
        return header.map(function(fieldName) {
            return JSON.stringify(row[fieldName] || '');
        }).join(separator);
    });
    
    csv.unshift(header.join(separator));
    csv = csv.join('\r\n');
  
    var blob = new Blob([csv], {
        type: 'text/plain;charset=utf-8'
    });
  
    if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
        return;
    }
  
    var link            = document.createElement('a');
    var url             = URL.createObjectURL(blob);
    link.href           = url;
    link.download       = filename;
    link.style.display  = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  
exports.default  = ExportJsonToCsv;