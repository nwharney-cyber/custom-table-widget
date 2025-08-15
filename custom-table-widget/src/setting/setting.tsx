import { React } from 'jimu-core'
import { Switch, Label } from 'jimu-ui'

interface TableConfig {
  selectable?: boolean
  showSelectionColumn?: boolean
  showFilter?: boolean
  showPagination?: boolean
  showToolbar?: boolean
}

interface SettingProps {
  config: TableConfig
  onSettingChange: (config: any) => void
}

export default function Setting(props: SettingProps) {
  const { config, onSettingChange } = props

  const handleToggleChange = (property: keyof TableConfig, value: boolean) => {
    onSettingChange({
      ...config,
      [property]: value
    })
  }

  const SettingRow = ({ 
    property, 
    label, 
    description 
  }: { 
    property: keyof TableConfig
    label: string
    description?: string 
  }) => (
    <div style={{ 
      marginBottom: '16px', 
      padding: '12px',
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      backgroundColor: '#fafafa'
    }}>
      <Label style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
        <Switch 
          checked={config?.[property] ?? true}
          onChange={(evt: any) => handleToggleChange(property, evt.target.checked)}
          style={{ marginRight: '12px' }}
        />
        <div>
          <div style={{ fontWeight: '500', fontSize: '14px' }}>{label}</div>
          {description && (
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
              {description}
            </div>
          )}
        </div>
      </Label>
    </div>
  )

  return (
    <div style={{ padding: '16px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '18px', fontWeight: '600' }}>
          Custom Table Settings
        </h3>
        <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
          Configure table display and interaction options:
        </p>
      </div>
      
      <SettingRow 
        property="selectable"
        label="Selectable Rows"
        description="Allow users to select table rows by clicking"
      />

      <SettingRow 
        property="showSelectionColumn"
        label="Selection Column"
        description="Display checkbox column for row selection"
      />

      <SettingRow 
        property="showFilter"
        label="Filter Controls"
        description="Show filter options for searching and filtering data"
      />

      <SettingRow 
        property="showPagination"
        label="Pagination"
        description="Display pagination controls for large datasets"
      />

      <SettingRow 
        property="showToolbar"
        label="Toolbar"
        description="Show table toolbar with additional actions and controls"
      />
    </div>
  )
}