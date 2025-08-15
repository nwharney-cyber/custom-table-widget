export interface Config {
  selectable: boolean;
  showSelectionColumn: boolean;
  showFilter: boolean;
  showPagination: boolean;
  showToolbar: boolean;
}

const config: Config = {
  selectable: true,
  showSelectionColumn: true,
  showFilter: true,
  showPagination: true,
  showToolbar: true
};

export default config;