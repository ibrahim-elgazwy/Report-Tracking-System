export default function filterReports(reports, satates){
    let arr = [];
    satates.map(s => {
        let filtered = [...reports].filter(report => report.status === s);
        arr = [...arr, ...filtered];
    })
    return arr;
}