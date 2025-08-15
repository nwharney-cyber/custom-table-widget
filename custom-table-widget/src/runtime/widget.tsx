import { React, DataSourceComponent } from 'jimu-core'
import { Table } from 'jimu-ui'

interface WidgetProps {
  id: string
  useDataSource?: any
  config?: {
    selectable?: boolean
    showSelectionColumn?: boolean
    showFilter?: boolean
    showPagination?: boolean
    showToolbar?: boolean
  }
}

/**
 * CustomTableWidget
 * Experience Builder widget that clones the standard Table widget functionality.
 * - Uses the Experience Builder Table component
 * - Connects to Experience Builder data source
 * - Provides configurable options through settings panel
 * - Supports selectable rows, selection column, filter, pagination, and toolbar
 */

export default function CustomTableWidget(props: WidgetProps) {
  const { useDataSource, config, id } = props

  // Get configuration with defaults
  const tableConfig = {
    selectable: config?.selectable ?? true,
    showSelectionColumn: config?.showSelectionColumn ?? true,
    showFilter: config?.showFilter ?? true,
    showPagination: config?.showPagination ?? true,
    showToolbar: config?.showToolbar ?? true
  }

  return (
    <div style={{ padding: 16, width: '100%', height: '100%' }}>
      {useDataSource ? (
        <DataSourceComponent useDataSource={useDataSource} widgetId={id}>
          {(ds) => {
            if (!ds) {
              return <div>Loading data source...</div>
            }

            return (
              <Table
                dataSource={ds}
                selectable={tableConfig.selectable}
                showSelectionColumn={tableConfig.showSelectionColumn}
                showFilter={tableConfig.showFilter}
                showPagination={tableConfig.showPagination}
                showToolbar={tableConfig.showToolbar}
                style={{ width: '100%', height: '100%' }}
              />
            )
          }}
        </DataSourceComponent>
      ) : (
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          color: '#666',
          fontSize: '14px'
        }}>
          No data source configured. Please connect a data source in the widget settings.
        </div>
      )}
    </div>
  )
}