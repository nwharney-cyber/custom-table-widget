# Custom Table Widget for Experience Builder

A customizable Experience Builder widget that clones and extends the standard Table widget functionality with configurable options.

## Features

- **Experience Builder Table Component**: Uses the official `jimu-ui` Table component for consistent styling and behavior
- **Configurable Options**: Full settings panel with toggles for:
  - **Selectable rows**: Enable/disable row selection functionality
  - **Selection column**: Show/hide the selection checkbox column
  - **Filter**: Enable/disable table filtering capabilities
  - **Pagination**: Show/hide pagination controls
  - **Toolbar**: Display/hide the table toolbar
- **Data Source Integration**: Seamlessly connects to any Experience Builder data source
- **Responsive Design**: Adapts to widget container size
- **TypeScript Support**: Fully typed for better development experience

## Usage

### Installation
1. Add the widget to your Experience Builder app
2. Configure a data source in the widget's data panel
3. Customize table behavior in the settings panel

### Configuration
Access the widget settings panel to configure:
- Table interaction options (selectable, selection column)
- Display features (filter, pagination, toolbar)
- All options are enabled by default for full functionality

### Data Sources
Compatible with all Experience Builder data source types:
- Feature layers
- Web layers  
- Data sources from other widgets

## Files Structure

```
custom-table-widget/
├── manifest.json           # Widget metadata and configuration
├── src/
│   ├── runtime/
│   │   ├── widget.json     # Runtime widget configuration
│   │   └── widget.tsx      # Main widget implementation
│   └── setting/
│       ├── setting.json    # Settings panel metadata
│       └── setting.tsx     # Settings panel implementation
```

## Development

The widget is built using:
- **React**: UI component framework
- **TypeScript**: Type-safe development
- **jimu-core**: Experience Builder core functionality
- **jimu-ui**: Experience Builder UI components

## API

### Widget Props
```typescript
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
```

### Settings Props
```typescript
interface SettingProps {
  config: TableConfig
  onSettingChange: (config: any) => void
}
```