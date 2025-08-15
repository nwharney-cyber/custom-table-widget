/** @jsx jsx */
import { React, jsx, AllWidgetSettingProps } from 'jimu-core';
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector';
import { Switch, Label } from 'jimu-ui';
import { Config } from '../config';

interface Props extends AllWidgetSettingProps<Config> {}

export default function Setting(props: Props) {
  const { config = {}, onSettingChange } = props;

  const onDataSourceChange = (useDataSources) => {
    props.onSettingChange({
      id: props.id,
      useDataSources: useDataSources
    });
  };

  const onConfigChange = (key: keyof Config, value: boolean) => {
    onSettingChange({
      id: props.id,
      config: {
        ...config,
        [key]: value
      }
    });
  };

  return (
    <div css={{ padding: 16 }}>
      <div css={{ marginBottom: 16 }}>
        <Label>
          Data Source
        </Label>
        <DataSourceSelector
          types={['FEATURE_LAYER']}
          useDataSources={props.useDataSources}
          onChange={onDataSourceChange}
          widgetId={props.id}
        />
      </div>

      <div css={{ marginBottom: 12 }}>
        <Label check>
          <Switch
            checked={config.selectable ?? true}
            onChange={(e) => onConfigChange('selectable', e.target.checked)}
          />
          Enable row selection
        </Label>
      </div>

      <div css={{ marginBottom: 12 }}>
        <Label check>
          <Switch
            checked={config.showSelectionColumn ?? true}
            onChange={(e) => onConfigChange('showSelectionColumn', e.target.checked)}
          />
          Show selection column
        </Label>
      </div>

      <div css={{ marginBottom: 12 }}>
        <Label check>
          <Switch
            checked={config.showFilter ?? true}
            onChange={(e) => onConfigChange('showFilter', e.target.checked)}
          />
          Show filter controls
        </Label>
      </div>

      <div css={{ marginBottom: 12 }}>
        <Label check>
          <Switch
            checked={config.showPagination ?? true}
            onChange={(e) => onConfigChange('showPagination', e.target.checked)}
          />
          Show pagination
        </Label>
      </div>

      <div css={{ marginBottom: 12 }}>
        <Label check>
          <Switch
            checked={config.showToolbar ?? true}
            onChange={(e) => onConfigChange('showToolbar', e.target.checked)}
          />
          Show toolbar
        </Label>
      </div>
    </div>
  );
}