class HomeController {

  constructor(DataService) {
    this.DataService = DataService;
  }

  getData(searchText) {
    return this.DataService.queryData(searchText);
  }
}
export default HomeController;