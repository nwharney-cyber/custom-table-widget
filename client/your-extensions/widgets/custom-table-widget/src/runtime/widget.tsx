/** @jsx jsx */
import { React, jsx, AllWidgetProps, DataSource, DataSourceManager } from 'jimu-core';
import { Table } from 'jimu-ui/advanced/table';
import { Config } from '../config';

interface Props extends AllWidgetProps<Config> {
  useDataSource?: any;
}

export default function CustomTableWidget(props: Props) {
  const { config, useDataSource } = props;
  const [dataSource, setDataSource] = React.useState<DataSource>(null);

  React.useEffect(() => {
    if (useDataSource) {
      const ds = DataSourceManager.getInstance().getDataSource(useDataSource.dataSourceId);
      setDataSource(ds);
    }
  }, [useDataSource]);

  const tableProps = {
    dataSource: dataSource,
    selectable: config?.selectable ?? true,
    showSelectionColumn: config?.showSelectionColumn ?? true,
    showFilter: config?.showFilter ?? true,
    showPagination: config?.showPagination ?? true,
    showToolbar: config?.showToolbar ?? true
  };

  return (
    <div css={{ width: '100%', height: '100%' }}>
      {dataSource ? (
        <Table {...tableProps} />
      ) : (
        <div css={{ padding: 16 }}>
          No data source configured. Please configure a data source in the settings panel.
        </div>
      )}
    </div>
  );
}