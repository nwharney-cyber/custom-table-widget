import { React, DataSourceComponent } from 'jimu-core'
import { Table } from 'jimu-ui'

interface TableConfig {
  selectable?: boolean
  showSelectionColumn?: boolean
  showFilter?: boolean
  showPagination?: boolean
  showToolbar?: boolean
}

interface WidgetProps {
  id: string
  useDataSource?: any
  config?: TableConfig
}

/**
 * CustomTableWidget
 * Experience Builder widget that clones the standard Table widget functionality.
 * - Uses the Experience Builder Table component from jimu-ui
 * - Connects to Experience Builder data source
 * - Provides configurable options through settings panel
 * - Supports selectable rows, selection column, filter, pagination, and toolbar
 */
export default function CustomTableWidget(props: WidgetProps) {
  const { useDataSource, config, id } = props

  // Get configuration with defaults - all features enabled by default
  const tableConfig: Required<TableConfig> = {
    selectable: config?.selectable ?? true,
    showSelectionColumn: config?.showSelectionColumn ?? true,
    showFilter: config?.showFilter ?? true,
    showPagination: config?.showPagination ?? true,
    showToolbar: config?.showToolbar ?? true
  }

  if (!useDataSource) {
    return (
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100%',
        padding: '16px',
        color: '#666',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        No data source configured. Please connect a data source in the widget settings.
      </div>
    )
  }

  return (
    <div style={{ padding: '16px', width: '100%', height: '100%', overflow: 'hidden' }}>
      <DataSourceComponent useDataSource={useDataSource} widgetId={id}>
        {(ds) => {
          if (!ds) {
            return (
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                height: '100%',
                color: '#666',
                fontSize: '14px'
              }}>
                Loading data source...
              </div>
            )
          }

          return (
            <Table
              dataSource={ds}
              selectable={tableConfig.selectable}
              showSelectionColumn={tableConfig.showSelectionColumn}
              showFilter={tableConfig.showFilter}
              showPagination={tableConfig.showPagination}
              showToolbar={tableConfig.showToolbar}
              style={{ 
                width: '100%', 
                height: 'calc(100% - 32px)',
                border: '1px solid #e0e0e0',
                borderRadius: '4px'
              }}
            />
          )
        }}
      </DataSourceComponent>
    </div>
  )
}