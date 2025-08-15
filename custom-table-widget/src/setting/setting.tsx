import { React } from 'jimu-core'
import { Switch, Label } from 'jimu-ui'

interface SettingProps {
  config: {
    selectable?: boolean
    showSelectionColumn?: boolean
    showFilter?: boolean
    showPagination?: boolean
    showToolbar?: boolean
  }
  onSettingChange: (config: any) => void
}

export default function Setting(props: SettingProps) {
  const { config, onSettingChange } = props

  const handleToggleChange = (property: string, value: boolean) => {
    onSettingChange({
      ...config,
      [property]: value
    })
  }

  return (
    <div style={{ padding: 16 }}>
      <h3>Custom Table Settings</h3>
      <p>Configure table display options:</p>
      
      <div style={{ marginBottom: 16 }}>
        <Label>
          <Switch 
            checked={config?.selectable ?? true}
            onChange={(evt) => handleToggleChange('selectable', evt.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Selectable rows</span>
        </Label>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Label>
          <Switch 
            checked={config?.showSelectionColumn ?? true}
            onChange={(evt) => handleToggleChange('showSelectionColumn', evt.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Show selection column</span>
        </Label>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Label>
          <Switch 
            checked={config?.showFilter ?? true}
            onChange={(evt) => handleToggleChange('showFilter', evt.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Show filter</span>
        </Label>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Label>
          <Switch 
            checked={config?.showPagination ?? true}
            onChange={(evt) => handleToggleChange('showPagination', evt.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Show pagination</span>
        </Label>
      </div>

      <div style={{ marginBottom: 16 }}>
        <Label>
          <Switch 
            checked={config?.showToolbar ?? true}
            onChange={(evt) => handleToggleChange('showToolbar', evt.target.checked)}
          />
          <span style={{ marginLeft: 8 }}>Show toolbar</span>
        </Label>
      </div>
    </div>
  )
}