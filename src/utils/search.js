export const searchReports = (arr, val) => {
    let filteredArr = [];

    if (val) {
        filteredArr = [...arr].filter(item => {
            return item.title.toLowerCase().indexOf(val.toString().toLowerCase()) > -1 ||
                   item.description.toLowerCase().indexOf(val.toString().toLowerCase()) > -1 ||
                   item.createdAt.toLowerCase().indexOf(val.toString().toLowerCase()) > -1 ||
                   item.status.toLowerCase().indexOf(val.toString().toLowerCase()) > -1;
        });
    } else {
        filteredArr = arr;
    }
    
    return filteredArr;
  }