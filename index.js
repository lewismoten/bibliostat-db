import xlsx from 'xlsx';

const file = '/Users/lewismoten/Library/CloudStorage/Dropbox/SPL Bibliostat/2024 Virginia Public Library Survey_10-27-25_100856.xlsx'
const workbook = xlsx.readFile(file);
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const data = xlsx.utils.sheet_to_json(sheet);
console.log(data);
